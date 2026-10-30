# VO2 content: architecture + salvaged source material

Working doc. Holds Fred's existing VO2 written content (pasted from his old
"Understanding your VO2 assessment" material, Parts I and II) plus the
recommended structure for turning it into pages. Nothing here is deployed.

Companion to `swim-course-framework.md` and `strength-course-framework.md`.

---

## THE RECOMMENDATION (read first)

Fred's instinct is right: this is too much for the lean results handout, and
it is really "a small course about physio." Here is the cleanest split.

### Three tiers, two of them new

1. **The lean handout** (already built, live): `site/vo2max-explained.html`.
   The 2-minute, post-test "what your number means, where you land, what to
   do" page. Stays short. Gains one link out to the deep guide.

2. **The physiology guide** (NEW): `Understanding VO2 and your energy systems`.
   The evergreen conceptual course. Houses the engine analogy, the hybrid-car
   energy systems, health/lifespan, METs, thresholds, the three improvement
   levers (intake/delivery/utilisation), performance ceilings, and the fun
   trivia. **This is the canonical energy-systems reference for the whole
   test-explainer family** (DARK, PRP, Full-Stack all point at it), which is
   the strongest reason to build it as its own page.

3. **The report companion** (NEW): `How to read your graded test report`.
   The reference an athlete opens WITH the VO2Master PDF in hand: the graded
   protocol and why step size matters, trending-vs-peak maximal metrics,
   VT1/VT2 and the three intensity domains, absolute-vs-relative norms, the
   six training zones, and the metric glossary (VO2, TV, RF, VE, FeO2, EqO2).

**Why not fold 2 and 3 into one giant page:** they serve different moments.
The guide is read once, on the couch. The companion is opened repeatedly, PDF
alongside. Different jobs, and VT1/VT2 wants a slightly different treatment in
each (concept in the guide, "here's the number on page 5 of your report" in
the companion). If maintaining two feels like too much, the fallback is one
long "Understanding your VO2 assessment" page with strong quicknav, like the
swim course, but I lean two.

### The build order I recommend

- Guide first (tier 2). It is the reusable spine and the most valuable
  standalone asset.
- Report companion second (tier 3), once the guide's physiology sections
  exist to link back to.
- Then wire the lean handout's "go deeper" links and swap in Fred's real
  VO2max norm tables (below) to replace my drafted bands.

---

## LOCKED DECISION: the canonical hybrid-car allegory

We now have TWO hybrid-car allegories in play and they CONFLICT. Fred's is the
house standard. The DARK page I already built used a different mapping and must
be corrected.

**Fred's canonical version (the master, use everywhere):**
- **Solar panels + battery = the sustainable oxidative (aerobic) system.** Solar
  continuously charges the battery; together they run the car at a steady,
  sustainable speed indefinitely.
- **Fuel tank = the glycolytic system (sugar).** Kicks in ABOVE a threshold,
  on top of the oxidative system, for higher speeds. Finite, needs refuelling.
- **Turbo = the phosphocreatine system.** A few seconds of burst, recharges
  slowly.

**The conflict on the current DARK page:** I wrote "gas engine = aerobic /
critical power, battery = anaerobic / W'." That inverts Fred's meaning (his
battery is part of the SUSTAINABLE aerobic side, not the anaerobic burst). 

**The fix for the DARK page:** keep the clean two-number story (a sustainable
ceiling, plus a finite reserve you spend above it), but map it onto Fred's
parts, not a new gas-engine/battery split:
- Critical power = the top speed the solar+battery (oxidative) system can hold
  all day.
- W' = the finite reserve above that line, the fuel-tank-plus-turbo you draw
  down in surges and have to recharge.
So: "your aerobic system sets the speed you can hold forever; W' is the extra
tank you spend above it." Same intuition, consistent with the guide. Reword the
DARK "big idea" and its two-panel graphic accordingly. FRED TO CONFIRM.

---

## Reference: VO2max norm tables (Fred supplied, replace my drafted bands)

Fred sent proper age + sex banded tables (Cooper-style: Very Poor / Poor / Fair
/ Good / Excellent / Superior, in ml/kg/min). Use these to replace the drafted
"active / trained / elite" bands on the lean handout and in the guide's norms
section. Rebuild them as a clean HTML table with the athlete's band highlighted
in the debrief.

**Female (ml/kg/min)**
| Age | Very Poor | Poor | Fair | Good | Excellent | Superior |
|---|---|---|---|---|---|---|
| 13-19 | <25.0 | 25.0-30.9 | 31.0-34.9 | 35.0-38.9 | 39.0-41.9 | >41.9 |
| 20-29 | <23.6 | 23.6-28.9 | 29.0-32.9 | 33.0-36.9 | 37.0-41.0 | >41.0 |
| 30-39 | <22.8 | 22.8-26.9 | 27.0-31.4 | 31.5-35.6 | 35.7-40.0 | >40.0 |
| 40-49 | <21.0 | 21.0-24.4 | 24.5-28.9 | 29.0-32.8 | 32.9-36.9 | >36.9 |
| 50-59 | <20.2 | 20.2-22.7 | 22.8-26.9 | 27.0-31.4 | 31.5-35.7 | >35.7 |
| 60+ | <17.5 | 17.5-20.1 | 20.2-24.4 | 24.5-30.2 | 30.3-31.4 | >31.4 |

**Male (ml/kg/min)**
| Age | Very Poor | Poor | Fair | Good | Excellent | Superior |
|---|---|---|---|---|---|---|
| 13-19 | <35.0 | 35.0-38.3 | 38.4-45.1 | 45.2-50.9 | 51.0-55.9 | >55.9 |
| 20-29 | <33.0 | 33.0-36.4 | 36.5-42.4 | 42.5-46.4 | 46.5-52.4 | >52.4 |
| 30-39 | <31.5 | 31.5-35.4 | 35.5-40.9 | 41.0-44.9 | 45.0-49.4 | >49.4 |
| 40-49 | <30.2 | 30.2-33.5 | 33.6-38.9 | 39.0-43.7 | 43.8-48.0 | >48.0 |
| 50-59 | <26.1 | 26.1-30.9 | 31.0-35.7 | 35.8-40.9 | 41.0-45.3 | >45.3 |
| 60+ | <20.5 | 20.5-26.0 | 26.1-32.2 | 32.3-36.4 | 36.5-44.2 | >44.2 |

**Blood-flow redistribution table (Fred supplied, use in the "delivery" lever
and to explain why digestion is hard at intensity):**
| Body part | At rest | During exercise |
|---|---|---|
| Muscles | 20% | 80%+ |
| Heart | 5% | Increased (varies) |
| Brain | 20% | Relatively constant |
| Digestive system | Varies | Decreased |

Fred's framing to keep: "1 MET = 3.5 ml/kg/min"; "VO2max is the max sustainable
effort, usually only holdable ~5 minutes"; "football needs VO2max well above 35
(10 METs x 3.5)"; relative vs absolute VO2max (normalise to weight, forget
absolute unless elite sprint/rowing/track).

---

## PROPOSED PAGE 2: "Understanding VO2 and your energy systems" (physiology guide)

Long single page, swim-course pattern, sticky quicknav. Section order:

1. **VO2, the basics.** Engine analogy. Intake -> delivery -> utilisation, the
   three steps. VO2max = engine size. (Fred's "VO2 the basics".)
2. **Your three energy systems (the hybrid car).** The canonical solar/battery
   + fuel + turbo allegory. This is the section every other test page links to.
3. **VO2max, health, and lifespan.** Strong independent predictor of mortality;
   quality/health-span not genetic lifespan; declines after 40, training slows
   the decline. (Pair with the science.html stats: -13%/MET etc.)
4. **METs: how much air do you need?** 1 MET = 3.5 ml/kg/min, the activity
   table, the independence/aging framing, the football example.
5. **Thresholds and zones, the concept.** Zone 2 / FatMax / VT1 explained, the
   naming confusion (sport zones vs physiology domains), tie back to "car
   starts using fuel as well as electric."
6. **Performance ceilings: why the biggest engine doesn't always win.** Racing
   car vs efficient battery; VO2max matters more in short races, efficiency in
   long ones; FTP/VT2 vs aerobic efficiency at race power. (San Millan quote.)
7. **The three levers you can train.** Intake (lungs, breathing technique, the
   CO2 point), delivery (heart, stroke volume, hemoglobin redistribution +
   the blood-flow table), utilisation (mitochondria, ATP, dysfunction and the
   blood-sugar/insulin knock-ons). Ends with "find your first limiter."
8. **VO2 in practice: what it looks like as power.** The cycling watts-vs-VO2max
   table (kept, with Fred's grain-of-salt caveat), plus links to the
   VO2-to-power / VO2-to-running calculators.
9. **Other-worldly VO2max (a fun aside).** Daehlie 96, Kipchoge ~78, sled dogs
   in the 200s, the Armstrong caveat. Light, optional, end of page.

## PROPOSED PAGE 3: "How to read your graded test report" (PDF companion)

Reference layout, ordered to mirror the VO2Master report pages. Sections:

1. **What a graded test is, and why the protocol matters.** Ramp easy to
   failure; step size and duration effects; the two failure modes (cardiovascular
   fatigue before max = power zones underestimated; muscular failure before max
   = zones overestimated); the squat 20kg -> 200kg illustration; why a
   conservative first test gives better data.
2. **Maximal metrics: trends, not spikes.** Why we report trending maxima not a
   2-second peak; where absolute peaks live; how VO2max here ties to the page-5
   VO2-vs-HR / VO2-vs-power trends.
3. **Your ventilatory thresholds and the three domains.** VT1, VT2, and the
   low/moderate/high intensity domains; energy production shifts; caloric
   estimation from gas data. (Concept lives in the guide; here it's "your
   numbers.")
4. **Comparing yourself to norms.** Absolute vs relative VO2max explained; use
   Fred's age/sex tables; "aim for Good and above"; two ways to improve relative
   VO2max (fitness or weight).
5. **Your six training zones.** Z1 recovery, Z2 fat/FatMax (~80% of time), Z3
   endurance/racing, Z4 vigorous/threshold-to-VO2max, Z5 maximal. Purpose and
   recovery cost of each.
6. **The metric glossary.** VO2, TV (tidal volume), RF (respiratory frequency),
   VE (ventilation), FeO2 (exhaled O2 fraction), EqO2 (O2 equivalency), with the
   healthy-direction notes (deeper/slower breathing better, over-breathing bad).
7. **Going further: goals, endurance, retesting.** Activity-goal motivation,
   SMART goals via endurance sport, and validating training through frequent
   retesting (baseline, overtraining detection, adaptation tracking). This is
   the bridge to coaching + the retest CTA.

Note: the "PRO assessment" block Fred supplied is his own words "outdated since
we have new metrics" (it predates CORE + hDrop). Do NOT ship it as-is. The
current equivalent is the Full-Stack explainer already built. Salvage any
phrasing worth keeping, otherwise retire it.

---

## SALVAGED SOURCE CONTENT (Fred's originals, verbatim, do not lose)

Lightly grouped. This is first-draft material to edit down and de-AI, not to
paste as-is. Fred's voice + no em-dashes + no TrainingPeaks terms on final pages.

### [P1] VO2 the basics
VO2, or Volume of Oxygen, is a measure of how much oxygen your body can use
during exercise. It's like measuring how good is the engine in a car, and how it
can be used to reach different speeds. When you exercise, your muscles need more
energy, and they get this energy by using oxygen to break down nutrients like
fat and sugar. Three main steps: Oxygen Intake (taking a breath, O2 into lungs
then bloodstream); Oxygen Delivery (heart pumps O2-rich blood to muscles, a
delivery truck); Oxygen Utilization (muscles use O2 to create energy). High VO2
= take in, deliver, use a lot of oxygen. VO2max = size of the engine. Small
engines do more work, degrade/age quicker; bigger engines handle more speed,
last longer. The car might look great outside, but if the engine doesn't fit or
is dysfunctional it has problems.

### [P1] Metabolic function through allegory (THE CANONICAL HYBRID CAR)
Hybrid car with solar panels on the roof. (1) Slow and steady, solar power: the
panels represent steady sustainable energy, continuously charging a battery.
For some, this allows 50 km/h, for others 10 km/h, depending on the efficiency
of the solar panels and battery capacity (the oxidative system). (2) Higher
speeds, dual energy: beyond a threshold the car uses both electric motor
(battery) AND fuel tank; the body uses oxidative (fat + O2) plus glycolytic
(sugar). Fuel isn't limitless, needs refuelling. (3) Bursts, turbo mode: short
high-speed bursts, seconds only, recharges slowly, = the phosphocreatine system.
Summary: best hybrid cars use solar + fuel + turbo for different needs; the body
uses oxidative (endurance), glycolytic (mod-high), and PCr (short bursts), and
optimally relies on the sustainable oxidative system for everyday work, reserving
the others for higher demand.

### [P1] VO2 as predictor of health and lifespan
VO2max = maximal oxygen uptake, crucial indicator of cardiorespiratory fitness,
big implications for health and longevity. Strong independent predictor of
all-cause and disease-specific mortality; higher VO2max = lower death risk.
Linked to functional capacity of lungs, heart, skeletal muscles. Exercise can't
extend genetic lifespan but enhances quality of life and health span, "giving
the years more life." Declines with age after 40; rate of decline drastically
slowed with training.

### [P1] METs
METs = Metabolic Equivalents, intensity of activity vs sitting still. 1 MET =
rest. Walking ~3, running/basketball 6+. Examples: sleeping 0.9, TV 1, desk 1.5,
walk 2mph 2.5, cooking 2.5, golf-cart 2.5, leisurely bike 3.5, walk 3mph 3.3,
light weights 3, hatha yoga 2.5, ballroom dance 3, gardening 4, slow swim 5.8,
jog 5mph 8, doubles tennis 5, shooting baskets 4.5, moderate bike 8, jump rope
12, run 8mph 13.5, competitive soccer 10. 1 MET = 3.5 ml/kg/min (VO2). Often on
treadmills. VO2max is max sustainable effort, ~5 min hold. Football needs VO2max
well above 35 (10 METs x 3.5). Aging adults lose independence as VO2max declines.

### [P1] Zone 2 / FatMax / VT1
Zone 2 / FatMax / VT1 (aerobic threshold): a specific intensity. Zone 2 = burns
fat for fuel, sustainable long duration, moderate, can talk comfortably but
noticeably exerting; endurance training. FatMax = point of max fat oxidation,
varies per person, found via metabolic testing. VT1 / aerobic threshold =
intensity where lactate starts to accumulate but body still clears it
effectively; transition from primarily aerobic toward more anaerobic; noticeable
increase in breathing but speaking still possible. These (and LT1) refer to
intertwined physiological reactions that happen very close in intensity. "Z2" is
misleading: many zone systems (5, 6, 7 zones). In sport usually means intensity
just above recovery. In physiology, the point between low and moderate intensity
domains. In the allegory: when the car starts to use both electricity and fuel.

### [P1] Performance ceilings
Since the 1970s VO2max viewed as crucial endurance metric; smartwatches now
estimate it. But performance is more nuanced. Two cars: (1) high-powered racing
car, huge engine, 370 km/h top speed = high VO2max, peak performance. (2) same
car but better battery system = same engine plus high aerobic efficiency. In a
long highway race the first runs out of fuel sooner; the efficient one wins.
Similarly an athlete with slightly lower VO2max but higher aerobic efficiency
can out-perform. Shorter races: VO2max matters more. Longer races: aerobic
efficiency is key. Electric power can't exceed battery+fuel speed; aerobic
threshold power can't exceed anaerobic threshold (VT2) power, capped by VO2max
and ultimately max effort (turbo). Athletes focus on FTP/pace (~VT2) but that
doesn't capture aerobic efficiency at race power for most long races. Improving
power at VT1 (battery-system efficiency) = better health and performance. Slight
VO2max drops may not hurt racing if aerobic efficiency at race power improves.

### [P1] Improvement: VO2 delivery
VO2 delivery = how well the body transports O2 from lungs to muscles. Heart =
pump, works harder in exercise. Stroke volume = blood pumped per beat; higher =
more O2 per beat. Improved hemoglobin delivery to working muscles; reduction to
those that don't need it (e.g. digestive system during intense exercise). All
work as a team. During exercise some body parts see O2 delivery shrink, which is
why digestion is harder as intensity rises. [USE BLOOD-FLOW TABLE HERE]

### [P1] Improvement: VO2 intake
VO2 intake influenced by lungs and breathing. Lung capacity = how much air lungs
hold (balloon); bigger doesn't automatically mean higher VO2max. Lung function =
how well lungs bring in O2 and clear CO2. Breathing technique: deep diaphragmatic
breathing gives fuller exchange than shallow chest breathing; controlling
breathing in exercise improves intake. Over-breathing / shallow breathing =>
poor O2 intake AND poor utilization, and very low CO2 which strongly affects the
aerobic system. CO2 is a very important component of the respiratory system.

### [P1] Improvement: VO2 utilisation
O2 utilization in cells, esp. mitochondria (tiny power plants). O2 enters
mitochondria, electron transport chain, generates ATP (cellular respiration).
More efficient mitochondria = more energy. Mitochondrial dysfunction = can't use
O2 efficiently, lowers "electric capacity" to very low speeds. Impact: less
energy, muscle weakness/fatigue; body taps blood sugar more, at higher degrees;
blood-sugar swings affect insulin, hunger, weight, mood, inflammation; insulin
dysfunction can worsen mitochondrial dysfunction (vicious cycle). For health from
an oxygen standpoint: find which of intake/delivery/utilization is the first
limiting factor, work to improve over time.

### [P1] VO2 in practice: cycling power table
Illustration of how VO2max reflects in max power output over ~5 min by weight.
Built with standard verified calculation but take with a grain of salt, an
estimate that may be off significantly for some athletes, and seems off at higher
wattages. Shows the relationship between VO2max and power output. [FULL TABLE:
120-400 W x 50-85 kg, preserved in Fred's HTML, rebuild responsive.]

### [P1] Other-worldly VO2max
Highest VO2max in elite endurance athletes. Bjorn Daehlie (XC skier) 96 ml/kg/min
in 2005. Top marathoners ~75, pro cyclists up to 88. Women: Joan Benoit (1984
Olympic marathon champ) 78.6; Bente Skari 76.6; Flavia Oliveira 76.0. Armstrong
autobiography claim of 91 at 16 at Cooper Institute (verify; many say inflated;
VO2max long used as a pro-cycling filter). Kipchoge estimated ~78, high but not
the highest in marathon. Triathletes: Olav Aleksander Bu said Blummenfelt has
higher VO2max than Iden but not as good efficiency, why they compete neck and
neck. Sled dogs: mid-200s ml/kg/min, far above humans, hence hours of running
and tantrums when under-exercised.

### [P2] The graded exercise report (protocol)
A graded test increases intensity gradually from very easy to failure. Steps
2-5 min; each increase may affect max power/pace (if limited endurance/fatigue
resistance) but won't affect VO2 or VO2max readings if not done too fast. Best
calibrated from a previous assessment. Two failure modes: step too small / too
long => cardiovascular fatigue or overheating before max; VO2max achieved but
high-intensity power dwindles from fatigue; HR zones ok but power/pace zones
underestimated. Step too big / too short => muscular (utilization) failure
before VO2max reached (squat 20kg then 200kg: not out of breath, but legs fail);
power max correct but HR and performance zones overestimated. Knowing the
athlete's profile matters; a conservative first test gives better data.

### [P2] Maximal metrics (trending not peak)
We report trending maximum values, not absolute peaks. E.g. VO2 rising 50->55
over five minutes with a 2-second spike to 70 won't show the spike. Same for
power, pace, HR, ventilation, tidal volume, respiratory frequency. Absolute
peaks are in their specific charts deeper in the report. Reported VO2max
correlates with page-5 trends (VO2 vs HR, VO2 vs power/pace). Other values are
trending values after reaching VO2max; if VO2max wasn't held long or power
declined post-VO2max they may be slightly lower. Ventilation = air through lungs
per minute (L). Tidal volume = air per breath; low = poor technique or limited
capacity. Respiratory frequency = breaths per minute; high / over-breathing can
be a limiter for performance and health.

### [P2] Ventilatory thresholds + 3 domains
VT1 and VT2 are critical indicators of shifts in energy production; used to
establish intensity domains in watts, pace/speed, HR. VT1 = body shifts from
predominantly aerobic to increased anaerobic reliance, marked by noticeable
breathing increase. VT2 = further shift, higher intensity. Personalized training
zones from these thresholds. Caloric estimation from O2 intake and exhaled O2
percentage, tailored to intensity. Three domains: Low/aerobic (O2-based, low
intensity, long duration, fat + carb, most fat-efficient); Moderate/sustainable
(more sugar reliance, lactate begins to rise, O2 delivery/utilization at good
equilibrium); High/anaerobic (aerobic system still full-on but systems start to
collapse; ATP from sugar intensifies as it needs less O2, quick lactate
accumulation; muscle O2 saturation plummets, breathing and HR spike, fatigue
fast, failure when a system can't cope; VO2max achieved in the high zone).

### [P2] Comparing to norms (absolute vs relative)
How your VO2max compares to same gender/weight/age. Moving up a category = major
health/cardiovascular improvement; aim for Good and above, top 1% not necessary.
Relative VO2max normalized to body weight (ml/kg/min); improvable via fitness OR
weight change. Absolute VO2max = total O2 per minute regardless of weight
(L/min). Absolute useful for non-weight-bearing/short events (rowing, track
cycling). Relative better for weight-bearing (running), better health estimate,
levels the playing field. Formula: absolute = relative x weight(kg); e.g. 42
ml/kg/min x 71 kg = 2982 ml/min (~2.98 L/min). Unless elite sprint event, just
note relative and forget absolute. [USE FRED'S AGE/SEX NORM TABLES.]

### [P2] Six training zones
Z1 warm-up/active recovery (very low, minimal demand). Z2 fat-burning /
Fatmax (low-moderate, sweat begins, minimal stress, quick recovery, high
sustainability, ~80% of training time, max fat utilization; jog-walk if needed).
Z3 endurance/racing (events 1h to <1 day, slower recovery than Z2; ultras
mostly Z2 with Z3 shifts). Z4 vigorous (low anaerobic threshold to VO2max;
minutes to an hour; days to recover; intervals with Z1 rests). Z5 maximal
(muscular fatigue before respiratory/HR respond, 1-30s; sprint/max power,
neuromuscular/efficiency benefits; long warm-ups, long recovery; fatigue is
muscular unlike Z3/Z4 cardiovascular).

### [P2] Other metrics glossary
VO2 = O2 uptake (ml/kg/min); rest 3-7. TV tidal volume = air per breath (L),
higher healthier, shallow rapid breathing = low TV. RF respiratory frequency =
breaths/min, lower (deeper/slower) healthier. VE ventilation = total air per
minute, overview of lung capacity/efficiency. FeO2 exhaled O2 fraction =
percentage of inhaled O2 not used; decrease in exercise = more efficient use;
increase past a point = cells not using O2 as effectively despite more air, at
higher intensities. EqO2 oxygen equivalency = more intricate efficiency metric,
how well body uses available O2 across intensities.

### [P2] Going further: activity goals
Specific activity goals (swim 30 min without tiring, long hike, squash) help
appreciate/monitor/improve fitness. Motivation + enjoyment (personal relevance,
fun); measurable progress (tangible benchmarks, feel/see improvement); tailored
training (understand metabolic needs, focused effort e.g. incline walking for
hiking); goal-oriented action plans (structure, balance/variety); psychological
(sense of purpose, achievement, confidence); goals vs no goals (direction/focus,
overcome plateaus).

### [P2] Endurance sport + SMART goals
Endurance sport improves aerobic/cardiovascular systems; racing performance
reflects overall health. Benefits: cardiovascular efficiency (lower resting HR,
stronger heart), improved O2 utilization (VO2max), increased capillary density,
enhanced metabolic function (burn fat + carb efficiently). Racing performance as
health manifestation (fitness indicator, improvement benchmark). SMART: Specific
(complete a 5K), Measurable (time/distance/pace/VO2max/lactate), Achievable
(gradual progression), Relevant (personal health aspirations), Time-bound
(race deadlines). Beyond physical: mental health (less stress/anxiety/
depression), discipline + resilience.

### [P2] Validating training through frequent testing
Regular VO2 testing shows training effectiveness + metabolic health. Baseline +
progress tracking; training plan optimization (no improvement/decline = regimen
not optimal). Identifying overtraining / metabolic fatigue (decreased VO2
utilization efficiency despite consistent/increased training = overtraining or
metabolic fatigue; recovery monitoring). Understanding adaptations (aerobic vs
anaerobic balance; energy-system efficiency, fat vs carb). Customizing for goals
(endurance improvement; periodization). Fine-tunes programs, prevents fatigue,
aligns with objectives, reduces overtraining/injury risk.

### [P2] PRO assessment (Fred flags: OUTDATED, predates CORE + hDrop)
Old description of a multi-device assessment (VO2Master + Moxy + core temp +
Stryd) with 8 advantages. Superseded by the current Full-Stack Profiling and its
explainer page. Salvage phrasing if useful, otherwise retire. Do NOT ship as-is.

---

## Open decisions for Fred

1. Two pages (guide + report companion) as recommended, or one long combined
   "Understanding your VO2 assessment" page? (I lean two.)
2. Public + indexed, or unlisted like the handout? These are genuinely good SEO
   assets ("understanding your VO2max results" has search demand) and are not
   partner-sensitive. (I lean public for the guide, unlisted for the report
   companion since it references our specific report layout.)
3. Confirm the DARK allegory fix (map W'/CP onto Fred's solar-fuel-turbo, not a
   new gas/battery split).
4. Slug names: `/understanding-vo2` (guide) + `/reading-your-vo2-report`
   (companion)? Or something else.
5. Does the physiology guide become the shared "energy systems" reference that
   DARK / PRP / Full-Stack link into (recommended), so we write the hybrid-car
   allegory once and point to it?
