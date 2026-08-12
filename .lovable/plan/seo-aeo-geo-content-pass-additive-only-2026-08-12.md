# SEO / AEO / GEO content pass — additive only

Nothing existing is removed. Every change below adds search language, explicit entity relationships, internal links, structured data and Malayalam equivalents on top of what is already on the site.

## 1. Keyword + alias data layer

A single place for patient-language terms so the same phrasing is reused across hero, cards, disease pages, procedure pages, metadata and Malayalam.

- New `src/lib/seo/aliases.ts`: for each condition slug — clinical name, patient alias ("Poor blood circulation in the legs"), a short "also known as" sentence for the intro, and the Malayalam alias pair (e.g. `കാലിലെ രക്തയോട്ടക്കുറവ് (Peripheral Artery Disease)`).
- New `src/lib/seo/entities.ts`: the entity chains (Dr. Mandeep Sagar → Vascular & neuro interventional radiologist → Mangalore/Kasaragod → conditions → procedures) plus the direct answers used for AEO ("Who is Dr. Mandeep Sagar?", "What is mechanical thrombectomy?", "Where does he practise?").
- Extend `Procedure` in `src/lib/content.ts` with `searchIntro`, `usedFor[]`, `patientTerms[]`, `conditionSlugs[]`, `relatedProcedures[]`.
- Extend `Pillar` in `src/lib/pillars/types.ts` with `alsoKnownAs`, `imageGuidedTreatment` (heading + copy + procedure slug) — FAQs already exist and get topped up.

## 2. Homepage

- Hero: add a keyword-led H1 line "Vascular & neuro interventional radiologist in Mangalore & Kasaragod", the supporting image-guided/minimally-invasive line, and the patient-search sentence covering stroke, aneurysms, blocked arteries, poor circulation and varicose veins. The current headline and lead stay, moved directly underneath.
- What I treat / conditions gateway: each card keeps its clinical name and gains the patient-language subtitle (Stroke — blocked blood vessels in the brain, etc.) and links to the deeper guide.
- New "Advanced image-guided treatment through minimally invasive procedures" block placed with the existing explanatory section.
- Anatomy: add descriptive labels/captions around the existing interaction (Brain & blood vessels, Neck & carotid arteries, Chest & aorta, Abdomen, Kidneys & renal arteries, Pelvis, Knee, Legs & peripheral blood vessels, Veins) without touching the hotspot logic.
- Procedures section: each procedure keeps its name and gains its one-sentence explanatory line (angioplasty & stenting, mechanical thrombectomy, endovenous laser ablation, cerebral aneurysm coiling, …).

## 3. Disease / pillar pages

For all 14 existing pillar guides:

- "Also known as" sentence woven into the intro (clinical + patient phrasing).
- New "How image-guided treatment may help" section after the treatments block, explaining the matching procedure and linking to its page.
- FAQ section topped up with the question-style searches listed (PAD, stroke, varicose veins, diabetic foot get the exact questions given; the others get equivalents in the same style).
- Footer link rail on every guide: relevant procedure, related conditions, second opinion, book consultation.
- Breadcrumbs (Home → What I treat → …) rendered visibly and as `BreadcrumbList` schema.

## 4. Procedure pages

- Search-intent opening paragraph tying procedure + condition + body part + treatment type.
- "Used for" list of verified conditions, each linking to its condition/guide page.
- "What patients may call it" line, only where real patient terms exist.
- Related procedures + second opinion + consultation links, and breadcrumbs (Home → Treatments → …).

## 5. Twelve additional conditions

Added as new catalogued conditions with full pages, patient aliases, treatments, related procedures and metadata: visceral aneurysm, carotid body tumour, pre-operative tumour embolisation, juvenile angiofibroma, bronchial artery embolisation, hemoptysis (coughing up blood), pulmonary AVM, hepatic hemangioma, angiomyolipoma, peripheral/extremity vascular malformations, non-healing venous ulcer, dialysis access problems. Each is worded conservatively ("selected cases"), placed in the right anatomical region, and surfaced in the conditions index and anatomy regions. Aliases also added for renal artery stenosis, carotid artery disease and BPH.

## 6. About, Expertise, Contact

- About: the direct "Dr. Mandeep Sagar is a vascular and neuro interventional radiologist…" statement plus Mangalore, Karnataka and Kasaragod, Kerala. No Kannur.
- Expertise: concise keyword-bearing introductory paragraph above the existing categories.
- Contact/About/homepage keep location context in copy and metadata; procedure pages get it only in metadata and a few natural introductions.

## 7. Metadata and structured data

- Unique title, description, canonical, OG title/description per page, including the new condition pages, in both locales via the existing `localeHead` helper.
- Schema: `Physician` + `MedicalOrganization` sitewide, `MedicalCondition` on condition/guide pages, `MedicalProcedure` on procedure pages, `FAQPage` only where FAQs are visibly rendered, `BreadcrumbList` on all deep pages, `WebPage` baseline. Every claim in schema is visible on the page.

## 8. Images

Descriptive alt text on all clinical imagery and case media, describing only what the image shows — e.g. "Acute ischemic stroke — cerebral angiography before mechanical thrombectomy" / "… after clot removal". Case images carry procedure, condition, anatomical area and before/after status in their captions.

## 9. Malayalam

- Hero gets the natural Malayalam hook `വാസ്കുലർ & ന്യൂറോ ഇന്റർവെൻഷണൽ റേഡിയോളജി — മംഗളൂരു & കാസർഗോഡ്` plus the supporting line; existing Malayalam content stays below.
- Malayalam search phrases (കാലിലെ രക്തയോട്ടം കുറയുന്നത്, മസ്തിഷ്കത്തിലെ രക്തക്കുഴലിൽ ബ്ലോക്ക്, വരിക്കോസ് വെയിൻ, പ്രമേഹ കാലിലെ മുറിവ്, തൈറോയ്ഡ് വീക്കം, പ്രോസ്റ്റേറ്റ് വലുതാകുന്നത്, …) used in headings, intros, FAQs and metadata — not mechanical translations.
- Recognised medical terms kept bilingual: `ബ്രെയിൻ സ്ട്രോക്ക് (Acute Ischemic Stroke)` style pairing.
- All new English strings mirrored in `strings-ml.ts` / `ml-content/`, and `scripts/ml-audit.mjs` re-run so `MALAYALAM_COVERAGE.md` stays at zero gaps.

## 10. Keyword discipline

Repetition follows the entity chains, not blanket phrase insertion: the full "vascular & neuro interventional radiologist in Mangalore & Kasaragod" phrase appears in hero, About, Contact, Expertise intro and metadata only. Condition-level chains (poor circulation → PAD → blocked leg arteries → angioplasty) repeat within their own topical pages.

## Technical notes

New files: `src/lib/seo/aliases.ts`, `src/lib/seo/entities.ts`, `src/components/Breadcrumbs.tsx`, `src/components/sections/RelatedLinks.tsx`, `src/lib/seo/schema.ts` (schema builders). Type extensions on `Pillar` and `Procedure` are optional fields so nothing existing breaks. Route `head()` functions keep using `localeHead`; schema is emitted via the `scripts` array on leaf routes only.
