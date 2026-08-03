import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { conditions, procedures, resources } from "../lib/content";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Dr. Mandeep Sagar" },
      { name: "description", content: "Search conditions, procedures, animated films, patient guides and recovery notes." },
      { property: "og:title", content: "Patient Resources" },
      { property: "og:description", content: "Educational material on vascular and neurointerventional care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resources,
});

type Item = {
  type: string;
  name: string;
  text: string;
  to: "/conditions/$slug" | "/procedures/$slug" | "/resources";
  params?: { slug: string };
  disabled?: boolean;
};

const chips = ["All", "Condition", "Procedure", "Video", "Patient guide", "FAQ", "Recovery"] as const;

function Resources() {
  const [q, setQ] = useState("");
  const [chip, setChip] = useState<(typeof chips)[number]>("All");

  const items = useMemo<Item[]>(() => {
    const all: Item[] = [
      ...conditions.map((c) => ({
        type: "Condition", name: c.name, text: c.intro,
        to: "/conditions/$slug" as const, params: { slug: c.slug },
      })),
      ...procedures.map((p) => ({
        type: "Procedure", name: p.name, text: p.oneLiner,
        to: "/procedures/$slug" as const, params: { slug: p.slug },
      })),
      ...resources.map((r) =>
        r.procedure
          ? { type: r.kind, name: r.title, text: r.text, to: "/procedures/$slug" as const, params: { slug: r.procedure } }
          : { type: r.kind, name: r.title, text: r.text, to: "/resources" as const, disabled: true },
      ),
    ];
    const s = q.trim().toLowerCase();
    return all.filter((i) => {
      if (chip !== "All" && i.type !== chip) return false;
      if (!s) return true;
      return i.name.toLowerCase().includes(s) || i.text.toLowerCase().includes(s);
    });
  }, [q, chip]);

  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16] min-h-screen">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <p className="text-label">Patient Education</p>
          <h1 className="text-display-xl mt-6">Resources.</h1>
          <div className="mt-10 relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ink-dim)]" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a symptom, condition, or procedure"
              data-cursor="link"
              className="w-full rounded-full border border-white/15 bg-white/[0.02] pl-11 pr-6 py-4 text-small focus:outline-none focus:border-[var(--accent)] transition-colors" />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((c) => (
              <button key={c} type="button" data-cursor="link" onClick={() => setChip(c)}
                className={`rounded-full border px-4 py-2 text-caption tracking-wide transition-colors ${
                  chip === c
                    ? "border-transparent bg-white text-black"
                    : "border-white/15 text-[var(--ink-dim)] hover:bg-white/5"
                }`}>
                {c}
              </button>
            ))}
          </div>
          <ul className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {items.map((i) => {
              const body = (
                <>
                  <span className="text-label">{i.type}</span>
                  <div>
                    <p className="text-card-title">{i.name}</p>
                    <p className="mt-1 text-caption text-[var(--ink-dim)] line-clamp-1">{i.text}</p>
                  </div>
                  <span className="text-label">{i.disabled ? "" : "→"}</span>
                </>
              );
              const cls = "grid grid-cols-[100px_1fr_auto] items-center gap-6 py-6 px-2 transition-colors";
              return (
                <li key={i.type + i.name}>
                  {i.disabled ? (
                    <div className={cls}>{body}</div>
                  ) : (
                    <Link to={i.to} params={i.params} data-cursor="link" className={`${cls} hover:bg-white/[0.02]`}>
                      {body}
                    </Link>
                  )}
                </li>
              );
            })}
            {items.length === 0 && <li className="py-10 text-[var(--ink-dim)] text-sm">Nothing matched. Try a broader term.</li>}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
