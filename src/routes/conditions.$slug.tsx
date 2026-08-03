import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { conditions, procedures, resourcesForCondition } from "../lib/content";
import { pillarForCondition } from "../lib/pillars";
import { Footer } from "../components/sections/Footer";
import { Consultation } from "../components/sections/Consultation";

export const Route = createFileRoute("/conditions/$slug")({
  head: ({ params }) => {
    const c = conditions.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: c ? `${c.name} — Dr. Mandeep Sagar` : "Condition" },
        { name: "description", content: c?.intro ?? "" },
        { property: "og:title", content: c ? `${c.name} — Treatment` : "Condition" },
        { property: "og:description", content: c?.intro ?? "" },
      ],
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
        <h1 className="text-display text-5xl mt-4">This condition isn't catalogued yet.</h1>
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
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Link to="/conditions" className="text-label" data-cursor="link">← All conditions</Link>
          <h1 className="mt-8 text-display text-[clamp(2.4rem,6vw,5rem)]">{c.name}</h1>
          <p className="mt-8 text-[17px] leading-relaxed text-[var(--ink-dim)]">{c.intro}</p>

          <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            <div className="bg-[#050B16] p-8">
              <p className="text-label">Symptoms</p>
              <ul className="mt-4 space-y-2 text-[14px]">
                {c.symptoms.map((s: string) => <li key={s}>· {s}</li>)}
              </ul>
            </div>
            <div className="bg-[#050B16] p-8">
              <p className="text-label">Treatments offered</p>
              <ul className="mt-4 space-y-2 text-[14px]">
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
                      className="grid grid-cols-[110px_1fr_auto] items-center gap-6 px-2 py-5 hover:bg-white/[0.02] transition-colors">
                      <span className="text-label">Procedure</span>
                      <div>
                        <p className="text-display text-xl">{p.name}</p>
                        <p className="mt-1 text-[13px] text-[var(--ink-dim)]">{p.oneLiner}</p>
                      </div>
                      <span className="text-label">→</span>
                    </Link>
                  </li>
                ))}
                {related.map((r) =>
                  r.procedure ? (
                    <li key={r.id}>
                      <Link to="/procedures/$slug" params={{ slug: r.procedure }} data-cursor="link"
                        className="grid grid-cols-[110px_1fr_auto] items-center gap-6 px-2 py-5 hover:bg-white/[0.02] transition-colors">
                        <span className="text-label">{r.kind}</span>
                        <div>
                          <p className="text-display text-xl">{r.title}</p>
                          <p className="mt-1 text-[13px] text-[var(--ink-dim)]">{r.text}</p>
                        </div>
                        <span className="text-label">→</span>
                      </Link>
                    </li>
                  ) : (
                    <li key={r.id} className="grid grid-cols-[110px_1fr_auto] items-center gap-6 px-2 py-5">
                      <span className="text-label">{r.kind}</span>
                      <div>
                        <p className="text-display text-xl">{r.title}</p>
                        <p className="mt-1 text-[13px] text-[var(--ink-dim)]">{r.text}</p>
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
