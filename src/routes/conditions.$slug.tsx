import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { conditions } from "../lib/content";
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
        <p className="text-mono-label">Not found</p>
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
  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16]">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Link to="/conditions" className="text-mono-label" data-cursor="link">← All conditions</Link>
          <h1 className="mt-8 text-display text-[clamp(2.4rem,6vw,5rem)]">{c.name}</h1>
          <p className="mt-8 text-[17px] leading-relaxed text-[var(--ink-dim)]">{c.intro}</p>

          <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            <div className="bg-[#050B16] p-8">
              <p className="text-mono-label">Symptoms</p>
              <ul className="mt-4 space-y-2 text-[14px]">
                {c.symptoms.map((s) => <li key={s}>· {s}</li>)}
              </ul>
            </div>
            <div className="bg-[#050B16] p-8">
              <p className="text-mono-label">Treatments offered</p>
              <ul className="mt-4 space-y-2 text-[14px]">
                {c.treatments.map((t) => <li key={t}>· {t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Consultation />
      <Footer />
    </>
  );
}
