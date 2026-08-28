import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../components/locale-link";
import { createFileRoute, notFound } from "@tanstack/react-router";

import { getProcedure } from "../lib/i18n/data";
import type { Procedure } from "../lib/content";
import { procedureVideos } from "../lib/media";
import { ProcedureVideo } from "../components/procedures/ProcedureVideo";
import { Footer } from "../components/sections/Footer";
import { Consultation } from "../components/sections/Consultation";
import { procedureSeoFor } from "../lib/seo/procedure-seo";
import { getConditions } from "../lib/i18n/data";
import { localePath } from "../lib/i18n";
import { useLocale } from "../lib/i18n/react";

const SITE = "https://vascularcaredr.com";

export const Route = createFileRoute("/{-$locale}/procedures/$slug")({
  head: ({ params }) => {
    const locale = params.locale === "ml" ? ("ml" as const) : ("en" as const);
    const p = getProcedure(params.slug, locale);
    const url = `${SITE}${locale === "ml" ? "/ml" : ""}/procedures/${params.slug}`;
    const name = p?.name ?? "Procedure not catalogued";
    const seo = procedureSeoFor(params.slug);
    const intro = seo ? (locale === "ml" ? seo.searchIntroMl : seo.searchIntro) : undefined;
    const line = (intro ?? p?.oneLiner ?? "This procedure is not in the catalogue.").slice(0, 158);
    const faqs = (seo?.faqs ?? []).map((f) => (locale === "ml" ? { q: f.qMl, a: f.aMl } : { q: f.q, a: f.a }));
    return {
      meta: [
        { title: `${name} — Dr. Mandeep Sagar`.slice(0, 60) },
        { name: "description", content: line },
        { property: "og:title", content: `${name} — image-guided procedure` },
        { property: "og:description", content: line },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: locale === "ml" ? "ml_IN" : "en_IN" },
        { property: "og:url", content: url },
        { name: "robots", content: p ? "index,follow" : "noindex" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalProcedure",
                name: p.name,
                description: intro ?? p.oneLiner,
                url,
                procedureType: "https://schema.org/PercutaneousProcedure",
                howPerformed: p.beats.join(" "),
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}${localePath("/", locale)}` },
                  { "@type": "ListItem", position: 2, name: "Treatments", item: `${SITE}${localePath("/procedures", locale)}` },
                  { "@type": "ListItem", position: 3, name: p.name, item: url },
                ],
              }),
            },
            ...(faqs.length
              ? [
                  {
                    type: "application/ld+json",
                    children: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      mainEntity: faqs.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: { "@type": "Answer", text: f.a },
                      })),
                    }),
                  },
                ]
              : []),
          ]
        : [],
    };
  },
  loader: ({ params }): Procedure => {
    const p = getProcedure(params.slug, params.locale === "ml" ? "ml" : "en");
    if (!p) throw notFound();
    return p;
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6">
      <LocaleLink to="/procedures" className="underline" data-cursor="link">All procedures</LocaleLink>
    </div>
  ),
  errorComponent: ({ reset }) => <button onClick={reset} className="m-10 underline">Try again</button>,
  component: ProcedurePage,
});

function ProcedurePage() {
  const tx = useTx();
  const p = Route.useLoaderData() as Procedure;
  const locale = useLocale();
  const isMl = locale === "ml";
  const seo = procedureSeoFor(p.slug);
  const conditions = getConditions(locale);
  const usedFor = seo ? (isMl ? seo.usedForMl : seo.usedFor) : [];
  const faqs = (seo?.faqs ?? []).map((f) => (isMl ? { q: f.qMl, a: f.aMl } : { q: f.q, a: f.a }));
  const linkedConditions = (seo?.conditions ?? [])
    .map((slug) => conditions.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const video = procedureVideos[p.slug];
  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16]">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <LocaleLink to="/procedures" className="text-label" data-cursor="link">{tx("← All procedures")}</LocaleLink>
          <h1 className="text-display-xl mt-8">{p.name}</h1>
          <p className="mt-6 text-body text-[var(--ink-dim)]">{p.oneLiner}</p>
          {seo && (
            <div className="mt-8 space-y-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <p className="text-small leading-relaxed">{isMl ? seo.searchIntroMl : seo.searchIntro}</p>
              <p className="text-small leading-relaxed text-[var(--ink-dim)]">
                <span className="text-label text-[var(--accent)]">{tx("What patients call it")}</span>
                <br />
                {isMl ? seo.patientTermMl : seo.patientTerm}
              </p>
            </div>
          )}
          {usedFor.length > 0 && (
            <section className="mt-12">
              <h2 className="text-h2">{tx("Used for")}</h2>
              <ul className="mt-5 space-y-2">
                {usedFor.map((u) => (
                  <li key={u} className="text-small leading-relaxed text-[var(--ink-dim)]">— {u}</li>
                ))}
              </ul>
              {linkedConditions.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {linkedConditions.map((c) => (
                    <LocaleLink
                      key={c.slug}
                      to="/conditions/$slug"
                      params={{ slug: c.slug }}
                      className="rounded-full border border-white/[0.12] px-4 py-2 text-label"
                      data-cursor="link"
                    >
                      {c.name}
                    </LocaleLink>
                  ))}
                </div>
              )}
            </section>
          )}
          {video && <ProcedureVideo video={video} />}
          {p.info && (
            <div className="mt-16 space-y-16">
              <section>
                <h2 className="text-h2">{tx("Symptoms & Causes")}</h2>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-label text-[var(--accent)]">{tx("Symptoms")}</h3>
                    <ul className="space-y-2">
                      {p.info.symptoms.map(s => <li key={s} className="text-small text-[var(--ink-dim)]">— {s}</li>)}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-label text-[var(--accent)]">{tx("Common Causes")}</h3>
                    <ul className="space-y-2">
                      {p.info.causes.map(c => <li key={c} className="text-small text-[var(--ink-dim)]">— {c}</li>)}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-h2">{tx("Diagnosis & Treatment")}</h2>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-label text-[var(--accent)]">{tx("How it is diagnosed")}</h3>
                    <ul className="space-y-2">
                      {p.info.diagnosis.map(d => <li key={d} className="text-small text-[var(--ink-dim)]">— {d}</li>)}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-label text-[var(--accent)]">{tx("The Procedure")}</h3>
                    <ul className="space-y-2">
                      {p.info.treatment.map(t => <li key={t} className="text-small text-[var(--ink-dim)]">— {t}</li>)}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-h2">{tx("Recovery & Benefits")}</h2>
                <div className="mt-6 space-y-4">
                   <ul className="grid gap-3 sm:grid-cols-2">
                    {p.info.recovery.map(r => (
                      <li key={r} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-small text-[var(--ink-dim)]">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          )}

          <section className="mt-20">
            <h2 className="text-h2">{tx("Procedure sequence")}</h2>
            <ol className="mt-10 space-y-10">
              {p.beats.map((b: string, i: number) => (
                <li key={i} className="grid grid-cols-[44px_minmax(0,1fr)] gap-4 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-6">
                  <span className="text-label pt-2">0{i + 1}</span>
                  <p className="text-card-title">{b}</p>
                </li>
              ))}
            </ol>
          </section>

          {faqs.length > 0 && (
            <section className="mt-20">
              <h2 className="text-h2">{tx("Questions patients ask")}</h2>
              <div className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {faqs.map((f) => (
                  <details key={f.q} className="group py-5" data-cursor="link">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-body leading-snug marker:hidden">
                      <span>{f.q}</span>
                      <span className="mt-1 shrink-0 text-[var(--ink-dim)] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-small leading-relaxed text-[var(--ink-dim)]">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
          <div className="mt-14 flex flex-wrap gap-3">
            <LocaleLink to="/second-opinion" className="rounded-full border border-white/[0.12] px-5 py-3 text-button" data-cursor="link">
              {tx("Get a second opinion")}
            </LocaleLink>
            <LocaleLink to="/contact" className="rounded-full bg-white px-5 py-3 text-button text-black" data-cursor="cta">
              {tx("Book consultation")}
            </LocaleLink>
          </div>
        </div>
      </main>
      <Consultation />
      <Footer />
    </>
  );
}
