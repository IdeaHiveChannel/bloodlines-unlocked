# Launch-critical safety, privacy, and patient-experience work

## Goal
Make urgent care instructions unmistakable, replace placeholder legal pages with accurate disclosures, reduce misleading clinical certainty, and test the five priority patient journeys on mobile without changing the site’s visual identity.

## 1. Emergency guidance (P0)
- Add a prominent English/Malayalam emergency notice on the homepage stating: call **112** or go immediately to the nearest emergency department; do not wait for WhatsApp, email, booking, or a second-opinion reply.
- Add the same urgent pathway near the top and beside routine consultation actions on the time-critical guides: stroke, brain aneurysm, brain AVM/AVF, DVT, gangrene, diabetic foot, peripheral arterial disease, and poor blood circulation.
- Keep conditional warnings on liver tumours, uterine fibroids, enlarged prostate, and knee osteoarthritis tied only to the acute symptoms already described.
- Emergency actions will call 112 or direct to emergency care; they will never open the routine WhatsApp enquiry flow.
- Preserve the existing condition content and designed warning-sign sections.

## 2. Privacy, records, and terms (P0)
- Replace the Privacy placeholder with a complete plain-language policy naming **Dr. Mandeep Sagar** as responsible for patient information and medical records, with **Vascularcaredr@gmail.com** as the privacy contact.
- Explain what information patients voluntarily provide, why it is used, who may access it, and that the website itself does not upload or store reports; WhatsApp/email handle the transfer after the visitor leaves the site.
- Explain access, correction, and deletion requests. State honestly that retention/deletion follows applicable legal and medical-record requirements without inventing an unapproved fixed period; flag the exact schedules for later approval across enquiries, second opinions, and formal clinical records.
- Replace the Terms placeholder with clear medical-information, no-guarantee, emergency-use, external-service, second-opinion, intellectual-property, and limitation-of-liability terms.
- Remove or qualify any unverified response-time promise and make the privacy wording consistent across contact and second-opinion forms.

## 3. Clinical claim safeguards and approval pack (P0)
- Replace the generic homepage recovery schedule with an explicitly illustrative, procedure-dependent recovery explanation; direct patients to their own treatment plan and discharge instructions.
- Rename/reframe the homepage comparison section so it cannot imply real patient evidence or an expected result. Keep the existing imagery, but place the representative-image and variable-outcome disclaimer beside every selected comparison and soften deterministic outcome wording.
- Revise the second-opinion headline and supporting copy to support informed decisions without suggesting surgery is normally avoidable or that another clinician’s advice is wrong.
- Compile a clinician review checklist covering every advertised condition, procedure, treatment pathway, emergency instruction, numerical/time-based claim, recovery statement, and eligibility/alternative/limitation statement.
- Do not publish credentials, registration details, affiliations, facilities, or referral claims until verified details are supplied. Preserve the current honest omission rather than inventing them.

## 4. Mobile-first patient-experience audit
Test English and Malayalam at phone size using these tasks:
1. Find urgent help and the next step for a non-healing diabetic foot wound.
2. Distinguish emergency stroke care from routine consultation as a family member.
3. Understand fibroid alternatives, limitations, and the second-opinion process.
4. Navigate and contact the practice as a Malayalam-speaking older patient.
5. Verify scope, facilities, credentials, and referral options as a referring doctor.

For each scenario, record task completion, route taken, confusing or misleading wording, broken controls/links, readability and tap-target issues, and any missing operational facts. Produce a concise audit with screenshots/evidence and separate code defects from facts awaiting Dr. Sagar.

## 5. Verification
- Confirm all changed English and Malayalam pages render without overflow or untranslated new safety/legal text.
- Test emergency actions, routine booking separation, forms, language switching, and all links touched by the changes on mobile and desktop.
- Verify existing valid routes and current 404 behavior remain unchanged.
- Run focused checks and report remaining blockers: clinician sign-off, verified credentials/affiliations, exact retention schedules, referral workflow, and operational enquiry ownership.

## Technical details
- Use one shared emergency-callout component and data-driven urgent-condition flags rather than duplicating behavior.
- Reuse the current translation system, semantic tokens, route metadata patterns, and existing page design.
- Keep report transfer external through encoded WhatsApp/email links; do not add storage or a booking backend.
- No domain, sitemap, canonical, analytics, or unrelated design changes.
- Changes remain in preview until a separate explicit publish request.
