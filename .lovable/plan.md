# Visual richness, condition-page consistency, analytics and terminology audit

## 1. Fix anatomy routing (confirmed bug)

Seven of the eleven anatomy regions currently open a "not found" page. Tested live:

```text
/conditions/acute-ischemic-stroke        404
/conditions/hemoptysis                   404
/conditions/visceral-aneurysm            404
/conditions/hepatocellular-carcinoma     404
/conditions/renal-artery-stenosis        404
/conditions/dialysis-access-maintenance  404
/conditions/genicular-artery-embolization 404
/conditions/stroke                       200
```

Cause: the region→guide map in `src/lib/content.ts` uses short-condition slugs, while the condition route only serves the 14 full guides.

Fix: remap every region to the closest existing guide, so each body area lands on a real page.

| Region | Destination |
| --- | --- |
| Brain | Stroke |
| Neck | Thyroid nodules |
| Chest | Deep vein thrombosis (with an "other chest conditions" link to /conditions) |
| Abdomen | Liver tumours |
| Liver | Liver tumours |
| Kidneys | Poor blood circulation → replaced with the conditions index (no kidney guide exists) |
| Arms | Conditions index |
| Pelvis | Uterine fibroids |
| Knee | Knee osteoarthritis |
| Legs | Peripheral arterial disease |
| Veins | Varicose veins |

Regions with no matching guide will link to the filtered conditions index instead of a dead page. Every hotspot, label and region panel button gets re-verified end to end after the change.

## 2. Consistent condition-page template

All 14 condition pages already share one component. It will be tightened into a fixed order and given imagery:

1. Hero — condition image, plain-English overview
2. Symptoms
3. Diagnosis pathway (steps + tests, with an imaging visual)
4. Image-guided treatment options
5. Evidence — before/after case example where one exists for that condition (stroke, PAD, liver, fibroids, varicose veins, DVT); for the rest, a clearly labelled illustrative imaging figure, never presented as a patient case
6. Recovery, prevention, FAQs, related conditions (unchanged)

Every section that currently reads as a wall of text gets a supporting visual.

## 3. Images across the site

New cinematic clinical/abstract visuals in the existing style for: each condition-page hero and diagnosis block, procedure pages, the patient journey steps, recovery, evidence figures, and the for-patients pages. All lazy-loaded, sized, with descriptive alt text so page speed and SEO are not hurt.

## 4. Google Analytics 4 funnel tracking

Connect Google Analytics, then track the home-page funnel:

- `select_condition_card` — which of the 14 cards was clicked (condition slug, position)
- `select_anatomy_region` — region id and destination
- `select_what_i_treat` — gateway/CTA clicks
- plus page views on client-side route changes (needed because the site is a single-page app)

Each event carries the locale (en/ml), so English vs Malayalam behaviour is comparable in GA.

## 5. Terminology audit

Review all 14 card titles, the anatomy labels, and every condition page H1/H2 against the approved clinical wording:

- Clinical name is the heading; patient-language phrasing is allowed only as a clearly separate supporting line, never in a heading or page title
- Varicose veins: no clot language; clot language belongs to DVT only
- Liver tumours: descriptive only, no cure or outcome claims
- Fibroids, PAD, prostate, knee: approved wording, no unverified claims
- Same check applied to the Malayalam strings

Findings and corrections will be listed back to you.

## Technical notes

- `regionGuide` in `src/lib/content.ts` plus the anatomy panel links in `Anatomy.tsx`
- `PillarPage.tsx` gains an Evidence block and image slots; images mapped in an extended `src/lib/condition-images.ts`
- GA via the Google Analytics connector; measurement ID read from `import.meta.env`, gtag initialised once in the root route, event helper in `src/lib/analytics.ts`
- No backend or database is required
