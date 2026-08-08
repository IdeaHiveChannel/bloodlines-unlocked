# Finish Malayalam: coverage, typography, visual QA

Current state: the Malayalam dictionary carries ~340 strings and only one `tx()` call in the codebase has no Malayalam entry, so the gap is no longer the dictionary — it is copy that was never routed through translation at all, plus per-page metadata and the Malayalam type scale.

## 1. Translation coverage audit (produced first)

Generate a machine-checked audit that walks every route and every string source and marks each as translated or falling back to English. Output: a markdown report at `MALAYALAM_COVERAGE.md`, grouped by page, listing each remaining English string and where it lives. It becomes the checklist for the rest of the work and can be re-run after the fixes to prove zero fallbacks.

Known gaps the audit will confirm:

- Route `head()` metadata — every route still emits English title/description/OG on the `/ml` branch (index, contact, media, second-opinion, about, expertise, resources, testimonials, conditions, procedures, diseases, and both `$slug` routes).
- `second-opinion` page: the local `reviewed` and `steps` arrays are hardcoded English.
- `media` page: page chrome and metadata.
- Data files: `press.ts` labels (`pressKinds`) and `stories.ts` consent note; the entry arrays themselves are empty, so nothing else there.
- Non-pillar copy in `content.ts` (region names, journey stages, recovery, evidence captions, expertise blocks) that reaches the UI through `tx()` — verify each string resolves rather than silently returning English.

## 2. Finish the remaining copy

- Wrap the second-opinion `reviewed`/`steps` arrays and the media page chrome through `tx()` and add their Malayalam entries.
- Localize `pressKinds` labels and the patient-story consent note.
- Add Malayalam `head()` output on every route: locale-aware title, description, `og:title`, `og:description`, plus `og:locale` (`ml_IN` / `en_IN`). Titles and descriptions written natively, not transliterated.
- Add any string the audit surfaces to `strings-ml.ts`.

## 3. Malayalam typography rules

Refine the existing `html[lang="ml"]` layer in `src/styles.css` so it reads as a designed scale rather than a patch:

- Font stack: `"Noto Sans Malayalam"` with a Malayalam-capable system fallback chain (Manjari, AnjaliOldLipi, Nirmala UI) before generic sans.
- Weight mapping: Malayalam reads heavier at the same weight, so display headings drop from 700 to 600 and body from 500 to 400, keeping perceived weight equal to the English side.
- Line-height: 1.32 display, 1.45 sub-headings, 1.8 body, 1.6 captions — enough for the deep chandrakkala and vowel signs not to clip.
- Letter-spacing forced to `normal` everywhere; no `uppercase` on eyebrow labels (they get a size/colour treatment instead).
- Font sizes: a Malayalam-specific `clamp()` set roughly 8-10% below the English display steps, since Malayalam headlines run longer.
- `overflow-wrap: anywhere` plus `hyphens: none` on headings, card titles and buttons.

## 4. Layout tuning for longer strings

Sweep the components where English-length assumptions are baked in and make them wrap or truncate cleanly: nav rail and dropdown items, contact dock buttons, anatomy hotspot labels, journey/timeline step cards, condition and procedure card titles, stat blocks, CTA buttons (allow two-line buttons with `min-h` instead of fixed height), and the before/after slider captions.

## 5. Visual QA pass

Drive the running site headlessly and screenshot `/ml`, `/ml/contact`, `/ml/diseases/stroke`, `/ml/diseases/varicose-veins`, `/ml/resources`, `/ml/conditions`, `/ml/procedures`, `/ml/second-opinion`, `/ml/media` at 320, 390, 768, 890 and 1440 px. Check for clipped glyphs, overflowing cards, mis-set eyebrows, and any leftover Latin text; fix what shows up. Spot-check the English side at the same widths to confirm nothing regressed.

## Technical notes

- Typography stays in the `html[lang="ml"]` scope in `src/styles.css`; no component gets a hardcoded Malayalam font.
- Metadata localization reads the locale from route params inside `head()` via a small helper, since hooks are unavailable there.
- Translations remain literal strings in `strings-ml.ts` / `ml-content/*.json` — no runtime translation calls.

## Accuracy note

New medical and legal strings (consent note, second-opinion steps, page descriptions) should be read by a Malayalam-speaking reviewer before publishing.
