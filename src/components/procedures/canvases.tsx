import { motion, useTransform, type MotionValue } from "framer-motion";
import type { Storyboard } from "../../lib/content";

type P = { progress: MotionValue<number> };

const stroke = "var(--accent)";
const soft = "var(--accent-soft)";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full vessel-glow">
      {children}
    </svg>
  );
}

/** 1 — Angioplasty: plaque → wire crossing → balloon → stent → flow */
function Angioplasty({ progress }: P) {
  const wireX = useTransform(progress, [0.0, 0.25], [-260, 40]);
  const wireOpacity = useTransform(progress, [0.0, 0.05, 0.45, 0.55], [0, 1, 1, 0]);
  const balloonScale = useTransform(progress, [0.3, 0.5], [0.35, 1.35]);
  const balloonOpacity = useTransform(progress, [0.28, 0.35, 0.65, 0.72], [0, 1, 1, 0]);
  const plaqueOpacity = useTransform(progress, [0.4, 0.65], [1, 0.12]);
  const stentOpacity = useTransform(progress, [0.65, 0.8], [0, 1]);
  const stentScale = useTransform(progress, [0.65, 0.85], [0.6, 1]);
  const flowOpacity = useTransform(progress, [0, 0.8, 1], [0.15, 0.3, 1]);
  
  return (
    <Frame>
      <path d="M40,260 C160,260 240,258 560,258" fill="none" stroke={soft} strokeWidth="1.2" opacity="0.7" />
      <path d="M40,380 C160,380 240,382 560,382" fill="none" stroke={soft} strokeWidth="1.2" opacity="0.7" />
      
      {/* Plaque */}
      <motion.g style={{ opacity: plaqueOpacity }}>
        <path d="M240,258 C280,300 360,300 400,258 Z" fill="color-mix(in oklab, var(--blood) 65%, black)" opacity="0.8" />
        <path d="M240,382 C280,340 360,340 400,382 Z" fill="color-mix(in oklab, var(--blood) 65%, black)" opacity="0.8" />
      </motion.g>

      {/* Wire */}
      <motion.g style={{ x: wireX, opacity: wireOpacity }}>
        <line x1="0" y1="320" x2="360" y2="320" stroke="white" strokeWidth="1.6" opacity="0.7" />
        <circle cx="360" cy="320" r="4" fill="white" />
      </motion.g>

      {/* Balloon */}
      <motion.ellipse
        cx="320" cy="320" rx="80" ry="52"
        style={{ scale: balloonScale, opacity: balloonOpacity, transformOrigin: "320px 320px" }}
        fill="color-mix(in oklab, var(--accent) 22%, transparent)" stroke={stroke} strokeWidth="1.5"
      />

      {/* Stent */}
      <motion.g style={{ opacity: stentOpacity, scale: stentScale, transformOrigin: "320px 320px" }} stroke={stroke} strokeWidth="1.2" fill="none" opacity="0.9">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M${232 + i * 22},262 L${254 + i * 22},378 M${254 + i * 22},262 L${232 + i * 22},378`} />
        ))}
        <line x1="232" y1="262" x2="430" y2="262" />
        <line x1="232" y1="378" x2="430" y2="378" />
      </motion.g>

      {/* Restored Flow */}
      <motion.g style={{ opacity: flowOpacity }} stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M40,320 L560,320" strokeDasharray="14 30" style={{ animation: "flow 2s linear infinite", filter: "drop-shadow(0 0 6px var(--accent))" }} />
      </motion.g>
    </Frame>
  );
}

/** 2 — Thrombectomy: clot → retriever opens → capture → aspiration → reperfusion */
function Thrombectomy({ progress }: P) {
  const catheterX = useTransform(progress, [0.05, 0.3], [-300, 0]);
  const retrieverScale = useTransform(progress, [0.28, 0.45], [0.1, 1]);
  const retrieverOpacity = useTransform(progress, [0.25, 0.35, 0.82, 0.9], [0, 1, 1, 0]);
  const clotX = useTransform(progress, [0.55, 0.85], [0, -320]);
  const clotOpacity = useTransform(progress, [0.75, 0.9], [1, 0]);
  const flowOpacity = useTransform(progress, [0.8, 1], [0.1, 1]);
  const funnelOpacity = useTransform(progress, [0.55, 0.7, 0.95], [0, 1, 0.3]);
  return (
    <Frame>
      {/* branching cerebral vessel */}
      <g fill="none" stroke={soft} strokeWidth="1.2" opacity="0.7">
        <path d="M30,290 C180,290 260,270 340,220 C400,184 470,170 570,170" />
        <path d="M30,350 C180,350 270,330 350,282 C410,246 470,232 570,232" />
        <path d="M350,282 C400,330 440,380 460,470" />
        <path d="M390,300 C440,344 470,400 486,478" />
      </g>
      <motion.g style={{ x: catheterX }}>
        <line x1="-40" y1="320" x2="300" y2="292" stroke="white" strokeWidth="2" opacity="0.6" />
        <motion.path d="M300,292 L336,270 L336,314 Z" fill="white" opacity="0.5" style={{ opacity: funnelOpacity }} />
      </motion.g>
      <motion.g style={{ x: clotX, opacity: clotOpacity }}>
        <ellipse cx="392" cy="252" rx="46" ry="26" fill="color-mix(in oklab, var(--blood) 80%, black)" transform="rotate(-22 392 252)" />
      </motion.g>
      <motion.g style={{ opacity: retrieverOpacity, scaleY: retrieverScale, x: clotX, transformOrigin: "392px 252px" }} stroke={stroke} strokeWidth="1.4" fill="none">
        <ellipse cx="392" cy="252" rx="54" ry="30" transform="rotate(-22 392 252)" />
        {Array.from({ length: 6 }).map((_, i) => (
          <path key={i} d={`M${346 + i * 18},${268 - i * 6} L${360 + i * 18},${232 - i * 6}`} transform="rotate(-22 392 252)" />
        ))}
      </motion.g>
      <motion.g style={{ opacity: flowOpacity }} stroke={stroke} strokeWidth="2.6" fill="none" strokeLinecap="round">
        <path d="M30,320 C190,320 268,300 348,252 C408,216 470,200 570,200" strokeDasharray="12 26" style={{ animation: "flow 1.6s linear infinite", filter: "drop-shadow(0 0 6px var(--accent))" }} />
        <path d="M350,282 C400,330 440,380 460,470" strokeDasharray="10 24" style={{ animation: "flow 2.2s linear infinite" }} />
      </motion.g>
    </Frame>
  );
}

/** 3 — EVAR: aneurysm sac → device → graft unfolds → excluded → endoleak check */
function Evar({ progress }: P) {
  const deviceY = useTransform(progress, [0.15, 0.45], [560, 250]);
  const deviceOpacity = useTransform(progress, [0.12, 0.2, 0.62, 0.72], [0, 1, 1, 0]);
  const graftOpacity = useTransform(progress, [0.5, 0.68], [0, 1]);
  const graftScale = useTransform(progress, [0.5, 0.72], [0.3, 1]);
  const sacFill = useTransform(progress, [0.6, 0.82], [0.55, 0.08]);
  const checkOpacity = useTransform(progress, [0.82, 0.92], [0, 1]);
  return (
    <Frame>
      {/* aorta with sac and iliac limbs */}
      <path d="M278,60 L278,210 C226,232 220,320 268,356 L232,540" fill="none" stroke={soft} strokeWidth="1.4" opacity="0.8" />
      <path d="M334,60 L334,210 C386,232 392,320 344,356 L392,540" fill="none" stroke={soft} strokeWidth="1.4" opacity="0.8" />
      <motion.ellipse cx="306" cy="284" rx="92" ry="72" fill="color-mix(in oklab, var(--blood) 60%, black)" style={{ opacity: sacFill }} />
      <motion.g style={{ y: deviceY, opacity: deviceOpacity }}>
        <rect x="298" y="-40" width="16" height="80" rx="8" fill="white" opacity="0.75" />
        <line x1="306" y1="40" x2="306" y2="300" stroke="white" strokeWidth="2" opacity="0.5" />
      </motion.g>
      <motion.g style={{ opacity: graftOpacity, scaleX: graftScale, transformOrigin: "306px 300px" }} stroke={stroke} strokeWidth="1.6" fill="color-mix(in oklab, var(--accent) 14%, transparent)">
        <path d="M282,180 L330,180 L340,300 L360,470 L330,470 L312,330 L300,330 L282,470 L252,470 L272,300 Z" />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1="278" y1={196 + i * 16} x2="334" y2={196 + i * 16} strokeWidth="0.8" opacity="0.5" />
        ))}
      </motion.g>
      <motion.g style={{ opacity: checkOpacity }}>
        <circle cx="306" cy="284" r="104" fill="none" stroke={stroke} strokeWidth="0.8" strokeDasharray="4 8" />
        <text x="306" y="128" textAnchor="middle" fill="var(--ink-dim)" fontSize="12" fontFamily="var(--font-mono)" letterSpacing="0.2em">
          NO ENDOLEAK
        </text>
      </motion.g>
    </Frame>
  );
}

/** 4 — Laser vein ablation: reflux → fibre → energy → collapse → reroute */
function Laser({ progress }: P) {
  const fibreY = useTransform(progress, [0.15, 0.4], [40, 430]);
  const fibreOpacity = useTransform(progress, [0.12, 0.2, 0.85, 0.95], [0, 1, 1, 0]);
  const pulseOpacity = useTransform(progress, [0.42, 0.5, 0.75, 0.85], [0, 1, 1, 0]);
  const collapse = useTransform(progress, [0.55, 0.85], [1, 0.06]);
  const refluxOpacity = useTransform(progress, [0, 0.4], [1, 0]);
  const deepOpacity = useTransform(progress, [0.7, 1], [0.2, 1]);
  return (
    <Frame>
      {/* faulty superficial vein */}
      <motion.g style={{ scaleX: collapse, transformOrigin: "230px 300px" }}>
        <path d="M206,60 C180,180 186,320 200,540" fill="none" stroke={soft} strokeWidth="1.4" opacity="0.8" />
        <path d="M256,60 C280,180 274,320 258,540" fill="none" stroke={soft} strokeWidth="1.4" opacity="0.8" />
        {[140, 240, 340, 440].map((y) => (
          <g key={y} stroke={soft} strokeWidth="1" fill="none" opacity="0.6">
            <path d={`M198,${y - 16} L230,${y} L262,${y - 16}`} />
          </g>
        ))}
      </motion.g>
      {/* refluxing (downward) flow */}
      <motion.g style={{ opacity: refluxOpacity }} stroke="var(--blood)" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <path d="M230,60 L230,540" strokeDasharray="10 26" style={{ animation: "flow 2.4s linear infinite" }} />
      </motion.g>
      {/* laser fibre */}
      <motion.g style={{ opacity: fibreOpacity }}>
        <motion.line x1="230" y1="20" x2="230" style={{ y2: fibreY } as never} stroke="white" strokeWidth="1.6" opacity="0.8" />
        <motion.circle cx="230" r="5" fill="white" style={{ cy: fibreY } as never} />
        <motion.circle cx="230" r="18" fill="color-mix(in oklab, var(--accent) 40%, transparent)" style={{ cy: fibreY, opacity: pulseOpacity } as never} />
      </motion.g>
      {/* deep vein takes over */}
      <motion.g style={{ opacity: deepOpacity }} stroke={stroke} strokeWidth="2.6" fill="none" strokeLinecap="round">
        <path d="M400,60 C420,200 414,380 396,540" strokeDasharray="12 28" style={{ animation: "flow 2s linear infinite", filter: "drop-shadow(0 0 6px var(--accent))" }} />
      </motion.g>
      <path d="M400,60 C420,200 414,380 396,540" fill="none" stroke={soft} strokeWidth="1.2" opacity="0.5" />
    </Frame>
  );
}

/** 5 — TACE: tumour blush → catheter → beads → devascularisation */
function Tace({ progress }: P) {
  const catheterLen = useTransform(progress, [0.1, 0.45], [0, 1]);
  const beadsOpacity = useTransform(progress, [0.45, 0.58, 0.9], [0, 1, 0.7]);
  const blushOpacity = useTransform(progress, [0, 0.6, 0.9], [0.9, 0.8, 0.08]);
  const feedOpacity = useTransform(progress, [0.7, 0.85], [1, 0.15]);
  return (
    <Frame>
      {/* liver silhouette */}
      <path d="M80,220 C180,150 400,150 500,230 C540,300 480,420 350,440 C220,458 100,380 80,220 Z"
        fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
      {/* hepatic artery tree */}
      <g fill="none" stroke={soft} strokeWidth="1.2" opacity="0.75">
        <path d="M60,420 C160,400 200,340 260,310" />
        <path d="M260,310 C310,286 340,270 396,262" />
        <path d="M260,310 C300,340 330,370 360,392" />
      </g>
      <motion.g style={{ opacity: blushOpacity }}>
        <circle cx="404" cy="256" r="52" fill="color-mix(in oklab, var(--blood) 70%, transparent)" opacity="0.6" />
        <circle cx="404" cy="256" r="32" fill="color-mix(in oklab, var(--blood) 85%, transparent)" opacity="0.8" />
      </motion.g>
      <motion.path d="M40,430 C150,408 200,344 262,312 C312,288 342,272 396,262"
        fill="none" stroke="white" strokeWidth="2" opacity="0.7"
        style={{ pathLength: catheterLen }} />
      <motion.g style={{ opacity: beadsOpacity }} fill={stroke}>
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          return <circle key={i} cx={404 + Math.cos(a) * (16 + (i % 4) * 8)} cy={256 + Math.sin(a) * (14 + (i % 3) * 8)} r="3.4" />;
        })}
      </motion.g>
      <motion.g style={{ opacity: feedOpacity }} stroke={stroke} strokeWidth="2.4" fill="none" strokeLinecap="round">
        <path d="M60,420 C160,400 200,340 260,310 C310,286 340,270 396,262" strokeDasharray="10 26" style={{ animation: "flow 2s linear infinite" }} />
      </motion.g>
    </Frame>
  );
}

/** 6 — Microwave / thyroid ablation: needle → energy → zone grows → tumour gone */
function Ablation({ progress }: P) {
  const needleX = useTransform(progress, [0.1, 0.4], [-280, 0]);
  const zoneR = useTransform(progress, [0.42, 0.85], [10, 150]);
  const zoneOpacity = useTransform(progress, [0.4, 0.5], [0, 0.35]);
  const tumourOpacity = useTransform(progress, [0.6, 0.9], [1, 0.08]);
  const wave = useTransform(progress, [0.42, 0.5, 0.85, 0.95], [0, 1, 1, 0]);
  return (
    <Frame>
      <path d="M100,180 C200,120 420,130 500,220 C540,290 470,420 340,440 C210,460 100,360 100,180 Z"
        fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
      <motion.circle cx="320" cy="300" fill="color-mix(in oklab, var(--accent) 55%, transparent)"
        style={{ r: zoneR, opacity: zoneOpacity } as never} />
      <motion.circle cx="320" cy="300" fill="none" stroke={stroke} strokeWidth="1.2" strokeDasharray="6 8"
        style={{ r: zoneR, opacity: zoneOpacity } as never} />
      <motion.circle cx="320" cy="300" r="42" fill="color-mix(in oklab, var(--blood) 80%, black)" style={{ opacity: tumourOpacity }} />
      <motion.g style={{ x: needleX }}>
        <line x1="-60" y1="140" x2="320" y2="300" stroke="white" strokeWidth="2.2" opacity="0.85" />
        <circle cx="320" cy="300" r="4" fill="white" />
      </motion.g>
      <motion.g style={{ opacity: wave }} stroke={stroke} strokeWidth="1.2" fill="none">
        {[60, 90, 120].map((r, i) => (
          <circle key={r} cx="320" cy="300" r={r} opacity={0.5 - i * 0.12}
            style={{ animation: `pulse ${1.6 + i * 0.4}s ease-in-out infinite` }} />
        ))}
      </motion.g>
    </Frame>
  );
}

/** 7 — Coiling: sac fills → microcatheter → coils pack → neck seals */
function Coiling({ progress }: P) {
  const catheterLen = useTransform(progress, [0.1, 0.4], [0, 1]);
  const fill = useTransform(progress, [0.4, 0.85], [0, 1]);
  const sacFlow = useTransform(progress, [0.55, 0.9], [1, 0]);
  return (
    <Frame>
      <path d="M40,420 C160,400 240,340 320,300 C380,270 440,250 560,244" fill="none" stroke={soft} strokeWidth="1.4" opacity="0.8" />
      <path d="M40,470 C160,452 250,392 330,352 C390,322 444,300 560,294" fill="none" stroke={soft} strokeWidth="1.4" opacity="0.8" />
      <circle cx="352" cy="216" r="72" fill="color-mix(in oklab, var(--blood) 45%, transparent)" stroke={soft} strokeWidth="1.4" />
      <motion.circle cx="352" cy="216" r="66" fill="color-mix(in oklab, var(--blood) 70%, transparent)" style={{ opacity: sacFlow }} />
      <motion.path d="M40,440 C160,420 240,352 324,292 C338,268 344,240 352,220"
        fill="none" stroke="white" strokeWidth="1.8" opacity="0.8" style={{ pathLength: catheterLen }} />
      <motion.g style={{ opacity: fill }} stroke={stroke} strokeWidth="1.6" fill="none">
        <motion.path
          d="M352,216 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0 M352,216 m-26,-12 a30,26 0 1,1 54,14 a26,30 0 1,1 -48,10 M352,216 m-14,4 a18,16 0 1,0 32,-8 a16,18 0 1,0 -30,-2"
          style={{ pathLength: fill }}
        />
      </motion.g>
      <motion.g style={{ opacity: sacFlow }} stroke="var(--blood)" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M330,290 C338,262 344,238 352,220" strokeDasharray="6 14" style={{ animation: "flow 1.4s linear infinite" }} />
      </motion.g>
      <g stroke={stroke} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.8">
        <path d="M40,444 C160,426 246,366 326,326 C386,296 442,274 560,268" strokeDasharray="12 28" style={{ animation: "flow 2s linear infinite" }} />
      </g>
    </Frame>
  );
}

/** 8 — Selective embolization: abnormal blush → microcatheter → particles → blush gone */
function Embolization({ progress }: P) {
  const catheterLen = useTransform(progress, [0.1, 0.45], [0, 1]);
  const particles = useTransform(progress, [0.45, 0.65], [0, 1]);
  const blush = useTransform(progress, [0.6, 0.9], [0.85, 0.06]);
  const branchOpacity = useTransform(progress, [0.7, 0.9], [1, 0.2]);
  return (
    <Frame>
      <g fill="none" stroke={soft} strokeWidth="1.3" opacity="0.75">
        <path d="M60,520 C140,470 200,420 260,360" />
        <path d="M260,360 C310,320 350,300 400,286" />
        <path d="M260,360 C300,390 340,412 390,424" />
        <path d="M400,286 C430,270 450,258 480,252" />
      </g>
      <motion.g style={{ opacity: blush }}>
        {Array.from({ length: 26 }).map((_, i) => {
          const a = (i / 26) * Math.PI * 2;
          const rad = 26 + (i % 5) * 12;
          return <circle key={i} cx={438 + Math.cos(a) * rad} cy={250 + Math.sin(a) * rad * 0.8} r="7" fill="color-mix(in oklab, var(--blood) 70%, transparent)" />;
        })}
        <circle cx="438" cy="250" r="34" fill="color-mix(in oklab, var(--blood) 60%, transparent)" />
      </motion.g>
      <motion.path d="M60,520 C140,470 202,420 262,360 C312,320 352,300 402,286"
        fill="none" stroke="white" strokeWidth="1.8" opacity="0.8" style={{ pathLength: catheterLen }} />
      <motion.g style={{ opacity: particles }} fill={stroke}>
        {Array.from({ length: 14 }).map((_, i) => (
          <circle key={i} cx={404 + i * 5} cy={284 - i * 2.4} r="2.6" />
        ))}
      </motion.g>
      <motion.g style={{ opacity: branchOpacity }} stroke={stroke} strokeWidth="2.2" fill="none" strokeLinecap="round">
        <path d="M400,286 C430,270 450,258 480,252" strokeDasharray="8 20" style={{ animation: "flow 1.8s linear infinite" }} />
      </motion.g>
      <g stroke={stroke} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.7">
        <path d="M60,520 C140,470 200,420 260,360 C300,390 340,412 390,424" strokeDasharray="12 28" style={{ animation: "flow 2.2s linear infinite" }} />
      </g>
    </Frame>
  );
}

const map: Record<Storyboard, (p: P) => React.ReactElement> = {
  angioplasty: Angioplasty,
  thrombectomy: Thrombectomy,
  evar: Evar,
  laser: Laser,
  tace: Tace,
  ablation: Ablation,
  coiling: Coiling,
  embolization: Embolization,
};

export function StoryboardCanvas({ storyboard, progress }: { storyboard: Storyboard } & P) {
  const Comp = map[storyboard] ?? Angioplasty;
  return <Comp progress={progress} />;
}
