# NIRS course framework — "Muscle Oxygen in Practice"

Course strategy: audience, positioning, learning architecture, evidence
boundaries. **Operational state (what is built, URLs, shot lists, next
actions) lives in `nirs-course-status.md`**, so this document can stay true
for months at a time. Canonical copy: `site/` (git-tracked); the repo-root
copy is a working mirror.

Rewritten clean 2026-08-31 after Sol's second review flagged drift from
incremental patching. Decisions below are current; superseded text is gone
rather than annotated.

---

## 1. Positioning

Outcome-led, not technology-led. Title: **Muscle Oxygen in Practice**.
Tagline: *Train by the muscle*. Sales line: *Stop staring at SmO2. Learn to
use it to pace intervals, judge recovery, and understand what is limiting
you.* Anchor of the sales page: **"You saw your curve. Now learn what to do
with it."** A practical decision-making course, not general NIRS education.

The pitch in one line: almost nobody teaches athletes how to actually use a
muscle-oxygen sensor; we use them every week in the lab; that gap is the
course.

## 2. Audience

Endurance athletes who own a consumer NIRS sensor (Moxy, Train.Red or
similar) or are deciding whether to buy one, plus lab clients who have seen
their own curves in a test and want to keep training with them.

**Demonstrations are cycling-led** because that is how Fred films them and
because the trainer makes live traces filmable. **The principles carry to
running and triathlon unchanged; protocols are adapted, not reinvented**:
where a protocol needs a sport-specific change (surface, site, how to hold a
steady effort), the module says so explicitly rather than leaving the runner
to guess. Swim NIRS is named honestly as mostly a lab matter.

Device scope: Moxy-led, sensor-aware. Demonstrations use Moxy because that is
what the lab runs; the physiology applies broadly, but values and behaviour
differ between devices and the course says so.

## 3. The spine

> **SmO2 is a window onto the local balance between oxygen arriving and
> oxygen being used, the muscle's bank account read through the skin.
> Falling means spending beats supply; climbing means supply has caught up.**

The qualifier is part of the spine, not a footnote: it is a *window*, and
what you see through it also depends on the sensor's setup, the tissue in the
light path, and whether today is comparable to yesterday. The trace becomes
actionable only when setup, workload and comparison conditions are
controlled, which is why placement (module 3) and the personal baseline
(module 4) are foundations of the paid arc rather than housekeeping.

The hybrid-car story from the DARK page stays consistent: battery = W', gas
engine = aerobic supply, SmO2 = the gauge on how hard the engine room is
being drained.

House differentiator, stated honestly: **"Feel gives you one signal. The
curve gives you another. Good decisions come from knowing when to trust each
one."**

**Multi-signal stance (Fred, binding):** the course approaches NIRS the way
the lab does, as one instrument in an assessment stack beside breath-by-breath
gas exchange (VO2Master), lactate and power/pace. SmO2 is taught as strongest
in company and honest about what it cannot resolve alone; module 7 formalises
this, and the free landing page states it up front.

## 4. Module architecture

Free tier teaches interpretation; paid tier teaches application. The free
pages each deliver a real win but leave the reader asking "how do I apply
this to MY training."

| # | Tier | Module | The one thing it teaches | Lab tie-in |
|---|---|---|---|---|
| 1 | Free | What the sensor sees | SmO2/tHb plainly; what NIRS is NOT | science page |
| 2 | Free | Reading a trace | The four shapes, the three real traces, signal vs artefact | any test report |
| 3 | Paid | Placement, repeatability, signal quality | Site choice, the pinch test, strap pressure failing both directions, marking, the 60-second ritual | extra-NIRS add-on |
| 4 | Paid | Your personal baseline | Three references (settled value, working floor, refill signature), six matched conditions, a repeatable 30-minute baseline session, the log row | VO2max & Zones |
| 5 | Paid | Intervals by reoxygenation | Refill as the honest recovery gauge; rest by readiness, not clock | PRP |
| 6 | Paid | Breakpoints and zones | Finding YOUR breakpoint and anchoring zones to it, with the evidence boundary below | VO2max & Zones |
| 7 | Paid | Limiter case studies | What SmO2 can SUGGEST alone; what requires lactate + VO2 before concluding | Full-Stack |
| 8 | Paid | Routine and season tracking | SmO2 into your files (fit-merge), season tracking, re-test triggers | Grepiac, fit-merge |

Ordering rationale (settled with Sol, round one): trust-building (3, 4) opens
the paid arc before application (5, 6), analysis (7), and routine (8). The
free pair stays interpretation-first because module 2 already carries the
signal-vs-artefact material.

Every module ends the same way: **what you just learned · what decision it
helps you make · one protocol to run · what to record · when NOT to trust the
result.**

### Evidence boundaries (bind the writing, module by module)

- **Module 6 must teach the breakpoint as a candidate threshold, not
  automatically VT1 or VT2.** Published agreement between SmO2 breakpoints
  and ventilatory/lactate thresholds is protocol-, device- and
  population-dependent: Sol's review cites a small mixed cycling/running
  study (n=10) reporting only moderate agreement with systematic
  underestimation (PMC9465744) alongside a 90-elite-cyclist study reporting
  strong agreement with the second lactate threshold under one specific
  device and protocol (PMID 35021246). The module's honest frame: find your
  breakpoint, verify it against feel and performance, and treat lab
  confirmation as the upgrade, which is also the natural VO2max & Zones
  tie-in.
- **Module 7 stays case-study framed.** SmO2 alone cannot reliably separate
  delivery from utilisation; the module teaches what it can suggest and when
  Full-Stack-style multi-signal testing is required before concluding.
- **Modules 3-4 lean on the reliability literature**: adipose thickness and
  measurement conditions materially affect NIRS readings (Sol cites
  PMID 39572450, PMID 11410110), which is exactly why placement and baseline
  are foundational.
- Sitewide rule inherited from the explainer pages: no invented numbers, no
  claims beyond what the lab actually does.

## 5. Format (binding)

The Programs page promises video, worksheets and calculators for every
program. The paid tier meets that bar: short videos (Fred on camera showing
practice; drafts carry placeholder blocks with shot lists until footage
exists), annotated traces, printable protocol cards. Free pages may stay text
plus figures.

## 6. Commercial

Free teaser + paid course (Option A, decided). Distribution: included with
PRP and Full-Stack packages, included in relevant coaching memberships, sold
standalone worldwide. Sensor rental/loaner is a separate lab package, never a
course prerequisite. Payment via Wix link for now; delivery as unlisted
noindex pages, like the explainers. Role: authority product and bridge (free
guide -> paid course -> lab test or coaching -> Grepiac), deliberately not
the mainstream flagship, because sensor ownership is still a narrow audience.

## 7. Open questions for Fred

1. Rental/loaner block pricing and logistics (the plan assumes it exists as a
   separate package; details are Fred's).
2. Anything from coaching scripts or athlete debriefs to fold in verbatim,
   per the swim framework's merge-workspace pattern.
