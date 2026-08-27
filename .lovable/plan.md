# Final home-page architecture

## Current state (verified)

- `src/routes/{-$locale}.index.tsx` renders: Hero → ConditionsEntry → Transition → Anatomy → Procedures → BeforeAfter (Evidence) → Recovery → Doctor → Journey → PatientStories → MediaBand (Inside the Work) → FAQ → Consultation → Footer.
- There is **no duplicate full-condition catalogue** between Anatomy and Procedures — nothing needs removing there.
- The full 14-card conditions section (`WhatITreat.tsx`) and the list-style `ConditionsGateway.tsx` both exist but are currently unused on the home page.
- Condition cards have no per-condition images today.
- Hero supporting copy and the conditions intro already match the approved wording.

## What changes

### 1. Restore the full Conditions showcase above the footer

Place the 14-condition section between Support/FAQ and Consultation, so the flow ends:
`… FAQ → Conditions (full showcase) → Consultation → Footer`.

It uses the existing card component (`WhatITreat`), retitled **"Different conditions. One philosophy."**, with the compact `ConditionsEntry` gateway staying where it is at the top. Delete the now-redundant `ConditionsGateway.tsx` (its list layout is superseded).

### 2. Each condition card gets its own image

Add a generated clinical/anatomical image per condition, shown at the top of each card (16:9, lazy-loaded, alt text = condition name), on both mobile and desktop. Cards keep linking to their dedicated condition pages.

### 3. Terminology corrections in the card content (English + Malayalam)

| Card | Now | Corrected |
|---|---|---|
| 06 | "Varicose veins & Venous ulcer (Clots / blood clots)" + "Swollen veins / Non-healing ulcers … (Clots)" | Title: "Varicose veins & venous ulcer"; patient line: "Bulging leg veins, aching legs, non-healing ankle ulcers" (no clot language — clots are DVT) |
| 04 | Titled "Peripheral artery disease" but links to `/conditions/poor-blood-circulation` | Link to `/conditions/peripheral-arterial-disease`; keep "poor blood circulation" only as patient-search wording, never as a disease name |
| 07 | Deep vein thrombosis → links to `/conditions/varicose-veins` | Link to `/conditions/deep-vein-thrombosis` |
| 10 | "Liver cancer (HCC) / Hemangioma (Shrink by injection)" | "Liver tumours — HCC and haemangioma"; patient line without treatment-claim phrasing; remove "shrink by injection" |
| 11 | Fibroid text implying route/pinhole claims | Descriptive only: fibroids and their symptoms; treatment detail stays on the condition page |
| 14 | Aortic aneurysm → links to `/conditions/poor-blood-circulation` | Point to the correct existing guide, or drop the card if no dedicated page exists |

All patient-language lines become plain symptom descriptions in parentheses-free sentence case; no outcome or cure claims on the home page.

### 4. Everything else stays

Hero, ConditionsEntry, Anatomy, Procedures + animations, Evidence (stroke, PAD, liver tumour, uterine fibroids, varicose veins, DVT), Recovery, Physician, Patient Journey, Patient Stories (empty state kept, no invented testimonials), Inside the Work, Support/FAQ with WhatsApp link, Consultation, Footer — all unchanged.

## Technical notes

- Copy edits land in `src/lib/i18n/en.ts` and `src/lib/i18n/ml.ts` (`whatITreat.items`), keeping the two dictionaries key-for-key in sync.
- Images: 14 generated `.jpg` assets in `src/assets/conditions/`, mapped by card `id` in a small module and imported as ES6 assets; `WhatITreat.tsx` renders the image above the card body.
- Links must resolve to real routes; each `to` is checked against `src/lib/pillars/index.ts` and `src/lib/content.ts` before shipping.
- Malayalam labels stay short so the cards do not clip at the existing responsive tiers.
