import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { conditions, procedures, resourcesForCondition } from "../lib/content";
import { pillarForCondition } from "../lib/pillars";
import { Footer } from "../components/sections/Footer";
import { Consultation } from "../components/sections/Consultation";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/conditions/$slug")({
  head: ({ params }) => {
    const c = conditions.find((x) => x.slug === params.slug);
    const url = `${SITE}/conditions/${params.slug}`;
    return {
      meta: [
        { title: `${c!.name} — treatment | Dr. Mandeep Sagar`.slice(0, 60) },
        { name: "description", content: c!.intro.slice(0, 158) },
        { property: "og:title", content: `${c!.name} — image-guided treatment` },
        { property: "og:description", content: c!.intro.slice(0, 158) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  loader: ({ params }) => {
    const c = conditions.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return c;
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-label">Not found</p>
        <h1 className="text-h2 mt-4">This condition isn't catalogued yet.</h1>
        <Link to="/conditions" className="mt-8 inline-block underline" data-cursor="link">All conditions</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <button onClick={reset} className="underline">Try again</button>
      <pre className="hidden">{String(error)}</pre>
    </div>
  ),
  component: ConditionPage,
});

function ConditionPage() {
  const c = Route.useLoaderData();
  const guide = pillarForCondition(c.slug);
  const related = resourcesForCondition(c.slug);
  const relatedProcedures = procedures.filter((p) =>
    c.treatments.some(
      (t: string) =>
        t.toLowerCase().includes(p.name.split(" ")[0].toLowerCase()) ||
        p.name.toLowerCase().includes(t.split(" ")[0].toLowerCase()),
    ),
  );
  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16]">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <Link to="/conditions" className="text-label" data-cursor="link">← All conditions</Link>
          <h1 className="text-display-xl mt-8">{c!.name}</h1>
          <p className="mt-8 text-body leading-relaxed text-[var(--ink-dim)]">{c!.intro}</p>

          {guide && (
            <Link
              to="/diseases/$slug"
              params={{ slug: guide.slug }}
              data-cursor="link"
              className="mt-10 flex items-center justify-between gap-6 rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent)]/[0.05] px-6 py-5 transition-colors hover:bg-[var(--accent)]/[0.09]"
            >
              <span>
                <span className="block text-label text-[var(--accent)]">Complete guide</span>
                <span className="mt-2 block text-display text-xl">{guide.title}</span>
                <span className="mt-1 block text-caption text-[var(--ink-dim)]">
                  Symptoms, tests, every treatment route, recovery and {guide.faqs.length} answered questions.
                </span>
              </span>
              <span className="text-label">→</span>
            </Link>
          )}

          <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            <div className="bg-[#050B16] p-8">
              <p className="text-label">Symptoms</p>
              <ul className="mt-4 space-y-2 text-small">
                {c.symptoms.map((s: string) => <li key={s}>· {s}</li>)}
              </ul>
            </div>
            <div className="bg-[#050B16] p-8">
              <p className="text-label">Treatments offered</p>
              <ul className="mt-4 space-y-2 text-small">
                {c.treatments.map((t: string) => <li key={t}>· {t}</li>)}
              </ul>
            </div>
          </div>

          {(relatedProcedures.length > 0 || related.length > 0) && (
            <div className="mt-20">
              <p className="text-label">Related</p>
              <ul className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {relatedProcedures.map((p) => (
                  <li key={p.slug}>
                    <Link to="/procedures/$slug" params={{ slug: p.slug }} data-cursor="link"
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-2 py-4 sm:grid-cols-[110px_minmax(0,1fr)_auto] sm:gap-6 sm:py-5 hover:bg-white/[0.02] transition-colors">
                      <span className="text-label">Procedure</span>
                      <div>
                        <p className="text-display text-xl">{p.name}</p>
                        <p className="mt-1 text-caption text-[var(--ink-dim)]">{p.oneLiner}</p>
                      </div>
                      <span className="text-label">→</span>
                    </Link>
                  </li>
                ))}
                {related.map((r) =>
                  r.procedure ? (
                    <li key={r.id}>
                      <Link to="/procedures/$slug" params={{ slug: r.procedure }} data-cursor="link"
                        className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-2 py-4 sm:grid-cols-[110px_minmax(0,1fr)_auto] sm:gap-6 sm:py-5 hover:bg-white/[0.02] transition-colors">
                        <span className="text-label">{r.kind}</span>
                        <div>
                          <p className="text-display text-xl">{r.title}</p>
                          <p className="mt-1 text-caption text-[var(--ink-dim)]">{r.text}</p>
                        </div>
                        <span className="text-label">→</span>
                      </Link>
                    </li>
                  ) : (
                    <li key={r.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-2 py-4 sm:grid-cols-[110px_minmax(0,1fr)_auto] sm:gap-6 sm:py-5">
                      <span className="text-label">{r.kind}</span>
                      <div>
                        <p className="text-display text-xl">{r.title}</p>
                        <p className="mt-1 text-caption text-[var(--ink-dim)]">{r.text}</p>
                      </div>
                      <span />
                    </li>
                  ),
                )}
              </ul>
            </div>
          )}
        </div>
      </main>
      <Consultation />
      <Footer />
    </>
  );
}
