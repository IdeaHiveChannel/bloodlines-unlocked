# Restructure: navigation, patient journey, content clarity, Malayalam

The visual system stays exactly as it is — colours, Poppins, whitespace, grid, the doctor photograph, the anatomy interaction, procedure visualisations and animations are untouched. What changes is the information architecture, the wording, the paths through the site, and the completeness of the Malayalam.

No new visual complexity is added anywhere. Every fix is hierarchy, grouping, copy or navigation.

## 1. Navigation

Header becomes: **About · What I Treat ▾ · Treatments ▾ · Expertise ▾ · Patient Information ▾ · Second Opinion · Book Consultation**, plus the EN | മലയാളം toggle. Same header styling, new grouping.

- Four dropdowns, each showing categories rather than every individual page. "What I Treat" opens the 12 body/problem categories; "Treatments" the 11 treatment groups; "Expertise" the 12 specialty areas; "Patient Information" the eight patient-facing items.
- Second Opinion stays a direct top-level item and never gets buried.
- Book Consultation stays the primary CTA and keeps that exact label.
- Mobile header keeps only name, language and menu. The hamburger becomes a single scrollable list of expandable categories mirroring the desktop structure, with no page appearing twice.
- Categories map onto existing disease, condition and procedure pages — nothing is deleted to simplify the menu.

## 2. Contact dock

Kept as-is in position and style, with the hierarchy enforced: Instagram, Facebook, LinkedIn, Google stacked small and vertical; a divider; then noticeably larger WhatsApp and Call. No second floating contact system.

## 3. Homepage order

Hero → What I Treat → How interventional treatment works → Key conditions → Key procedures → Expertise → Doctor → Patient journey → Second Opinion → Patient stories → Resources → Consultation.

- Hero keeps its current look; the copy states plainly that this is vascular and neuro interventional radiology and what that means for a patient, with Book Consultation primary and Get a Second Opinion secondary.
- "What I Treat" shows the 12 curated categories plus "View all conditions" — not the whole catalogue.
- A restrained patient-journey block: understand your condition → explore treatment options → discuss your case → choose the next step.
- A dedicated Second Opinion entry for visitors who already have a diagnosis.
- No "why choose us" section, no statistics, no invented proof.

## 4. Condition and disease pages

Every condition page follows one order, with patient-language headings replacing clinical ones:

What is it? → What might you notice? → Why does it happen? → How is it diagnosed? → How is it treated? → Where does image-guided treatment fit? → Relevant procedures → Who may be considered? → Risks and limitations → Recovery → FAQs → Second Opinion → Book Consultation.

- "Where does image-guided treatment fit?" is the new section on every pillar — framed as fit, never as IR versus surgery, and explicit that medication, surgery or another specialist may be the right answer.
- Emergency conditions (stroke, major bleeding, acute limb ischaemia) carry a clear notice to seek emergency care rather than wait for a website reply.
- The catalogue page keeps its content, regrouped as Featured → major categories → other conditions.

## 5. Procedure pages

What does it do? → What conditions may it treat? → Who may be considered? → How does it work (existing animation retained, with step text answering: access, reaching the problem, treating the target, completion, afterwards) → Benefits → Risks and limitations → Recovery → FAQs → Related conditions → Second Opinion → Book Consultation.

All 13 procedures stay. Benefit claims become procedure-specific and factual; absolute recovery claims ("walks the same day", "no downtime") are replaced with honest, condition-dependent wording. Every procedure gains a candidacy section that states suitability is decided after clinical assessment.

## 6. Patient Information — four new pages

New routes for **How Treatment Works**, **Before Consultation**, **Preparing for Treatment** and **After Treatment**, written in the site's existing style, fully bilingual, with their own metadata. FAQs, Patient Stories, Resources and Contact link to the pages that already exist. Resources is tightened into guides, FAQs, procedure explanations, recovery, preparation and when to seek help.

## 7. Forms and contact

Both the consultation and second-opinion forms take name, age, phone, email, location, reason, message, and preferred contact method (WhatsApp / Email / Phone).

- Attachments: the form prepares the message and the UI states plainly that the patient attaches their reports in the WhatsApp chat or email that opens, and that nothing is sent until they press send. No claim that reports have been received; no separate upload workflow.
- WhatsApp and email bodies and subjects are generated in the language of the current route — a Malayalam visitor gets a Malayalam message.
- Success state says the enquiry has been prepared/sent, never "appointment confirmed".
- Second Opinion page gains: who may need another opinion → what you can share → how it works (three steps) → the form → direct contact.

## 8. Locations and "clinic"

Kannur is removed everywhere — visible text, footer, contact data, forms, metadata, JSON-LD, sitemap, Malayalam strings — leaving Mangalore and Kasaragod. It is not replaced. Remaining "clinic"-flavoured wording (including "clinic coordinator") is replaced with Dr. Sagar, practice, consultation or direct contact. Contact details stay 063663 30505 and vascularcaredr@gmail.com.

## 9. Malayalam

The target is zero complete English sentences on any `/ml` page. An English string existing in the dictionary is not acceptance.

- Every `/ml` route is reviewed page by page: home, about, diseases and each guide, conditions, procedures, expertise, media, testimonials, resources, second opinion, contact, and the new patient-information pages.
- Copy is rewritten in everyday spoken Malayalam — short sentences, familiar words — not literal or machine translation. Recognised terms appear as Malayalam explanation with the English term in brackets on first use.
- Labels get natural equivalents: Specialty → വിദഗ്ധ മേഖല, Modalities → ഇമേജിംഗ് രീതികൾ, Scope → പ്രധാന ചികിത്സാ മേഖലകൾ, Setting → ചികിത്സ നടക്കുന്ന സ്ഥലം, Beat 01 → ഘട്ടം 01, Before/After → ചികിത്സയ്ക്ക് മുമ്പ് / ശേഷം, Case 01 → കേസ് 01. Anatomy region names use the Malayalam list supplied.
- Form labels, placeholders, options, validation, error and success states, empty states, alt text and aria labels all translate.
- Malayalam pages link to Malayalam pages; the toggle preserves the current page; canonical and hreflang stay correct; titles, descriptions and OG copy are Malayalam on `/ml`.
- Malayalam typography keeps its own scale — font stack, weight mapping, line-height, letter-spacing and heading/button sizing — tuned for readability rather than shrunk to avoid overflow.

## 10. Audit and QA

The existing audit script is replaced with a stricter one that flags untranslated English, English fallbacks, mixed-language sentences and inconsistent terminology, and reports per page. Target: zero untranslated patient-facing English.

Visual QA is run headlessly over both languages at 360, 390, 430, 768, 820, 1024, 1280, 1440, 1600 and 1920 px, checking heading wrapping, button and card overflow, dropdowns, the mobile menu, forms, procedure captions, footer and the contact dock. Accessibility — semantic headings, keyboard-navigable dropdowns, focus states, contrast — is verified in the same pass.

## Not being built

No doctor referral pathway and no "For Doctors" page, since no real referral intake process exists yet. Referring doctors reach the same WhatsApp, call and email contact as everyone else.

No fabricated content of any kind: no invented stories, reviews, statistics, publications or authority claims. Media/publications and patient stories keep honest empty states in both languages until verified material exists.

## Content that needs your verification

Risks, candidacy criteria, recovery details and any referral-grade clinical statement should be reviewed by Dr. Sagar before publishing. Where a fact is not confirmed, the section will be written conservatively rather than filled in.

## Technical notes

- Navigation categories become a single declarative structure shared by the desktop dropdowns, the mobile menu and the footer, so nothing can drift or duplicate.
- The new condition/procedure sections are added to the pillar and procedure data types, so every page gets the same order automatically.
- New patient-information routes follow the existing `{-$locale}` pattern with `localeHead` metadata.
- Malayalam copy stays as literal strings in `strings-ml.ts` and `ml-content/*.json`; no runtime translation.
