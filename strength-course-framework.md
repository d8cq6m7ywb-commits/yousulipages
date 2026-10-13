# Strength course framework (strategy and evidence boundaries)

Working title: **Strength for Endurance: Measure, Build, Keep** (name still
open; the July list of candidates is in `strength-course-launch.md`).
Slug: `/strength-course/` on new.yousuli.co (private drafts behind the
drafts basic auth until release).

This is the strategy document, in the course-family format (NIRS, heat).
Every borrowed idea is attributed, every scientific claim carries a label,
and every number that comes from a book is checked against Fred's copy
before it reaches a page. The July 2026 product and launch plan (audience,
pricing, delivery, the ten open questions) is preserved whole in
`strength-course-launch.md` and is not repeated here. Operational state
(pages, tests, review rounds) lives in `strength-course-status.md`.

Codex review applied 2026-10-12 (after Fable's). Accepted: the injury
claim is now stated at its runner-specific size (Wu 2024: no significant
reduction in injury risk or rate across nine trials; supervision helped
post hoc; low quality), and "the direction is not in doubt" is gone; the
measurement promise is "four assessment areas, direct where a device
allows, labelled field proxies elsewhere", with quality 3 renamed
isometric force and holding capacity and explosive force explained as a
separate, unpromised quality; eccentric control kept apart from Caron's
ratio until a paired protocol exists; the RFD rejection narrowed; the RSI
arithmetic corrected; hops described as a different protocol, not a
different formula; 240 fps stated as the course standard; Epley on a set
with reps in reserve called a conservative estimate; load-velocity
predictions given their overestimate (Greig 2023); the screen gained entry
rules, a published order, a sort-based weak-link map with up to two
priorities, defined hold angles, a bilateral wall sit, a twenty-minute
athlete version, and a softened retest standard (familiarisation, repeat
baseline, fixed trial rule, agreement as context). **Fred's decision
(2026-10-12): Yousuli's RSI is one drop, one contact, one bounce on a flat
surface; repeated hops are training, not the test.** The RSI calculator
page's hop wording was corrected to match.

Rendering defect found and fixed the same day: the JSX transform in Next
16 drops the space after an inline tag when the following multi-line text
contains an HTML entity (upstream swc issue #11541; fix in progress). It
affected 14 places on live course pages, one of them public. All HTML
entities in the three courses' pages were converted to literal characters,
and the live scan now shows zero. House rule from here: **no HTML entities
in course JSX; use the characters.** The UCLA, calculator and other ported
pages render from HTML strings and are unaffected.

Fable review applied 2026-10-12. The main finding: module 1 called
high-rep, light-load work a wrong belief while two live Yousuli pages (the
strength intensity guide's phase bands and coach note, and the UCLA page's
anatomical-adaptation and hypertrophy phases) prescribe it. Resolved inside
the course only: a short lighter on-ramp is sensible (module 4), the
mistake is never leaving it, heavier loads did best where compared, and
moderate-rep growth work is not harmful. **The two live pages are
unchanged; whether their emphasis should move toward the course's is
Fred's decision (open question 10).** Lauersen 2014's trial populations
could not be checked (not open access), so the pages no longer name them.

Decision 2026-10-12 (Fred): build and test as we go, modules 1 to 3 first;
reviews by Fable and Codex; Fred supplies the book specifics and his own
input into the FredInput boxes on the draft pages.

Written 2026-10-12 from Fred's brief: a course on strength training for
endurance athletes and triathletes, taking ideas from ForcePhase, Tim
Caron's *Strength Deficit*, Cal Dietz's *Triphasic Training* I and II,
Bryan Mann's *Developing Explosive Athletes*, a biomechanics approach, and
Yousuli's own measurement tools (RSI and the rest).

---

## 1. Positioning

Endurance athletes get strength wrong in two ways, and the July plan named
them: they skip it, or they do cardio in the gym. The evidence says the
opposite of both. **Heavy, low-volume strength work and explosive work
improve running and cycling economy, raise the power an athlete can hold,
and make tendons and bone more durable, without meaningful mass gain when
programmed well** (well supported; section 7). The failure is never the
idea. It is the dose, the exercise choice, and the placement around the
swim, bike and run week, which is exactly where self-coached athletes go
wrong and exactly what a coach can teach.

The spine, carried from July and now measurable:

> Endurance performance is efficiency that survives load. Strength work
> buys an engine that leaks fewer watts (economy) and a chassis that
> survives the season (durability).

What this course adds to that spine, and what no competitor course does:
**it measures the strength qualities it trains**, with Yousuli's own
tools, and it teaches four qualities, not one. Maximal strength, eccentric
strength (the strength deficit), isometric strength and rate of force, and
reactive strength (RSI). The four come from the sources Fred named; the
measurement spine is Yousuli's.

The stance is the family stance: the device (force plate, bar-speed
sensor, contact mat) is one instrument in an assessment stack, and the
athlete without one runs an accessible path that is honest about what it
cannot see. Here the accessible path is unusually strong, because the
calculators already exist and a phone camera measures more in the gym than
it does in a heat session.

## 2. What is borrowed, from whom, and how far it is trusted

This section is the heart of the document. The course takes **frameworks**
from the named sources. It does not reproduce their programs, and it does
not quote a number from a book that has not been checked against the book.
Fred owns the books; I do not. Where a specific (a percentage, a block
length, a protocol) is needed, the module says "from Fred's copy" until
Fred supplies it.

### 2.1 Triphasic Training (Dietz and Peterson, 2012) and Triphasic Training II (Dietz with Nelson, 2024)

**The idea borrowed:** every athletic movement has an eccentric, an
isometric and a concentric component, and each can be trained
deliberately and in sequence rather than left to happen inside a lift.
The original book organises blocks around those three phases; the second
book (273 pages, published 2024-12-13) presents fourteen advanced methods
including the GOAT warm-up, dynamic neurology drills, oscillatory reps and
a Tri Block System for strength, speed and power. Those are the publisher's
and co-author's descriptions; I have not seen the methods themselves.

**How the course uses it:** as the organising logic of the loading
modules. Eccentric emphasis first, because that is where endurance tendons
and the strength deficit live; isometric emphasis second, at the joint
angles the sport actually uses (mid-stance for running, the top of the
pedal stroke for cycling, the catch for swimming); concentric and
explosive emphasis last, where RSI and plyometrics finish the job. Block
lengths, loading ranges and the specific Triphasic II techniques Fred
chooses to teach come from his copies and his practice.

**Label:** coach-authored method, attributed. Mechanisms it leans on are
separately labelled (eccentric adaptations, Douglas 2017; tendon
adaptation, Bohm 2015; isometrics and tendon, Rio 2015). Transfer of the
full Triphasic system to endurance performance has not been studied as
such, and the course says so.

### 2.2 Strength Deficit (Caron, 2022)

Fred wrote "Strength Decific"; the book is **Strength Deficit: Leveraging
Ratios Between Eccentric and Concentric Strength** (Tim Caron, 2022, 215
pages). Its framework: the gap between what an athlete can lower and what
they can lift is a diagnostic, and training can be biased toward eccentric
strength (a large deficit) or concentric strength (a small one) depending
on the goal.

**The science underneath is real and recent:** a 2023 meta-analysis
(Nuzzo 2023) found eccentric strength about 40 percent greater than
concentric strength in vivo on average, with the ratio rising with
movement velocity and varying modestly with sex and age. That is the
physiological fact the book builds on.

**How the course uses it:** the deficit becomes one of the four measured
qualities. For endurance athletes the interesting case is the athlete
whose eccentric strength is poor relative to concentric, because
downhill running, braking, landing and the pedal stroke's recovery phase
are eccentric work, and tendons adapt to high-magnitude loading that
eccentric work supplies. How Caron measures the deficit, and his routing
rules, come from Fred's copy. The course's accessible proxy (a controlled
eccentric-only test such as a single-leg step-down or a tempo-eccentric
capacity test) is a Yousuli convention until Fred confirms it.

**Label:** coach-authored method, attributed; mechanism well supported
(Nuzzo 2023); transfer to endurance performance conditional.

### 2.3 Developing Explosive Athletes (Mann)

Public listings show a third edition (Ultimate Athlete Concepts, 2016, 76
pages); Fred's is the fourth, which I could not find listed. The book is
the practitioner's reference for **velocity-based training**: bar speed
as the live measure of effort, five velocity zones (as commonly quoted
after Mann and others: absolute strength below 0.5 m/s, accelerative
strength 0.5 to 0.75, strength-speed 0.75 to 1.0, speed-strength 1.0 to
1.3, starting strength above 1.3), and velocity loss within a set as the
cue to stop.

**How the course uses it:** autoregulation. Endurance athletes arrive in
the gym fatigued by their sport on days nobody planned, and a fixed
percentage of a 1RM is blind to that. Bar speed sees it. So does a
velocity-loss cutoff: Pareja-Blanco 2017 found that stopping sets at 20
percent velocity loss produced similar strength gains to 40 percent with
less fatigue and better jump performance, which is precisely the trade an
endurance athlete wants. Without a device, the accessible path is the
RPE-based auto-regulation already built into the strength-intensity
calculator, plus "intent": moving the bar as fast as possible on every
concentric even when it moves slowly.

**Label:** zone boundaries are a practitioner convention, quoted as such
and checked against Fred's edition; velocity-loss effects well supported
in trained men (Pareja-Blanco 2017); endurance-specific validation
conditional.

### 2.4 ForcePhase

**Unidentified as of 2026-10-12.** The domain forcephase.com is parked and
for sale; searches return nothing relevant. Nothing from it enters the
course until Fred says what it is (a product, a method, a coach, a
force-plate system?). If it is a force-velocity profiling tool, section
2.5 already covers the science it would rest on. Open question 1.

### 2.5 The biomechanics approach (Fred's own, with the force-velocity literature)

Fred's credential stack (July: personal trainer, endurance coach,
biomechanics specialist, orthopaedic specialist, performance specialist)
is the course's moat, and the biomechanics module is where it shows:
exercises chosen by what the joint and lever system needs for the sport,
not by gym tradition. Ankle stiffness and the Achilles for running economy
(Arampatzis 2006: tendon properties relate to economy); hip and knee
extension at cycling's joint angles; trunk control under fatigue; the
swimmer's shoulder.

The measured version of that approach is **force-velocity profiling**:
from jumps on a force plate (or, with care, flight-time apps), an
athlete's profile shows whether force or velocity is the limiting side,
and training biased toward the deficit improves jump performance more than
generic training does (Samozino 2012; Morin and Samozino 2016;
Jiménez-Reyes 2016). That is the science any force-plate product sells.
The course teaches it as a measured-path option and is honest that the
transfer from jump profile to endurance performance is inferred, not
shown.

**Label:** Fred's exercise-selection logic is a Yousuli coaching
convention; force-velocity profiling for jumps is well supported for jump
outcomes and conditional for endurance transfer.

### 2.6 Yousuli's own tools (the measurement spine)

- **RSI calculator** (`/reactive-strength-index`): drop-jump RSI from
  flight and contact time; bands after Flanagan and Comyns; reliability
  of the drop-jump RSI established (Flanagan 2008). The course's reactive
  strength scoreboard.
- **Strength intensity guide** (`/strength-intensity-guide`): Epley 1RM,
  NSCA phase bands, RPE auto-regulation, 49-exercise library. The
  accessible path's loading tool.
- **Lab**: gait analysis at three tiers, the Pro tier with motion sensors,
  treadmill VO2 and muscle oxygen; RSI measured on a contact mat with
  bilateral and unilateral comparison. The in-person upgrade.
- **Calipers, RMR and macro calculators**: the fuelling-for-strength
  session and the bone and energy-availability content.
- **Capacity tests** from the July screen (single-leg calf raises,
  single-leg squat, side plank, wall sit, dead hang): no device needed.

## 3. Audience and access (from July, with one addition)

Primary: self-coached endurance athletes, 30 to 60, runners, cyclists,
triathletes, time-crunched, often with an injury history. Secondary:
Fred's coached athletes, YSC members, UCLA, Hub users. The "not for you"
filter (bodybuilding goals, unrehabbed acute injury, an existing S&C
coach) stands.

Addition from the course family: coach depth is the product, and every
module opens with an **athlete card** that a roster athlete can act on
without reading the depth. UCLA access is open question 7; the heat
course's roster-free precedent is noted, the July plan's 50-percent perk
is the default.

Free and public: module 1, including the red flags and the pain rules.
Paid: modules 2 to 8. Payment through the main site for now.

## 4. Format and what is reused

Eight modules, 1,200 to 1,600 words each, with videos Fred records and
`VideoSlot` placeholders until then, athlete cards, two-path cards, the
module-end endcard, the drafts auth, the review export. All reused from
the NIRS and heat builds at near-zero setup cost.

The **12-week program plus the in-season layer** from July is not a
separate product here: it is the course's "one protocol to run", spread
across modules 3 to 7, and the 36 written sessions are the program
appendix the course links to. The injury clinics become module 8's cases.

House rules carry over, with the family's data rule in its strength form:
**every test result shown is Fred's own or a permissioned athlete's, and
every number quoted from a book has been checked against the book.**

## 5. The two-path template, strength version

- **Measured path:** force plate or contact mat (RSI, jump height,
  force-velocity profile), bar-speed device (velocity zones, velocity
  loss), lab gait and biomechanics.
- **Accessible path:** the two calculators, a phone camera at 240 fps or
  better for drop jumps, filmed tempo for eccentric control, RPE and reps
  in reserve for autoregulation, the capacity tests.

Each two-path card ends with what the accessible path cannot know and the
margin it keeps. In strength the gap is smaller than in heat: a camera
sees technique, a timer sees contact time, RPE sees fatigue. What it
cannot see is bar velocity within a set and force-time detail, so the
accessible path stops sets earlier (reps in reserve of two or more on
heavy work) and progresses plyometric intensity on RSI bands only, never
on feel.

## 6. The athlete track

Eight athlete cards, written last, aggregated on
`/strength-course/athlete-path`, linked from the UCLA page's strength
section (whose three summer phases map cleanly onto modules 4 to 7).

## 7. Evidence discipline: five labels, applied per claim

- **Well supported.** Heavy and explosive strength training improves
  running and cycling economy and endurance performance in trained
  athletes without mass gain (Rønnestad and Mujika 2014; Beattie 2014;
  Balsalobre-Fernández 2016; Berryman 2018; Blagrove 2018; Eihara 2022;
  Støren 2008; Paavolainen 1999; Spurrs 2003; Saunders 2006; Aagaard
  2011; Vikmoen 2016; Luckin-Baldwin 2021 for triathletes). Interference
  is real but manageable: it was first shown in 1980 (Hickson), is
  moderated by modality, frequency and session design (Wilson 2012; Fyfe
  2014), and the 2022 update finds hypertrophy and maximal strength
  largely compatible with concurrent training, with explosive strength
  the quality most at risk (Schumann 2022, confirmed from the abstract:
  explosive strength SMD -0.28, attenuation clearest in same-session
  training and not significant when sessions were at least 3 h apart).
  Strength training reduced sports injuries to less than a third in a
  meta-analysis of randomised trials, mostly in non-endurance populations
  (Lauersen 2014). Tendons adapt to high-magnitude loading
  over months, not weeks (Bohm 2015). Eccentric training produces
  distinct adaptations (Douglas 2017). The eccentric-to-concentric ratio
  averages about 1.4 (Nuzzo 2023). Drop-jump RSI is reliable (Flanagan
  2008). Maximal strength underpins power and athletic performance
  (Suchomel 2016).
- **Conditional or emerging.** Transfer of force-velocity profiling to
  endurance performance; transfer of Caron's deficit routing and the full
  Triphasic sequence to endurance outcomes; velocity-based training in
  endurance populations specifically; isometrics for tendon pain beyond
  the acute analgesic effect (Rio 2015 is a single-session study); the
  size of RSI gains in adult endurance athletes (Lloyd 2012 is youth;
  Beattie 2017 is the runner study to read closely).
- **Coach-authored method.** Dietz's Triphasic sequence and Triphasic II
  techniques; Caron's strength deficit; Mann's velocity zones. Attributed
  by name every time, specifics from Fred's copies, never presented as
  findings.
- **Device or published-band figure.** RSI category bands; VBT zone
  boundaries; NSCA percentage bands in the calculator; force-plate metric
  definitions. Quoted with their source and dated.
- **Yousuli coaching convention.** Fred's exercise-selection logic, the
  screen, the capacity tests, the eccentric-deficit field proxy, the
  session placement rules, the in-season dose, the taper rules. Labelled
  so the reader can disagree, and tested on Fred and his athletes with
  the measurement spine.

### Verified citations (resolved 2026-10-12 via NCBI)

| Key | Reference | Used for |
|---|---|---|
| Wu 2024 | Wu H et al. Do exercise-based prevention programs reduce injury in endurance runners? A systematic review and meta-analysis. Sports Med 2024. PMID 38261240 | Injury claim, runner-specific size |
| Llanos-Lagos 2024 | Llanos-Lagos C et al. Effect of strength training programs in middle- and long-distance runners' economy at different running speeds: systematic review with meta-analysis. Sports Med 2024. PMID 38165636 | Which method at which speed; isometric and submaximal: no economy gain |
| Greig 2023 | Greig L et al. The predictive validity of individualised load-velocity relationships for predicting 1RM: systematic review and meta-analysis. Sports Med 2023. PMID 37493929 | Load-velocity overestimates 1RM (~3.7 percent) |
| Healy 2016 | Healy R et al. Assessing reactive strength measures in jumping and hopping using the Optojump system. J Hum Kinet 2016. PMID 28031754 | Hops use the same arithmetic; different protocol |
| Stojiljković 2024 | Stojiljković N et al. Validity and reliability of the My Jump 2 app for detecting interlimb asymmetry in young female basketball players. Front Sports Act Living 2024. PMID 38638447 | Phone app versus force plate for drop-jump height and contact time |
| Mountjoy 2023 | Mountjoy M et al. 2023 International Olympic Committee's (IOC) consensus statement on Relative Energy Deficiency in Sport (REDs). Br J Sports Med 2023. PMID 37752011 | Under-fuelling red flag, all athletes |
| Maffiuletti 2016 | Maffiuletti NA et al. Rate of force development: physiological and methodological considerations. Eur J Appl Physiol 2016. PMID 26941023 | RFD hard to measure validly and reliably; trainable by explosive and heavy work |
| Lauersen 2014 | Lauersen JB et al. The effectiveness of exercise interventions to prevent sports injuries: systematic review and meta-analysis of randomised controlled trials. Br J Sports Med 2014. PMID 24100287 | Durability lever, injury reduction |
| Rønnestad 2014 | Rønnestad BR, Mujika I. Optimizing strength training for running and cycling endurance performance: a review. Scand J Med Sci Sports 2014. PMID 23914932 | Core evidence, dose, programming |
| Beattie 2014 | Beattie K et al. The effect of strength training on performance in endurance athletes. Sports Med 2014. PMID 24532151 | Core evidence |
| Balsalobre 2016 | Balsalobre-Fernández C et al. Effects of strength training on running economy in highly trained runners: systematic review with meta-analysis. J Strength Cond Res 2016. PMID 26694507 | Running economy |
| Berryman 2018 | Berryman N et al. Strength training for middle- and long-distance performance: a meta-analysis. Int J Sports Physiol Perform 2018. PMID 28459360 | Performance outcomes |
| Blagrove 2018 | Blagrove RC et al. Effects of strength training on the physiological determinants of middle- and long-distance running performance. Sports Med 2018. PMID 29249083 | Determinants, no mass gain |
| Eihara 2022 | Eihara Y et al. Heavy resistance training versus plyometric training for improving running economy and running time trial performance. Sports Med Open 2022. PMID 36370207 | Heavy versus plyometric |
| Støren 2008 | Støren O et al. Maximal strength training improves running economy in distance runners. Med Sci Sports Exerc 2008. PMID 18460997 | Heavy, low-volume model |
| Paavolainen 1999 | Paavolainen L et al. Explosive-strength training improves 5-km running time by improving running economy and muscle power. J Appl Physiol 1999. PMID 10233114 | Explosive model |
| Spurrs 2003 | Spurrs RW et al. The effect of plyometric training on distance running performance. Eur J Appl Physiol 2003. PMID 12627298 | Plyometrics |
| Saunders 2006 | Saunders PU et al. Short-term plyometric training improves running economy in highly trained runners. J Strength Cond Res 2006. PMID 17149987 | Plyometrics |
| Aagaard 2011 | Aagaard P et al. Effects of resistance training on endurance capacity and muscle fiber composition in young top-level cyclists. Scand J Med Sci Sports 2011. PMID 21362056 | Cycling |
| Vikmoen 2016 | Vikmoen O et al. Strength training improves cycling performance, fractional utilization of VO2max and cycling economy in female cyclists. Scand J Med Sci Sports 2016. PMID 25892654 | Cycling, women |
| Luckin-Baldwin 2021 | Luckin-Baldwin KM et al. Strength training improves exercise economy in triathletes during a simulated triathlon. Int J Sports Physiol Perform 2021. PMID 33571959 | Triathlon |
| Crowley 2017 | Crowley E et al. The impact of resistance training on swimming performance: a systematic review. Sports Med 2017. PMID 28497283 | Swim leg |
| Hickson 1980 | Hickson RC. Interference of strength development by simultaneously training for strength and endurance. Eur J Appl Physiol 1980. PMID 7193134 | Interference, origin |
| Wilson 2012 | Wilson JM et al. Concurrent training: a meta-analysis examining interference of aerobic and resistance exercises. J Strength Cond Res 2012. PMID 22002517 | Interference moderators |
| Fyfe 2014 | Fyfe JJ et al. Interference between concurrent resistance and endurance exercise: molecular bases and the role of individual training variables. Sports Med 2014. PMID 24728927 | Interference mechanisms |
| Schumann 2022 | Schumann M et al. Compatibility of concurrent aerobic and strength training for skeletal muscle size and function: an updated systematic review and meta-analysis. Sports Med 2022. PMID 34757594 | Interference, current view |
| Hughes 2018 | Hughes DC et al. Adaptations to endurance and strength training. Cold Spring Harb Perspect Med 2018. PMID 28490537 | Background physiology |
| Bohm 2015 | Bohm S, Mersmann F, Arampatzis A. Human tendon adaptation in response to mechanical loading: systematic review and meta-analysis. Sports Med Open 2015. PMID 27747846 | Tendon dose |
| Arampatzis 2006 | Arampatzis A et al. Influence of the muscle-tendon unit's mechanical and morphological properties on running economy. J Exp Biol 2006. PMID 16916971 | Tendon and economy |
| Douglas 2017 | Douglas J et al. Chronic adaptations to eccentric training: a systematic review. Sports Med 2017. PMID 27647157 | Eccentric emphasis |
| Nuzzo 2023 | Nuzzo JL et al. The eccentric:concentric strength ratio of human skeletal muscle in vivo: meta-analysis. Sports Med 2023. PMID 37129779 | Strength deficit, the ratio |
| Maroto-Izquierdo 2017 | Maroto-Izquierdo S et al. Skeletal muscle functional and structural adaptations after eccentric overload flywheel resistance training. J Sci Med Sport 2017. PMID 28385560 | Flywheel option |
| Rio 2015 | Rio E et al. Isometric exercise induces analgesia and reduces inhibition in patellar tendinopathy. Br J Sports Med 2015. PMID 25979840 | Isometrics, acute effect only |
| Pareja-Blanco 2017 | Pareja-Blanco F et al. Effects of velocity loss during resistance training on athletic performance, strength gains and muscle adaptations. Scand J Med Sci Sports 2017. PMID 27038416 | Velocity loss cutoff |
| Suchomel 2016 | Suchomel TJ et al. The importance of muscular strength in athletic performance. Sports Med 2016. PMID 26838985 | Why max strength |
| Flanagan 2008 | Flanagan EP et al. Reliability of the reactive strength index and time to stabilization during depth jumps. J Strength Cond Res 2008. PMID 18714215 | RSI reliability |
| Lloyd 2012 | Lloyd RS et al. The effects of 4 weeks of plyometric training on reactive strength index and leg stiffness in male youths. J Strength Cond Res 2012. PMID 22130392 | RSI trainability (youth) |
| Beattie 2017 | Beattie K et al. The effect of strength training on performance indicators in distance runners. J Strength Cond Res 2017. PMID 27135468 | Runners, 40-week study |
| Samozino 2012 | Samozino P et al. Optimal force-velocity profile in ballistic movements. Med Sci Sports Exerc 2012. PMID 21775909 | FV profiling |
| Morin 2016 | Morin JB, Samozino P. Interpreting power-force-velocity profiles for individualized and specific training. Int J Sports Physiol Perform 2016. PMID 26694658 | FV profiling |
| Jiménez-Reyes 2016 | Jiménez-Reyes P et al. Effectiveness of an individualized training based on force-velocity profiling during jumping. Front Physiol 2016. PMID 28119624 | FV-guided training |
| Keogh 2020 | Keogh C et al. Intra-trial reliability and usefulness of isometric mid-thigh pull testing on portable force plates. J Hum Kinet 2020. PMID 32148571 | Isometric testing option |
| Williams 2026 | Williams NI et al. 2025 update to the Female Athlete Triad Coalition consensus statement, part 2: clinical guidelines. Sports Med 2026. PMID 41474492 | Bone and energy availability screening |

Verified but not yet placed: Mang 2022 (time under tension and aerobic
adaptations, PMID 35088396); Chilibeck 1995 (exercise and bone density,
PMID 7747001, old and general). Not found on PubMed and not used: a
triathlon-specific strength review; an intra-session order meta-analysis
(Murlasits 2018 is believed to exist, Sol to locate); Weakley's VBT review
(Strength and Conditioning Journal, not indexed). Silbernagel's 2007
pain-monitoring model could not be found on PubMed by title, so the pain
rule in module 1 is Fred's input, not a citation. A claim that calf fibres
work near-isometrically in running stance was removed from module 2 until
a source is read in full.

Sources read outside PubMed (publisher and listing pages only, not the
books): Caron, *Strength Deficit* (2022, 215 pp.); Caron, *Training Sport
Teams* (Human Kinetics, 2026, mentioned for completeness, not a source);
Dietz and Nelson, *Triphasic Training II* (2024, 273 pp.); Mann,
*Developing Explosive Athletes*, 3rd ed. listing (2016, 76 pp.).

## 8. Modules

Order: why and the red flags, measure, assess, foundations and tendons,
load, elastic, the endurance week, weak links and cases. The July phases
0 to 3 and the in-season layer map onto modules 3 to 7.

### Module 1: Strength for people whose sport is not strength (free, public)

Purpose: replace the two wrong beliefs with the two levers, and put the
red flags where everyone reads them. Economy and durability, with the
evidence stated once at its real size (percent-level economy gains, no
mass gain, 2 to 3 short sessions a week; well supported). Interference
named honestly: real, first shown in 1980, manageable by design, and the
quality it most threatens is explosive strength, which module 7 protects.
What strength training cannot do: replace the sport, fix an acute injury,
or make a weak aerobic engine fast.

**Red flags and pain rules, in full, here and free:** pain that changes
gait, pain the morning after that does not settle, joint swelling, numbness
or tingling, pain in the front of the hip or the groin under load, bone
pain with a focal point (stress-injury suspicion), and any history of
stress fracture or low energy availability (the triad consensus,
Williams 2026, is the screening reference). When strength work is the
wrong answer, and who to see first.

### Module 2: The four strength qualities, and how to measure them

Purpose: vocabulary and instruments. Maximal strength (1RM estimate from
a working set; the calculator), eccentric strength and the deficit (Caron's
framework; the ratio, Nuzzo 2023), isometric strength and rate of force
(mid-thigh pull or sport-angle holds; Keogh 2020 for the portable-plate
version), reactive strength (drop-jump RSI; Flanagan 2008; the bands).

**All device vocabulary lives here and nowhere else:** VBT zones (Mann;
practitioner convention), force-velocity profile terms (Samozino, Morin),
force-plate metric names, RSI bands. Other modules use plain words
(strong, stiff, fast, reactive).

Measured path: contact mat or plate, bar-speed sensor, lab. Accessible
path: both calculators, a 240 fps phone, filmed tempo, RPE and reps in
reserve. The two-path card for a test day.

### Module 3: Assess before prescribing (the Yousuli strength screen)

Purpose: the July phase 0, now with four measured qualities. Movement
audit joint by joint (ankle dorsiflexion, hip extension and rotation,
thoracic rotation, overhead capacity), filmed against a wall grid;
capacity tests; RSI baseline; a strength baseline from a working set; the
eccentric-deficit proxy (Yousuli convention until Fred confirms Caron's
method); injury-history intake routed to module 8. Output: the weak-link
map, two weakest links emphasised, everything else on the default
program. Retest at weeks 6 and 12 under matched conditions, and the
family's pattern standard: material change on several measures, never one
number.

### Module 4: Foundations and tendons

Purpose: the July phase 1, with the Triphasic isometric logic and the
tendon evidence. Patterns before load (hinge, squat, split stance, push,
pull, carry, anti-rotation); tempo work and isometrics at sport-specific
joint angles; the tendon lesson (Bohm 2015: high-magnitude loading over
months; tendons adapt slower than muscle, which is why the UCLA page's
"anatomical adaptation" phase exists); isometrics for sore tendons as a
tool with an acute effect (Rio 2015) and no more claimed. Home and gym
variants for every exercise. 2 sessions a week, 35 to 45 minutes.

### Module 5: Getting strong

Purpose: the July phase 2, with the sources doing the work. Heavy and
short beats moderate and long for endurance athletes (well supported).
The Triphasic sequence adapted: an eccentric-emphasis block (tempo
eccentrics, eccentric overload where equipment allows, flywheel as an
option, Maroto-Izquierdo 2017), an isometric block, a concentric block.
Caron's deficit as the router: a large deficit biases toward eccentric
work, a small one toward concentric, with Fred's rules from the book.
Loads anchored to the calculator; on the measured path, bar speed and a
velocity-loss cutoff around 20 percent (Pareja-Blanco 2017) as the
autoregulator; on the accessible path, RPE auto-regulation and reps in
reserve. Block lengths and percentages from Fred's copies, labelled.

### Module 6: Elastic

Purpose: the July phase 3. Convert strength into free speed: a
plyometric progression from low-amplitude hops to depth jumps, **gated by
RSI band and by the module 3 capacity tests, never by enthusiasm**. Fast
stretch-shortening cycle work (contact under 0.25 s); the force-velocity
profile as the measured-path guide to force- or velocity-biased work
(Jiménez-Reyes 2016, for jump outcomes); sport-specific finish (hill
bounds, big-gear starts, streamline jumps and band pulls). RSI retest at
week 12 as the scoreboard, read as a pattern with the other measures.

### Module 7: The endurance week

Purpose: the July interference module and in-season layer, the signature
content. Hard-day stacking (strength after quality, never before; a gap of
six hours or more where life allows); what counts as interference and what
is just soreness; explosive strength as the quality to protect, so
plyometric days are kept away from the hardest sport days; aligning
deloads with sport recovery weeks; the Sunday problem; the decision tree
for dropping a session. In-season: the 25-minute dose, 1 to 2 sessions a
week keeps most of the gains; the taper rules (last heavy session before
the A-race, what stays in race week); masters addendum (tendon patience
after 45, recovery spacing). Cross-course notes: heat sessions and
strength sessions on the same day is a recovery bill (heat course module
6); muscle-oxygen readings during strength work are not the NIRS course's
use case and the course says so once.

### Module 8: Weak links and cases

The six injury clinics from July as routed modules (Achilles and calf;
patellar tendon; ITB and lateral hip; the cyclist's low back; the
swimmer's shoulder; bone and energy availability), each in the family's
case format (what you saw, what it suggests, what else explains it, the
next step), and the cases: the UCLA athlete with patellar pain at 21, a
stress reaction at 22 and a back that complains in the aero position
(the UCLA page's own words); the masters runner whose calf goes at week 9
of a marathon build; the cyclist who adds strength without subtracting
anything and loses the quality sessions; the athlete whose RSI drops
while their 1RM rises (strong but not reactive); the failed protocol
(high-rep circuits, no progression, no retest). Real data only; where
none exists, described and never charted.

## 9. Videos and tests

Fred on camera, same discipline as the other two courses, with the slots
labelled "Test to run and film" where Fred can run the protocol on
himself: the drop-jump RSI done properly (module 2); the screen filmed
against the grid (module 3); the eccentric-deficit proxy and, if the
device exists, a bar-speed set showing velocity loss (module 5); a
plyometric progression with contact times on screen (module 6); a real
training week with a strength session placed, moved and dropped (module
7). The UCLA strength walk-throughs already planned (shoulder, thoracic
and lower-body mobility; chair sits; bridges; dead bug; reverse fly and
row; tippy-toe walk; hinge) are the start of the demo library and are
reused, not refilmed.

## 10. What this course is not

Not a strength program for strength athletes. Not a reproduction of any of
the four books: frameworks are borrowed and attributed, programs are
Fred's. Not a force-plate advertisement: the accessible path is complete
on its own. Not a rehabilitation protocol: module 8 routes to a
professional where the red flags say so.

## 11. Open questions for Fred (and then Sol)

1. **What is ForcePhase?** A product, a method, a coach, a plate system?
   Nothing from it is in the framework until answered.
2. **Devices.** Does the lab own a force plate (beyond the RSI contact
   mat), a bar-speed sensor, a flywheel? The measured path is written as
   if a contact mat exists and the rest is optional; confirm.
3. **Caron's measurement.** How does *Strength Deficit* measure the
   deficit, and what are its routing rules? Needed before module 5 copy.
4. **Triphasic specifics.** Block lengths, loading ranges, and which of
   the fourteen Triphasic II methods Fred actually uses with endurance
   athletes (GOAT warm-up, oscillatory reps, Tri Block?).
5. **Mann's edition.** Confirm the zone boundaries and velocity-loss
   guidance from the fourth edition; public listings only show the third.
6. **The July open questions** (name, equipment default, sport routing,
   pricing, referral credits, lab add-on, Bespoke inclusion, Hub
   readiness, free page indexing) remain open in
   `strength-course-launch.md`.
7. **UCLA access.** Free for the roster, as with heat, or the standard
   50-percent perk?
8. **Build order.** As with heat, build and test as we go (Fred runs the
   screen and RSI on himself first), or Sol reviews this framework first?
11. **swc upgrade.** When the upstream fix for the entity whitespace bug
    ships in a Next release, decide whether to upgrade; the entity
    conversion makes the courses safe either way.
10. **Site consistency (from the Fable review).** Should the strength
    intensity guide's phase bands and coach note, and the UCLA page's two
    summer phases, move toward the course's position (short on-ramp, then
    heavier, low-volume work)? The course no longer contradicts them, but
    their emphasis differs.
9. **For the reviewers (Fable, Codex).** Schumann 2022 wording is now
   confirmed from the abstract. Still open: locate an intra-session order
   meta-analysis; a source for near-isometric fascicle behaviour in
   running stance; any mis-filed label.
