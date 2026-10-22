# ChatGPT crawler check, 38 non-indexed pages, complete robots file

## Already confirmed (live check today)
- The live robots file explicitly allows OAI-SearchBot, GPTBot and ChatGPT-User, with nothing blocked.
- Requests sent as OAI-SearchBot to the robots file, homepage and stroke guide all returned 200, so the hosting layer is not blocking it. The only test was from this sandbox's network, though. OpenAI's own crawler IPs can't be fully simulated from here.

## What will be done
1. **Robots file:** review the live robots file. Add the remaining AI and search crawlers (Gemini/Google-Extended is already in, plus PerplexityBot's user-facing agent Perplexity-User, Meta-ExternalAgent, Amazonbot, DuckAssistBot, CCBot, YandexBot) with Allow rules. Keep `User-agent: * / Allow: /` and the sitemap line. Nothing will be blocked. Then give you the full final file in chat.
2. **38 non-indexed pages:** open the Search Console page-indexing report through the connected account and run URL Inspection on each sitemap page. Group the results by the reason Google gives, for example: crawled but not indexed, discovered but not indexed, duplicate or alternate canonical, redirect, or 404.
3. **Review the important pages one by one:** expertise, procedures and condition guides. For each, mark the reason as either normal (redirect variants, http/www duplicates, Malayalam alternates) or needing a fix.
4. **Fix list:** make only safe site fixes, such as wrong canonicals or missing internal links. Pages that need Google to recrawl them go on a short list for you to request indexing in Search Console yourself, because the API can't request indexing.

## Notes
- Google's API cannot export the exact "38 excluded" list. Inspecting each sitemap URL rebuilds that list, and the inspections count against a daily quota.
- Rankings and AI citations are not guaranteed.
