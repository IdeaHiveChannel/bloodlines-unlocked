# Repositioning pass: from "vascular" to full-body interventional radiology

Rewrites the homepage narrative, deepens the anatomy and physician chapters, adds a conditions gateway, expands the procedure library and evidence section, and creates the missing credibility pages as structured shells.

## 1. Hero

- Headline: "Modern medicine, through a pinpoint opening."
- Subheading: "Advanced image-guided treatment for vascular, neurovascular and minimally invasive procedures, performed with precision through blood vessels rather than large surgical incisions."
- Two CTAs: Book consultation / Explore conditions.
- Update the homepage title + meta to match the new positioning.

## 2. Transition passage (new)

Short editorial full-bleed passage between hero and anatomy: "Every organ depends on blood." + the two supporting lines from the brief.

## 3. Anatomy chapter

- Heading: "The body, seen through its blood vessels." with the new supporting paragraph.
- Each hotspot panel now shows three blocks instead of one: **Conditions**, **Procedures**, and a **Read more** link into the matching disease guide or condition page.
- Procedures per region come from existing content data; brain shows Stroke → Mechanical thrombectomy, Aneurysm → Coiling, AVM → Embolization, etc.

## 4. Conditions gateway (new homepage chapter)

Editorial section — not a card grid — sitting between anatomy and procedures. Heading "Different diseases. One philosophy." with the brief's copy, a typographic list of the 14 flagship diseases linking straight into their pillar guides, and one link to the full catalogue.

## 5. Procedures

- Homepage chapter keeps the storyboard treatment with the new heading "Every procedure has its own story."
- Procedure index expands to the full 12: Angioplasty, Mechanical thrombectomy, EVAR, EVLT, TACE, Microwave ablation, Coiling, Thyroid ablation, PAE, UFE, GAE, Dialysis fistuloplasty. Each gets a detail page (existing storyboards reused where one exists, new ones written where needed).

## 6. Evidence section

Rebuilt as a multi-case slider: several before/after pairs across different diseases (stroke, PAD/limb salvage, varicose veins, uterine fibroids, liver tumour), each with a short caption, case navigation, and a CTA. Images are cinematic AI stand-ins, clearly labelled as illustrative.

## 7. Recovery / Patient journey

- Recovery: copy update only.
- Journey: insert **Treatment planning** between Diagnosis and Procedure, and apply the new chapter copy.

## 8. Physician chapter — rewritten

Shifts from specialty description to Dr. Mandeep himself: philosophy, why interventional radiology, approach to a patient, how treatment decisions are made. Heading "A practice built on precision." Links to a new `/philosophy` page holding the long-form version.

## 9. Expertise

Grows from 6 to 10 blocks — adds Thyroid, Interventional oncology, Musculoskeletal (knee), and Renal alongside the existing neuro, aortic, peripheral, venous, limb salvage and women's health blocks.

## 10. Professional journey

Reworked as a dated chronology (MD → Shillong → Nagpur → Paris → present practice) with year markers so the sequence reads as a career, not a list. Exact years are placeholders marked "to be confirmed" until you send them.

## 11. Conditions catalogue

Split into **Featured conditions** (the 10 branding priorities, larger treatment, each linking to its pillar guide) and **Other conditions** (the remaining catalogue, compact list).

## 12. Cross-linking

Every disease guide gains a consistent "Continue" block: related videos, related FAQs, related procedures, related guides. Condition and procedure pages link back into their pillar guide.

## 13. Consultation

Reframed around availability rather than clinics: Dr. Mandeep serves Kannur, Mangalore and Kasaragod, reachable by phone, WhatsApp and email. No fabricated addresses, timings or maps. Copy: "When you're ready, we're here."

## 14. Footer

Remove the "Created by Muad Ahamed" credit.

## 15. New pages (structured shells, no invented content)

`/philosophy`, `/testimonials` (patient stories), `/media`, `/publications`, `/research`, `/awards`, `/affiliations`, `/gallery`, `/case-library`, `/patient-guides`, `/faq`, `/second-opinion`, `/upload-reports`. Each is a real, designed page with correct metadata and an honest empty state plus a contact route — ready to fill the moment you send content. Grouped under a footer "More" column so navigation stays clean.

## Technical notes

- Homepage order becomes: Hero → Transition → Anatomy → Conditions gateway → Procedures → Evidence → Recovery → Journey → Physician → Consultation → Footer.
- Anatomy region data in `src/lib/content.ts` gains a `procedures` array per region and a `guideSlug` pointer; the panel renders condition → procedure pairs.
- Evidence cases live in a new `src/lib/evidence.ts` with generated image pairs in `src/assets`.
- New procedure storyboards extend `src/components/procedures/canvases.tsx` using the existing scroll-driven SVG pattern.
- New pages are TanStack route files, each with its own `head()` metadata; all reuse the existing Poppins/OKLCH design tokens.
- Nothing unverifiable is stated as fact: credentials, dates, testimonials, publications and awards render as explicit pending states.

## What is still blocked on you

Career dates, hospital affiliations, publications, awards, patient stories, real case images, and any clinic timings — everything else ships in this pass.
