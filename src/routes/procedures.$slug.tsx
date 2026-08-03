import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { procedures } from "../lib/content";
import { procedureVideos } from "../lib/media";
import { ProcedureVideo } from "../components/procedures/ProcedureVideo";
import { Footer } from "../components/sections/Footer";
import { Consultation } from "../components/sections/Consultation";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/procedures/$slug")({
  head: ({ params }) => {
    const p = procedures.find((x) => x.slug === params.slug);
    const url = `${SITE}/procedures/${params.slug}`;
    if (!p) {
      return {
        meta: [
          { title: "Procedure not catalogued — Dr. Mandeep Sagar" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${p.name} — Dr. Mandeep Sagar`.slice(0, 60) },
        { name: "description", content: p.oneLiner.slice(0, 158) },
        { property: "og:title", content: `${p.name} — image-guided procedure` },
        { property: "og:description", content: p.oneLiner.slice(0, 158) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
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
  const video = procedureVideos[p.slug];
  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16]">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <Link to="/procedures" className="text-label" data-cursor="link">← All procedures</Link>
          <h1 className="text-display-xl mt-8">{p.name}</h1>
          <p className="mt-6 text-body text-[var(--ink-dim)]">{p.oneLiner}</p>
          {video && <ProcedureVideo video={video} />}
          <ol className="mt-16 space-y-10">
            {p.beats.map((b: string, i: number) => (
              <li key={i} className="grid grid-cols-[44px_minmax(0,1fr)] gap-4 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-6">
                <span className="text-label pt-2">0{i + 1}</span>
                <p className="text-card-title">{b}</p>
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
