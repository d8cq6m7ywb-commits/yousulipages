# Stryd course framework: "The Footpod, Honestly"

Strategy document. Binding on anyone writing course pages. Operational state
(page status, URLs, shot lists) lives in `stryd-course-status.md`, not here.

Written 2026-10-23 from Fred's brief: a simple course about the Stryd footpod
covering installation on Garmin and Coros devices, uses and reading,
calibration around the track, best uses and limitations, and reading the data
and what it means. Skeleton by Fable, build by Opus, review by Fred.

## 1. Positioning

Stryd made running power affordable and popular. Most owners strap it on,
stare at a watt number, and either worship it or abandon it. Neither is
reading it. This course teaches what the pod actually measures, how to set it
up so the data is trustworthy, how to verify it yourself on a track, and how
to use it where it genuinely beats pace and heart rate, without pretending it
measures things it does not.

Same house stance as the NIRS course, and the course says so early: one
instrument, read beside pace, heart rate and feel, strongest in company. The
pod's superpower is consistency, not truth. It gives you the same number for
the same running, day after day, which is exactly what pacing and trend
decisions need, and it is not a force plate and not a physiology lab.

Tone: Fred's voice, first person, plain words, no em-dashes in body copy, no
TrainingPeaks trademarks. Smaller and more practical than the NIRS course:
this is a tool course, not a physiology course.

## 2. Audience

Runners and triathletes who own a Stryd (or are deciding whether to buy one)
and wear a Garmin or Coros watch. No physiology background assumed. Demos are
run-led and filmable: track, road, treadmill.

## 3. The spine

Five modules plus a landing page. The arc: understand the instrument, install
it correctly, verify it yourself, read it fluently, then use it where it wins
and put it down where it loses.

- Landing (public): positioning, who it is for, module list, multi-signal
  stance, lab tie-in.
- Module 1 (free): What the pod actually measures. Sensor reality: an
  inertial sensor on your shoe. What is measured (motion), what is derived
  (pace, distance, cadence, ground contact time, vertical oscillation), and
  what is modelled (power, form power, air power). The bank-account honesty
  moment of this course: Stryd watts are a modelled construct, a consistent
  unit of intensity, not a direct measurement of mechanical work.
- Module 2 (free): Install and set up, Garmin and Coros. Mounting on the
  laces, pairing, firmware via the Stryd app. Garmin: the Connect IQ data
  field route versus Garmin's own native running power, choosing ONE power
  source and knowing which one is recording, setting the pod as pace and
  distance source, calibration factor left at factory with auto-calibration
  off. Coros: native Stryd support, pairing, pace source selection. End
  state: a watch that records Stryd power and Stryd pace, and a written note
  of which settings were chosen, because a setup you cannot describe is a
  setup you cannot repeat.
- Module 3 (paid): The track check. Trust is earned, so verify the pod
  yourself: a 400 m track protocol, multiple laps at steady pace in lane 1
  on the measurement line, pod distance against known distance, repeated on
  a second day under matched conditions before any conclusion. Decision
  rules set BEFORE running (the NIRS module 4/6 discipline): a small
  disagreement is left alone, a persistent measured offset earns a
  calibration factor, run-to-run wobble earns nothing. Includes why the
  treadmill display is not a reference and a treadmill disagreement is not a
  pod failure.
- Module 4 (paid): Reading the data. Each number in plain words: power as
  intensity-now, why power holds steady on hills when pace lies, cadence,
  ground contact time, vertical oscillation, leg spring stiffness, form
  power, air power. What moves each number (fatigue, surface, shoes,
  cadence drills) and the reading discipline: your numbers against your own
  numbers from matched conditions; form metrics are trend tools, not
  technique verdicts.
- Module 5 (paid): Best uses and limitations. Where power genuinely wins:
  even pacing on hilly courses, racing without GPS lies, treadmill sessions,
  steady intensity when heat makes heart rate drift. Critical power and
  power zones taught with the house candidate language: CP from the pod's
  model is a candidate anchor, verified against races and feel before
  training is built on it. The limitations list, stated as plainly as the
  sales pitch: watts not comparable across brands or to cycling, absolute
  watts not physiology, "efficiency" metrics overreaching, and the
  multi-signal close that points to lab testing for the questions a pod
  cannot answer.

## 4. Evidence boundaries (bind the writing, module by module)

- Module 1: Stryd power is computed from inertial data by a proprietary
  model. The course never calls it a measurement of mechanical work. Its
  defensible claims are reliability and internal consistency, not validity
  against a gold standard. No numeric validity claims unless a specific
  published study is read and cited; qualitative boundaries otherwise. No
  invented numbers, house rule.
- Module 2: instructions must be written against the current Garmin Connect
  IQ and Coros pairing flows and verified against Stryd's own support
  documentation during the build. Where menu paths differ by watch model,
  say so rather than guessing.
- Module 3: a single lap proves nothing; the protocol uses multiple laps and
  two days under matched conditions, with agreement rules precommitted. The
  course does not promise track-level accuracy everywhere: trails, sharp
  turns and surface changes are named as different conditions. Lane 1
  measurement-line geometry stated honestly (running wide adds real
  distance; that is the runner, not the pod).
- Module 4: form metrics (GCT, vertical oscillation, LSS, form power) are
  device-specific and trend-useful; the course never prescribes a "good"
  absolute value for any of them. Changes count only under matched
  conditions and only when material, the NIRS meaningful-change standard
  restated for this instrument.
- Module 5: CP is a candidate anchor by the pod's own model, not a validated
  physiological threshold; same candidate-not-verdict framing as the NIRS
  breakpoint module. Cross-brand and run-versus-bike watt comparisons are
  named invalid. The lab tie-in is honest: what added signals resolve, and
  that honest testing sometimes ends at a better question.

## 5. Format (binding)

- Pages live in the Next.js site at `app/(site)/stryd-course/` with the same
  route-group conventions as `nirs-course/`: landing at `/stryd-course`,
  modules at descriptive slugs.
- Scoped CSS: new file `stryd-course.css` with an `sc-` prefix, modelled on
  `nirs-course.css` (nc-), so nothing collides with global styles.
- Free modules 1 and 2 public and indexable once Fred approves; modules 3 to
  5 private drafts: page-level `robots: { index: false, follow: false }` and
  behind the same basic auth as the NIRS drafts (extend the Caddy matcher to
  `/stryd-course/<private slugs>*`).
- Video placeholders throughout in the NIRS VideoSlot pattern: shot lists
  and notes-to-self for Fred, who records himself. Planned shoots: mounting
  and first pairing, Garmin setup screen capture, Coros setup screen
  capture, the track session on camera, a data-review screen capture.
- Module-end template identical in spirit to the NIRS endcard: what you
  just learned, what decision it helps you make, one protocol to run, what
  to record, when not to trust the result.
- Internal links only to routes verified to exist in the repo at build time.
- Every scientific or product claim either verifiable from Stryd's or the
  watch vendors' own documentation, from checked literature, or written as
  Fred's coaching convention and labelled as such.

## 6. Commercial

Same shape as NIRS: free modules are the honest teaser, paid modules private
until Fred's review, payment stays on the main Wix site for now. Lab tie-in
links to existing routes (`/performancelab`, and gait or economy testing
pages if and only if such routes exist). FIT tooling cross-links where they
help (`/fit-file-merger` for getting pod data onto one timeline).

## 7. Open questions for Fred

- Free/paid split: modules 1 and 2 free as drafted, or module 2 paid too?
- Does the course mention Stryd's own app ecosystem (plans, race power
  calculator) or stay watch-plus-data only? Skeleton assumes a short honest
  mention in module 5, no tutorial.
- Apple Watch and other platforms: out of scope for now (Garmin and Coros
  per the brief), said explicitly on the landing page?
