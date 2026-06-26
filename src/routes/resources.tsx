import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { conditions, procedures } from "../lib/content";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Dr. Mandeep Sagar" },
      { name: "description", content: "Search conditions, procedures, and patient education." },
      { property: "og:title", content: "Patient Resources" },
      { property: "og:description", content: "Educational material on vascular and neurointerventional care." },
    ],
  }),
  component: Resources,
});

function Resources() {
  const [q, setQ] = useState("");
  const items = useMemo(() => {
    const all = [
      ...conditions.map(c => ({ type: "Condition", name: c.name, text: c.intro, to: "/conditions/$slug" as const, params: { slug: c.slug } })),
      ...procedures.map(p => ({ type: "Procedure", name: p.name, text: p.oneLiner, to: "/procedures/$slug" as const, params: { slug: p.slug } })),
    ];
    const s = q.trim().toLowerCase();
    if (!s) return all;
    return all.filter(i => i.name.toLowerCase().includes(s) || i.text.toLowerCase().includes(s));
  }, [q]);
  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16] min-h-screen">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <p className="text-label">Patient Education</p>
          <h1 className="mt-6 text-display text-[clamp(2.4rem,6vw,5rem)]">Resources.</h1>
          <div className="mt-10 relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ink-dim)]" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a symptom, condition, or procedure"
              data-cursor="link"
              className="w-full rounded-full border border-white/15 bg-white/[0.02] pl-11 pr-6 py-4 text-[14px] focus:outline-none focus:border-[var(--accent)] transition-colors" />
          </div>
          <ul className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {items.map((i) => (
              <li key={i.type + i.name}>
                <Link to={i.to} params={i.params} data-cursor="link"
                  className="grid grid-cols-[100px_1fr_auto] items-center gap-6 py-6 hover:bg-white/[0.02] px-2 transition-colors">
                  <span className="text-label">{i.type}</span>
                  <div>
                    <p className="text-display text-2xl">{i.name}</p>
                    <p className="mt-1 text-[13px] text-[var(--ink-dim)] line-clamp-1">{i.text}</p>
                  </div>
                  <span className="text-label">→</span>
                </Link>
              </li>
            ))}
            {items.length === 0 && <li className="py-10 text-[var(--ink-dim)] text-sm">Nothing matched. Try a broader term.</li>}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
