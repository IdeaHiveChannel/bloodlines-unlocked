import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { procedures } from "../lib/content";
import { procedureVideos } from "../lib/media";
import { ProcedureVideo } from "../components/procedures/ProcedureVideo";
import { Footer } from "../components/sections/Footer";
import { Consultation } from "../components/sections/Consultation";

export const Route = createFileRoute("/procedures/$slug")({
  head: ({ params }) => {
    const p = procedures.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.name} — Dr. Mandeep Sagar` : "Procedure" },
        { name: "description", content: p?.oneLiner ?? "" },
        { property: "og:title", content: p?.name ?? "Procedure" },
        { property: "og:description", content: p?.oneLiner ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const p = procedures.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6">
      <Link to="/procedures" className="underline" data-cursor="link">All procedures</Link>
    </div>
  ),
  errorComponent: ({ reset }) => <button onClick={reset} className="m-10 underline">Try again</button>,
  component: ProcedurePage,
});

function ProcedurePage() {
  const p = Route.useLoaderData();
  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16]">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Link to="/procedures" className="text-label" data-cursor="link">← All procedures</Link>
          <h1 className="mt-8 text-display text-[clamp(2.4rem,6vw,5rem)]">{p.name}</h1>
          <p className="mt-6 text-[17px] text-[var(--ink-dim)]">{p.oneLiner}</p>
          <ol className="mt-16 space-y-10">
            {p.beats.map((b: string, i: number) => (
              <li key={i} className="grid grid-cols-[60px_1fr] gap-6">
                <span className="text-label pt-2">0{i + 1}</span>
                <p className="text-display text-2xl leading-snug">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <Consultation />
      <Footer />
    </>
  );
}
