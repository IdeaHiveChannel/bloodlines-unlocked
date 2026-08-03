# Tighter scale, social profiles, and richer visuals

Four changes: shrink the global type and spacing scale, clean up the hero portrait, wire in the real social profiles, and add imagery/video across the site.

## 1. Reduce size and congestion everywhere

The scale is set globally in `src/styles.css`, so one pass there resizes every page at once.

- Cut each typography step down (roughly 15–25%): display-xxl from a 6rem ceiling to ~4.25rem, display-xl 4rem to ~3rem, h1 3.5rem to ~2.6rem, h2 3rem to ~2.2rem, h3 2.25rem to ~1.7rem, card titles and body text nudged down proportionally. Floors on small screens come down too (display-xxl floor 2rem to ~1.75rem).
- Loosen line-height slightly as sizes shrink, so tighter text still reads cleanly.
- Reduce section rhythm: `section-y` from 4/6/8rem to ~2.75/4/5.5rem, `section-y-lg` from 4.5/7/10rem to ~3.25/5/7rem.
- Narrow the content cap from 1480px to ~1320px and trim inner gaps/paddings on card grids so sections feel less crowded.
- Hero specifically: drop the top padding (`pt-28/32/40` down a step), reduce the gap between eyebrow, headline, paragraph and buttons, and stop forcing a full-height section on short desktop windows so the fold is not oversized.

## 2. Hero portrait cleanup

- Remove the "Hover to reveal vascular anatomy" caption.
- Remove the anatomy/scan reveal behind the portrait: delete the pointer-tracking scan mask, the scan ring gradient, and the anatomy artwork layer behind the doctor. The portrait stays with its soft shadow and subtle parallax; the ambient blue glow and particles behind the whole hero stay.

## 3. Social profiles

Add the four real links to the shared contact data and render them as a "Follow" group in the footer (and in the contact page's details block):

- Facebook, Instagram, LinkedIn, Google Business Profile — opening in a new tab with `rel="noreferrer"`.
- Add `sameAs` entries with these URLs to the Physician structured data on the homepage and About page, which is how Google links the profiles to the practice.

## 4. More images and video

Existing library: 4 procedure videos, 5 before/after case pairs, hero background, hands-on-catheter, hybrid OT, and the doctor portrait. Gaps to fill with new cinematic stand-in imagery in the same visual language (deep navy, electric blue, clinical, no fabricated people-as-patients):

- Conditions index and pillar guides: one header image per anatomical region so the catalogue is not a wall of text.
- Procedures index: a thumbnail per procedure card.
- Homepage: a visual band in the conditions gateway, an image in the physician/philosophy section, and imagery in the patient journey stages.
- About and Expertise: supporting imagery for the professional journey and expertise blocks.
- Videos: reuse the four existing procedure clips as short muted looping accents on the matching procedure and pillar pages, plus a quiet looping background clip in one homepage transition section.

All new visuals are AI-generated stand-ins, lazy-loaded, with descriptive alt text. Swap in your real clinical photos, cath-lab footage, and portraits whenever you have them.

## Technical notes

- Type/spacing tokens: `src/styles.css` `@utility` blocks (`text-*`, `section-y`, `section-y-lg`, `shell`).
- Hero: `src/components/hero/Hero.tsx` — remove `scan` state, the pointermove/pointerleave listeners, mask styles and the scan-ring div.
- Social links: `src/lib/contact.ts`, `src/components/sections/Footer.tsx`, `src/routes/contact.tsx`, plus `sameAs` in the JSON-LD in `src/routes/index.tsx` and `src/routes/about.tsx`.
- Imagery: generated into `src/assets`, imported as ES modules, mapped per condition/procedure slug in `src/lib/media.ts`.
- Verify at 320px, 390px, 768px, 1280px and 1920px after the scale change so nothing clips or overlaps.
