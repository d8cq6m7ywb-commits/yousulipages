# Heat course status (operational)

Strategy and evidence boundaries live in `heat-course-framework.md`. This
file is the operational state: what exists, where, in what review state,
and what happens next. Credentials are stored outside git.

Last updated: 2026-09-04, evening. Fred chose to build from the ground up
and test as we go rather than wait for Sol's framework review, so the
landing page and modules 1 to 4 now exist as private drafts (Sol can review
framework and drafts together). Fred runs every protocol on himself with
his own CORE sensor as each module is written; the video slots are labelled
"Test to run and film" and double as his test plan. Cooling strategies
during races get explicit weight in module 7 (framework updated).

## Page state

| Module | Title | State | URL |
|---|---|---|---|
| 1 | What heat does, and the stop rules (free at release) | Private draft | `/heat-course/what-heat-does` |
| 2 | Measuring heat strain | Private draft | `/heat-course/measuring-heat-strain` |
| 3 | Assess before prescribing (heat-response test) | Private draft | `/heat-course/heat-response-test` |
| 4 | How to train by heat | Private draft | `/heat-course/how-to-train-by-heat` |
| 5 | Protocols | Not started | `/heat-course/protocols` (proposed) |
| 6 | Fitting heat into real training | Not started | `/heat-course/heat-and-your-training` (proposed) |
| 7 | Racing hot | Not started | `/heat-course/racing-hot` (proposed) |
| 8 | Mistakes and case studies | Not started | `/heat-course/mistakes-and-cases` (proposed) |
| athlete path | The eight athlete cards on one page | Not started | `/heat-course/athlete-path` (proposed) |

Landing page: private draft at `/heat-course`. The whole `/heat-course*`
path is behind the drafts basic auth (same matcher as the NIRS drafts,
extended 2026-09-04); module 1 and the landing come out from behind it at
release.

## Access model

- Module 1 public. Modules 2 to 8 paid, payment through the main site for
  now, same as NIRS.
- **UCLA roster free.** Overrides the roster's default 50 percent course
  discount for this course only. Mechanism open, and it is the same open
  question as NIRS paid access: solve once, apply to both. Candidates: a
  second basic-auth realm for roster members, a signed link from the UCLA
  page, or a Payload-gated route. Decide after Fred's framework sign-off.

## Data and video prerequisites

- Every core-temperature trace shown must be Fred's own or permissioned
  real data. Fred's plan: run each module's protocol on himself with his
  CORE as the course is written, filming as he goes. The "Test to run and
  film" slots in each module are the test plan. Order: module 3's test
  (before), then module 4's windcutter / basement / runner sessions, then
  the module 5 block, then module 3's retest.
- Sweat-rate calculator exists at `/sweat-rate-calculator` on the new site
  and is linked from modules 2 and 3.

## Review state

- Framework: drafted 2026-09-04, awaiting Sol's review (five open
  questions listed at the end of the framework).
- Fred: to confirm the framework reflects his three decisions and his
  coaching conventions as he practises them, especially module 4.

## Video and test slots (Fred, with his own CORE)

| Module | Slot |
|---|---|
| 1 | The stop signs, said out loud (under three minutes, no music) |
| 2 | A session where skin runs ahead of core (both traces from minute zero) |
| 3 | The heat-response test, ridden on camera, BEFORE the block; retest filmed later becomes the closing comparison |
| 4 | The windcutter session, live core on screen (including a deliberate unzip) |
| 4 | The basement version and the runner's version (two separate days) |

## Next actions

1. Fred reads modules 1 to 4 and runs the first tests (module 3 before-test,
   module 4 sessions); the writing changes where his data disagrees.
2. Sol reviews the framework and the four drafts together.
3. Modules 5 to 8 (protocols, integration, racing hot with cooling
   strategies, mistakes and cases) once the first tests inform protocols.
4. Athlete-path page last, after module review.
5. Decide the roster-free / paid-access mechanism jointly with NIRS.
