# Malayalam completeness + typography pass

Two problems: some parts of the site still show English when Malayalam is selected, and Malayalam text is rendered in a Latin font (Poppins) with Latin spacing, so it looks cramped, misaligned and inconsistently sized.

## 1. Malayalam typography

Today only Poppins is loaded, so Malayalam falls back to whatever the device has. Fix:

- Load **Noto Sans Malayalam** (400/500/600/700) via a `<link>` in the root head, alongside Poppins.
- Add a `--font-malayalam` token and apply it only when the Malayalam locale is active (a `lang="ml"` / `.locale-ml` scope), so English pages are untouched.
- Malayalam-specific metric corrections inside that scope:
  - taller line height on headings (Malayalam glyphs have deep ascenders/descenders that clip at 1.02) and on body copy;
  - letter-spacing reset to `normal` — the tight `-0.03em` tracking and the `0.16em` uppercase eyebrow tracking both break Malayalam;
  - no `text-transform: uppercase` (meaningless in Malayalam, causes odd spacing);
  - slightly smaller display sizes so long Malayalam headlines don't wrap into three lines in the hero and section titles;
  - `overflow-wrap`/`word-break` handling so long compound words don't overflow cards and buttons on 320-390px screens.
- Sweep the fixed-height / fixed-width UI that assumes short English labels — nav rail and dropdowns, buttons, chips, stat blocks, anatomy hotspot labels, timeline steps, card titles — and let them wrap or truncate cleanly instead of clipping.

## 2. Finish the translation coverage

Components and pages still rendering hardcoded English on `/ml`:

- `Transition.tsx` (the "Every organ depends on blood" chapter — fully English)
- `Footer.tsx`, `navigation.tsx`, `nav-menu.tsx`, `contact-dock.tsx` (labels, tooltips, aria-labels)
- `ExpertiseTimeline.tsx`
- Routes with no translated copy: home (`index`), `contact`, `media`, `diseases/$slug` and `procedures/$slug` page chrome (headings, intros, breadcrumbs, CTA blocks)
- Data files that are still English-only: `stories.ts` (patient stories), `press.ts` (media/publications/awards), and the non-pillar copy in `content.ts` (anatomy region names and blurbs, journey stages, recovery, evidence case captions, expertise blocks)

Approach: extend the existing `tx()` string map for UI copy, and add Malayalam parallel fields (or `ml-content` JSON) for the data files, resolved through `data.ts` exactly like the disease guides already are.

## 3. Page metadata

Every route's `head()` currently emits English title/description on both branches. Malayalam routes get Malayalam titles, descriptions and OG text, with `og:locale` set per language.

## 4. Verification

Walk `/ml`, `/ml/diseases/stroke`, `/ml/conditions`, `/ml/procedures`, `/ml/contact`, `/ml/second-opinion`, `/ml/media` at 320px, 390px, 890px and 1440px, checking for leftover English strings, clipped or overflowing Malayalam, and heading glyph cut-off — and confirm the English side is visually unchanged.

## Note on accuracy

The new medical strings (stories, press, region blurbs) will be careful patient-facing Malayalam, but a Malayalam-speaking reviewer should read them before publishing.
