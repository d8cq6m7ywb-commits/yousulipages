// fit-merge.js v1.0
// Sequential FIT file merger / stitcher
//
// Use case: a single intended activity that was recorded as 2+ separate
// .fit files. The device died and restarted, you accidentally hit
// stop/start, a coffee-stop got recorded as its own activity, etc.
//
// Pipeline:
//   1. User uploads N .fit files
//   2. Each is parsed with the bundled fit-file-parser
//   3. Files are sorted chronologically by first-record timestamp
//   4. Gaps between files are computed and shown
//   5. User picks gap mode: 'stitch' (treat as continuous) or
//      'preserve' (keep real timestamps, with pause events in gaps)
//   6. Records are merged into a single stream; distance is
//      accumulated across files; timestamps adjusted by gap mode
//   7. Output is a v2.0 FIT binary with file_id + record messages,
//      same shape as the msbreaker.js export
//
// Out of scope for v1 (will live on the hub):
//   - Parallel merge (two devices same window)
//   - Developer-field preservation
//   - Multi-sport stitching across different sport types
//   - Lap/session message preservation from inputs
//
// Encoder largely modelled on msbreaker.js's buildFitBinary().

(function () {
  "use strict";

  // ============== State ==============
  const state = {
    files: [],   // [{name, size, records: [...], startMs, endMs, distance, sport, error}]
    gapMode: "stitch", // 'stitch' | 'preserve'
  };

  // ============== DOM refs ==============
  const $ = (id) => document.getElementById(id);

  function refs() {
    return {
      input: $("mergeFileInput"),
      dropZone: $("mergeDropZone"),
      status: $("mergeStatus"),
      fileList: $("mergeFileList"),
      gapModeStitch: $("gapModeStitch"),
      gapModePreserve: $("gapModePreserve"),
      summary: $("mergeSummary"),
      downloadBtn: $("mergeDownloadBtn"),
      clearBtn: $("mergeClearBtn"),
    };
  }

  // ============== File handling ==============

  async function handleFiles(fileList) {
    const arr = Array.from(fileList);
    const valid = arr.filter((f) => /\.fit$/i.test(f.name));
    const skipped = arr.length - valid.length;

    setStatus(
      valid.length
        ? `Reading ${valid.length} file${valid.length === 1 ? "" : "s"}...`
        : "No .fit files selected.",
    );

    for (const f of valid) {
      try {
        const entry = await readFitFile(f);
        state.files.push(entry);
      } catch (err) {
        state.files.push({
          name: f.name,
          size: f.size,
          records: [],
          startMs: null,
          endMs: null,
          distance: 0,
          sport: null,
          error: err && err.message ? err.message : String(err),
        });
      }
    }

    // Sort by first-record timestamp
    state.files.sort((a, b) => {
      if (a.startMs == null && b.startMs == null) return 0;
      if (a.startMs == null) return 1;
      if (b.startMs == null) return -1;
      return a.startMs - b.startMs;
    });

    if (skipped > 0) {
      setStatus(
        `Loaded ${valid.length}, skipped ${skipped} non-.fit file${skipped === 1 ? "" : "s"}.`,
      );
    } else {
      setStatus(`Loaded ${state.files.length} file${state.files.length === 1 ? "" : "s"}.`);
    }

    renderFileList();
    renderSummary();
    updateDownloadButton();
  }

  async function readFitFile(file) {
    const buf = await file.arrayBuffer();
    // Use the global FitParser loaded from fit-file-parser.esm.js
    if (!window.FitParser && !window.fitFileParser) {
      throw new Error("FIT parser not loaded");
    }
    const FitParser = window.FitParser || window.fitFileParser;
    const fp = new FitParser({
      force: true,
      speedUnit: "m/s",
      lengthUnit: "m",
      temperatureUnit: "celsius",
      pressureUnit: "bar",
      elapsedRecordField: false,
      mode: "list",
    });
    return new Promise((resolve, reject) => {
      fp.parse(buf, (err, data) => {
        if (err) return reject(err);
        const records = Array.isArray(data.records) ? data.records : [];
        // Normalise: keep only records with valid timestamps
        const clean = records
          .filter((r) => r && r.timestamp)
          .map((r) => {
            const ts = r.timestamp instanceof Date ? r.timestamp : new Date(r.timestamp);
            return { ...r, _ms: ts.getTime() };
          })
          .filter((r) => Number.isFinite(r._ms))
          .sort((a, b) => a._ms - b._ms);

        const startMs = clean.length ? clean[0]._ms : null;
        const endMs = clean.length ? clean[clean.length - 1]._ms : null;

        // Compute distance: max of distance / enhanced_distance fields
        let maxDist = 0;
        for (const r of clean) {
          const d =
            typeof r.distance === "number"
              ? r.distance
              : typeof r.enhanced_distance === "number"
                ? r.enhanced_distance
                : null;
          if (d != null && d > maxDist) maxDist = d;
        }

        // Sport detection: look at first session or sport field on a record
        let sport = null;
        if (Array.isArray(data.sessions) && data.sessions[0] && data.sessions[0].sport) {
          sport = data.sessions[0].sport;
        } else if (
          Array.isArray(data.activity && data.activity.sessions) &&
          data.activity.sessions[0]
        ) {
          sport = data.activity.sessions[0].sport;
        } else if (clean[0] && clean[0].sport) {
          sport = clean[0].sport;
        }

        resolve({
          name: file.name,
          size: file.size,
          records: clean,
          startMs,
          endMs,
          distance: maxDist,
          sport: sport || "generic",
          error: null,
        });
      });
    });
  }

  function removeFile(idx) {
    state.files.splice(idx, 1);
    renderFileList();
    renderSummary();
    updateDownloadButton();
  }

  function moveFile(idx, dir) {
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= state.files.length) return;
    const [item] = state.files.splice(idx, 1);
    state.files.splice(newIdx, 0, item);
    renderFileList();
    renderSummary();
  }

  function clearAll() {
    state.files = [];
    refs().input.value = "";
    setStatus("No files loaded.");
    renderFileList();
    renderSummary();
    updateDownloadButton();
  }

  // ============== Rendering ==============

  function setStatus(msg) {
    const r = refs();
    if (r.status) r.status.textContent = msg;
  }

  function fmtMs(ms) {
    if (ms == null) return "—";
    const d = new Date(ms);
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function fmtDuration(ms) {
    if (ms == null || !Number.isFinite(ms)) return "—";
    const totalSec = Math.round(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
    if (m > 0) return `${m}m ${String(s).padStart(2, "0")}s`;
    return `${s}s`;
  }

  function fmtDistance(m) {
    if (m == null || !Number.isFinite(m) || m <= 0) return "—";
    if (m >= 1000) return `${(m / 1000).toFixed(2)} km`;
    return `${Math.round(m)} m`;
  }

  function renderFileList() {
    const r = refs();
    if (!r.fileList) return;

    if (state.files.length === 0) {
      r.fileList.innerHTML = `<p class="merge-empty">No files yet. Drop your .fit files above, or click to browse.</p>`;
      return;
    }

    const rows = state.files.map((f, idx) => {
      const next = state.files[idx + 1];
      let gapHtml = "";
      if (next && f.endMs && next.startMs) {
        const gap = next.startMs - f.endMs;
        const gapStr = gap > 0 ? fmtDuration(gap) : "overlap";
        const cls = gap > 0 ? "merge-gap-ok" : "merge-gap-warn";
        gapHtml = `<div class="merge-gap ${cls}">↓ gap to next: <strong>${gapStr}</strong></div>`;
      }

      const dur = f.startMs && f.endMs ? f.endMs - f.startMs : null;
      const errorHtml = f.error
        ? `<div class="merge-file-error">⚠ Could not parse: ${escapeHtml(f.error)}</div>`
        : "";

      const sportHtml = f.sport ? `<span class="merge-sport">${escapeHtml(f.sport)}</span>` : "";

      return `
        <div class="merge-file-row ${f.error ? "has-error" : ""}">
          <div class="merge-file-idx">${idx + 1}</div>
          <div class="merge-file-info">
            <div class="merge-file-name">${escapeHtml(f.name)} ${sportHtml}</div>
            <div class="merge-file-meta">
              <span><strong>Start</strong> ${fmtMs(f.startMs)}</span>
              <span><strong>End</strong> ${fmtMs(f.endMs)}</span>
              <span><strong>Duration</strong> ${fmtDuration(dur)}</span>
              <span><strong>Distance</strong> ${fmtDistance(f.distance)}</span>
              <span><strong>Records</strong> ${f.records.length}</span>
            </div>
            ${errorHtml}
          </div>
          <div class="merge-file-actions">
            <button type="button" class="merge-btn-icon" data-action="up" data-idx="${idx}" aria-label="Move up" title="Move up">▲</button>
            <button type="button" class="merge-btn-icon" data-action="down" data-idx="${idx}" aria-label="Move down" title="Move down">▼</button>
            <button type="button" class="merge-btn-icon merge-btn-remove" data-action="remove" data-idx="${idx}" aria-label="Remove" title="Remove">✕</button>
          </div>
        </div>
        ${gapHtml}
      `;
    });

    r.fileList.innerHTML = rows.join("");
  }

  function renderSummary() {
    const r = refs();
    if (!r.summary) return;

    const usable = state.files.filter((f) => !f.error && f.records.length > 0);
    if (usable.length === 0) {
      r.summary.innerHTML = `<p class="merge-empty">Load at least 2 parseable .fit files to preview the merge.</p>`;
      return;
    }

    const totalRecords = usable.reduce((s, f) => s + f.records.length, 0);
    const totalDist = usable.reduce((s, f) => s + (f.distance || 0), 0);
    const totalMovingMs = usable.reduce(
      (s, f) => s + (f.startMs && f.endMs ? f.endMs - f.startMs : 0),
      0,
    );

    let realElapsedMs = 0;
    if (usable[0].startMs && usable[usable.length - 1].endMs) {
      realElapsedMs = usable[usable.length - 1].endMs - usable[0].startMs;
    }

    const gaps = [];
    for (let i = 0; i < usable.length - 1; i++) {
      const g = usable[i + 1].startMs - usable[i].endMs;
      if (g > 0) gaps.push(g);
    }
    const totalGapMs = gaps.reduce((s, g) => s + g, 0);

    const modeDuration =
      state.gapMode === "stitch" ? totalMovingMs : realElapsedMs;

    r.summary.innerHTML = `
      <div class="merge-summary-grid">
        <div class="merge-summary-tile">
          <span class="merge-summary-label">Files</span>
          <span class="merge-summary-value">${usable.length}</span>
        </div>
        <div class="merge-summary-tile">
          <span class="merge-summary-label">Records</span>
          <span class="merge-summary-value">${totalRecords.toLocaleString()}</span>
        </div>
        <div class="merge-summary-tile">
          <span class="merge-summary-label">Total distance</span>
          <span class="merge-summary-value">${fmtDistance(totalDist)}</span>
        </div>
        <div class="merge-summary-tile">
          <span class="merge-summary-label">Output duration</span>
          <span class="merge-summary-value">${fmtDuration(modeDuration)}</span>
          <span class="merge-summary-sub">${state.gapMode === "stitch" ? "moving time only" : "elapsed with gaps"}</span>
        </div>
        <div class="merge-summary-tile">
          <span class="merge-summary-label">Gaps</span>
          <span class="merge-summary-value">${gaps.length}</span>
          <span class="merge-summary-sub">total: ${fmtDuration(totalGapMs)}</span>
        </div>
      </div>
    `;
  }

  function updateDownloadButton() {
    const r = refs();
    if (!r.downloadBtn) return;
    const usable = state.files.filter((f) => !f.error && f.records.length > 0);
    r.downloadBtn.disabled = usable.length < 2;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[c]);
  }

  // ============== Merge & encode ==============

  function buildMergedRecords() {
    const usable = state.files.filter((f) => !f.error && f.records.length > 0);
    if (usable.length === 0) return { records: [] };

    const merged = [];
    let distanceOffset = 0;
    let timeShift = 0;
    let prevEndMs = null;

    for (let i = 0; i < usable.length; i++) {
      const f = usable[i];
      if (i > 0 && state.gapMode === "stitch") {
        // Shift this file's timestamps so it starts right after prevEnd
        const desiredStart = prevEndMs + 1000;
        timeShift = desiredStart - f.startMs + (i === 0 ? 0 : 0);
      } else if (i === 0) {
        timeShift = 0;
      } else {
        // preserve mode: leave timestamps alone
        timeShift = 0;
      }

      // Distance offset: in BOTH modes we want a continuous accumulated
      // distance across files. The per-file `distance` field is the
      // file's own start-from-zero counter.
      const fileFirstDist = firstDistance(f.records);

      for (const r of f.records) {
        const ts = r._ms + timeShift;
        const rec = { ...r, _ms: ts, timestamp: new Date(ts) };

        // rebase distance: r.distance is per-file; we want global
        const rawD =
          typeof r.distance === "number"
            ? r.distance
            : typeof r.enhanced_distance === "number"
              ? r.enhanced_distance
              : null;
        if (rawD != null && Number.isFinite(rawD)) {
          rec.distance = rawD - fileFirstDist + distanceOffset;
        }
        merged.push(rec);
      }

      // bump offsets for next file
      const lastDist = lastDistance(f.records);
      if (lastDist != null) {
        distanceOffset = lastDist - fileFirstDist + distanceOffset;
      }
      prevEndMs = (f.endMs || 0) + timeShift;
    }

    return { records: merged };
  }

  function firstDistance(records) {
    for (const r of records) {
      const d =
        typeof r.distance === "number"
          ? r.distance
          : typeof r.enhanced_distance === "number"
            ? r.enhanced_distance
            : null;
      if (d != null && Number.isFinite(d)) return d;
    }
    return 0;
  }

  function lastDistance(records) {
    for (let i = records.length - 1; i >= 0; i--) {
      const r = records[i];
      const d =
        typeof r.distance === "number"
          ? r.distance
          : typeof r.enhanced_distance === "number"
            ? r.enhanced_distance
            : null;
      if (d != null && Number.isFinite(d)) return d;
    }
    return null;
  }

  // ============== FIT encoder (lifted from msbreaker.js pattern) ==============

  const FIT_EPOCH_MS = Date.UTC(1989, 11, 31, 0, 0, 0); // 1989-12-31 00:00:00 UTC

  function fitTimestamp(date) {
    if (!(date instanceof Date)) date = new Date(date);
    return Math.round((date.getTime() - FIT_EPOCH_MS) / 1000);
  }

  function degreesToSemicircles(deg) {
    return Math.round(deg * (Math.pow(2, 31) / 180));
  }

  function fitCrc16(data) {
    const crcTable = [
      0x0000, 0xcc01, 0xd801, 0x1400, 0xf001, 0x3c00, 0x2800, 0xe401,
      0xa001, 0x6c00, 0x7800, 0xb401, 0x5000, 0x9c01, 0x8801, 0x4400,
    ];
    let crc = 0;
    for (let i = 0; i < data.length; i++) {
      const byte = data[i];
      let tmp = crcTable[crc & 0xf];
      crc = (crc >> 4) & 0x0fff;
      crc = crc ^ tmp ^ crcTable[byte & 0xf];
      tmp = crcTable[crc & 0xf];
      crc = (crc >> 4) & 0x0fff;
      crc = crc ^ tmp ^ crcTable[(byte >> 4) & 0xf];
    }
    return crc;
  }

  function buildFitBinary(records) {
    const dataBytes = [];

    function writeU8(v) {
      dataBytes.push(v & 0xff);
    }
    function writeU16LE(v) {
      dataBytes.push(v & 0xff);
      dataBytes.push((v >> 8) & 0xff);
    }
    function writeU32LE(v) {
      dataBytes.push(v & 0xff);
      dataBytes.push((v >> 8) & 0xff);
      dataBytes.push((v >> 16) & 0xff);
      dataBytes.push((v >> 24) & 0xff);
    }
    function writeS32LE(v) {
      const buf = new ArrayBuffer(4);
      new DataView(buf).setInt32(0, v, true);
      const arr = new Uint8Array(buf);
      for (let i = 0; i < 4; i++) dataBytes.push(arr[i]);
    }

    // -- file_id definition (local 0) --
    writeU8(0x40);
    writeU8(0);
    writeU8(0);
    writeU16LE(0); // global msg: file_id
    writeU8(2);
    writeU8(0); writeU8(1); writeU8(0);   // type (enum)
    writeU8(1); writeU8(2); writeU8(132); // manufacturer (uint16)

    // -- file_id data --
    writeU8(0x00);
    writeU8(4);    // type = activity
    writeU16LE(255); // manufacturer = development

    // -- record definition (local 1) --
    writeU8(0x41);
    writeU8(0);
    writeU8(0);
    writeU16LE(20); // global msg: record
    writeU8(10);
    writeU8(253); writeU8(4); writeU8(134); // timestamp (uint32)
    writeU8(0);   writeU8(4); writeU8(133); // pos_lat (sint32)
    writeU8(1);   writeU8(4); writeU8(133); // pos_long (sint32)
    writeU8(2);   writeU8(2); writeU8(132); // altitude (uint16 scaled)
    writeU8(3);   writeU8(1); writeU8(2);   // heart_rate (uint8)
    writeU8(4);   writeU8(1); writeU8(2);   // cadence (uint8)
    writeU8(5);   writeU8(4); writeU8(134); // distance (uint32 scale 100)
    writeU8(6);   writeU8(2); writeU8(132); // speed (uint16 scale 1000)
    writeU8(7);   writeU8(2); writeU8(132); // power (uint16)
    writeU8(13);  writeU8(1); writeU8(1);   // temperature (sint8)

    // -- record data --
    for (const r of records) {
      writeU8(0x01);

      const tsDate = r.timestamp instanceof Date ? r.timestamp : new Date(r._ms);
      writeU32LE(fitTimestamp(tsDate));

      const lat = typeof r.position_lat === "number" ? r.position_lat : null;
      if (lat != null) writeS32LE(degreesToSemicircles(lat));
      else writeU32LE(0x7fffffff);

      const lon = typeof r.position_long === "number" ? r.position_long : null;
      if (lon != null) writeS32LE(degreesToSemicircles(lon));
      else writeU32LE(0x7fffffff);

      const alt =
        typeof r.enhanced_altitude === "number"
          ? r.enhanced_altitude
          : typeof r.altitude === "number"
            ? r.altitude
            : null;
      if (alt != null) writeU16LE(Math.round((alt + 500) * 5));
      else writeU16LE(0xffff);

      const hr =
        typeof r.heart_rate === "number"
          ? r.heart_rate
          : typeof r.heartRate === "number"
            ? r.heartRate
            : null;
      writeU8(hr != null ? Math.round(hr) : 0xff);

      const cad = typeof r.cadence === "number" ? r.cadence : null;
      writeU8(cad != null ? Math.round(cad) : 0xff);

      const dist = typeof r.distance === "number" ? r.distance : null;
      if (dist != null) writeU32LE(Math.round(dist * 100));
      else writeU32LE(0xffffffff);

      const spd =
        typeof r.enhanced_speed === "number"
          ? r.enhanced_speed
          : typeof r.speed === "number"
            ? r.speed
            : null;
      if (spd != null) writeU16LE(Math.round(spd * 1000));
      else writeU16LE(0xffff);

      const pwr = typeof r.power === "number" ? r.power : null;
      if (pwr != null) writeU16LE(Math.round(pwr));
      else writeU16LE(0xffff);

      const temp = typeof r.temperature === "number" ? r.temperature : null;
      if (temp != null) {
        const buf = new ArrayBuffer(1);
        new DataView(buf).setInt8(0, Math.round(temp));
        dataBytes.push(new Uint8Array(buf)[0]);
      } else {
        writeU8(0x7f);
      }
    }

    const dataSize = dataBytes.length;
    const header = new Uint8Array(14);
    const hView = new DataView(header.buffer);
    header[0] = 14;
    header[1] = 0x20;
    hView.setUint16(2, 2160, true);
    hView.setUint32(4, dataSize, true);
    header[8] = 0x2e; // '.'
    header[9] = 0x46; // 'F'
    header[10] = 0x49; // 'I'
    header[11] = 0x54; // 'T'
    const headerCrc = fitCrc16(header.slice(0, 12));
    hView.setUint16(12, headerCrc, true);

    const allData = new Uint8Array(14 + dataSize + 2);
    allData.set(header, 0);
    allData.set(new Uint8Array(dataBytes), 14);
    const fileCrc = fitCrc16(allData.slice(0, 14 + dataSize));
    new DataView(allData.buffer).setUint16(14 + dataSize, fileCrc, true);

    return allData.buffer;
  }

  function triggerDownload(buf, filename) {
    const blob = new Blob([buf], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function handleDownload() {
    const usable = state.files.filter((f) => !f.error && f.records.length > 0);
    if (usable.length < 2) {
      setStatus("Need at least 2 parseable .fit files to merge.");
      return;
    }

    setStatus("Building merged FIT...");
    try {
      const { records } = buildMergedRecords();
      if (records.length === 0) {
        setStatus("No records to merge.");
        return;
      }
      const buf = buildFitBinary(records);
      const firstName = usable[0].name.replace(/\.fit$/i, "");
      const filename = `merged-${firstName}-${state.gapMode}.fit`;
      triggerDownload(buf, filename);
      setStatus(`Done. ${records.length.toLocaleString()} records → ${filename}`);
    } catch (err) {
      console.error(err);
      setStatus(`Error: ${err.message || err}`);
    }
  }

  // ============== Wiring ==============

  function init() {
    const r = refs();
    if (!r.input) return; // page not present

    r.input.addEventListener("change", (e) => handleFiles(e.target.files));

    if (r.dropZone) {
      r.dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        r.dropZone.classList.add("merge-drop-active");
      });
      r.dropZone.addEventListener("dragleave", () => {
        r.dropZone.classList.remove("merge-drop-active");
      });
      r.dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        r.dropZone.classList.remove("merge-drop-active");
        handleFiles(e.dataTransfer.files);
      });
      r.dropZone.addEventListener("click", (e) => {
        if (e.target.tagName !== "INPUT" && e.target.tagName !== "LABEL") {
          r.input.click();
        }
      });
    }

    if (r.fileList) {
      r.fileList.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action]");
        if (!btn) return;
        const idx = parseInt(btn.dataset.idx, 10);
        const action = btn.dataset.action;
        if (action === "remove") removeFile(idx);
        else if (action === "up") moveFile(idx, -1);
        else if (action === "down") moveFile(idx, 1);
      });
    }

    if (r.gapModeStitch && r.gapModePreserve) {
      r.gapModeStitch.addEventListener("change", () => {
        state.gapMode = "stitch";
        renderSummary();
      });
      r.gapModePreserve.addEventListener("change", () => {
        state.gapMode = "preserve";
        renderSummary();
      });
    }

    if (r.downloadBtn) r.downloadBtn.addEventListener("click", handleDownload);
    if (r.clearBtn) r.clearBtn.addEventListener("click", clearAll);

    renderFileList();
    renderSummary();
    updateDownloadButton();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
