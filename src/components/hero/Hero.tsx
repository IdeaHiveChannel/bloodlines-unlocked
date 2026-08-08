import { LocaleLink } from "../../components/locale-link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portraitAsset from "../../assets/dr-mandeep-sagar.webp.asset.json";
import heroBg from "../../assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";
import { useT } from "../../lib/i18n/react";


export function Hero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);




  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#050B16] lg:h-[100dvh] lg:min-h-[720px]"
    >

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
      <div className="shell relative z-10 flex h-full flex-col pt-24 pb-12 sm:pt-28 lg:flex-row lg:items-center lg:gap-10 lg:pt-32">
        {/* Left: content */}
        <motion.div style={{ y: headlineY, opacity: headlineOpacity }} className="lg:w-[55%]">
          <div className="flex items-center gap-3">
            <span className="size-1.5 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse" />
            <span className="text-label">{t.hero.eyebrow}</span>
          </div>
          <h1 className="mt-4 text-display-xxl sm:mt-5">
            {t.hero.headline1}
            <br />
            <span className="text-[color-mix(in_oklab,var(--accent)_75%,white)]">{t.hero.headline2}</span>
          </h1>
          <p className="mt-4 max-w-xl text-body-lg text-[var(--ink-dim)] sm:mt-5">
            {t.hero.lead}
          </p>
          <div className="mt-6 flex flex-col gap-3 xs:flex-row xs:flex-wrap xs:items-center xs:gap-4 sm:mt-7">
            <LocaleLink to="/contact" data-cursor="cta" className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-button text-black hover:bg-[var(--accent)] transition-colors">
              {t.nav.book}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </LocaleLink>
            <LocaleLink to="/diseases" data-cursor="link" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3 text-button hover:bg-white/5 transition-colors">
              {t.common.explore}
            </LocaleLink>
          </div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div style={{ y: portraitY, scale: portraitScale }} className="relative mt-10 flex-1 lg:mt-0 lg:w-[45%]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] sm:max-w-[380px] lg:aspect-auto lg:h-[540px] lg:max-w-[460px]">
            <img src={portraitAsset.url} alt={tx("Dr. Mandeep Sagar, interventional radiologist")}
              className="absolute inset-0 h-full w-full object-contain object-bottom select-none"
              style={{
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.6))",
                animation: "heartbeat 8s ease-in-out infinite",
              }}
              draggable={false}
            />
          </div>
        </motion.div>
      </div>



      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">

        <span className="text-label">{t.common.scroll}</span>
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
