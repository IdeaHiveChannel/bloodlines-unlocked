import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { conditions, type Condition } from "../../lib/content";

type Region = Condition["region"];

const regions: { id: Region; label: string; cx: number; cy: number; r: number }[] = [
  { id: "brain", label: "Brain", cx: 200, cy: 60, r: 38 },
  { id: "neck", label: "Carotid", cx: 200, cy: 130, r: 18 },
  { id: "chest", label: "Aorta", cx: 200, cy: 210, r: 28 },
  { id: "abdomen", label: "Abdomen", cx: 200, cy: 290, r: 30 },
  { id: "pelvis", label: "Pelvis", cx: 200, cy: 370, r: 28 },
  { id: "legs", label: "Lower limbs", cx: 200, cy: 510, r: 38 },
];

export function Anatomy() {
  const [active, setActive] = useState<Region>("legs");
  const list = conditions.filter((c) => c.region === active);

  return (
    <section className="relative bg-[#050B16] py-32 sm:py-40">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-label">Chapter 02 · Anatomy</p>
            <h2 className="mt-6 text-display text-[clamp(2.4rem,5vw,4.5rem)] max-w-2xl">
              Find where the disease lives.
            </h2>
          </div>
          <p className="text-[13px] text-[var(--ink-dim)] max-w-sm">
            Move over the body. Each region reveals the conditions treated through image-guided intervention.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Anatomy panel */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[2/3] w-full max-w-[460px] mx-auto rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden">
              <svg viewBox="0 0 400 600" className="absolute inset-0 h-full w-full">
                <defs>
                  <radialGradient id="bodyGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="color-mix(in oklab, var(--accent) 30%, transparent)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <ellipse cx="200" cy="300" rx="180" ry="280" fill="url(#bodyGlow)" opacity="0.4" />
                {/* Body silhouette */}
                <path d="M200,30 C220,30 235,45 235,65 C235,85 225,98 220,105 C220,120 235,128 250,140 L260,210 L270,300 L260,400 L240,500 C238,540 245,575 250,595 L215,595 L210,500 L200,500 L190,500 L185,595 L150,595 C155,575 162,540 160,500 L140,400 L130,300 L140,210 L150,140 C165,128 180,120 180,105 C175,98 165,85 165,65 C165,45 180,30 200,30 Z"
                  fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                {/* Vessel tree */}
                <g fill="none" stroke="var(--accent-soft)" strokeWidth="1.2" opacity="0.5" className="vessel-glow">
                  <path d="M200,40 C190,55 195,70 200,90" />
                  <path d="M200,40 C210,55 205,70 200,90" />
                  <path d="M200,90 L200,210" />
                  <path d="M200,140 L170,160" />
                  <path d="M200,140 L230,160" />
                  <path d="M200,210 C180,240 175,270 175,300 L160,400 L150,500" />
                  <path d="M200,210 C220,240 225,270 225,300 L240,400 L250,500" />
                  <path d="M200,210 L200,360" strokeWidth="1.8" />
                  <path d="M200,360 L185,400 L175,500 L170,580" />
                  <path d="M200,360 L215,400 L225,500 L230,580" />
                </g>
                <g stroke="var(--accent)" strokeWidth="2.5" fill="none" strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 4px var(--accent))" }}>
                  <path d="M200,90 L200,360" strokeDasharray="8 220" style={{ animation: "flow 5s linear infinite" }} />
                </g>
                {/* Hover regions */}
                {regions.map((r) => (
                  <g key={r.id} onPointerEnter={() => setActive(r.id)} onFocus={() => setActive(r.id)} tabIndex={0}
                    style={{ cursor: "none", outline: "none" }} data-cursor="link">
                    <circle cx={r.cx} cy={r.cy} r={r.r}
                      fill={active === r.id ? "color-mix(in oklab, var(--accent) 18%, transparent)" : "transparent"}
                      stroke={active === r.id ? "var(--accent)" : "rgba(255,255,255,0.1)"}
                      strokeWidth="1"
                      style={{ transition: "all 360ms cubic-bezier(0.16,1,0.3,1)", filter: active === r.id ? "drop-shadow(0 0 12px var(--accent))" : "none" }} />
                    <text x={r.cx + r.r + 8} y={r.cy + 3} fill={active === r.id ? "var(--ink)" : "var(--ink-dim)"}
                      fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.2em"
                      style={{ textTransform: "uppercase" }}>{r.label}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
                <p className="text-label">Region · {regions.find(r => r.id === active)?.label}</p>
                <h3 className="mt-4 text-display text-3xl sm:text-4xl">{list.length} condition{list.length === 1 ? "" : "s"} treated here</h3>
                <div className="mt-8 space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
                  {list.map((c) => (
                    <Link key={c.slug} to="/conditions/$slug" params={{ slug: c.slug }} data-cursor="link"
                      className="group block bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-6">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-display text-2xl">{c.name}</h4>
                          <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-dim)] line-clamp-2">{c.intro}</p>
                          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-[var(--ink-dim)]">
                            {c.treatments.map((t) => <span key={t}>· {t}</span>)}
                          </div>
                        </div>
                        <span className="text-label opacity-0 group-hover:opacity-100 transition-opacity shrink-0">Read →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
