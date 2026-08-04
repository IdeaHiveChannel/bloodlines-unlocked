# Bilingual site: English + Malayalam

Add a Malayalam version of the entire site, served at `/ml/...` URLs, with an EN / ML toggle in the header. English stays exactly as it is today at the current URLs.

## What the visitor sees

- A small **EN | മലയാളം** toggle in the header (and in the mobile menu). Selecting Malayalam moves to the same page under `/ml` — `/diseases/stroke` becomes `/ml/diseases/stroke`.
- Every word on the Malayalam side is Malayalam: navigation, buttons, form labels and validation messages, page headings, all 14 disease guides, condition and procedure pages, patient stories, media, second opinion, contact and footer.
- The chosen language is remembered, so a returning visitor lands in the language they last used.
- Malayalam text uses a proper Malayalam webfont (Noto Sans Malayalam) with slightly relaxed line height, since Malayalam glyphs are taller than Latin.
- The consultation and second-opinion forms compose their WhatsApp / email message in Malayalam when Malayalam is selected.

## Structure

```text
/                     -> English home
/diseases/stroke      -> English guide
/ml                   -> Malayalam home
/ml/diseases/stroke   -> Malayalam guide
```

Both versions declare each other with `hreflang` tags, both are listed in the sitemap, and Malayalam pages get their own Malayalam titles, descriptions and social previews.

## How it is built

1. **Locale plumbing** — a `LocaleProvider` reading the locale from the route, a `useLocale()` hook, and a `localePath()` helper so every `Link` in shared components points at the right prefix. Header, footer and contact dock become locale-aware.
2. **Route mirrors** — thin `ml.*.tsx` route files mirroring each existing route (home, about, expertise, media, resources, testimonials, second-opinion, contact, diseases index + `$slug`, conditions index + `$slug`, procedures index + `$slug`). Each renders the same page component with `locale="ml"`, and supplies Malayalam `head()` metadata. No page markup is duplicated.
3. **UI string catalogue** — `src/lib/i18n/en.ts` and `src/lib/i18n/ml.ts` for every label, button, section heading and form message currently hardcoded in components. Components switch to `t("...")`.
4. **Content translation** — the data files (`pillars/*`, `content.ts`, `stories.ts`, `press.ts`) get a parallel Malayalam field per translatable string, typed so a missing translation is a build-time error. I author the Malayalam medical copy: plain patient-facing Malayalam, with the English procedure/device name kept in brackets on first mention where the Malayalam term would be unfamiliar.
5. **SEO** — `hreflang` alternates on every page, `/ml` URLs added to `sitemap.xml`, `og:locale` set per language.

## Sequencing

Because the site holds roughly 2,800 lines of medical copy, the translation lands in stages so you can review as it goes:

1. Plumbing, toggle, routes, font, and all UI strings — the Malayalam site is fully navigable, with guide bodies still English.
2. Home, about, contact, second opinion, expertise, resources, media, testimonials.
3. The 14 disease guides, a few at a time.
4. Conditions and procedures catalogue entries.

## Note on accuracy

I will write careful, patient-friendly Malayalam, but this is medical content — before publishing, a Malayalam-speaking reviewer (ideally Dr. Sagar or his staff) should read through the disease guides, since a mistranslated symptom or warning sign carries real risk.
