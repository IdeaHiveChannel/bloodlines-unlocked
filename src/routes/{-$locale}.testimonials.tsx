import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../components/locale-link";
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/sections/Footer";
import { patientStories, consentNote } from "../lib/stories";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/{-$locale}/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient stories — Dr. Mandeep Sagar" },
      { name: "description", content: "Verified patient experiences of image-guided vascular and neurointerventional care, published only with written consent." },
      { property: "og:title", content: "Patient stories — Dr. Mandeep Sagar" },
      { property: "og:description", content: "Verified accounts from patients treated through image-guided intervention, published only with written consent." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/testimonials` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/testimonials` }],
  }),
  component: Testimonials,
});

function Testimonials() {
  const tx = useTx();
  const stories = patientStories;
  return (
    <>
      <main className="min-h-screen bg-[#050B16] pb-24 pt-32 sm:pt-36">
        <div className="shell">
          <p className="text-label">{tx("Chapter 09 · Patient care today")}</p>
          <h1 className="text-display-xl mt-6 max-w-4xl">{tx("Patient stories.")}</h1>
          <p className="mt-8 max-w-2xl text-body leading-relaxed text-[var(--ink-dim)]">{consentNote}</p>

          {stories.length === 0 ? (
            <div className="mt-14 max-w-3xl rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
              <p className="text-label">{tx("Currently")}</p>
              <p className="text-card-title mt-4">
                {tx("No stories are published yet. Until they are, this page stays empty rather than filled.")}
              </p>
              <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
                <LocaleLink to="/contact" data-cursor="cta"
                  className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-button text-black transition-colors hover:bg-[var(--accent)]">
                  {tx("Book consultation")}
                </LocaleLink>
                <LocaleLink to="/second-opinion" data-cursor="link"
                  className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 text-button transition-colors hover:bg-white/5">
                  {tx("Request a second opinion")}
                </LocaleLink>
              </div>
            </div>
          ) : (
            <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {stories.map((s, i) => (
                <li key={`${s.name}-${i}`} className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
                  <span aria-hidden className="text-h2 leading-none text-[color-mix(in_oklab,var(--accent)_60%,transparent)]">{tx("&ldquo;")}</span>
                  <blockquote className="mt-3 flex-1 text-small leading-relaxed text-[var(--ink)]">{s.quote}</blockquote>
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="text-card-title">{s.name}</p>
                    <p className="mt-1 text-caption text-[var(--ink-dim)]">
                      {s.condition} · {s.city}{s.year ? ` · ${s.year}` : ""}
                    </p>
                    {s.guide ? (
                      <LocaleLink to="/diseases/$slug" params={{ slug: s.guide }} data-cursor="link" className="mt-3 inline-block text-label underline">
                        {tx("Read the case guide →")}
                      </LocaleLink>
                    {tx(") : s.conditionSlug ? (")}
                      <LocaleLink to="/conditions/$slug" params={{ slug: s.conditionSlug }} data-cursor="link" className="mt-3 inline-block text-label underline">
                        {tx("About this condition →")}
                      </LocaleLink>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
