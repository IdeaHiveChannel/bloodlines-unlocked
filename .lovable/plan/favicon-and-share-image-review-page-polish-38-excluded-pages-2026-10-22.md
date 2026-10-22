# Favicon and share image, review page polish, 38 excluded pages

## 1. New favicon and link-share picture (first)
- Use the uploaded transparent portrait of Dr. Sagar for the browser tab icon: cropped to head and shoulders, on the dark brand background, padded so it isn't stretched (64x64, plus a 180x180 version for phone home screens).
- Make a 1200x630 share card from the same portrait, with the name and "Vascular & Neuro Interventional Radiologist · Mangalore & Kasaragod". This is the picture WhatsApp, Facebook, LinkedIn and X show when someone shares the link.
- Point the share-image tags on every page at the full https://vascularcaredr.com address, so the picture appears reliably.
- WhatsApp and Google keep old previews for a while. After publishing, the preview can be refreshed in each platform's link-preview checker.

## 2. Review page: easy to use on mobile and laptop
- Mobile: one column, large tap targets (at least 44px), big star buttons, a condition list that's easy to search with one hand, a preview box that doesn't jump around, and "Copy" and "Continue to Google" buttons that stay within thumb reach at the bottom.
- Laptop: two columns, with the form on the left and a sticky live preview on the right.
- Clear step labels (1 Visit, 2 Rating, 3 Your words, 4 Post), a visible "Copied" confirmation, keyboard and screen-reader support, Malayalam text that doesn't overflow.
- Nothing typed is stored, same as now. The design style doesn't change.

## 3. The 38 excluded pages in Search Console
- Pull every URL Google reports as not indexed through the connected Search Console, and check each one individually (URL Inspection). The API doesn't give a full exclusion list, so I'll inspect every sitemap URL plus the old http, www and Lovable addresses.
- Build a table: URL, Google's reason (discovered but not indexed, redirect, 404, duplicate/canonical, other), whether that reason is expected, and the fix.
- Priority order: the 14 condition guides, then the 13 procedures, then about/expertise/second opinion, then Malayalam versions, then everything else.
- Fixes where the cause is clear, such as stronger internal links to weak guides, canonical or sitemap mismatches, and redirect chains. Correct redirects and genuine 404s stay as they are.
- "Request indexing" can't be done automatically, so you'll get a short list of the most important URLs to click in Search Console.

## 4. OpenAI and other AI crawlers (from your two files)
- Check the live robots file against both files. OAI-SearchBot, GPTBot and ChatGPT-User are allowed already. Add the missing legitimate crawlers that are listed (Common Crawl CCBot, YandexBot, DuckDuckBot) with no duplicate rules, and no OAI-AdsBot.
- Check access from OpenAI's official IP-range files, read fresh rather than hardcoded. Hosting firewall settings can only be tested from outside, so I'll say what was and wasn't confirmed.
- Confirm every public page returns 200, has no noindex tag, has its own canonical, is in the sitemap, and shows its main text in the first page load.

## 5. Verify and publish
- Test the favicon, the share tags (fetched as a crawler would), and the review page at 390px and 1280px in English and Malayalam. Then publish and retest live.

## Technical notes
- Generate the favicon and share card from the upload with image tools into `public/favicon.png`, `public/apple-touch-icon.png` and `public/og-card.jpg`. Set the root og:image and twitter:image to the absolute URL, and keep the JSON-LD logo URL.
- Edit only the layout and classes of the review route. Its logic stays the same.
- Use the Search Console URL Inspection API on property sc-domain:vascularcaredr.com, in batches, stopping on 403/429.
