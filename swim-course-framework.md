# Swim course framework — free + paid

Working document for Fred's review. Covers BOTH courses:

1. **Free course** — the live `/swim-course` page (Yousuli × Slipstream), to be improved
2. **Paid course** — the 12-week guided program, to be built

Fred has an earlier swim course as well. Section 9 is the merge workspace:
list what to port from the old course there during review, and we fold it in.

Nothing in this doc is deployed. Every section is open for edit.

---

## 1. The spine: efficiency

Yousuli's whole brand is measured efficiency, and swimming is the sport where
efficiency dominates hardest. This is the reframe that makes the course ours
instead of a generic drill list:

> **Swimming speed is bought with efficiency, not effort. A stronger engine
> on a draggy hull just makes a bigger wake.**

### The Yousuli swim efficiency model

Three levers, in strict order. Each lever is worthless until the one before
it is handled:

| Lever | What it means | Course stages | Why this order |
|---|---|---|---|
| **1. Reduce drag** | Flat body, neutral head, calm breathing that doesn't disturb the line | Stages 1-2 | Drag rises with the square of speed. A draggy body wastes every watt you add later. |
| **2. Improve propulsion** | High-elbow catch, water pushed backwards, a kick that stabilises without burning | Stages 3-4 | Only worth optimising once the hull is clean. |
| **3. Sustain the system** | Hold the same stroke for 30 minutes. Rhythm, tempo, pacing | Stage 5 (+6) | Endurance is just efficiency that survives fatigue. |

Everything in both courses hangs off one of these three levers. Every drill
video states which lever it serves. Every stage gate tests one lever.

### Measured, not felt (the Yousuli differentiator)

We already own the measurement tools. The course integrates them instead of
hand-waving "you'll feel faster":

| Metric | Tool | Used when |
|---|---|---|
| Swimming Efficiency Battery Test | EBT-1 + EBT-2 calculators (live on /calculators) | Baseline week 1, retest week 6 and week 12 |
| Stroke count per length + SWOLF | Any watch, or manual count | Weekly, the athlete's running scoreboard |
| APE index (arm span / height) | Tape measure, 2 minutes | Once, week 1. Sets the athlete's stroke-rate bias (gorilla = lower rate + longer glide, T-Rex = higher rate + continuous catch) |
| CSS (critical swim speed) | CSS calculator (live on /calculators) | Introduced week 10+, only once continuous 400+ exists |
| Tempo (strokes/min) | FINIS Tempo Trainer Pro | From stage 5 |

**Framing rule:** the free course names these metrics and links the
calculators. The paid course schedules them, interprets them, and tracks the
retest deltas. Measurement cadence is a paid feature.

---

## 2. Free vs paid: what lives where

The free page sells the map. The paid course sells the ride.

| Asset | Free | Paid |
|---|---|---|
| The 3-lever efficiency model | Yes, explained | Yes, drives the plan |
| 6-stage curriculum overview | Yes | Yes, expanded to day level |
| 21 drill videos (short, 1-3 min demos) | Yes, all of them | Yes, embedded in sessions |
| Drill key points (one-liner per card) | Yes | Full teaching depth in masterclasses |
| 12 common mistakes | Yes | Yes, plus video of each error in the masterclasses |
| Tools guide | Yes | Yes, plus exact purchase/settings guidance |
| One sample session shape | Yes | 36 written sessions (12 weeks × 3) |
| Stage-gate tests | Named only | Full protocols + pass criteria + what to do on a fail |
| EBT baseline/retest schedule | Mentioned, calculators linked | Scheduled, interpreted, tracked |
| 6 stage masterclasses (15-20 min) | No | Yes, the core video asset |
| Dryland module (shoulder prehab + ankle mobility) | No | Yes |
| Stroke video reviews by me | No (see note) | 2 included (weeks 3 and 9) |
| Open-water / race-prep extension | Stage 6 pointer only | Separate module, sold later |

**Note on the current free stroke-review offer:** the live page bottom CTA
offers "send me a phone-shot video and I'll write back with a short read."
This cannibalizes the paid review. Decision needed (pick one):

- [ ] Scope it down explicitly: "one paragraph, the single highest-priority fix only"
- [ ] Keep until paid launch, then retire
- [ ] Remove now

---

## 3. The six stages, reframed under the three levers

Stage structure survives from the live page. Each stage gains: the lever it
serves, a measurable gate, and (paid) a masterclass.

### LEVER 1: REDUCE DRAG

**Stage 1 — Body position and feel for the water**
- Goal: float flat without fighting; know where the water presses
- Efficiency argument: a sinking lower body can double effective drag. No
  propulsion fix pays off until this is solved.
- Key content points:
  - The float test: can you lie flat, face down, arms extended, 10 s, without kicking
  - Head position steers the hips (look down, not forward)
  - CO2 tolerance, not oxygen, is what panics beginners. Box breathing on land (5-5-5-5) trains the same response
  - Feel for the water = learning to read pressure on palm and forearm
- Gate 1 (pass to stage 2): 10 s motionless float, flat; streamline push-off
  glides past the flags without kicking; 2 min of relaxed box breathing on land
- Drills: 01 Sculling, 02 Kicking, 03 Back kicking, 04 Side kicking, 05 Streamlining
- Tools: goggles, front-mount snorkel

**Stage 2 — Breathing without panic**
- Goal: a predictable exhale-inhale rhythm that doesn't disturb body position
- Efficiency argument: every lifted head and held breath is a drag spike plus
  a heart-rate spike. Breathing is a drag problem disguised as a comfort problem.
- Key content points:
  - Exhale continuously through the nose while the face is in the water
  - Arrive empty at the rotation; the inhale then takes care of itself
  - Rotate to the breath, never lift; one goggle stays in the water
  - Bilateral (every 3) is the target rhythm once the exhale is dependable
- Gate 2: 4 × 50 with continuous exhale, no gasping, RPE 5 or under; can
  switch breathing sides without stroke breakdown
- Drills: 06 Pushing the wall, 07 One-arm kicking with side breathing,
  08 Change-arm kickboard, 09 Bubble-bubble-breathe
- Tools: kickboard, short fins (optional)

### LEVER 2: IMPROVE PROPULSION

**Stage 3 — The catch and pull**
- Goal: pull water backwards, not down or sideways
- Efficiency argument: this is where distance-per-stroke is made. The high-elbow
  catch is the single highest-value propulsion habit in freestyle.
- Key content points:
  - Dropped elbow = pushing water down = lifting your front end and going nowhere
  - Fingertips down, elbow high, forearm becomes the paddle
  - The stroke-count scoreboard: fewer strokes per length at the same easy
    effort = the catch is working
  - It feels almost lazy when it's right
- Gate 3: stroke count per 25 drops by 2+ from week-1 baseline at the same
  relaxed effort; Freestyler paddle stays stable through the pull
- Drills: 10 Doggie paddle, 11 Long dog, 12 Fist of fury, 13 Diamond
- Tools: FINIS Freestyler paddles, snorkel

**Stage 4 — A kick you can live with for 30 minutes**
- Goal: quiet 2- or 4-beat kick from the hip that stabilises the line
- Efficiency argument: legs are the biggest oxygen consumers in the body.
  An overkick spends the athlete's whole budget on 5% of the propulsion.
  At our target pace, the kick's job is posture, not power.
- Key content points:
  - From the hip, knees soft, ankles loose
  - Loud kick = expensive kick. Quiet is the quality marker
  - Ankle mobility is the hidden limiter for cyclists and runners; dryland fix
  - Kick rhythm must survive the breath (most people pause it and sink)
- Gate 4: 50 m at normal effort with a quiet 2- or 4-beat kick; vertical
  flutter 30 s hands-in without sinking
- Drills: 14 4 kicks / 3 strokes, 15 Vertical flutter kick, 16 Screwdriver kick,
  17 One paddle one fin
- Tools: short fins / Zoomers

### LEVER 3: SUSTAIN THE SYSTEM

**Stage 5 — Stringing it together**
- Goal: the same stroke, held for longer and longer, until 1,500 m
- Efficiency argument: endurance isn't a separate quality; it's whether your
  efficiency survives fatigue. If the stroke changes at 400 m, the fix is
  rarely fitness, it's a lever-1 or lever-2 leak reappearing under load.
- Key content points:
  - Distance grows, stroke does not change. That's the entire stage
  - Tempo trainer keeps the rate honest; APE index sets the individual target
  - Progression shape: 6×100 → 4×200 → 3×300 → 2×500 → 1×1,000 → 1,500
  - The swim band as truth serum: if 50 m band-only works, the basics are in
- Gate 5 (course target): 1,500 m or 30 min continuous, stroke count on the
  last 100 within 2 of the first 100
- Drills: 18 Unzip, 19 Popov, 20 4-1-4, 21 Swim band
- Tools: FINIS Tempo Trainer Pro, pull buoy (sparingly), swim band

**Stage 6 — Out of the pool (optional bridge)**
- Goal: carry the pool stroke to open water, masters, or a triathlon start line
- Content: sighting, mass-start nerves, cold-shock acclimation, wetsuit feel
- Free course: pointers only. Paid course: this becomes the separate race-prep
  extension module, sold later. Do not block the paid launch on it.
- Tools: FINIS Fulcrum, Tech Toc, wetsuit

---

## 4. Drill video inventory — 21 short videos (free tier)

Format per video: 1-3 min. Structure: what it is (10 s) → the one thing it
teaches (lever) → execution cues → the common butchering → do this after
(post-drill freestyle to transfer the feeling).

Status codes: ✅ filmed + on YouTube (from UCLA work) · 🔶 filmed, mapping to
confirm · ⬜ to film

**⚠ Fred to confirm:** the 🔶 rows and the drills marked "(confirm)" carry my
best-guess descriptions of your drill naming. Correct anything that doesn't
match how you actually teach it.

### Stage 1 · lever 1 (drag)

| # | Drill | Status | Key teaching points |
|---|---|---|---|
| 01 | Sculling | ✅ `c-0f12yQQIQ` | Feel for water. Small figure-8 at the front, pressure on palm + forearm, wrists firm, elbows high, head neutral. Error: turning it into a mini-pull. |
| 02 | Kicking | 🔶 UCLA "Wall kicking" `3SqjBQYEBII`, confirm same drill | Baseline flutter. From the hip, knees soft, small fast amplitude, toes long. Quiet = right. Error: kicking from the knee, bicycle legs. |
| 03 | Back kicking | ⬜ | Posture without the breathing problem. Hips at surface, ears in water, eyes straight up, hands at sides or streamline. Error: sitting in the water (hips drop). |
| 04 | Side kicking | ✅ `hI7YDLW8RoY` | Balance on the side, the freestyle home position. Bottom arm extended, top arm on thigh, eyes DOWN, mouth clears on rotation only. Error: looking forward, resting head on the arm. |
| 05 | Streamlining | ⬜ | The drag baseline test. Hand over hand, squeeze the ears, core tight, push and glide. Track glide distance over the weeks, it's a drag score. Error: loose hands, head peeking. |

### Stage 2 · lever 1 (drag)

| # | Drill | Status | Key teaching points |
|---|---|---|---|
| 06 | Pushing the wall | ⬜ | Exhale patterning, zero coordination load. Hold the wall, face in, continuous nasal exhale, rotate to breathe, repeat until boring. Error: breath-holding then double-tasking the exhale-inhale in the window. |
| 07 | One-arm kicking with side breathing | 🔶 UCLA "Unco" `J9VEp-h7LdA`, confirm same drill | Breath timing in isolation. One arm extended, kick, rotate to breathe against the extended arm rhythm. Error: lifting the head instead of rotating. |
| 08 | Change-arm kickboard | ⬜ | Transitional: board held, swap arms with a full breath cycle between. Bridges drill world to full stroke. Error: rushing the swap, skipping the exhale. |
| 09 | Bubble-bubble-breathe | 🔶 UCLA "Breathing patterns" `61jY20NMA4Q`, confirm same drill | The rhythm chant. Two exhale beats, breathe on three. Locks bilateral timing to the stroke count. Error: silent (held) bubbles on beat one. |

### Stage 3 · lever 2 (propulsion)

| # | Drill | Status | Key teaching points |
|---|---|---|---|
| 10 | Doggie paddle | ⬜ | Catch feel, head-up or head-down. Continuous underwater recovery, hand presses BACK under the body. Error: pressing down, hand sliding out sideways. |
| 11 | Long dog | ✅ `MrylX90tyfg` | Doggie paddle extended: full reach, high-elbow catch, pull to the hip, underwater recovery. Slow and deliberate. Error: elbow dropping the moment the pull starts. |
| 12 | Fist of fury | ✅ `2jSkI1dnDwg` | Fists closed = hands deleted = forearm must become the paddle. Open the hands after 50 and feel the size difference. Track stroke count fist vs open. Error: fighting for speed instead of feeling for pressure. |
| 13 | Diamond (confirm description) | ⬜ | Front-quadrant timing: hands meet in a diamond out front before the next pull starts. Keeps one hand always in front, entry in line with the shoulder. Error: windmilling, crossing the centreline. |

### Stage 4 · lever 2 (propulsion)

| # | Drill | Status | Key teaching points |
|---|---|---|---|
| 14 | 4 kicks / 3 strokes | ⬜ | Side-balance + kick continuity. Four kicks on the side, three strokes to the other side, repeat. Kick never pauses through the switch. Error: dead legs during the strokes. |
| 15 | Vertical flutter kick | ⬜ | The honesty test. Vertical in deep water, flutter from the hip, hands crossed on chest (progression: streamline overhead). 15-30 s sets. Error: bicycling, big slow kicks. |
| 16 | Screwdriver kick (confirm description) | ⬜ | Kick along the long axis rotating slowly through back-side-front-side. Teaches the kick to survive every body angle, which is what the breath demands. Error: kick stalling mid-rotation. |
| 17 | One paddle one fin (confirm description) | ⬜ | Deliberate asymmetry: one side gets propulsion help, the other has to match it. Exposes the weak-side kick and pull instantly. Swap sides. Error: letting the strong side do everything. |

### Stage 5 · lever 3 (sustain)

| # | Drill | Status | Key teaching points |
|---|---|---|---|
| 18 | Unzip | ⬜ | Recovery mechanics: thumb drags up the side seam, elbow leads high, forearm hangs loose. Stops the wide swinging recovery that wrecks the line. Error: overreaching entry past the shoulder line. |
| 19 | Popov (confirm description) | 🔶 video in edit for UCLA | Super-slow perfect freestyle (the Popov school). Slowest possible stroke that still holds line and rhythm. No dead spots allowed. It's harder than swimming fast. Error: gliding into a stall between strokes. |
| 20 | 4-1-4 (confirm description) | ⬜ | Placeholder: Fred to define exact protocol (4 what / 1 what / 4 what) and cues. |
| 21 | Swim band | 🔶 video in edit for UCLA | Band around ankles, legs deleted. Any body-position leak shows up in metres. 50 m band-only = basics confirmed. Used sparingly, late stage 5. Error: using it before the float exists (it just teaches sinking). |

---

## 5. Paid course: the 12-week program

Working name options (pick one or propose):

- [ ] Swim Foundations: the Full Course
- [ ] The Yousuli Swim Rebuild
- [ ] 1500 by Week Twelve
- [ ] Other: ____________

### Skeleton

3 sessions/week (frequency beats duration, already the free-page principle).
Session types each week:

- **Session A** — technique focus: drill-heavy, snorkel work, short
- **Session B** — drill + short main set: transfer day
- **Session C** — main set day: where the distance grows

| Week | Focus | Stage work | Milestones |
|---|---|---|---|
| 1 | Baseline + drag | Stage 1 | EBT-1 baseline, APE measured, float test, glide test filmed |
| 2 | Drag + exhale | Stages 1-2 | Gate 1 attempt |
| 3 | Breathing rhythm | Stage 2 | **Stroke review #1** (athlete films + uploads) |
| 4 | Breathing consolidated | Stage 2 (+3 intro) | Gate 2 attempt |
| 5 | The catch | Stage 3 | Stroke-count scoreboard starts |
| 6 | Catch + kick | Stages 3-4 | **EBT retest #1**, compare to baseline |
| 7 | Kick economy | Stage 4 | Gate 3 + Gate 4 attempts |
| 8 | First continuous builds | Stage 5 | 6×100 → 4×200 |
| 9 | Building | Stage 5 | **Stroke review #2**, 3×300 |
| 10 | Tempo + pacing | Stage 5 | Tempo trainer settled, CSS test, 2×500 |
| 11 | The long build | Stage 5 | 1×1,000 continuous |
| 12 | Target swim | Stage 5 | **1,500 m / 30 min continuous. EBT-2 final. Wrap + what's next** |

Rule carried from the free page, stated louder in the paid course: **gates
over calendar.** The 12 weeks are the default speed, not a deadline. A failed
gate means repeat the week, and the plan says exactly which sessions to repeat.

### The 6 masterclasses (core paid video asset)

15-20 min each. One per stage, NOT one per drill (caps filming at 6
productions; the 21 short drills already exist as free demos and get embedded
inside the relevant masterclass sessions).

Common structure for every masterclass:

1. The lever this stage serves and the efficiency argument (2 min)
2. What "done" looks like: the gate test demonstrated (2 min)
3. Each drill of the stage taught properly: setup, cues, underwater view, the 3 common ways it goes wrong, the fix (8-12 min)
4. Slipstream variant: how to run this stage's work in a small pool against the current (2 min)
5. Self-check: what to film on your phone and what to look for (1 min)

| MC | Title (working) | Extra content beyond the drills |
|---|---|---|
| 1 | Float first: killing drag before it kills you | The float test filmed from underwater; head-position A/B footage showing hip drop; box-breathing protocol |
| 2 | The exhale: breathing as a drag problem | Underwater exhale footage; the panic loop explained (CO2 not O2); bilateral progression map |
| 3 | The catch: buying distance per stroke | Underwater high-elbow vs dropped-elbow side by side; Freestyler paddle feedback demo; stroke-count scoreboard method |
| 4 | The quiet kick | Overkick vs 2-beat cost comparison; ankle-mobility dryland routine (bridge to dryland module) |
| 5 | Holding it together: tempo, pacing, distance | Tempo trainer setup by APE type; the progression ladder; what stroke decay looks like on video and what leak it points to |
| 6 | (Race-prep extension, separate module, later) | Sighting, wetsuit, mass start, cold shock |

### Feedback loops (the moat)

- **2 async stroke-video reviews included** (weeks 3 and 9). Athlete films
  per the filming guide (above-water front + side minimum, underwater if
  available). I return a screen-recorded voiceover, ~72 h turnaround.
- Extra reviews à la carte: $49.
- Email access during the 12 weeks (coached tier).
- **Gate guarantee** (risk reversal, costs almost nothing): complete the
  sessions, fail a gate anyway, and I review your video and tell you why, free.

### Dryland module

- Shoulder prehab routine (10 min, 2×/week): band work, external rotation, scap control
- Ankle mobility routine (5 min, daily-ish): the cyclist/runner fix
- Box breathing progression (from free page, expanded with weekly targets)
- Source: adapt existing Yousuli strength content (UCLA walk-through library)

### Delivery + pricing (proposal, decide at review)

- **Delivery: through Grepiac** as a plan template that drops into the
  athlete's calendar. Reasons: cross-sells the Hub, uses infrastructure we own,
  avoids deepening the Wix dependency right before the exit. Gated video pages
  can live on GitHub Pages like everything else.
- Tiers:

| Tier | Contents | Price |
|---|---|---|
| Self-guided | 12-week plan, 6 masterclasses, gates, dryland, EBT schedule | $149 |
| Coached | + 2 stroke reviews, email access, gate guarantee | $279 |

- No third tier: on-site swim coaching already IS the premium tier. The course
  is positioned as the step before it.
- Founding cohort at ~$99 / $199 to the grandfather list, YSC members, and the
  free-page waitlist. Capped (20?) to keep review workload bounded. Collect
  testimonials, then evergreen at full price.

---

## 6. Changes to the FREE page (deferred until this doc is approved)

1. Reframe the goal/curriculum intro around the 3-lever efficiency model
   (light touch: one new callout + stage labels, not a rewrite)
2. Wire the 4 confirmed drill videos (Sculling, Side kicking, Long dog,
   Fist of fury) + the 3 pending Fred's mapping confirmation
3. Add one-line key point to each drill card (from section 4 tables)
4. Add stage-gate one-liners to each stage card ("You're done here when...")
5. Name the EBT calculators + link them (baseline invitation, free)
6. Add waitlist capture line to the bottom paid-course teaser (mailto with
   subject "swim course")
7. Decide the free stroke-review offer's fate (section 2 checkbox)

## 7. Production punch list (paid)

- [ ] Film remaining short drills: 03, 05, 06, 08, 10, 13, 14, 15, 16, 17, 18, 20 (+ Popov and Swim band already in edit)
- [ ] Film 6 masterclasses (5 now, MC6 later with the extension)
- [ ] Underwater footage needed for MC1-4 (GoPro on a pole, or Slipstream side window if applicable)
- [ ] Write 36 sessions (I draft from the skeleton, Fred reviews)
- [ ] Write gate protocols as printable/hub-able checklists
- [ ] Dryland module: film or photo-sequence the two routines
- [ ] Filming guide for athletes (how to shoot your own stroke)
- [ ] Hub plan template build
- [ ] Decide names, tiers, founding-cohort size

## 8. Open questions for Fred

1. Drill mapping confirmations: 02↔Wall kicking, 07↔Unco, 09↔Breathing patterns
2. Drill descriptions to correct where my guess is off: 13 Diamond, 16 Screwdriver, 17 One paddle one fin, 19 Popov, and 20 (4-1-4) needs your protocol entirely
3. Course name (section 5 options)
4. Pricing sign-off ($149 / $279, founding $99 / $199)
5. Founding cohort cap
6. Free stroke-review offer: scope down, keep-then-retire, or remove
7. Hub delivery: confirm the Hub can host/serve a plan template like this today, or do we start with gated pages + hub later
8. Slipstream's role in the paid course: is it assumed (like the free page) or optional with pool-lane alternatives given for every session? My lean: optional, with both variants written into each session, widens the market beyond Slipstream owners

## 9. Merge workspace: the previous swim course

Fred: list here what the old course had that the new framework is missing,
or paste/drop the old materials next to this file and I'll do a comparison
pass myself.

- Old course format (video? PDF? in-person curriculum?): ____________
- Sections worth porting: ____________
- Drills in the old course not in the 21: ____________
- Anything the old course did better: ____________
- Anything the old course got wrong that we're not repeating: ____________
