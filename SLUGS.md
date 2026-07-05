# Yousuli pages — slug reference

Every redesigned HTML file in this repo is embedded inside a Wix page on
**yousuli.co** via an HTML iframe. Internal links throughout the site
point at the Wix slug (with `target="_top"`) so the user breaks out of
the iframe on navigation. This file is the authoritative slug map.

For the full project handoff doc, see the parent folder's `README.md`.

---

## Section pages

| File                       | Wix slug                          | Public? |
|----------------------------|-----------------------------------|---------|
| `index.html`               | `/`                               | yes |
| `aboutcoachfred.html`      | `/about-coach-fred`               | yes |
| `coaching.html`            | `/coaching`                       | yes |
| `performancelab.html`      | `/performancelab`                 | yes |
| `science.html`             | `/science`                        | yes |
| `mission.html`             | `/mission`                        | yes |
| `partners.html`            | `/partners`                       | yes |
| `sponsors.html`            | `/sponsors`                       | yes |
| `supportedathletes.html`   | `/supported-athletes`             | yes |
| `swimcoaching.html`        | `/on-site-swim-coaching` ⚠ 404    | yes (needs Wix page) |
| `socialclub.html`          | `/social-club`                    | yes |
| `calculators.html`         | `/calculators`                    | yes |
| `walnut.html`              | `/walnut`                         | unlisted |
| `ucla.html`                | `/ucla`                           | unlisted |
| `members-perks.html`       | `/members-perks`                  | unlisted (`noindex,nofollow`) |
| `members-only.html`        | `/members-only`                   | gating page |
| `404.html`                 | Wix custom 404                    | always |
| `wildflower.html`          | `/wildflower`                     | event |
| `plan-customization.html`  | `/plan-customization`             | gated |
| `race-week-packing.html`   | `/packing`                        | yes (free for all, linked from `/calculators`) |
| `swim-course.html`         | `/swim-course`                    | unlisted (`noindex,nofollow`), co-branded Slipstream mini-course, linked from `/sponsors` + `/on-site-swim-coaching` |
| `referral.html`            | `/referral`                       | unlisted (`noindex,nofollow`), referral program landing page for current Bespoke + Structured clients; companion MJML email templates live in project-root `referral-program-content.md` |
| `referral-add.html`        | `/referral-add`                   | unlisted (`noindex,nofollow`), 14-day self-service form for athletes who forgot to name their referrer at signup; submits via mailto to fred@yousuli.co |
| `membership.html`          | (not actively served on Wix)      | standalone tier-comparison + testimonials page. og:url in the file says `/pricing-plans/membership` but the live Wix slug there uses the sandwich pair below |
| `partners-onepager.html`   | (not embedded in Wix)             | printable one-page leave-behind for gym / facility partner visits (`noindex,nofollow`). Print directly from the GitHub Pages URL (US Letter, one page); QR on it points to `/partners` |

## Sandwich wrappers

Each pair brackets a Wix native widget on a specific page:

| Wix page         | Top + bottom files                                |
|------------------|---------------------------------------------------|
| `/membership` and `/pricing-plans/membership` | `membership-top.html` · `membership-bottom.html` (bottom carries the testimonials + FAQ) |
| `/contact`       | `contact-top.html` · `contact-bottom.html`        |
| `/blog`          | `blog-top.html` · `blog-bottom.html`              |
| `/plans-courses` | `programs-top.html` · `programs-bottom.html`      |
| each course page | `program-header.html` · `program-footer.html`     |

## Calculator slugs (32)

| File                                       | Wix slug |
|--------------------------------------------|----------|
| calculator-running-time-predictor.html     | `/runningtimepredictioncalculator` |
| calculator-advanced-running-predictor.html | `/advancerunningpredictor` |
| calculator-triathlon-finish-time.html      | `/triathlon-finish-time-calculator` |
| calculator-power-to-finish.html            | `/power-to-finish` |
| calculator-vo2-power.html                  | `/vo2-to-cycling-power` |
| calculator-vo2-run.html                    | `/vo2-to-running` |
| calculator-vo2-swim.html                   | `/vo2-to-swimming` |
| calculator-bq.html                         | `/bqcalculator` |
| calculator-im-worlds.html                  | `/imim70worlds` |
| calculator-race-fueling.html               | `/triathlonracefuelingstrategy` |
| calculator-intraworkout-fueling.html       | `/intraworkout-fueling` |
| calculator-sweat-rate.html                 | `/sweat-rate-calculator` |
| calculator-calorie-burn.html               | `/calorieburn` |
| calculator-rmr.html                        | `/resting-metabolic-rate-calculator` |
| calculator-rpe-rer.html                    | `/rperer` |
| calculator-macro.html                      | `/macro` |
| calculator-calipers-body-comp.html         | `/calipers-to-body-composition` |
| calculator-cda.html                        | `/cda-estimate` |
| calculator-crr.html                        | `/crr-estimator` |
| calculator-tire-pressure.html              | `/tyre-pressure-guide` |
| calculator-gear-ratio.html                 | `/gearratiotable` |
| calculator-gear-speed-power.html           | `/gearratiospeedpower` |
| calculator-critical-power.html             | `/critical-power-calculator` |
| calculator-hr-zones.html                   | `/runninghrzones` |
| calculator-rsi.html                        | `/reactive-strength-index` |
| calculator-strength-intensity.html         | `/strength-intensity-guide` |
| calculator-css.html                        | `/css-critical-swim-speed-calculator` |
| calculator-ebt-1.html                      | `/swimming-efficiency-battery-test-one` |
| calculator-ebt-2.html                      | `/swimming-efficiency-battery-test-two` |
| calculator-all-in-one.html                 | `/all-in-one` |
| calculator-fit-compare.html                | `/fit-file-compare` |
| calculator-multisport-breaker.html         | `/multisportbreaker` |
| calculator-fit-merge.html                  | `/fit-file-merger` |

## Special URLs

- Free funnel course (Wix challenge page):
  `https://www.yousuli.co/challenge-page/42edf6c0-be10-4449-85bd-b62bbfb8b06e`
- TrainingPeaks coach-attach (UCLA roster):
  `https://home.trainingpeaks.com/attachtocoach?sharedKey=QE635X7ECWI7E`

## Conventions

- Every internal `<a href="https://www.yousuli.co/…">` carries
  `target="_top"`.
- No em-dashes in body copy. Use `:`, `,`, `.` or parens.
- No `TSB` / `CTL` / `ATL` / "Training Stress Balance" /
  "Chronic Training Load" / "Acute Training Load" — TrainingPeaks
  trademarks.
- "I" for Coach Fred, "you" for athletes.

## Deploy

```bash
git add <files>
git commit -m "…"
git push          # uses macOS keychain
```

GitHub Pages serves `/site` from this repo at
`https://d8cq6m7ywb-commits.github.io/yousulipages/`. Wix iframes point
there. Hard-refresh after a push.
