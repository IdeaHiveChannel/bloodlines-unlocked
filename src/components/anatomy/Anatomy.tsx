import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { conditionsByRegion, regionLabels, type Region } from "../../lib/content";

type Hotspot = {
  id: Region;
  cx: number;
  cy: number;
  r: number;
  side: "left" | "right";
  /** Organ shape illuminated on hover. */
  organ: React.ReactNode;
};

const hotspots: Hotspot[] = [
  {
    id: "brain",
    cx: 200,
    cy: 52,
    r: 26,
    side: "left",
    organ: (
      <g>
        <path d="M182,44 C182,32 191,25 200,25 C209,25 218,32 218,44 C218,54 210,62 200,62 C190,62 182,54 182,44 Z" />
        <path d="M200,26 L200,61" />
        <path d="M188,36 C194,40 194,48 189,53" />
        <path d="M212,36 C206,40 206,48 211,53" />
      </g>
    ),
  },
  {
    id: "eye",
    cx: 216,
    cy: 76,
    r: 11,
    side: "right",
    organ: (
      <g>
        <path d="M206,76 C210,70 222,70 226,76 C222,82 210,82 206,76 Z" />
        <circle cx="216" cy="76" r="3.2" />
      </g>
    ),
  },
  {
    id: "carotid",
    cx: 182,
    cy: 108,
    r: 13,
    side: "left",
    organ: (
      <g>
        <path d="M184,96 L184,118" />
        <path d="M184,104 L176,94" />
        <path d="M184,104 L191,95" />
      </g>
    ),
  },
  {
    id: "thyroid",
    cx: 214,
    cy: 118,
    r: 12,
    side: "right",
    organ: (
      <g>
        <path d="M206,113 C210,110 214,113 214,118 C214,113 218,110 222,113 C224,120 219,126 214,126 C209,126 204,120 206,113 Z" />
      </g>
    ),
  },
  {
    id: "chest",
    cx: 200,
    cy: 190,
    r: 26,
    side: "left",
    organ: (
      <g>
        <path d="M200,150 L200,178 C200,196 210,204 210,222 L210,250" />
        <path d="M200,162 L182,152" />
        <path d="M200,162 L218,152" />
      </g>
    ),
  },
  {
    id: "liver",
    cx: 172,
    cy: 246,
    r: 22,
    side: "left",
    organ: (
      <g>
        <path d="M152,236 C166,228 186,230 192,240 C196,250 188,262 174,264 C160,266 150,254 152,236 Z" />
        <path d="M170,232 L172,262" />
      </g>
    ),
  },
  {
    id: "kidney",
    cx: 226,
    cy: 262,
    r: 20,
    side: "right",
    organ: (
      <g>
        <path d="M228,248 C238,248 242,256 242,264 C242,274 236,280 229,278 C222,276 222,268 226,264 C222,260 222,250 228,248 Z" />
        <path d="M176,248 C166,248 162,256 162,264 C162,274 168,280 175,278 C182,276 182,268 178,264 C182,260 182,250 176,248 Z" />
      </g>
    ),
  },
  {
    id: "arms",
    cx: 292,
    cy: 268,
    r: 26,
    side: "right",
    organ: (
      <g>
        <path d="M252,150 L288,220 L296,300" />
        <path d="M148,150 L112,220 L104,300" />
        <circle cx="290" cy="252" r="7" />
      </g>
    ),
  },
  {
    id: "pelvis",
    cx: 200,
    cy: 348,
    r: 26,
    side: "left",
    organ: (
      <g>
        <path d="M168,330 C182,344 218,344 232,330" />
        <path d="M172,332 L184,364" />
        <path d="M228,332 L216,364" />
        <path d="M200,336 L200,368" />
      </g>
    ),
  },
  {
    id: "knee",
    cx: 176,
    cy: 452,
    r: 17,
    side: "left",
    organ: (
      <g>
        <circle cx="176" cy="452" r="11" />
        <circle cx="226" cy="452" r="11" />
      </g>
    ),
  },
  {
    id: "legs",
    cx: 200,
    cy: 528,
    r: 34,
    side: "left",
    organ: (
      <g>
        <path d="M186,400 L176,500 L170,578" />
        <path d="M216,400 L226,500 L232,578" />
        <path d="M170,578 L156,586" />
        <path d="M232,578 L246,586" />
      </g>
    ),
  },
  {
    id: "veins",
    cx: 244,
    cy: 486,
    r: 18,
    side: "right",
    organ: (
      <g>
        <path d="M234,412 C246,442 240,470 250,500 C244,524 250,548 246,572" />
        <path d="M166,412 C154,442 160,470 150,500 C156,524 150,548 154,572" />
      </g>
    ),
  },
];

export function Anatomy() {
  const [active, setActive] = useState<Region>("brain");
  const list = conditionsByRegion(active);
  const spot = hotspots.find((h) => h.id === active)!;

  return (
    <section className="relative bg-[#050B16] py-32 sm:py-40">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-label">Chapter 02 · Anatomy</p>
            <h2 className="mt-6 text-display text-[clamp(2.4rem,5vw,4.5rem)] max-w-2xl">
              The body, seen through its blood vessels.
            </h2>
          </div>
          <p className="text-[13px] leading-relaxed text-[var(--ink-dim)] max-w-sm">
            From the brain to the feet, blood vessels connect every organ. Explore each region to
            understand how modern image-guided treatment addresses disease throughout the body.
          </p>
        </div>


        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Anatomy panel */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[2/3] w-full max-w-[520px] mx-auto rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden">
              <svg viewBox="0 0 400 600" className="absolute inset-0 h-full w-full">
                <defs>
                  <radialGradient id="bodyGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="color-mix(in oklab, var(--accent) 30%, transparent)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <ellipse cx="200" cy="300" rx="180" ry="280" fill="url(#bodyGlow)" opacity="0.35" />

                {/* Body silhouette with arms */}
                <path
                  d="M200,30 C220,30 235,45 235,65 C235,85 225,98 220,105 C220,120 235,128 250,140 L290,215 L300,305 L282,308 L272,220 L262,300 L258,400 L240,500 C238,540 245,575 250,595 L215,595 L210,500 L200,500 L190,500 L185,595 L150,595 C155,575 162,540 160,500 L142,400 L138,300 L128,220 L118,308 L100,305 L110,215 L150,140 C165,128 180,120 180,105 C175,98 165,85 165,65 C165,45 180,30 200,30 Z"
                  fill="rgba(255,255,255,0.02)"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />

                {/* Vessel tree */}
                <g fill="none" stroke="var(--accent-soft)" strokeWidth="1.1" opacity="0.42" className="vessel-glow">
                  <path d="M200,40 C190,55 195,70 200,90" />
                  <path d="M200,40 C210,55 205,70 200,90" />
                  <path d="M200,90 L200,210" />
                  <path d="M200,140 L160,160 L120,220" />
                  <path d="M200,140 L240,160 L280,220" />
                  <path d="M200,210 C180,240 175,270 175,300 L160,400 L150,500" />
                  <path d="M200,210 C220,240 225,270 225,300 L240,400 L250,500" />
                  <path d="M200,210 L200,360" strokeWidth="1.7" />
                  <path d="M200,250 L172,250" />
                  <path d="M200,262 L226,262" />
                  <path d="M200,360 L185,400 L175,500 L170,580" />
                  <path d="M200,360 L215,400 L225,500 L230,580" />
                </g>

                {/* Pulse along the aorta */}
                <g
                  stroke="var(--accent)"
                  strokeWidth="2.2"
                  fill="none"
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 4px var(--accent))" }}
                >
                  <path d="M200,90 L200,360" strokeDasharray="8 220" style={{ animation: "flow 5s linear infinite" }} />
                </g>

                {/* Illuminated organ — only the active one */}
                <AnimatePresence mode="wait">
                  <motion.g
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: "drop-shadow(0 0 10px var(--accent))" }}
                  >
                    {spot.organ}
                  </motion.g>
                </AnimatePresence>

                {/* Hotspots */}
                {hotspots.map((h) => {
                  const on = active === h.id;
                  const labelX = h.side === "right" ? h.cx + h.r + 7 : h.cx - h.r - 7;
                  return (
                    <g
                      key={h.id}
                      onPointerEnter={() => setActive(h.id)}
                      onFocus={() => setActive(h.id)}
                      onClick={() => setActive(h.id)}
                      tabIndex={0}
                      role="button"
                      aria-label={regionLabels[h.id]}
                      style={{ cursor: "none", outline: "none" }}
                      data-cursor="link"
                    >
                      <circle
                        cx={h.cx}
                        cy={h.cy}
                        r={h.r}
                        fill={on ? "color-mix(in oklab, var(--accent) 16%, transparent)" : "transparent"}
                        stroke={on ? "var(--accent)" : "rgba(255,255,255,0.1)"}
                        strokeWidth="1"
                        style={{
                          transition: "all 360ms cubic-bezier(0.16,1,0.3,1)",
                          filter: on ? "drop-shadow(0 0 12px var(--accent))" : "none",
                        }}
                      />
                      <text
                        x={labelX}
                        y={h.cy + 3}
                        textAnchor={h.side === "right" ? "start" : "end"}
                        fill={on ? "var(--ink)" : "var(--ink-dim)"}
                        fontSize="8.5"
                        fontFamily="var(--font-mono)"
                        letterSpacing="0.18em"
                        style={{ textTransform: "uppercase", transition: "fill 300ms" }}
                      >
                        {regionLabels[h.id]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-label">Region · {regionLabels[active]}</p>
                <h3 className="mt-4 text-display text-3xl sm:text-4xl">
                  {list.length} condition{list.length === 1 ? "" : "s"} treated here
                </h3>

                <p className="mt-8 text-label">Conditions &amp; the intervention used</p>
                <div className="mt-4 space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
                  {list.map((c) => (
                    <Link
                      key={c.slug}
                      to="/conditions/$slug"
                      params={{ slug: c.slug }}
                      data-cursor="link"
                      className="group block bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-6"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-display text-2xl">{c.name}</h4>
                          <p className="mt-2 text-[12px] tracking-[0.16em] uppercase text-[var(--accent)]">
                            ↓ {c.intervention}
                          </p>
                          <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-dim)] line-clamp-2">
                            {c.intro}
                          </p>
                        </div>
                        <span className="text-label opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                          Read →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <p className="mt-10 text-label">Procedures performed in this region</p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {(regionProcedures[active] ?? []).map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-white/[0.1] bg-white/[0.02] px-4 py-2 text-[12.5px] text-[var(--ink)]"
                    >
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-6">
                  {guide ? (
                    <Link
                      to="/diseases/$slug"
                      params={{ slug: guide }}
                      data-cursor="cta"
                      className="text-label underline"
                    >
                      Read more — complete guide →
                    </Link>
                  ) : (
                    list[0] && (
                      <Link
                        to="/conditions/$slug"
                        params={{ slug: list[0].slug }}
                        data-cursor="cta"
                        className="text-label underline"
                      >
                        Read more →
                      </Link>
                    )
                  )}
                  <Link to="/procedures" data-cursor="link" className="text-label underline">
                    All procedures →
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
