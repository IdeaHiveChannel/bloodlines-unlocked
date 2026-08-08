# Malayalam translation coverage audit

Generated 2026-08-08 by `node scripts/ml-audit.mjs`.

Dictionary entries in `src/lib/i18n/strings-ml.ts`: **340**

Strings still falling back to English: **69**

| Kind | Meaning |
| --- | --- |
| `metadata` | Route `head()` title/description/OG copy |
| `jsx-text` | Literal text rendered in JSX without `tx()` |
| `data-string` | Object field in a component rendered to the UI |
| `data-file` | String in a shared data module |

## src/components/hero/Hero.tsx

- L80 `data-string` — Dr. Mandeep Sagar, interventional radiologist

## src/components/language-toggle.tsx

- L21 `data-string` — Language

## src/components/sections/Doctor.tsx

- L47 `data-string` — Dr. Mandeep Sagar
- L52 `jsx-text` — "The disease is approached where it lives — through the vessel itself."
- L58 `data-string` — Catheter manipulation
- L61 `data-string` — Hybrid operating theatre

## src/routes/__root.tsx

- L25 `jsx-text` — 404 — off the map
- L26 `jsx-text` — This page does not exist.
- L49 `jsx-text` — interruption
- L50 `jsx-text` — Something stopped the flow.
- L51 `jsx-text` — Try once more, or return home.
- L57 `jsx-text` — Home
- L69 `metadata` — Vital Flow — Vascular & neuro interventional radiology
- L70 `metadata` — Advanced image-guided vascular and neurointerventional procedures. Minimally invasive treatment, greater precision, fast…
- L71 `metadata` — Dr. Mandeep Sagar
- L73 `metadata` — Vital Flow — Dr. Mandeep Sagar
- L96 `data-string` — Vital Flow — Dr. Mandeep Sagar

## src/routes/{-$locale}.about.tsx

- L12 `metadata` — About Dr. Mandeep Sagar — Interventional radiologist
- L18 `metadata` — About Dr. Mandeep Sagar
- L36 `data-string` — Dr. Mandeep Sagar

## src/routes/{-$locale}.conditions.index.tsx

- L13 `metadata` — Conditions treated — Dr. Mandeep Sagar
- L19 `metadata` — Conditions treated by Dr. Mandeep Sagar
- L22 `metadata` — Featured guides and the complete catalogue of conditions treated without major surgery.

## src/routes/{-$locale}.contact.tsx

- L13 `metadata` — Book a consultation — Dr. Mandeep Sagar
- L14 `metadata` — Send your details to Dr. Mandeep Sagar by WhatsApp, email or phone. Consulting in Kannur, Mangalore and Kasaragod.
- L15 `metadata` — Book a consultation with Dr. Mandeep Sagar
- L16 `metadata` — Consultation request form, direct number and consulting cities for the interventional radiology practice.
- L29 `data-string` — Dr. Mandeep Sagar — Interventional radiology practice

## src/routes/{-$locale}.diseases.$slug.tsx

- L15 `metadata` — Condition not found

## src/routes/{-$locale}.diseases.index.tsx

- L13 `metadata` — Conditions treated — Dr. Mandeep Sagar
- L22 `metadata` — Symptoms, tests, treatment options and recovery, explained condition by condition.

## src/routes/{-$locale}.expertise.tsx

- L8 `data-string` — Acute stroke thrombectomy, cerebral aneurysm embolization, AVM and dural fistula management. Time-critical work, perform…
- L9 `data-string` — The clock-driven pathway: recognition, imaging, decision, and clot retrieval. Coordination matters as much as the cathet…
- L10 `data-string` — From iliac to pedal arch — angioplasty, stenting, atherectomy. Limb-salvage strategies for critical ischaemia and diabet…
- L11 `data-string` — Endovascular repair of aortic aneurysms and dissections (EVAR / TEVAR) through small access points, with shorter recover…
- L12 `data-string` — Endovenous ablation for varicose veins, catheter-directed therapy for DVT, venous stenting for outflow obstruction.
- L13 `data-string` — TACE, microwave ablation and portal vein embolization — treatment delivered into the tumour, sparing the organ around it…
- L14 `data-string` — TIPS for portal hypertension, variceal bleeding control, biliary drainage and transjugular biopsy.
- L15 `data-string` — Radiofrequency and microwave ablation of benign thyroid nodules — no incision, no scar, no lifelong replacement.
- L16 `data-string` — Renal artery angioplasty, renal tumour ablation, prostate artery embolization and varicocele treatment.
- L17 `data-string` — Genicular artery embolization for knee osteoarthritis, and image-guided treatment of chronic joint pain.
- L18 `data-string` — Uterine fibroid embolization and pelvic vein embolization for pelvic congestion — organ-preserving by design.
- L19 `data-string` — Maintenance of fistulas and grafts — fistuloplasty, declotting, central vein recanalisation. Keeping lifelines open.
- L28 `metadata` — Areas of expertise — Dr. Mandeep Sagar

## src/routes/{-$locale}.index.tsx

- L22 `metadata` — Dr. Mandeep Sagar — Interventional radiologist
- L30 `metadata` — Dr. Mandeep Sagar — Vascular & neuro interventional radiologist
- L49 `data-string` — Dr. Mandeep Sagar

## src/routes/{-$locale}.media.tsx

- L10 `metadata` — Media, publications and awards — Dr. Sagar
- L16 `metadata` — Media, publications and awards

## src/routes/{-$locale}.procedures.$slug.tsx

- L55 `jsx-text` — ← All procedures

## src/routes/{-$locale}.procedures.index.tsx

- L12 `metadata` — Procedures — Dr. Mandeep Sagar
- L13 `metadata` — Angioplasty, thrombectomy, aneurysm repair, embolization and vein ablation — image-guided procedures explained beat by b…
- L14 `metadata` — Procedures performed by Dr. Mandeep Sagar
- L15 `metadata` — Angioplasty, thrombectomy, aneurysm repair, embolization and vein ablation — every procedure told as a story.

## src/routes/{-$locale}.resources.tsx

- L15 `metadata` — Patient resources — Dr. Mandeep Sagar
- L16 `metadata` — Search conditions, procedures, animated films, patient guides and recovery notes on image-guided vascular treatment.
- L18 `metadata` — Searchable educational material on vascular and neurointerventional care, written for patients and families.

## src/routes/{-$locale}.second-opinion.tsx

- L13 `metadata` — Second opinion on your scans — Dr. Sagar
- L19 `metadata` — Second opinion on your scans
- L46 `metadata` — You send what you already have
- L47 `data-string` — Scans, reports and the advice you have been given. No new investigation is asked for at this stage.
- L51 `metadata` — The images are read, not just the reports
- L52 `data-string` — The actual imaging is reviewed against what image-guided treatment can and cannot offer in your case.
- L56 `metadata` — You get a straight answer
- L57 `data-string` — Whether a minimally invasive option exists, what it would involve, and where surgery remains the better choice.

## src/routes/{-$locale}.testimonials.tsx

- L12 `metadata` — Patient stories — Dr. Mandeep Sagar
- L13 `metadata` — Verified patient experiences of image-guided vascular and neurointerventional care, published only with written consent.
- L15 `metadata` — Verified accounts from patients treated through image-guided intervention, published only with written consent.
- L57 `jsx-text` — &ldquo;

