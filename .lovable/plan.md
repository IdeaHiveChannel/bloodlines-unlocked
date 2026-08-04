# Consultation form, no clinic language, drop the search-terms section

Three changes: remove the "Search language patients use" blocks, turn "Book a consultation" into a real form that sends via WhatsApp or email, and remove clinic wording so contact reads as Dr. Sagar's direct number.

## 1. Remove the search-terms sections

Every disease guide currently ends with a "Related symptoms — Search language patients use" chip list. That whole section is removed from the guide template and from the guide's section index, so the numbering after it shifts up. The underlying `relatedSymptoms` data stays in place (unused) so nothing else breaks.

## 2. Book a consultation form

The contact page gets a proper form above the existing contact tiles:

Fields
- Name (required)
- Phone number (required)
- Email (required only when Email is the chosen channel)
- City / where you are travelling from
- Condition or reason for consultation (required)
- Preferred date / time (free text, optional)
- Attachments checklist: CT, MRI, angiography, Doppler, discharge summary, blood reports, biopsy — tick what you have

Channel choice
- A "Send by" toggle: **WhatsApp** or **Email**.
- WhatsApp: opens a chat to Dr. Sagar's number with a pre-filled, structured message (name, age/city, reason, preferred time, list of reports the patient has), plus a closing line telling them to attach the files in that chat.
- Email: opens the patient's mail app with a subject line and the same structured body addressed to `vascularcaredr@gmail.com`, with a line asking them to attach the files to the email.

Validation is client-side with clear inline messages, same style as the second-opinion form. Nothing is uploaded or stored on the site — files always travel through the patient's own WhatsApp or email, and the form says so.

## 3. Remove "clinic" wording

- Contact page: the three-city cards lose the "Clinic" label and the "clinic addresses" note; they read as cities where Dr. Sagar consults, with the direct number and email shown prominently as his own contact, not a reception line.
- Homepage/contact tiles: "Clinic reception" becomes a direct "Call Dr. Sagar" tile showing the number.
- Page description and social preview text drop "Clinics in..." and "clinic addresses".
- Second-opinion copy: "clinical team" becomes "Dr. Sagar".
- One line in a disease guide FAQ mentioning "a clinic visit" is reworded to "a consultation".

Medical phrases like "Clinical examination" in the diagnosis steps stay — that is standard medical language, not a claim about a clinic.

## Technical notes

- New `src/components/sections/ConsultationForm.tsx`, Zod-validated, rendered on `src/routes/contact.tsx`.
- WhatsApp uses the existing `whatsappLink` helper in `src/lib/contact.ts`; email uses a `mailto:` link built from the same message body.
- Edits to `src/components/pillar/PillarPage.tsx`, `src/components/sections/Consultation.tsx`, `src/components/sections/SecondOpinionForm.tsx`, `src/routes/contact.tsx`, and one pillar copy line.
- No backend, no database, presentation only.
