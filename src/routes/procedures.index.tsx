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
      <main className="pt-36 pb-24 bg-[#050B16]">
        <div className="shell">
          <p className="text-label">Index</p>
          <h1 className="text-display-xl mt-6 max-w-3xl">Procedures.</h1>
          <div className="mt-16 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {procedures.map((p) => (
              <Link key={p.slug} to="/procedures/$slug" params={{ slug: p.slug }} data-cursor="link"
                className="group grid grid-cols-[80px_1fr_auto] items-center gap-6 py-8 hover:bg-white/[0.02] transition-colors px-2">
                <span className="text-label">{p.slug.slice(0,3).toUpperCase()}</span>
                <div>
                  <h3 className="text-h2">{p.name}</h3>
                  <p className="mt-2 text-[13px] text-[var(--ink-dim)]">{p.oneLiner}</p>
                </div>
                <span className="text-label group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
