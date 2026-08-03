import { createFileRoute, Link } from "@tanstack/react-router";
import { procedures } from "../lib/content";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/procedures/")({
  head: () => ({
    meta: [
      { title: "Procedures — Dr. Mandeep Sagar" },
      { name: "description", content: "Image-guided vascular and neurointerventional procedures, told beat by beat." },
      { property: "og:title", content: "Procedures" },
      { property: "og:description", content: "Angioplasty, thrombectomy, aneurysm repair, vein ablation — every procedure as a story." },
    ],
  }),
  component: ProceduresIndex,
});

function ProceduresIndex() {
  return (
    <>
      <main className="bg-[#050B16] pt-28 pb-20 sm:pt-36 sm:pb-24">
        <div className="shell">
          <p className="text-label">Index</p>
          <h1 className="mt-4 max-w-3xl text-display-xl sm:mt-6">Procedures.</h1>
          <div className="mt-10 divide-y sm:mt-16 divide-white/[0.06] border-y border-white/[0.06]">
            {procedures.map((p) => (
              <Link key={p.slug} to="/procedures/$slug" params={{ slug: p.slug }} data-cursor="link"
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-2 py-6 transition-colors hover:bg-white/[0.02] sm:grid-cols-[70px_minmax(0,1fr)_auto] sm:gap-6 sm:py-8">
                <span className="hidden text-label sm:block">{p.slug.slice(0, 3).toUpperCase()}</span>
                <div className="min-w-0">
                  <h3 className="text-h3">{p.name}</h3>
                  <p className="mt-2 text-caption text-[var(--ink-dim)]">{p.oneLiner}</p>
                </div>
                <span className="shrink-0 text-label transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
