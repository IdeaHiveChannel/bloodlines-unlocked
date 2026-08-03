import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import portraitAsset from "../../assets/dr-mandeep-sagar.webp.asset.json";
import heroBg from "../../assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  // Scan reveal mask position
  const portraitWrapRef = useRef<HTMLDivElement>(null);
  const [scan, setScan] = useState({ x: 50, y: 50, on: false });
  useEffect(() => {
    const el = portraitWrapRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      setScan({ x, y, on: true });
    };
    const onLeave = () => setScan((s) => ({ ...s, on: false }));
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => { el.removeEventListener("pointermove", onMove); el.removeEventListener("pointerleave", onLeave); };
  }, []);

  return (
    <section ref={ref} className="relative h-[100dvh] min-h-[760px] w-full overflow-hidden bg-[#050B16]">
      {/* Layer 1: cinematic bg */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.35)_0%,rgba(5,11,22,0.88)_100%)]" />
      </motion.div>

      {/* Layer 2: ambient blue drift */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(60% 50% at 70% 40%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%)",
          animation: "ambient-drift 24s ease-in-out infinite",
        }} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(40% 35% at 25% 70%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 70%)",
          animation: "ambient-drift 32s ease-in-out infinite reverse",
        }} />
      </div>

      {/* Layer 3: particles */}
      <Particles />

      {/* Content grid */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col px-6 pt-32 pb-16 sm:px-10 lg:flex-row lg:items-center lg:gap-10 lg:pt-40">
        {/* Left: content */}
        <motion.div style={{ y: headlineY, opacity: headlineOpacity }} className="lg:w-[55%]">
          <div className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse" />
            <span className="text-label">Chapter 01 · Arrival</span>
          </div>
          <h1 className="mt-8 text-display-xxl">
            Restoring
            <br />
            <span className="text-[color-mix(in_oklab,var(--accent)_75%,white)]">blood flow.</span>
          </h1>
          <p className="mt-8 max-w-xl text-body-lg text-[var(--ink-dim)]">
            Advanced vascular and neurointerventional procedures performed through pinpoint incisions, guided by real-time imaging. Greater precision. Faster recovery. Care that meets the disease where it lives.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" data-cursor="cta" className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-button text-black hover:bg-[var(--accent)] transition-colors">
              Book consultation
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/procedures" data-cursor="link" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-button hover:bg-white/5 transition-colors">
              Explore treatments
            </Link>
          </div>
        </motion.div>

        {/* Right: portrait with scan reveal */}
        <motion.div style={{ y: portraitY, scale: portraitScale }} className="relative lg:w-[45%] mt-12 lg:mt-0 flex-1 min-h-[420px]">
          <div ref={portraitWrapRef} data-cursor="scan"
            className="relative mx-auto h-[520px] w-full max-w-[520px] lg:h-[640px]">
            {/* Vessel anatomy reveal layer */}
            <VesselSVG />
            {/* Doctor portrait, with scan mask */}
            <img src={portraitAsset.url} alt="Dr. Mandeep Sagar"
              className="absolute inset-0 h-full w-full object-contain object-bottom select-none"
              style={{
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.6))",
                animation: "heartbeat 8s ease-in-out infinite",
                WebkitMaskImage: scan.on ? `radial-gradient(circle at ${scan.x}% ${scan.y}%, transparent 0, transparent 90px, black 200px)` : "none",
                maskImage: scan.on ? `radial-gradient(circle at ${scan.x}% ${scan.y}%, transparent 0, transparent 90px, black 200px)` : "none",
                transition: "mask-image 120ms linear, -webkit-mask-image 120ms linear",
              }}
              draggable={false}
            />
            {/* Scan ring */}
            {scan.on && (
              <div className="pointer-events-none absolute inset-0" style={{
                background: `radial-gradient(circle at ${scan.x}% ${scan.y}%, transparent 80px, color-mix(in oklab, var(--accent) 30%, transparent) 130px, transparent 200px)`,
              }} />
            )}
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-label whitespace-nowrap">
            Hover to reveal vascular anatomy
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-label">Scroll</span>
        <svg viewBox="0 0 4 80" width="4" height="80">
          <line x1="2" y1="0" x2="2" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="2" y1="0" x2="2" y2="20" stroke="var(--accent)" strokeWidth="2"
            strokeDasharray="20 60" style={{ animation: "flowDown 2.4s linear infinite" }} />
        </svg>
        <style>{`@keyframes flowDown { 0% { stroke-dashoffset: -80; } 100% { stroke-dashoffset: 0; } }`}</style>
      </div>
    </section>
  );
}

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-50">
      {Array.from({ length: 28 }).map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = 18 + (i % 8) * 3;
        const size = 1 + (i % 3);
        return (
          <span key={i} className="absolute rounded-full bg-[var(--accent)]"
            style={{
              left: `${left}%`, top: `${top}%`, width: size, height: size,
              filter: `blur(${(i % 3) + 1}px)`,
              opacity: 0.35,
              animation: `floatY ${dur}s ease-in-out ${i * 0.3}s infinite alternate`,
            }} />
        );
      })}
      <style>{`@keyframes floatY { from { transform: translate3d(0,0,0); } to { transform: translate3d(20px,-40px,0); } }`}</style>
    </div>
  );
}

function VesselSVG() {
  return (
    <svg viewBox="0 0 400 640" className="absolute inset-0 h-full w-full vessel-glow" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="vg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="color-mix(in oklab, var(--accent) 90%, white)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#vg)" strokeWidth="1.2" opacity="0.85">
        {/* Cerebral circle */}
        <circle cx="200" cy="90" r="34" />
        <path d="M180,124 C180,160 175,180 180,210" />
        <path d="M220,124 C220,160 225,180 220,210" />
        {/* Carotids */}
        <path d="M180,210 C175,250 160,280 150,320" />
        <path d="M220,210 C225,250 240,280 250,320" />
        {/* Aortic arch */}
        <path d="M150,320 C150,340 180,360 200,360 C220,360 250,340 250,320" strokeWidth="1.8" />
        {/* Aorta down */}
        <path d="M200,360 L200,520" strokeWidth="2" />
        {/* Iliac */}
        <path d="M200,520 C190,545 165,560 145,590" />
        <path d="M200,520 C210,545 235,560 255,590" />
        {/* Branches */}
        <path d="M180,260 L120,295" />
        <path d="M220,260 L280,295" />
        <path d="M200,430 L140,460" />
        <path d="M200,430 L260,460" />
      </g>
      {/* Flow */}
      <g stroke="var(--accent)" strokeWidth="2.5" fill="none" strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 4px var(--accent))" }}>
        <path d="M200,360 L200,520" strokeDasharray="10 200" style={{ animation: "flow 4s linear infinite" }} />
      </g>
    </svg>
  );
}
