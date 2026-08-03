# 14 priority diseases as pillar ecosystems

The 14 branding diseases stop being short catalogue entries and become full pillar pages with an identical 18-section architecture, four parallel entry points, and internal linking between symptoms, procedures and related diseases. The existing visual language, motion and typography stay exactly as they are.

## The 14 pillars

Stroke · Varicose Veins · Diabetic Foot · Peripheral Arterial Disease · Gangrene · Deep Vein Thrombosis · Thyroid Nodules · Knee Osteoarthritis · Enlarged Prostate (BPH) · Uterine Fibroids · Brain Aneurysm · Brain AVM/AVF · Liver Tumours · Poor Blood Circulation

Twelve of these already exist as short condition entries and get upgraded in place, keeping their current URLs. Two are new: Gangrene, and Poor Blood Circulation.

Poor Blood Circulation is built as a patient-language landing page, not a diagnosis: what people mean by it, possible causes (PAD, diabetes, smoking, DVT, venous insufficiency), symptoms, how it is investigated, and routes onward into the real conditions behind it.

## Identical architecture, per pillar

Every pillar page renders the same 18 sections in the same order:

```text
Hero (patient's own words)  →  Symptoms  →  Causes  →  Risk factors
Warning signs  →  Diagnosis  →  Tests explained  →  Treatment options
How Dr. Mandeep treats it  →  Procedures  →  Recovery timeline
Prevention  →  FAQs  →  Patient stories  →  Videos
Related symptoms  →  Related diseases  →  Book consultation
```

Sections with no verified content yet (patient stories, some videos) render as honest "coming soon" states rather than being faked or hidden.

### Four parallel entry points

Each pillar carries a sticky sub-navigation with four doors — Symptoms, Diagnosis, Treatment, Recovery — so a patient can enter at whichever question brought them. Each door deep-links to its section and is separately shareable.

### Tests explained

Doppler, CT angiography, MRI, ultrasound and DSA each get a short "why this test, for this disease" explanation written per pillar rather than a generic glossary.

### FAQs

Each pillar ships with 20+ FAQs in an expandable accordion, marked up as FAQ structured data so Google can surface them.

## The other 21 conditions

The existing non-pillar conditions keep their current lighter page and gain "part of" links up to the relevant pillar, so the catalogue reads as one connected system.

## Content honesty

No fabricated testimonials, case studies, statistics or outcomes. Medical copy stays factual and documentary in tone; anything requiring Dr. Sagar's verification is marked rather than invented.

## Technical notes

- `src/lib/content.ts` gains a `Pillar` type and a `src/lib/pillars/` folder with one data file per disease (the file grows too large otherwise). Existing `Condition` entries stay for the anatomy map and catalogue; pillars reference them by slug.
- New route `src/routes/diseases.$slug.tsx` renders the shared 18-section shell from pillar data, with `src/components/pillar/` holding one component per section (Hero, Symptoms, TestsExplained, Faq, Recovery, RelatedGrid, etc.).
- The twelve existing pillar conditions redirect from `/conditions/<slug>` to `/diseases/<slug>` so no current URL breaks.
- New `/diseases` index listing all 14 pillars, linked from the nav.
- Per-pillar `head()` metadata (unique title, description, og tags) plus JSON-LD: `MedicalCondition` and `FAQPage`.
- Sticky four-door sub-nav uses scroll-spy; reduced-motion respected.
- `public/sitemap.xml` extended with the new routes.
- Procedures and videos are linked from existing data — no duplicate procedure content is written.

## Scale note

This is a large build. Fourteen pillars at full depth is roughly 250+ sections of medical copy. The plan delivers the complete architecture plus full written content for all 14 pillars in phases: Stroke, Diabetic Foot and Varicose Veins first (proving the template), then the remaining eleven.
