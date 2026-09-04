# Heat course framework (strategy and evidence boundaries)

Working title: **Heat Training: Measure, Adapt, Perform**
Slug: `/heat-course/` on new.yousuli.co (private drafts behind the same basic
auth as the NIRS drafts until release).

This is the strategy document. It exists so that every scientific boundary is
agreed BEFORE a sentence of course copy is written, which is the lesson of the
NIRS course: Sol's rounds three to six there were spent retrofitting evidence
boundaries onto prose that already existed. Here the review order is inverted.
**Sol reviews this document first. Modules are written only after it stands.**

Operational state (page URLs, video shot lists, review rounds) lives in
`heat-course-status.md`. Nothing operational belongs here.

Written 2026-09-04 from Sol's outline of the same day and Fred's three
decisions, recorded in section 2. Same evening Fred chose to build and test
in parallel rather than wait for review: modules are drafted, and he runs
each module's protocol on himself with his own CORE sensor as it is
written. Sol reviews framework and drafts together; the order below still
governs what a module may claim.

---

## 1. Positioning

Heat affects more than pace and power: cardiovascular strain, sweat loss,
perceived effort, recovery cost, and the amount of work an athlete can
sustain. The course teaches coaches and athletes to **make heat-training
decisions**, not to read a CORE dashboard. The unit of value is a decision
the reader could not make confidently before: which modality, how much, how
often, what to protect, when to stop, and what to change on race day.

The stance is the NIRS course's stance transplanted: the CORE sensor is one
instrument in an assessment stack, strongest in company with heart rate,
output, environment, perception and recovery, and honest about what it
cannot resolve alone. The no-sensor path is not a lesser version of the
same protocol. It is a **more conservative protocol with wider safety
margins**, because subjective feedback cannot estimate core temperature and
the course never pretends otherwise.

The goal, stated in the course's own words, is not to tolerate the most
extreme session possible. It is to create enough repeatable heat strain to
stimulate adaptation without damaging training quality, recovery or health.

## 2. Decisions recorded (Fred, 2026-09-04)

1. **"Training modality" means how to train by heat.** The practical
   mechanics of raising core temperature and keeping it there: intensity
   and duration that actually elevate core (Fred's convention: Z2 to Z3 for
   30 to 45 minutes in a hot environment, or on the bike with a windproof
   jacket on), why feeling hot is not enough (skin temperature reacts much
   faster than core; the heat has to stay for a while), and why after that
   even Z1 is enough to maintain it. Then the protocol dimensions: how
   often, how much, how frequent. And the ways: windcutter on the bike, a
   basement or closed room, what runners do, whether high intensity is
   suitable. This becomes module 4 and is the module Sol's outline was
   thinnest on.
2. **Coach depth first and foremost.** The athlete view is an added bonus,
   delivered structurally (section 5), not by thinning the material.
3. **Free for the UCLA roster, paid for everyone else.** This overrides the
   roster's default perk of 50 percent off paid courses. Mechanism is an
   open question in the status doc, alongside the NIRS paid-access
   mechanism; the two should be solved once.

## 3. Audience and access

- **Primary reader: a coach**, or a self-coached athlete who thinks like
  one. Depth is the product.
- **Secondary reader: a roster athlete** (UCLA is the model), who needs a
  safe, complete protocol in fifteen minutes. Served by the athlete cards
  in section 5.
- **Free and public: module 1** (heat as training load, and the stop
  rules). Safety is free regardless of who pays; the sentence "central
  nervous system dysfunction is an emergency no matter what the wearable
  displays" is never behind a paywall.
- **Paid: modules 2 to 8.** Payment through the main site for now, as
  with the NIRS course. UCLA roster access free.

## 4. Format and what is reused

Same shape as the NIRS course, because it worked and the infrastructure is
already paid for:

- Eight modules, each 1,200 to 1,600 words of reading plus short videos
  Fred records himself, with `VideoSlot` placeholders and shot notes until
  then. Total around 11,000 to 12,000 words, not the five to six hours of
  Sol's outline. Depth comes from precision, not length.
- Reused as-is: the `nc-*` scoped CSS, `VideoSlot`, the `Case` component
  (repurposed as the two-path card, section 6), the module-end `endcard`
  template (what you learned, what decision it helps, one protocol, what
  to record, when not to trust the result), the Caddy auth matcher pattern
  for private drafts, and the authenticated review-export pipeline.
- Per-module release definition, house rules (no em-dashes in body copy,
  no TrainingPeaks trademarks, no invented numbers or mock data) all carry
  over. **The no-mock-data rule is stricter here than anywhere else in the
  catalogue: a faked core-temperature trace is a safety problem, not just
  a credibility one.** Every CORE chart in a video is Fred's own or
  permissioned real data.
- Downloads are trimmed from Sol's fourteen to five: a no-sensor session
  card, the heat-response test sheet, the stop-rule card, the 14-day
  concentrated plan, and the race heat-plan template. The sweat-rate
  calculator already exists on yousuli.co (`calculator-sweat-rate.html`)
  and is linked, not rebuilt. Everything else folds into the module pages.

## 5. The athlete track (the "added bonus", done structurally)

Every module opens with an **athlete card**: three to five lines saying
what to do, in the module's own terms, before the depth begins. The eight
cards together are a complete, safe, conservative protocol. A single page,
`/heat-course/athlete-path`, aggregates the eight cards with links into the
depth, and is what the UCLA page links to. The cards are written last, after
the depth is reviewed, so they inherit the boundaries rather than
paraphrasing them loosely.

## 6. The two-path template

Every practical lesson teaches the principle once, then presents a two-path
card (the NIRS `Case` component, relabelled):

- **Measured path:** CORE core and skin temperature, heart rate, power or
  pace, environmental data, structured testing.
- **Accessible path:** session duration, fixed workload, thermal sensation,
  RPE, symptoms, weather, and repeatable field observations.

Each card ends with the same honesty line: what the accessible path cannot
know, and the wider margin it therefore keeps. The standard session record
carries both columns:

| Variable | Measured | Accessible |
|---|---|---|
| Environment | Temperature, humidity, airflow, sun | Same |
| External work | Power, pace or fixed workload | Same |
| Cardiovascular strain | Heart rate and drift | Same, when available |
| Thermal strain | Core, skin temperature, rate of rise, time above threshold | Thermal sensation scale only |
| Perception | Exercise RPE and thermal comfort | Same |
| Fluid loss | Pre and post body mass, intake | Same |
| Recovery | Sleep, fatigue, next-day quality | Same |

## 7. Evidence discipline: four labels, applied per claim

Sol's three categories, plus one the NIRS course taught us to name:

- **Well supported.** Improved tolerance and performance preparation for
  hot conditions; the classic adaptations; the exercise-heat exposure
  model; the safety signs.
- **Conditional or emerging.** Temperate-condition performance gains,
  haemoglobin mass, VO2max effects, passive-heating efficacy, long-term
  adaptation, permissive dehydration protocols.
- **Manufacturer-specific.** CORE Heat Zones, Heat Strain Index, Heat
  Training Load, Heat Adaptation Score, the 45 to 80 minutes in Zone 3
  across 10 to 14 sessions dosing, the 2.5 percent per day decay figure.
  Useful operational protocol, never presented as physiological law, and
  date-stamped because firmware renames things.
- **Yousuli coaching convention.** Fred's practices, labelled as such and
  where possible tested against his own CORE data in the videos: Z2 to Z3
  for 30 to 45 minutes to raise core, Z1 to hold it, feeling hot is not
  enough, the windcutter method, the basement setup.

Copy uses the label words in the text ("a well-supported adaptation", "a
manufacturer figure", "my coaching convention") the way the NIRS course
says "candidate" and "material shift". No claim enters a module without a
label in this document first.

### Verified citations (all resolved 2026-09-04)

| Key | Reference | Used for |
|---|---|---|
| Racinais 2015 | Racinais S et al. Consensus Recommendations on Training and Competing in the Heat. Sports Med 2015 Jul. PMC4473280 | Adaptation model, timelines, protocols, hydration, competition |
| IOC 2023 | Racinais S et al. IOC consensus statement on recommendations and regulations for sport events in the heat. Br J Sports Med 2023;57(1):8. DOI 10.1136/bjsports-2022-105942 | Race-day: monitoring, cooling, hydration, clothing, warm-up |
| Verdel 2021 | Verdel N et al. Reliability and Validity of the CORE Sensor to Assess Core Body Temperature during Cycling Exercise. Sensors 2021 Sep. PMC8434645 | CORE accuracy boundary |
| Solomon 2025 | Solomon TPJ, Laye MJ. The effect of post-exercise heat exposure (passive heat acclimation) on endurance exercise performance: systematic review and meta-analysis. BMC Sports Sci Med Rehabil 2025;17:4 | Passive heating: low to very low certainty |
| Casa 2015 | Casa DJ et al. NATA Position Statement: Exertional Heat Illnesses. J Athl Train 2015 Sep. PMC4639891 | Safety, stop signs, wearables not diagnostic |
| CORE help | CORE, "Basics of Heat Training", help.corebodytemp.com, article 34303219166610 (updated ~2026-05) | Manufacturer protocol and metric definitions, quoted as such |

Additional claims flagged for Sol to source or strike during framework
review (not yet cited, so not yet usable in copy): the luteal-phase core
temperature offset; the isothermic "controlled hyperthermia" protocol
targeting roughly 38.5 C for about 60 minutes as the research model behind
CORE's Zone 3; re-induction being faster than induction; water's thermal
conductivity relative to air for the swim exception.

## 8. Modules

Order is deliberate: safety before measurement, measurement before
assessment, assessment before prescription, prescription before
integration, integration before racing.

### Module 1: Heat as training load, and the stop rules (free, public)

Purpose: separate adaptation from suffering, and put the emergency
information where everyone sees it.

Content: environmental heat versus internal heat strain; production versus
dissipation; core, skin, humidity and evaporation; why heart rate rises
while output falls; acute response versus chronic adaptation; adaptation,
acclimation, acclimatisation; what heat training can and cannot improve.
The classic adaptation list (earlier sweating, greater sweat capacity,
improved skin blood flow, plasma-volume expansion, reduced cardiovascular
strain, lower perceived effort at a given workload) labelled **well
supported** (Racinais 2015). The exercise-heat exposure model over roughly
one to two weeks labelled **well supported** as the conventional model.

**Safety, in full, here and not in module 8:** risk screening;
medications and conditions affecting thermoregulation; illness, fever,
sleep loss, recent alcohol; training alone versus supervised; progressive
familiarisation; the stop signs (confusion, altered behaviour, loss of
coordination, faintness, severe headache, vomiting, chills, cessation of
sweating in severe heat); emergency response and cooling; and why a
wearable cannot rule out exertional heat illness (Casa 2015).

Boundary: claims about temperate performance, VO2max or haemoglobin mass
are **conditional**; the course says so in this module, once, and never
lets a later module upgrade them.

### Module 2: Measuring heat strain

Purpose: what each measurement says, what it does not, how they interact.
**All CORE vocabulary lives in this module and nowhere else**, date-stamped,
so the other seven modules teach in physiology terms (core temperature,
rate of rise, time above a threshold) and survive a firmware rename.

Measured path: how the wearable estimates core temperature; core versus
skin; HSI, Heat Zones, time in Zone 3, rate of rise, Heat Training Load,
Heat Adaptation Score (all **manufacturer-specific**); comparing sessions
rather than judging isolated numbers; placement, connection, recording
errors; conditions under which the estimate is less dependable. Accuracy
boundary (Verdel 2021): a useful field-estimation and trending device, not
interchangeable with rectal or ingestible measurement under every
condition; validity varies with activity, airflow and environment.

Accessible path: temperature, humidity, sun, airflow, and why temperature
alone is inadequate; heart-rate drift at fixed output; output loss at
comparable effort; exercise RPE versus thermal sensation; sweat onset and
rate (link the existing sweat-rate calculator); body-mass change; recovery
and next-day quality; **why subjective comfort is not proof of a safe core
temperature.** Fred's convention, labelled: skin reacts faster than core,
so feeling hot early in a session is skin, not core.

### Module 3: Assess before prescribing

Purpose: the Yousuli "stop guessing" habit applied to heat. Screening and
contraindications; the actual reason for heat training (hot-race
preparation versus general performance, the first well supported, the
second conditional); the standardised heat-response test; sweat rate and
fluid loss; interpreting drift and deterioration; individual stop rules;
the post-block retest.

**The Yousuli heat-response test** (a coaching convention, labelled as
such; not a validated instrument): standardise hydration, food, caffeine
and recent training; body mass before; fixed power or pace for 45 to 60
minutes under recorded conditions; heart rate, output, RPE and thermal
sensation at intervals; with CORE, start temperature, rate of rise, time
above threshold; fluid consumed and body mass after; repeat under
comparable conditions after the block.

Boundary carried from module 4 of the NIRS course: a single lower peak
temperature is not proof of adaptation. Weather, airflow, hydration or
workload explain it equally well. Adaptation is a **pattern** across
lower heart rate at the same output, less deterioration, lower RPE and
thermal discomfort, altered sweat onset, slower rise, and tolerance
without impaired recovery. Material change under matched conditions,
never single points.

### Module 4: How to train by heat (Fred's modality module)

Purpose: the mechanics. This is the module Sol's outline gestured at and
Fred's decision fills.

- **Getting core up.** Fred's convention, tested against his own CORE
  data on camera: Z2 to Z3 for 30 to 45 minutes in a hot environment, or
  with a windproof jacket on the bike, raises core; feeling hot is not
  enough because skin leads core; the heat has to stay for a while.
- **Keeping it there.** After core is up, Z1 is enough to maintain it, so
  the session structure is a raise phase and a hold phase, not forty
  minutes of grinding.
- **The ways.** Outdoor in race-like heat (specific, uncontrolled);
  indoor trainer without a fan or in a closed room, the basement question
  answered concretely; overdressing (windcutter) in temperate conditions,
  with the caveat that clothing makes uneven microclimates; what runners
  do (overdress versus hot-hour timing, and the higher mechanical and
  thermal load of running); post-exercise sauna and hot-water immersion
  (**conditional**, Solomon 2025: low to very low certainty on performance,
  and the safety section applies with force to unsupervised immersion);
  combined active and passive; natural acclimatisation at the venue.
- **Is high intensity suitable?** Generally no: heat impairs high-intensity
  output (**well supported**), quality suffers, and risk rises. Heat goes
  on easy days, after easy endurance work. Threshold or VO2 work while
  deliberately preventing cooling is named as a mistake here and again in
  module 8.
- **The swim exception.** Water transfers heat far more effectively than
  air, so pool and open-water temperature get their own treatment (source
  to be confirmed in review, see section 7).

### Module 5: Protocols, how often, how much, how frequent

Purpose: several protocols, not one prescription.

- A, concentrated race preparation: 10 to 14 exposures, daily or alternate
  days, main adaptation over roughly two weeks, controlled low to moderate
  intensity, quality protected, reduced exposure before racing.
- B, distributed: two to three sessions a week for four to six weeks, for
  athletes with demanding programmes or constrained recovery.
- C, maintenance: one to three exposures a week, adjusted to race timing,
  environment and loss of adaptation.
- D, last-minute: harm reduction for fewer than 10 to 14 days; modest
  exposure, emphasis on pacing, cooling, hydration and realistic
  expectations. This is the UCLA Nationals case.

Measured path controls time above threshold, rate of rise, core and skin
trends, output and drift, recovery between exposures. Accessible path
controls duration, intensity, exposure, thermal sensation, RPE, symptoms,
drift where available, recovery response, with a **conservative progression
toward roughly 60-minute exposures** rather than any attempt to reproduce
a guessed internal threshold.

Decay and re-induction: adaptations decay over weeks and are regained
faster than first induced (**well supported** in outline, exact figures
for Sol to confirm); CORE's 2.5 percent per day is a **manufacturer
figure** and quoted as one.

### Module 6: Fitting heat into real training

Purpose: possibly the most important module. Heat is additional load even
at low power; something must come out when heat goes in; protect VO2max,
threshold and technical sessions; quality first, heat second; active
versus passive on recovery days; strength and heat; fuelling and
carbohydrate availability; **hydration without deliberately chasing
dehydration** (permissive-dehydration research exists and is
**conditional**; the course position for this audience is no fluid
restriction); sleep and recovery monitoring; masters, newer and
high-volume athletes; heat with altitude, illness, travel or fatigue.

The line the module is built on: heat should modify the training plan,
not be added on top of it.

Cross-course note, one paragraph: heat redistributes blood flow to the
skin, which is the tissue a muscle-oxygen sensor reads through. Anyone
using NIRS in a heat session should treat the trace as confounded and read
module 3 of the NIRS course before comparing it to anything.

### Module 7: Racing hot

Purpose: from adaptation to a race plan. **Cooling strategies during the
race carry explicit weight here (Fred, 2026-09-04)**: pre-cooling before
the start, per-cooling during (ice, cold fluids, water on skin, shade and
airflow where the course offers them), when cooling beats drinking more,
and how to read a day that turns out hotter than forecast. Event heat
profile by segment; translating the heat-response test into realistic race
output; heart-rate and RPE caps; clothing and equipment;
aid-station strategy; fluid and sodium planning (linking the UCLA page's
sprint-format fuelling position); when cooling matters more than drinking
more; heat-specific warm-up; travel and final acclimatisation; race-day
decision rules. Framed by IOC 2023: acclimation combined with
environmental monitoring, hydration, cooling, clothing and warm-up
adjustment, never acclimation as the whole answer.

### Module 8: Mistakes and case studies

Mistakes, each traced back to the module that prevents it: chasing the
highest core temperature; treating discomfort as effectiveness; quality
work without cooling; starting at full protocol; adding heat without
reducing load; heart rate as an intensity target in severe heat; fluid
restriction; comparing unmatched sessions; trusting one reading; treating
a wearable as diagnostic; assuming sauna, baths and active heat are
interchangeable; testing new strategy before a race; ignoring next-day
fatigue; copying an elite protocol.

Case studies, in the module 7 NIRS format (what you saw, what it suggests,
what else explains it, the next step), and **the UCLA Nationals case
leads**: athletes arriving in Gulfport from Los Angeles a few days before
an April race in humidity. Then: 70.3 athlete preparing for extreme heat
(measured path); marathoner without a sensor (accessible path);
high-volume cyclist whose quality collapses; masters athlete on the
distributed protocol; the failed protocol (overdresses every session,
chases temperature, dehydrates, loses quality). Real, permissioned or
Fred's own data only; where none exists, the case is described, never
charted.

## 9. Videos and tests

Fred on camera, same production discipline as the NIRS course, with one
difference: the slots are labelled "Test to run and film" because each one
is a protocol Fred runs on himself with his own CORE sensor while the
module is written, and the module changes where his data disagrees with
it. Provisional slot list, finalised in the status doc: the stop signs said out loud
(module 1); CORE setup and a session where skin runs ahead of core (module
2); the heat-response test ridden (module 3); the windcutter session with
live core trace, the basement setup, and a runner's version (module 4);
one protocol week on screen (module 5); a real training week with heat
subtracted from somewhere (module 6); a race heat plan built from a test
(module 7); the UCLA Nationals case talked through (module 8). Fred's own
CORE data, generated as the course is built, is the primary source.

## 10. What this course is not

Not a medical resource, and it says so at the start of module 1. Not an
altitude-alternative pitch: the haemoglobin-mass story stays conditional.
Not a CORE manual: manufacturer content is quoted and dated, not taught as
physiology. Not a promise about cool-weather performance.

## 11. Open questions for Sol's framework review

1. Source or strike the four unsourced claims in section 7.
2. Is the athlete-card structure (section 5) enough to serve the roster
   audience, or does the UCLA use case need a dedicated short module?
3. Does module 4's coaching-convention content need a caveat that Fred's
   Z2 to Z3 timing is his own response, and that the reader's raise phase
   may differ, before the videos exist to show it?
4. Should permissive dehydration be mentioned at all for this audience, or
   is naming it an invitation?
5. Any well-supported claim in the outline that the labels above have
   mis-filed.
