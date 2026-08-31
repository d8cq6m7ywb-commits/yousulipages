# NIRS course framework — "Train by the muscle"

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

Same stance as the swim course: feel lies, the curve does not. "You feel
recovered while your muscle oxygen is still in a hole" is already on the PRP
page; this course teaches athletes to check the hole themselves.

## 3. Modules (draft order)

| # | Module | The one thing it teaches | Lab tie-in |
|---|---|---|---|
| 1 | What the sensor sees | SmO2/tHb in plain words, what NIRS is NOT (not lactate, not effort, not a smartwatch guess) | science page |
| 2 | Reading a trace | The four basic shapes: steady, falling, rising, floor. Warm-up dip, the plateau, what noise looks like | any test report |
| 3 | Placement and pitfalls | Site choice, adipose layer, light leak, cold muscle, moving sensors between sessions and why numbers are not comparable across sites | extra-NIRS add-on |
| 4 | Find your zones | The SmO2 breakpoint during a ramp, how it relates to VT1/VT2 and lactate; a self-test protocol (5-1-5) for athletes without a lab | VO2max & Zones test |
| 5 | Intervals by refill | Reoxygenation as the honest recovery gauge: start the next rep when the muscle is ready, not when the clock says so | PRP |
| 6 | Name your limiter | The supply-vs-utilisation split: what SmO2 + lactate + VO2 together reveal that any one alone cannot | Full-Stack |
| 7 | Pacing with a ceiling | Holding the highest SmO2-stable effort; the drain-and-hold logic of the 3-min all-out | DARK, critical power |
| 8 | Make it routine | Getting SmO2 into your files (fit-merge), season tracking, when to re-test | Grepiac, fit-merge |

Eight modules, each a short page in the explainer voice: allegory first, then
the metric, then a protocol the athlete can run this week.

## 4. Free vs paid (Fred decides)

Options, not a recommendation disguised as one:

- **A. Free teaser + paid course.** Module 1-2 as a public explainer-style
  page (SEO: "how to read SmO2" has real search volume and almost no good
  answers), modules 3-8 paid.
- **B. All free, drives testing.** The course as top-of-funnel for PRP /
  Full-Stack / extra-NIRS ("the lab does this FOR you, with reference data").
- **C. Paid from module 1**, sold as the companion to owning a sensor.

Payment stays on Wix for now (per current plan): sell via a Wix payment link,
deliver as unlisted noindex pages on new.yousuli.co, exactly like the test
explainers. No new infrastructure needed to launch.

## 5. Open questions for Fred

1. Device scope: Moxy-first (what the lab runs) with a "other sensors differ"
   note, or vendor-neutral throughout?
2. Does the course assume the athlete OWNS a sensor, or do we offer a rental /
   loaner block through the lab as part of the paid tier?
3. Free/paid split: A, B, or C above?
4. Format: text + figures like the explainers, or with short videos like the
   swim course plan?
5. Anything from your coaching scripts / past athlete debriefs to fold in
   verbatim? (Same merge-workspace idea as the swim framework's section 9.)

## 6. What can be built without waiting on the above

Modules 1 and 2 are settled content regardless of every open question: what
NIRS measures and how to read a trace. They reuse claims already live on the
science and explainer pages, so voice and facts are already approved.
