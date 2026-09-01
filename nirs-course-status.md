# NIRS course — operational status

Page state, URLs, production progress, next actions. Strategy lives in
`nirs-course-framework.md`. Update THIS file as things ship; the framework
should only change when a decision changes.

Canonical copies are in `site/` (git-tracked, pushed to the yousulipages
repo); the repo-root copies are a working mirror kept identical. Review the
site/ history for diffs.

Last updated: 2026-08-31 (module 5 draft deployed; Sol round three applied).

## Page state

| # | Module | State | URL (new.yousuli.co) |
|---|---|---|---|
| — | Landing / sales page | Public | `/nirs-course` |
| 1 | What the sensor sees | Public, free | `/nirs-course/what-the-sensor-sees` |
| 2 | Reading a trace | Public, free | `/nirs-course/reading-a-trace` |
| 3 | Placement, repeatability, signal quality | Private draft | `/nirs-course/placement` |
| 4 | Your personal baseline | Private draft | `/nirs-course/personal-baseline` |
| 5 | Intervals by reoxygenation | Private draft | `/nirs-course/intervals-by-reoxygenation` |
| 6 | Breakpoints and zones | Not started | — |
| 7 | Limiter case studies | Not started | — |
| 8 | Routine and season tracking | Not started | — |

Private = three layers: page-level noindex (survives the beta cutover; paid
content stays out of search permanently), not linked from the landing page
(which shows modules 3-8 as "In build"), and HTTP basic auth at the proxy,
because noindex controls indexing, not access. Username `fred`; the password
is on the VPS at /root/nirs-drafts-password.txt (never in chat or git):
`ssh root@94.72.125.157 cat /root/nirs-drafts-password.txt`. Extend the
Caddyfile matcher when modules 6-8 gain pages.

## Video production (Fred on camera)

Placeholder blocks in the drafts carry shot lists and private notes-to-self;
each is swapped for a real player when footage exists. Recorded so far: none.
Outstanding shot lists (seven):

| Module | Video | Core of the take |
|---|---|---|
| 3 | Finding the vastus lateralis | Landmarking, belly vs IT band, the two common mistakes |
| 3 | Strap tension: wrong, wrong, right | Three live traces side by side; the money shot for the module |
| 3 | The 60-second ritual, real time | One unbroken take, filmed before a real session |
| 4 | The baseline session, ridden | The 30-minute protocol with the three references pointed out live |
| 4 | Two sessions side by side | One meaningful comparison, one deliberately meaningless one |
| 5 | A refill-gated session, ridden | Calling reps off the refill knee instead of the timer; note-to-self: film on a day the drift actually shows, do not fake it |
| 5 | Two sets, two goals | Quality set with level tops vs resistance set with deliberate drift; reuse both traces as module 7 case material |

## Review state

- Fred: reviewing modules 3-5 online (current round).
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
  controls indexing, not access.

## Release definition (per module, before paid beta)

1. Evidence pass done (claims within the framework's boundaries).
2. Editorial pass done (Fred's voice, guardrails clean).
3. Videos recorded and placeholders swapped; "Note to self" blocks removed.
4. Protocol card / worksheet exists (Programs-page format bar).
5. Access control verified for the tier it ships in.
6. Fred sign-off.

## Next actions

1. Fred + Sol review of modules 3-5 (Fred asked for 5 ahead of the review).
2. Build modules 6-8 (breakpoints and zones carries the evidence boundary
   from the framework; limiter case studies can reuse module 5's two-sets
   traces; routine closes the arc).
3. Fred records the seven outstanding videos; placeholders swapped as footage
   lands.
4. Payment link + bundling once the paid arc is complete enough to sell.
