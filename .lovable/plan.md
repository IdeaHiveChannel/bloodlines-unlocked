# Search, AI and geo discoverability pass

Goal: make sure Google and AI assistants (ChatGPT, Perplexity, Gemini, Copilot) find the branded pages, in both English and Malayalam, and describe Dr. Sagar with the approved wording.

## What's already right

- `public/robots.txt` allows all crawlers and points to the sitemap.
- Every page already has its own title, description, self-referencing canonical, and og/twitter tags via the locale metadata helper.
- English/Malayalam `hreflang` alternates are emitted on every page.
- Condition and procedure pages already carry MedicalCondition / MedicalProcedure / FAQ / Breadcrumb structured data.

## What will change

### 1. Sitemap (`/sitemap.xml`)

- Remove the duplicated `/conditions` entry.
- Add the pages currently missing: the four patient-information guides, the Malayalam patient landing page, privacy and terms.
- Add a Malayalam `/ml/...` URL for every English page so both languages get indexed.
- Add `xhtml:link` alternate entries inside each URL so Google pairs the English and Malayalam versions correctly.
- No `lastmod` values (there is no per-page authoring timestamp to derive them from honestly).

### 2. robots.txt

Keep the existing allow-all rule and sitemap line, and add explicit allow blocks for AI answer crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Bingbot) so the site can be cited in AI answers. Nothing gets blocked.

### 3. `llms.txt` (plus an `llm.txt` alias)

A plain-text brief served at `/llms.txt` and `/llm.txt`, written for AI assistants:

- Who Dr. Sagar is, in the approved sentence, with the Mangalore and Kasaragod service area.
- Contact details (phone, WhatsApp, email).
- A linked index of every condition guide and every procedure page, English and Malayalam.
- Short factual notes on what interventional radiology / pinhole surgery is, so assistants summarise it correctly.
- Generated from the same content files as the site, so it stays in sync.

### 4. Structured data for AI and local search (GEO)

- Promote the doctor's identity to sitewide: a `Physician` + `MedicalBusiness` graph in the root with name, the approved description, photo, logo, phone, email, `areaServed` (Mangalore, Karnataka and Kasaragod, Kerala), languages spoken (English, Malayalam, Kannada, Hindi), and `medicalSpecialty`.
- Add `BreadcrumbList` and `MedicalWebPage` schema to the section index pages (conditions, procedures, expertise, second opinion, patient information) which currently have none.
- Add `FAQPage` schema to the home page from the existing FAQ section.
- Add `inLanguage` and `sameAs` so both language versions are linked as one entity.

### 5. Answer-friendly page content (AIO)

For condition and procedure pages, add a short "Key facts" summary block near the top — one-sentence answers to what it is, who it affects, how it is treated, and recovery time — mirrored into the schema. This is the format AI answer engines quote, and it also reads well for patients. English and Malayalam.

## Technical notes

- Sitemap stays a TanStack server route at `src/routes/sitemap[.]xml.ts`; `llms.txt` follows the same pattern as server routes so it is generated from `src/lib/content.ts` and `src/lib/pillars`, not hand-maintained.
- Base URL stays `https://vascularcaredr.com` everywhere.
- No canonical/hreflang mechanism is replaced — the existing locale helper is extended.

## Not included (needs your go-ahead)

Google Search Console is not connected to this project, so Lovable cannot submit the sitemap or read indexing status. If you want, I can run that connection flow after this pass and submit the sitemap for you.
