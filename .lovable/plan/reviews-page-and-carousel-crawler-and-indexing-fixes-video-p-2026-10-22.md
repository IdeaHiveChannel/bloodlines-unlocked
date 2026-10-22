# Reviews page and carousel, crawler and indexing fixes, video, performance

The current look, content, animations, navigation, English/Malayalam versions and working addresses all stay as they are.

## Already confirmed (live check)
- The live robots file allows OAI-SearchBot, GPTBot, ChatGPT-User, Googlebot, Bingbot and PerplexityBot. Requests sent as OAI-SearchBot got normal pages (200), so nothing on the hosting side blocked them. This was only tested from one network; OpenAI's real crawler addresses can't be reproduced here.

## 1. "Share Your Experience" page (/reviews and /ml/reviews)
- Visit type, a searchable condition list (only conditions the site already covers, plus "Other" with free text and "Prefer not to say"), a 1–5 star rating (any rating can continue), and the question "How was your experience…".
- A live preview the patient can fully edit. It starts with a plain factual opening line ("I consulted Dr. Mandeep Sagar regarding …") and never adds praise or outcomes. The condition is only included if the patient ticks the box, which starts unticked.
- "Copy My Review" copies the final edited text. "Continue to Google Reviews" opens the Google review link, with a note that the patient signs in and posts the review themselves.
- Nothing the patient types is saved, tracked or added to the web address.
- A discreet link is added under "For patients" in the menu and in the footer.

## 2. QR code and poster
- A real QR code pointing to https://vascularcaredr.com/reviews (www redirects there), saved as a PNG plus a print-ready A4 poster in Files.
- The QR code will be scan-tested once the page is live.

## 3. "Patient Experiences" carousel on the homepage
- Placed after the patient journey section, before the consultation section. It shows 3 cards on desktop, 2 on tablet and 1 on mobile, moves one card every 5 seconds, and pauses when hovered, touched or scrolled off screen. It has previous/next buttons and swipe on mobile, and stays still for visitors who turn off motion.
- **Blocked on real reviews:** no Google Business Profile is connected and no review data has been supplied. Until it is, the section shows only a "Share your experience" call to action, with no made-up reviews. Once you connect the Google Business Profile, it will show genuine reviews with name, stars, date and Google attribution, pulled behind the scenes and refreshed periodically.

## 4. Robots file and ChatGPT crawling
- Keep the open allow-all policy and the sitemap line. Add Perplexity-User and other legitimate assistant crawlers. Give you the complete file in chat.
- Confirm that every public page includes its main text in the first page load, not only after animations run.

## 5. The 38 excluded pages (34 discovered but not indexed, 2 redirects, 2 other errors)
- Check every route against the sitemap, server response, canonical, robots tag and internal links.
- Inspect the sitemap pages in Search Console to identify the excluded ones.
- Leave correct redirects and real 404s alone. Fix only problems that are clearly shown, such as weak internal links. Pages that need a manual "Request indexing" go on a list for you, because that can't be done for you automatically.

## 6. Video indexing (14 videos "not on a watch page")
- Sort every video into one of three groups: standalone educational, supporting, or decorative animation.
- Only the four real procedure videos qualify for their own watch pages, each with a title, description, thumbnail, captions where possible and correct video data. No pages will be made for animations.

## 7. Performance and accessibility (targeted, no visual change)
- Font loading, discoverability of the main photo, lazy loading below the fold, image compression, caching, and smaller code bundles.
- Fixes for contrast, list structure, console errors and heavy animations.

## 8. Verify and publish
- Test English and Malayalam on desktop and mobile, plus the form, the copy button, the Google link, the menu, the 13 procedure animations, the body map and the 404 pages.
- Publish, then retest the live site and scan the QR code.
- Final report. It won't claim anything about indexing, crawling or reviews being posted unless there is evidence.

## Needs you
- Connect the Google Business Profile, or supply authorised review text, so the carousel can show real reviews.
- Medical sign-off and the credentials items from earlier remain open.
