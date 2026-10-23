# Stryd course: operational status

Page state, URLs, shot lists, review state, next actions. Strategy lives in
`stryd-course-framework.md`. Update THIS file as things ship; the framework
should only change when a decision changes, and both copies of it get the same
edit.

Canonical copies are in `site/` (git-tracked, pushed to the yousulipages
repo); the repo-root copies are a working mirror kept identical. This file is
public by virtue of that repo, so it carries no operational detail: no server
addresses, no ssh targets, no credential paths. Credentials are stored outside
git and the proxy configuration lives in the private ops runbook.

Last updated: 2026-10-23. All six pages built from Fable's framework skeleton
in one pass (Opus 5). Nothing reviewed yet: every page is a draft and carries
page-level noindex, including the landing page and the two intended-free
modules, and the landing page is not linked from the site nav. Modules 3 to 5
are additionally behind the same basic auth as the NIRS and strength drafts.
Awaiting Fred's full review, which is the first gate for everything below.

## Page state

| # | Module | Intended tier | State | URL (new.yousuli.co) |
|---|---|---|---|---|
| . | Landing / sales page | Public | Draft, noindex, unlinked from nav | `/stryd-course` |
| 1 | What the pod actually measures | Free | Draft, noindex | `/stryd-course/what-the-pod-measures` |
| 2 | Install and set up: Garmin and Coros | Free | Draft, noindex | `/stryd-course/setup-garmin-and-coros` |
| 3 | The track check | Paid | Private draft, noindex plus auth | `/stryd-course/the-track-check` |
| 4 | Reading the data | Paid | Private draft, noindex plus auth | `/stryd-course/reading-the-data` |
| 5 | Best uses and limitations | Paid | Private draft, noindex plus auth | `/stryd-course/best-uses-and-limits` |

Private = three layers: page-level noindex (stays on permanently for paid
content), not linked from the landing page (which shows modules 3 to 5 as "In
build"), and HTTP basic auth at the proxy, because noindex controls indexing
and not access. The auth matcher covers exactly the three paid paths; extend it
only if new private pages are added. Credentials are stored outside git.

The intended-free pages and the landing page are noindex only because nothing
has been approved. Those three robots blocks come off at approval, not at
launch of the paid tier.

Source files, for anyone editing: `app/(site)/stryd-course/` in the site
application, with scoped styles in `stryd-course.css` under an `sc-` prefix,
modelled on the NIRS course's `nc-` file so the two courses stay visually one
house.

## Evidence position, as built

Recorded here because it is what any future edit has to stay inside, and
because it is the first thing to re-check if Stryd changes its documentation.

- Stryd power is described as a modelled construct throughout: computed from
  inertial data by a proprietary model, defensible on reliability and internal
  consistency, never called a measurement of mechanical work.
- No accuracy figure appears anywhere in the five modules. The only validation
  document Stryd points to is its own white paper, which is a manufacturer
  document, and no peer-reviewed validation study was read during the build.
  The course says so out loud on the landing page and in module 1. A numeric
  claim may only be added together with a citation to a study somebody has
  actually read.
- Garmin and Coros procedures were written against Stryd's own support
  documentation in October 2026, each with a visible source line pointing
  readers at the vendor pages. Where menu paths or model lists vary, the
  module says so instead of guessing, and the Garmin native-power model list is
  deliberately not reproduced because Stryd's own copy of it is stale.
- The track protocol follows Stryd's published method, including their lane
  geometry table and their own position that most users should not run a
  calibration factor. The second test day and the precommitted decision rules
  are labelled as coaching convention rather than vendor instruction.
- Form metrics carry no prescribed target values. The only numeric ranges
  quoted are Stryd's own published typical ranges, labelled as descriptions of
  runners in general and explicitly not targets.
- Critical power is a candidate anchor from the pod's own model, verified
  against races and feel before training is built on it: the same
  candidate-not-verdict framing as the NIRS breakpoint module.
- Cross-brand watt comparisons, comparisons to a watch's own native running
  power, and run-versus-bike comparisons are all named invalid, not merely
  weak.
- Guardrails verified by grep over the built pages: zero em-dashes, zero
  TrainingPeaks trademark terms. Stryd's own documentation mentions that
  platform; the course does not, and does not teach Stryd's own training-load
  screens either, for the same reason.

## Video production (Fred on camera)

Placeholder blocks in the drafts carry shot lists and private notes-to-self;
each is swapped for a real player when footage exists, and the note-to-self
line is deleted at the same time. Recorded so far: none. Outstanding shot
lists (six), which is the five planned shoots plus the hilly-pacing run that
module 5 needed:

| Module | Video | Core of the take |
|---|---|---|
| 1 | The pod in the hand, then on the shoe | What is inside, what is not (no GPS, no force sensor), mounting on two different shoes |
| 2 | Mounting and first pairing, one take | Continuous with the module 1 pod take, so film both in one sitting: clip click audible, app pairing, weight and height, firmware taken on camera, setup note written |
| 2 | Garmin setup, screen capture | Connect IQ install, sensor search, Auto Discover off, the Cal. Factor screen held longer than feels natural, native power off per profile, data screen, every-second recording |
| 2 | Coros setup, screen capture | STRYD not POWER is the money moment; app data page; Distance Setting; deliberately shorter than the Garmin video and says so |
| 3 | The track session, on camera | Wheel verified against a steel rule, the line wheeled, pod on the inside foot, controlled start and stop, feet landing ON the line plus one deliberately wide lap, real result kept even if undramatic, second test day at least glimpsed |
| 4 | Data review, screen capture | Fred's own files only, never mock: pace swinging while power holds on a climb, contact time early versus late reps, a shoe change explaining a form difference, and one "I do not know why" |
| 5 | One hilly run, paced by power | Same number, three paces; the discipline of not chasing pace; an honest imperfect band rather than a clean one |
| 5 | Where I put the pod down | Sitting down, two minutes, four invalid comparisons done properly rather than nine badly |

## Fred's input blocks in the drafts

Two amber input boxes are in the pages and need Fred's own material, not a
writer's:

| Module | Block | What is needed |
|---|---|---|
| 2 | Setup note template as a card | Whether the setup note ships as a printable protocol card in the Programs page format bar, a PDF on the page, or part of coaching onboarding |
| 3 | Numeric thresholds for "small" and "persistent" | After Fred runs the two test days, whether to publish a threshold as an explicit Yousuli coaching convention or leave the decision rules qualitative permanently. Qualitative is a legitimate final answer |
| 5 | Verification routine for a candidate anchor | Fred's actual routine with athletes, written down as a labelled convention: which effort, how long after, what counts as agreement |

## Open questions left for Fred

Carried forward from the framework's section 7, deliberately not decided
during the build:

1. **Free and paid split.** Modules 1 and 2 free as drafted, or module 2 paid
   too? Module 2 is the one with the most practical value per page, so there is
   a real argument either way. Built as free, trivial to flip: it is a robots
   block and a landing-page tier tag.
2. **Stryd's own app ecosystem.** Module 5 currently carries a short honest
   mention of their plans, workout library and membership, with no tutorial and
   a clear "use the tooling, do not mistake it for coaching" position. Confirm
   or cut.
3. **Apple Watch and other platforms.** Out of scope per the brief, and the
   landing page now says so explicitly, with the note that modules 1, 3, 4 and
   5 carry over unchanged and only module 2's menu paths do not. Confirm that
   wording is the line Fred wants to hold.

## Review state

- Fred: full course review pending. Nothing has been read by anyone but the
  writer, which is why all six pages are noindex rather than just the paid
  three.
- No Sol or Fable pass yet. For a protected-prose review without the
  credential entering chat, the NIRS pattern applies: export the authenticated
  HTML of the three private modules to a folder at the repo root, outside
  `site/`, hand the files over, and delete the folder when the review ends.
- Known cross-course finding from the build, not acted on: the NIRS course
  landing page links to a `/contact` route that does not exist in the site
  application. Flagged for Fred rather than fixed, since the NIRS pages were
  out of scope.

## Release definition (per module, before paid beta)

Same gates as the NIRS course, one addition for this one because its content
depends on somebody else's menus.

1. Evidence pass done (claims within the framework's boundaries).
2. Editorial pass done (Fred's voice, guardrails clean).
3. **Vendor-procedure re-check**: the Garmin and Coros steps and the track
   protocol re-read against Stryd's own current support pages, and the dates in
   the page comments updated. This one repeats at every launch and any time a
   watch vendor ships a menu change.
4. Videos recorded and placeholders swapped; "Note to self" blocks removed.
5. Protocol card or worksheet exists (Programs-page format bar), at minimum
   the module 2 setup note.
6. Access control verified for the tier it ships in.
7. Fred sign-off.

## Next actions

1. Fred reads all six pages end to end and answers the three open questions
   above.
2. Fred fills the three input blocks, or decides to leave the module 3 one
   qualitative permanently.
3. Vendor-procedure re-check immediately before any public launch, because the
   setup modules age with somebody else's menus rather than with the content.
4. Record the eight outstanding videos. The module 1 and module 2 mounting
   takes are one sitting; the track session needs a booked quiet hour.
5. Decide the free-tier cutover mechanics and the payment route, which stays on
   the main Wix site for now.

## Cutover checklist (the day the course goes live)

Everything here is correct while the course is unapproved and wrong the moment
it is not. None of it should be done piecemeal.

### At approval of the free tier
- [ ] Remove the `robots` noindex block from the landing page, module 1 and
      module 2, and restore the `openGraph` blocks the page comments mention.
- [ ] Add the landing page to the site nav.
- [ ] Drop "draft" from the module 1 and module 2 eyebrow lines.
- [ ] Re-run the vendor-procedure re-check (release definition item 3).

### At launch of the paid tier
- [ ] Landing page: module rows 3 to 5 say "In build" and the intro says the
      rest are in review. Flip to the real state and link them.
- [ ] Module 2's forward link goes to the course index. Point it at module 3
      (marked with a CUTOVER comment in the source).
- [ ] Module eyebrows say "private draft" on 3 to 5. Remove.
- [ ] Landing page: replace the "want the rest" callout with the actual
      purchase route.
- [ ] Proxy: drop the three stryd paths from the drafts auth matcher, or
      replace it with whatever gates paid access. Page-level noindex on 3 to 5
      stays until the paid-access mechanism is decided, then is revisited on
      purpose.
- [ ] Read all six pages end to end in sequence afterwards, because the free
      pages will then be read alongside the paid ones for the first time.
