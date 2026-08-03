# Second opinion, media timeline, patient stories

Four additions, all in frontend code. No backend, no stored patient data.

## 1. Second opinion page (`/second-opinion`)

A dedicated chapter page for patients who already have a diagnosis and want a review.

- Editorial intro: what a second opinion is, when it helps, what Dr. Sagar reviews (CT / MRI / angiography / doppler / discharge summary), and what the patient receives back.
- **Review request form** — name, age, city, condition or diagnosis, what has been advised so far, and a checklist of which reports they have. All fields validated client-side with length limits.
- On submit, the form composes a structured message and opens WhatsApp (`whatsappLink` in `src/lib/contact.ts`) so the patient attaches the actual scan files inside the chat. Nothing is uploaded to or stored on the site — the page states this plainly for privacy.
- A "What happens next" three-step strip, plus a booking CTA to `/contact`.
- Added to the header nav and footer, and cross-linked from every disease pillar page and the consultation section.

## 2. Media, publications and awards (`/media`)

Vertical timeline gallery, newest first, grouped by year.

- Each entry: year, type badge (Media / Publication / Award / Talk), title, outlet, one-line summary, and an outward link.
- Filter chips at the top to show only one type.
- Content lives in a single `src/lib/media.ts` file so entries can be swapped in when you send the real list. Until then the page renders an honest "being compiled — entries added as verified" state with the timeline shell visible, no invented awards.
- Where an entry relates to a condition we cover, it links into the matching disease guide.
- Linked from the About page and the footer.

## 3. Patient stories on the homepage

- New `PatientStories` section placed between Recovery and Journey on the homepage: a quote carousel/strip with the patient's words, first name or initials, condition treated, and city.
- Each story links into the related case in the evidence section or the matching disease guide, so the quote is anchored to real clinical context.
- Quotes are read from `src/lib/stories.ts`. **You said you'll paste the real quotes** — send them and I'll fill this file. Until they arrive the section renders the consent statement only, never invented words.
- The existing `/testimonials` page becomes the full archive and reads from the same file.

## 4. Anatomy hotspots

Already implemented — each region shows its conditions with the intervention used, procedures performed in that region, and a "Read more — complete guide" link. This pass verifies every one of the 12 regions resolves to a real guide (no dead fallbacks), and tightens the hotspot tap targets on touch screens.

## Technical notes

- New routes: `src/routes/second-opinion.tsx`, `src/routes/media.tsx`; each with its own `head()` metadata.
- New content modules: `src/lib/media.ts`, `src/lib/stories.ts`.
- New components: `src/components/sections/SecondOpinionForm.tsx`, `src/components/sections/MediaTimeline.tsx`, `src/components/sections/PatientStories.tsx`.
- Form validation with zod; WhatsApp message built through the existing `whatsappLink` helper with `encodeURIComponent`.
- Styling follows the design bible: Poppins, sentence case, `section-y` / `shell` rhythm, existing OKLCH tokens, responsive down to 320px.

## What I need from you

- The real patient quotes (name/initials, condition, city, consent confirmed).
- The media, publication and award entries when ready — dropping them into one file is a small change.
