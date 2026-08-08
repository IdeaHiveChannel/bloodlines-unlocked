# Malayalam translation coverage audit

Generated 2026-08-08 by `node scripts/ml-audit.mjs`.

Dictionary entries in `src/lib/i18n/strings-ml.ts`: **395**

Strings still falling back to English: **6**

## Accepted English fallbacks

- `src/routes/__root.tsx` — sitewide default title/description and the JSON-LD organisation block stay in English; every content route overrides them per locale.

| Kind | Meaning |
| --- | --- |
| `metadata` | Route `head()` title/description/OG copy |
| `jsx-text` | Literal text rendered in JSX without `tx()` |
| `data-string` | Object field in a component rendered to the UI |
| `data-file` | String in a shared data module |

## src/routes/__root.tsx

- L72 `metadata` — Vital Flow — Vascular & neuro interventional radiology
- L73 `metadata` — Advanced image-guided vascular and neurointerventional procedures. Minimally invasive treatment, greater precision, fast…
- L74 `metadata` — Dr. Mandeep Sagar
- L76 `metadata` — Vital Flow — Dr. Mandeep Sagar
- L99 `data-string` — Vital Flow — Dr. Mandeep Sagar

## src/routes/{-$locale}.testimonials.tsx

- L51 `jsx-text` — &ldquo;

