# NIRS course framework — "Muscle Oxygen in Practice"

## BUILD STATUS (2026-08-31, for Fred's and Sol's review)

Four of eight modules are written and deployed. The course landing page is
public; the paid-arc drafts are private (page-level noindex, not linked from
the landing, shared by direct URL only).

| # | Module | State | URL (new.yousuli.co) |
|---|---|---|---|
| — | Landing / sales page | Public | `/nirs-course` |
| 1 | What the sensor sees | Public, free | `/nirs-course/what-the-sensor-sees` |
| 2 | Reading a trace | Public, free | `/nirs-course/reading-a-trace` |
| 3 | Placement, repeatability, signal quality | **Private draft** | `/nirs-course/placement` |
| 4 | Your personal baseline | **Private draft** | `/nirs-course/personal-baseline` |
| 5 | Intervals by reoxygenation | Not started | — |
| 6 | Breakpoints and zones | Not started | — |
| 7 | Limiter case studies | Not started | — |
| 8 | Routine and season tracking | Not started | — |

**Video workflow:** Fred records himself demonstrating practice; the drafts
contain styled placeholder blocks with per-video shot lists and private
notes-to-self (framing, what to demonstrate, which take carries the module).
Placeholders are swapped for players when footage exists. Five shot lists so
far: module 3 has three (finding the VL, strap tension wrong/wrong/right, the
sixty-second ritual), module 4 has two (the baseline session ridden on
camera, two-sessions-side-by-side including a comparison that deliberately
means nothing).

**What modules 3-4 teach** (for review against the module table below):
module 3 covers site choice with vastus lateralis default, the pinch test,
strap pressure failing both directions, marking the site, a sixty-second
setup ritual with signal check, and an ordered artefact diagnosis. Module 4
defines the three personal references (settled easy value, working floor,
refill signature), the six matched conditions, a 30-minute repeatable
baseline session, the six-item log row, and refresh triggers. Every module
ends with the agreed template: learned / decision / protocol / record / when
not to trust.

---

Positioning (revised after Sol's review): **outcome-led, not technology-led.**
Course title: *Muscle Oxygen in Practice*. Sales line: *Stop staring at SmO2.
Learn to use it to pace intervals, judge recovery, and understand what is
limiting you.* "Train by the muscle" survives as the tagline. The line that
anchors the sales page: **"You saw your curve. Now learn what to do with it."**
Practical decision-making course, not general NIRS education.

Working document for Fred's review, same pattern as the swim / VO2 / strength
frameworks. Nothing here is deployed; every section is open for edit.

The pitch in one line: **almost nobody teaches athletes how to actually use a
muscle-oxygen sensor. We use them every week in the lab. That gap is the
course.**

---

## 1. Why this course is ours to make

- The lab already runs Moxy NIRS in PRP, Full-Stack, DARK, and the extra-NIRS
  add-on. Every claim in this course is something we already do with real
  athletes, not theory.
- The explainer pages already introduce the ideas (the utilisation link of the
  oxygen cascade, the "SmO2 crashes while lactate stays modest = peripheral
  limiter" split, reoxygenation as a recovery gauge). The course is the
  natural next step after a test: "you saw your curve, now learn to train
  with it."
- Consumer NIRS (Moxy, Train.Red) is affordable now, but owners mostly stare
  at a number they cannot read. Competing content is either academic papers or
  vendor marketing. Plain-language, protocol-driven teaching barely exists.
- The toolchain is already Yousuli: the fit-merge tool merges SmO2 channels
  into one file, and Grepiac can chart it. The course keeps athletes inside
  our ecosystem.

## 2. The spine: supply vs demand, live

Every module hangs off one idea:

> **SmO2 is the muscle's live bank balance: oxygen delivered in, oxygen spent
> out. Every trace is just deposits vs withdrawals. Training questions become
> readable the moment you see which side is winning.**

(The hybrid-car story from DARK stays consistent with this: the battery is
W', the gas engine is aerobic supply, and SmO2 is the gauge showing how hard
the engine room is being drained right now.)

### Measured, not felt (house differentiator)

Revised stance (Sol, adopted): the sensor can mislead too, through placement,
movement, temperature, light leak, adipose tissue. So not "the curve does not
lie" but: **"Feel gives you one signal. The curve gives you another. Good
decisions come from knowing when to trust each one."** That framing also makes
the placement and baseline modules load-bearing instead of housekeeping.

## 3. Modules (revised order)

Sol proposed placement-before-trace-reading, which is right for the PAID arc
but collided with his own free-tier spec (free = what it measures + basic
shapes). Resolution: the two FREE modules stay as built (they already carry a
signal-vs-artefact section, so "trust before interpretation" is not ignored),
and the paid arc opens with placement, then the new baseline module.

| # | Tier | Module | The one thing it teaches | Lab tie-in |
|---|---|---|---|---|
| 1 | Free | What the sensor sees | SmO2/tHb plainly, what NIRS is NOT | science page |
| 2 | Free | Reading a trace | The four shapes, the three real traces, signal vs artefact | any test report |
| 3 | Paid | Placement, repeatability, signal quality | Site choice, skinfold, light leak, sensor pressure, why yesterday may not compare to today | extra-NIRS add-on |
| 4 | Paid | Your personal baseline (NEW, Sol) | Build a reference library: same muscle, position, warm-up, pressure, environment, repeatable ramp. Within-athlete comparison is the whole game | VO2max & Zones |
| 5 | Paid | Intervals by reoxygenation | Refill speed as the honest recovery gauge; rest by readiness, not clock | PRP |
| 6 | Paid | Breakpoints and zones | The ramp breakpoint, its relation to VT1/VT2 and lactate, the 5-1-5 self-test | VO2max & Zones |
| 7 | Paid | Limiter case studies | What SmO2 can SUGGEST alone, and what requires lactate + VO2 before concluding. Case-study format, explicitly sells Full-Stack | Full-Stack |
| 8 | Paid | Routine and season tracking | fit-merge into your files, tracking across a season, when to re-test | Grepiac, fit-merge |

Module 7 is deliberately no longer "Name your limiter": SmO2 alone cannot
always separate delivery from utilisation, and overpromising there costs the
exact credibility the course trades on.

### Every module ends the same way (Sol, adopted)

What you just learned · what decision it helps you make · one protocol to run
· what to record · when NOT to trust the result.

### Format (binding, not aspirational)

The Programs page promises video, worksheets and calculators for every
program, free or paid. The paid tier must meet that bar: short videos,
annotated traces, printable protocol cards. The free pages may stay text +
figures. Video production is on Fred; pages and worksheets can be built here.

## 4. Free vs paid: DECIDED (Option A) and bundling

Free: modules 1-2 (live). Each free page should deliver a real win but leave
the reader asking "how do I apply this to MY training", which is the paid arc.

Distribution (Sol, adopted):
- Included with PRP and Full-Stack packages ("you saw your curve" is literal).
- Included in relevant coaching memberships.
- Sold standalone to sensor owners worldwide (beyond the lab's geography).
- Sensor rental / loaner block: a separate lab package, NOT required for the
  course.

Payment via Wix link for now; delivery as unlisted pages, same as the
explainers. Commercial role: authority product and bridge (free guide -> paid
course -> lab test or coaching -> Grepiac), not the mainstream flagship. NIRS
ownership is still a narrow audience and the course should not pretend
otherwise.

## 5. Open questions for Fred

1. Device scope: SETTLED (Sol). Moxy-led, sensor-aware: "Demonstrations use
   Moxy because that is what we run in the lab. The principles apply broadly;
   values and behaviour differ between devices."
2. Does the course assume the athlete OWNS a sensor, or do we offer a rental /
   loaner block through the lab as part of the paid tier?
3. Free/paid split: SETTLED, Option A.
4. Format: text + figures like the explainers, or with short videos like the
   swim course plan?
5. Anything from your coaching scripts / past athlete debriefs to fold in
   verbatim? (Same merge-workspace idea as the swim framework's section 9.)

## 6. What can be built without waiting on the above

Modules 1 and 2 are settled content regardless of every open question: what
NIRS measures and how to read a trace. They reuse claims already live on the
science and explainer pages, so voice and facts are already approved.
