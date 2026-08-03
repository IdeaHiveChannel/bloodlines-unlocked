import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { pressEntries, pressKinds, groupByYear, type PressKind } from "../../lib/press";

export function MediaTimeline() {
  const [filter, setFilter] = useState<PressKind | "all">("all");

  const grouped = useMemo(
    () => groupByYear(filter === "all" ? pressEntries : pressEntries.filter((e) => e.kind === filter)),
    [filter],
  );

  return (
    <section className="relative bg-[#050B16] section-y">
      <div className="shell">
        <p className="text-label">Chapter 10 · Beyond the cath lab</p>
        <h1 className="text-display-xl mt-6 max-w-4xl">Media, publications and awards.</h1>
        <p className="mt-6 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
          Interventional radiology moves quickly. What follows is a record of the work outside the
          procedure room — peer-reviewed papers, conference talks, recognitions and press coverage.
          Entries are listed only once verified.
        </p>

        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
          {[{ key: "all" as const, label: "Everything" }, ...pressKinds].map((k) => {
            const active = filter === k.key;
            return (
              <button
                key={k.key}
                onClick={() => setFilter(k.key as PressKind | "all")}
                data-cursor="link"
                className={`min-h-11 rounded-full border px-4 text-button transition-colors sm:px-5 ${
                  active
                    ? "border-transparent bg-white text-black"
                    : "border-white/[0.1] text-[var(--ink-dim)] hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {k.label}
              </button>
            );
          })}
        </div>

        {grouped.length === 0 ? (
          <div className="mt-14 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
            <p className="text-label">Currently</p>
            <p className="text-card-title mt-4 max-w-2xl">
              This record is being compiled. Entries are added as each publication, award and
              appearance is verified — nothing is listed before then.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/expertise"
                data-cursor="cta"
                className="inline-flex min-h-11 items-center rounded-full bg-white px-6 text-button text-black transition-colors hover:bg-[var(--accent)]"
              >
                See clinical expertise
              </Link>
              <Link
                to="/resources"
                data-cursor="link"
                className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-6 text-button transition-colors hover:bg-white/5"
              >
                Patient resources
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative mt-14">
            <div className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-white/10 sm:block" />
            <div className="space-y-14">
              {grouped.map(([year, entries]) => (
                <div key={year} className="relative sm:pl-12">
                  <div className="absolute left-0 top-2 hidden size-4 items-center justify-center sm:flex">
                    <span className="size-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
                  </div>
                  <h2 className="text-label">{year}</h2>
                  <ul className="mt-5 space-y-px overflow-hidden rounded-2xl border border-white/[0.06]">
                    {entries.map((e, i) => (
                      <motion.li
                        key={`${e.title}-${i}`}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04] sm:p-6"
                      >
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="rounded-full border border-white/[0.1] px-3 py-1 text-caption uppercase tracking-[0.16em] text-[var(--accent)]">
                            {pressKinds.find((k) => k.key === e.kind)?.label ?? e.kind}
                          </span>
                          <span className="text-caption text-[var(--ink-dim)]">{e.outlet}</span>
                        </div>
                        <h3 className="text-card-title mt-3">{e.title}</h3>
                        <p className="mt-2 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
                          {e.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                          {e.url && (
                            <a
                              href={e.url}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="link"
                              className="text-label underline"
                            >
                              Read the source →
                            </a>
                          )}
                          {e.guide && (
                            <Link
                              to="/diseases/$slug"
                              params={{ slug: e.guide }}
                              data-cursor="link"
                              className="text-label underline"
                            >
                              Related guide →
                            </Link>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
