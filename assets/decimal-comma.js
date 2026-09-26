/* ── Decimal commas ──────────────────────────────────────────────
 * Grepiac pages are lang="en", so a comma in a number box is read the
 * US way. An <input type="number"> takes it for a thousands separator
 * and silently DROPS it: "77,2" kg became 772, "12,5" % body fat 125.
 * A text box read with parseFloat stops at it: "77,2" is 77, "0,31" is
 * 0. An athlete on a comma locale got a sweat rate of 2.00 L/h instead
 * of 1.32 with nothing on screen to say why (2026-09-25).
 *
 * Capture-phase listeners on the document run BEFORE any box's own
 * handlers and before a form posts, so the page only ever sees "77.2":
 *  - number boxes never expose the comma (the browser eats it), so it
 *    is caught on `beforeinput` / `paste`, cancelled, and a dot typed;
 *  - text boxes are rewritten on `input` when the whole value is a
 *    number written with one comma. On calculator pages (they load
 *    yousuli-bridge.js) and on sites whose script tag carries
 *    data-every-text-box, that is every text box; elsewhere a text box
 *    can hold a list ("1,3"), so only boxes that say they are numeric
 *    (inputmode="decimal"/"numeric" or data-decimal) are touched.
 *
 * One exception keeps a US "2,500" kcal meaning 2500: one to three
 * digits (not a lone 0), a comma, exactly three digits is a thousands
 * group, unless the box steps in decimals or 2500 would break its max.
 * A comma typed key by key is a dot at once (the digits after it aren't
 * known yet) and regrouped on `change` if it ends up that shape.
 *
 * Restored values. A browser puts typed values back on a reload or a
 * back/forward (a phone reloads a tab it evicted) WITHOUT an input event,
 * so a calculator that ran its first pass on the defaults keeps showing
 * the defaults' results beside the athlete's numbers: Leo, 2026-09-26,
 * saw 4.00 L/h and 7.5 % "Extreme" next to 77.2 / 1.3 / 0.31 / 75.8 —
 * (80-74+2)/2 and 6/80, the defaults — for a 1.32 L/h, 1.8 % test. On
 * calculator pages (every-text-box pages), `pageshow` replays input and
 * change on every box the browser changed from its default. Never on
 * ordinary forms, where a change handler may save or navigate.
 *
 * This file is the source. The calculator bridge (calculators/
 * yousuli-bridge.js) carries a byte-identical copy because the static
 * calculators load nothing else; a test keeps the two equal. Edit here,
 * paste there, bump CALC_ASSET_VERSION. Two other sites ship the same
 * file with data-every-text-box: yousuli.co's standalone pages
 * (yousulipages: site/assets/decimal-comma.js) and new.yousuli.co
 * (ysl: public/decimal-comma.js) — copy it there too.
 */
(function () {
    if (window.__grepiacDecimalComma) return;       // one copy per page
    window.__grepiacDecimalComma = true;
    var DECIMAL_COMMA = /^\s*[-+]?\d*,\d*\s*$/;
    var THOUSANDS = /^\s*[-+]?[1-9]\d{0,2}[,.]\d{3}\s*$/;
    var everyTextBox = !!document.querySelector('script[src*="yousuli-bridge.js"]') ||
        !!(document.currentScript && document.currentScript.hasAttribute('data-every-text-box'));
    // Boxes whose one dot was typed as a comma (to regroup on change).
    var typedComma = typeof WeakSet === 'function' ? new WeakSet() : null;

    function kind(el) {
        if (!el || el.tagName !== 'INPUT') return null;
        var t = (el.getAttribute('type') || 'text').toLowerCase();
        if (t === 'number') return 'number';
        if (t !== 'text' && t !== 'search' && t !== 'tel') return null;
        if (everyTextBox || el.hasAttribute('data-decimal') ||
            /^(decimal|numeric)$/i.test(el.getAttribute('inputmode') || '')) return 'text';
        return null;
    }
    function stepsInDecimals(el) {
        var s = (el.getAttribute('step') || '').trim().toLowerCase();
        if (s === 'any') return true;
        var n = parseFloat(s);
        return n > 0 && n % 1 !== 0;
    }
    function isThousands(el, v) {
        if (!THOUSANDS.test(v) || stepsInDecimals(el)) return false;
        var whole = parseFloat(v.replace(/[,.]/, ''));
        var max = parseFloat(el.getAttribute('max'));
        return !(max < whole);
    }
    function remember(el) { if (typedComma) typedComma.add(el); }
    function forget(el) { if (typedComma) typedComma['delete'](el); }

    function normalise(el) {
        if (kind(el) !== 'text') return;
        var v = el.value;
        if (!v || v.indexOf(',') === -1 || !DECIMAL_COMMA.test(v)) return;
        var pos = el.selectionStart;
        if (isThousands(el, v)) {
            el.value = v.replace(',', '');
            forget(el);
            if (pos != null) pos -= 1;
        } else {
            el.value = v.replace(',', '.');
            remember(el);
        }
        try { if (pos != null) el.setSelectionRange(pos, pos); } catch (e) {}
    }
    function regroup(el) {
        if (!typedComma || !typedComma.has(el)) return;
        forget(el);
        var v = el.value;
        if (!isThousands(el, v)) return;
        el.value = v.replace(/[,.]/, '');
        // Pages that recompute on `input` saw 2.5 while it was typed.
        el.dispatchEvent(new Event('input', { bubbles: true }));
    }

    document.addEventListener('beforeinput', function (e) {
        var el = e.target, d = e.data;
        if (!kind(el) || !d) return;
        if (d.indexOf('.') !== -1) forget(el);          // a real dot
        if (kind(el) !== 'number' || d.indexOf(',') === -1 || !e.cancelable) return;
        if (!/^insert(Text|FromPaste|FromDrop|ReplacementText)$/.test(e.inputType)) return;
        var text;
        if (d === ',') text = '.';
        else if (DECIMAL_COMMA.test(d)) text = isThousands(el, d) ? d.replace(',', '') : d.replace(',', '.');
        else return;                                   // "1,234,567": the browser's own reading
        e.preventDefault();
        document.execCommand('insertText', false, text.trim());
        if (d === ',') remember(el);
    }, true);
    // Chrome gives a pasted string no `data` on beforeinput; read it here.
    document.addEventListener('paste', function (e) {
        var el = e.target;
        if (kind(el) !== 'number' || !e.clipboardData) return;
        var d = e.clipboardData.getData('text/plain');
        if (!d || d.indexOf(',') === -1 || !DECIMAL_COMMA.test(d)) return;
        e.preventDefault();
        document.execCommand('insertText', false,
            (isThousands(el, d) ? d.replace(',', '') : d.replace(',', '.')).trim());
    }, true);
    document.addEventListener('input', function (e) {
        normalise(e.target);
        if (kind(e.target) && e.target.value.indexOf('.') === -1) forget(e.target);
    }, true);
    document.addEventListener('change', function (e) {
        normalise(e.target);
        regroup(e.target);
    }, true);
    // Values restored by the browser (back button, autofill) never fire
    // `input`, so sweep once when the page is ready.
    function sweep() {
        var boxes = document.querySelectorAll('input');
        for (var i = 0; i < boxes.length; i++) normalise(boxes[i]);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', sweep);
    } else {
        sweep();
    }

    function restored(el) {
        if (el.disabled || el.readOnly) return false;
        if (el.tagName === 'SELECT') {
            for (var k = 0; k < el.options.length; k++) {
                if (el.options[k].selected !== el.options[k].defaultSelected) return true;
            }
            return false;
        }
        var t = (el.getAttribute('type') || 'text').toLowerCase();
        if (t === 'checkbox' || t === 'radio') return el.checked !== el.defaultChecked;
        if (t === 'number' || t === 'text' || t === 'search' || t === 'tel') return el.value !== el.defaultValue;
        return false;
    }
    // Browsers restore form values only on a reload or back/forward; a
    // fresh visit may still see boxes the page's own start-up code set
    // (a route picker), and replaying those could re-run its side effects.
    function wasRestored(e) {
        if (e && e.persisted) return true;
        try {
            var nav = performance.getEntriesByType('navigation')[0];
            if (nav && nav.type) return nav.type === 'reload' || nav.type === 'back_forward';
            if (performance.navigation) return performance.navigation.type === 1 || performance.navigation.type === 2;
        } catch (err) {}
        return true;
    }
    function replayRestored(e) {
        if (!everyTextBox || !wasRestored(e)) return;
        var boxes = document.querySelectorAll('input, select');
        for (var i = 0; i < boxes.length; i++) {
            var el = boxes[i];
            if (!restored(el)) continue;
            normalise(el);
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }
    window.addEventListener('pageshow', replayRestored);
    // Loaded after the page was shown (new.yousuli.co injects it after
    // hydration): the first pageshow has gone by, so replay now.
    if (document.readyState === 'complete') replayRestored();
})();
