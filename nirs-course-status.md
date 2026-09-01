# NIRS course — operational status

Page state, URLs, production progress, next actions. Strategy lives in
`nirs-course-framework.md`. Update THIS file as things ship; the framework
should only change when a decision changes.

Canonical copies are in `site/` (git-tracked, pushed to the yousulipages
repo); the repo-root copies are a working mirror kept identical. Review the
site/ history for diffs.

Last updated: 2026-09-01, Sol round six. Module 7's four corrections applied
(case 1 no longer contradicts module 3's attenuation teaching; the warm-up
verdict is no longer binary; case 3 describes only what was observed instead
of importing module 5's old overclaim; exploratory hypotheses are legitimate
but must be tested prospectively on new data; "only way to answer" softened
to complementary signals improving confidence). Module 8's refill series
demoted from preferred season metric to a conditional experimental series
alongside repeat output and feel, plus the seven smaller certainty-language
fixes. Framework gains explicit propagation clauses (the module-5 and
meaningful-change boundaries bind module 8's season tracking).
**All eight modules are drafted**; the paid arc
(3-8) is complete and behind auth, awaiting Fred's full course review plus
Sol and Fable passes on modules 7-8. Previously: Sol round five. The round-four status claim about
the 2025 citations was WRONG: two framework patches had silently no-opped
(replace without assert) while the status doc claimed them done. Root cause
fixed (all doc patches now assert) and the citations, module-5 evidence
boundary, module-6 row and audience wording are now verifiably in the
framework. Round five also applied: module 5's full evidence pass
(experimental cue framing throughout, not just in the callout), module 6's
protocol honesty block (coaching convention, candidate upper anchor, not
validated VT1/VT2/LT/CP), modules 3-4 soft-language fixes, meaningful-change
teaching, and the ops-details scrub from this public doc.

## Page state

| # | Module | State | URL (new.yousuli.co) |
|---|---|---|---|
| — | Landing / sales page | Public | `/nirs-course` |
| 1 | What the sensor sees | Public, free | `/nirs-course/what-the-sensor-sees` |
| 2 | Reading a trace | Public, free | `/nirs-course/reading-a-trace` |
| 3 | Placement, repeatability, signal quality | Private draft | `/nirs-course/placement` |
| 4 | Your personal baseline | Private draft | `/nirs-course/personal-baseline` |
| 5 | Intervals by reoxygenation | Private draft | `/nirs-course/intervals-by-reoxygenation` |
| 6 | Breakpoints and zones | Private draft | `/nirs-course/breakpoints-and-zones` |
| 7 | Limiter case studies | Private draft | `/nirs-course/limiter-case-studies` |
| 8 | Routine and season tracking | Private draft | `/nirs-course/routine-and-season` |

Private = three layers: page-level noindex (survives the beta cutover; paid
content stays out of search permanently), not linked from the landing page
(which shows modules 3-8 as "In build"), and HTTP basic auth at the proxy,
because noindex controls indexing, not access. Credentials are stored outside
git; retrieval and proxy configuration live in the private ops runbook, not
in this public document. The auth matcher covers all six draft paths (3-8); extend only if new private pages are added.

## Video production (Fred on camera)

Placeholder blocks in the drafts carry shot lists and private notes-to-self;
each is swapped for a real player when footage exists. Recorded so far: none.
Outstanding shot lists (twelve):

| Module | Video | Core of the take |
|---|---|---|
| 3 | Finding the vastus lateralis | Landmarking, belly vs IT band, the two common mistakes |
| 3 | Strap tension: wrong, wrong, right | Three live traces side by side; the money shot for the module |
| 3 | The 60-second ritual, real time | One unbroken take, filmed before a real session |
| 4 | The baseline session, ridden | The 30-minute protocol with the three references pointed out live |
| 4 | Two sessions side by side | One meaningful comparison, one deliberately meaningless one |
| 5 | A refill-gated session, ridden | Calling reps off the refill knee instead of the timer; note-to-self: film on a day the drift actually shows, do not fake it |
| 5 | Two sets, two goals | Quality set with level tops vs fatigue-tolerance set with deliberate drift; reuse both traces as module 7 case material |
| 6 | The step ramp, ridden | Settling vs refusing steps named live; Fred's real breakpoint stays in even if unflattering |
| 6 | Two ramps and a verdict | Repeatability side-by-side, laid against existing power zones, closing on a real lab chart (permissioned data only, never mock) |
| 7 | Reading two real sets, out loud | REUSES module 5's two traces: for each, what it suggests then two alternatives, ending on the next test. Note-to-self: say "I do not know yet" at least once and mean it |
| 8 | The whole workflow, end to end | Ritual, key session, FIT merge, log row, under four minutes and deliberately boring |
| 8 | A season, in one screen | A real log across a block: one material change, one inside-the-noise change, including a period where numbers went nowhere and training was still correct |

## Review state

- Fred: full course review pending, now that all eight exist.
- Modules 7-8: written, not yet reviewed by Sol or Fable. Module 7 is the one
  to check hardest: it makes inferential claims about causes, under the
  framework's boundary that SmO2 cannot separate delivery from utilisation.
- Sol: round one applied (positioning, order, baseline module, limiter
  reframe, softened stance). Round two applied (drift fixed by clean rewrite,
  framework/status split, spine qualifier, audience declaration, module 6
  evidence boundary). Round three applied: module 5 evidence pass (plateau =
  trace levelled, not muscle proven full; refill framed as useful-but-noisy
  cue with a conspicuous uncertainty callout; "resistance" renamed
  "fatigue-tolerance"), module 2's zones line carries the candidate-threshold
  caveat now, module 3 fold wording made optically honest, module 4
  single-trace claim reconciled with the free tier and the once/twice
  contradiction fixed, refresh cadence labelled a coaching convention, and
  draft pages moved behind real access control (basic auth), since noindex
  controls indexing, not access. Round four applied: see Last updated line.
  For Sol's protected-prose review WITHOUT the credential entering chat, the
  authenticated HTML of all six draft modules (3-8) is exported to
  `../nirs-review-export/` (repo root, NOT in site/, so it is never pushed to
  the public pages repo); Fred hands those files to Sol directly and can
  delete the folder afterwards.

## Release definition (per module, before paid beta)

1. Evidence pass done (claims within the framework's boundaries).
2. Editorial pass done (Fred's voice, guardrails clean).
3. Videos recorded and placeholders swapped; "Note to self" blocks removed.
4. Protocol card / worksheet exists (Programs-page format bar).
5. Access control verified for the tier it ships in.
6. Fred sign-off.

## Next actions

1. Sol and Fable review modules 7-8, then Fred's complete course review.
2. Editorial consistency pass across all eight now that the arc exists: check
   the module-ending template, the may/can language, and that no module
   promises what a later one walks back.
3. Fred records the twelve outstanding videos; placeholders swapped as footage
   lands.
4. Payment link + bundling once the paid arc is complete enough to sell.
