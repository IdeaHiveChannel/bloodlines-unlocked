# Repositioning: Interventional Radiology across the whole body

The visual language, hero, typography, spacing, recovery timeline, patient journey and about layout stay exactly as they are. What changes is scope: the site must show that Dr. Sagar treats nearly every organ system through blood vessels, not just stroke, diabetic foot and varicose veins.

## 1. Anatomy map — version 2

Replace the six regions with twelve, each independently highlighted on hover:

Brain · Eye · Carotid · Thyroid (Neck) · Aorta / Chest · Liver · Kidneys · Arms (Dialysis) · Pelvis · Knee · Lower Limbs · Veins

Each region gets its own hotspot on the silhouette (eye, thyroid, liver, kidneys, both arms, knees added), and hovering illuminates only that organ. The side panel lists that region's conditions with the matching intervention underneath each, e.g. Brain shows Acute Ischemic Stroke → Mechanical Thrombectomy, Cerebral Aneurysm → Coiling, AVM → Embolization, AVF → Embolization, Carotid Cavernous Fistula → Embolization.

Region content follows the brief exactly, including the corrections: dialysis access moves out of Aorta into Arms; Neck splits into Carotid Stenting, Thyroid Ablation and Thyroid Embolization; Knee becomes its own region (Genicular Artery Embolization, Genicular Nerve Ablation, Osteoarthritis).

## 2. Conditions catalogue — 25 cards

Expand the catalogue from 12 to ~25 conditions grouped by region:

- Brain: Stroke, Cerebral Aneurysm, AVM, AVF, CCF
- Eye: Carotid Cavernous Fistula
- Neck: Carotid Disease, Thyroid Nodules
- Liver: HCC, GI Bleeding, Portal Hypertension (TIPS), Variceal Bleeding (BRTO), Transjugular Liver Biopsy
- Kidney: Renal Tumour, Renal Artery Stenosis, Renal Artery Aneurysm
- Arm: Dialysis Access, Central Venoplasty, Peripheral AVM, Sclerotherapy
- Pelvis: Fibroids, Enlarged Prostate, Endometriosis, Aorto-Iliac Disease
- Knee: Osteoarthritis / Genicular intervention
- Leg: PAD, Critical Limb Ischemia, Diabetic Foot, Varicose Veins, DVT, FAVA / Cryoablation

Each card keeps the existing detail-page format (what it is, what it feels like, how it is treated).

## 3. Procedures — genuinely distinct animations

Today every procedure replays the same catheter → balloon → flow canvas. Each procedure gets its own scroll-driven SVG storyboard with its own visual vocabulary:

- Angioplasty — plaque, wire crossing, balloon, stent mesh, restored flow
- Mechanical Thrombectomy — clot mass, stent retriever opening inside it, capture, aspiration funnel, reperfusion
- EVAR — bulging aneurysm sac, device advance, graft unfolding, sac excluded, endoleak check
- Endovenous Laser Ablation — refluxing vein with failing valves, fibre insertion, energy pulse, vein collapse, rerouted flow
- TACE — liver silhouette with tumour blush, catheter to feeding artery, beads flowing in, blush fading
- Microwave Ablation — needle advance into tumour, energy field, expanding ablation zone, tumour gone

Beat text is rewritten per procedure to match. Additional procedures (coiling, thyroid ablation, genicular embolization, dialysis fistuloplasty) are added to the index; procedures without a bespoke canvas reuse the closest matching one.

## 4. Expertise timeline

Replace the current four-item list with the full narrative sequence: MD Radiodiagnosis → NHRIMS Shillong → GMC Nagpur → LINCC Paris (hover subheading: Prof. Jacques Moret meeting) → WLNC Turkey → WLNC Portugal → KCR Seoul → TWICE Gurgaon → Guest Lectures → Workshops → Training Residents → IMA Scientific Sessions → National Conferences → Patient Care Today.

Hovering a milestone expands a concise inline summary in place — no navigation. Only the last milestone, Patient Care Today, links out, to a new Testimonials page which ships styled but empty, with a short note that verified patient stories are pending.

## 5. Resources — searchable education library

Keep the search field, add filter chips: Conditions · Procedures · Videos · Patient Guides · FAQs · Recovery. Results show type, title and summary. Each condition page gains a "Related" block surfacing linked procedures, diagrams and guides. Video and guide entries are placeholders labelled as pending until real media is supplied.

## 6. Contact — five paths

Expand the four tiles to five: Book Consultation · WhatsApp · Clinic Reception · Patient Coordinator (family / relative assistance) · Upload Reports.

Upload Reports opens a short secure form — patient name, contact, note, and one or more report files. Files go to Lovable Cloud storage in a private bucket; the clinic gets a record row per submission. No public read access; only the clinic can retrieve files.

## Technical notes

- `src/lib/content.ts` becomes the single source: region union widens to 12 values, conditions grow to ~25, procedures gain a `storyboard` key naming which canvas to render.
- `Anatomy.tsx` gains per-organ SVG shapes and hotspots; hover/focus behaviour and motion timings unchanged.
- `Procedures.tsx` splits: one shared scroll shell plus a `canvases/` folder with one component per storyboard, selected by `procedure.storyboard`.
- New route `src/routes/testimonials.tsx`; expertise timeline moves into its own component with hover-expand state.
- Lovable Cloud is enabled for report uploads: a private `patient-reports` bucket, a `report_submissions` table with RLS (insert allowed for the public form, reads restricted), and a server function that validates input and stores the file reference.
- Every new or changed route keeps its own `head()` metadata.
- No fabricated testimonials, credentials, phone numbers or addresses are introduced.
