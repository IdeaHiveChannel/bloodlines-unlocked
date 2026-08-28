# Replace Lovable branding with Dr. Mandeep Sagar branding

Goal: no Lovable-generated icon, preview image, or URL is used anywhere; search and share results show Dr. Sagar's own branding and the approved headline copy.

## 1. Brand icon (favicon)

- Derive a square icon from the existing transparent portrait of Dr. Mandeep Sagar (cropped to head/shoulders, dark brand background, padded not stretched).
- Save as `public/favicon.png`, reference it from the root route, and remove the default Lovable icon reference.

## 2. Share/preview image

- Build a 1200x630 branded card: Dr. Sagar's portrait on the dark brand background with the wordmark and:
  - "Vascular & Neuro Interventional Radiologist"
  - "in Mangalore & Kasaragod"
- Use it as `og:image` and `twitter:image` on the root route, replacing the current Lovable-preview screenshot URL.

## 3. Search-result copy

Replace the current generic "Vital Flow" title/description everywhere the site tells crawlers who this is:

- Title: `Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist in Mangalore & Kasaragod`
- Description: `Advanced image-guided treatment through minimally invasive procedures. Treating selected conditions affecting the blood vessels throughout the body, with Pin hole Surgery.`
- Applied to: root defaults (title, description, og:title, og:description, twitter:title, twitter:description, og:site_name), the home route head, and the WebSite JSON-LD name/description.
- Malayalam home copy stays in Malayalam, with the description reworded to match the same message.

## 4. Lovable URLs

- Replace the `bloodlines-unlocked.lovable.app` base used in `robots.txt`, `sitemap.xml`, and the metadata helper with `https://vascularcaredr.com`, so canonical, sitemap, and JSON-LD URLs all point at the real domain.

## 5. Lovable badge

- Turn off the "Edit with Lovable" badge on the published site.

## Technical notes

Files touched: `src/routes/__root.tsx`, `src/routes/{-$locale}.index.tsx`, `src/lib/i18n/meta.ts`, `src/routes/sitemap[.]xml.ts`, `public/robots.txt`, plus new `public/favicon.png` and an OG card asset. Error reporting in `src/lib/lovable-error-reporting.ts` is platform plumbing, not branding, and stays.

Note: Google and WhatsApp cache previews, so the new icon and card can take days to appear in existing results; they can be force-refreshed in each platform's link-preview debugger.
