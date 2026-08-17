import { useTx } from "@/lib/i18n/tx";
import { useRef, useState } from "react";
import angioBefore from "../../assets/angio-before.jpg";
import angioAfter from "../../assets/angio-after.jpg";
import strokeBefore from "../../assets/case-stroke-before.jpg";
import strokeAfter from "../../assets/case-stroke-after.jpg";
import liverBefore from "../../assets/case-liver-before.jpg";
import liverAfter from "../../assets/case-liver-after.jpg";
import fibroidBefore from "../../assets/case-fibroid-before.jpg";
import fibroidAfter from "../../assets/case-fibroid-after.jpg";
import veinsBefore from "../../assets/case-veins-before.jpg";
import veinsAfter from "../../assets/case-veins-after.jpg";

type Case = {
  id: string;
  region: string;
  title: string;
  procedure: string;
  before: string;
  after: string;
  beforeCaption: string;
  afterCaption: string;
  note: string;
};

const cases: Case[] = [
  {
    id: "stroke",
    region: "Brain",
    title: "Acute ischaemic stroke",
    procedure: "Mechanical thrombectomy",
    before: strokeBefore,
    after: strokeAfter,
    beforeCaption: "Vessel cut off mid-course",
    afterCaption: "Territory refilled",
    note: "A clot removed within the treatment window. The angiogram before and after is the whole argument for speed.",
  },
  {
    id: "pad",
    region: "Legs",
    title: "Peripheral arterial disease",
    procedure: "Angioplasty and stenting",
    before: angioBefore,
    after: angioAfter,
    beforeCaption: "Tight, calcified narrowing",
    afterCaption: "Line restored to the foot",
    note: "Rest pain and non-healing wounds change course once inline flow reaches the foot again.",
  },
  {
    id: "liver",
    region: "Liver",
    title: "Liver tumour",
    procedure: "TACE and ablation",
    before: liverBefore,
    after: liverAfter,
    beforeCaption: "Enhancing, blood-hungry lesion",
    afterCaption: "Devascularised, no enhancement",
    note: "Treatment delivered into the tumour's own artery, sparing the healthy liver around it.",
  },
  {
    id: "fibroids",
    region: "Pelvis",
    title: "Uterine fibroids",
    procedure: "Uterine fibroid embolization",
    before: fibroidBefore,
    after: fibroidAfter,
    beforeCaption: "Bulky fibroid mass",
    afterCaption: "Infarcted and shrunken",
    note: "Bleeding and pressure settle over months. The uterus stays.",
  },
  {
    id: "veins",
    region: "Veins",
    title: "Varicose veins",
    procedure: "Endovenous laser ablation",
    before: veinsBefore,
    after: veinsAfter,
    beforeCaption: "Refluxing, dilated trunk",
    afterCaption: "Closed, flow rerouted",
    note: "The faulty vein is sealed from within. Walking the same day, no stripping.",
  },
];

function Slider({ item }: { item: Case }) {
  const tx = useTx();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const drag = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        if (e.buttons === 1) drag(e);
      }}
      onPointerDown={drag}
      data-cursor="link"
      className="relative aspect-[4/3] w-full select-none touch-none overflow-hidden rounded-2xl border border-white/[0.06] sm:aspect-video sm:rounded-3xl"
    >
      <img
        src={item.after}
        alt={`${tx(item.title)} after ${tx(item.procedure)}`}
        loading="lazy"
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={item.before}
          alt={`${tx(item.title)} before treatment`}
          loading="lazy"
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-px bg-[var(--accent)] vessel-glow"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-11 rounded-full bg-[var(--accent)] grid place-items-center text-black text-xs font-bold">
          ⇔
        </div>
      </div>
      <div className="absolute left-3 top-3 max-w-[45%] truncate rounded-full bg-black/60 px-2.5 py-1 text-label sm:left-4 sm:top-4 sm:px-3">
        {tx("Before")} · {tx(item.beforeCaption)}
      </div>
      <div className="absolute right-3 top-3 max-w-[45%] truncate rounded-full bg-black/60 px-2.5 py-1 text-label sm:right-4 sm:top-4 sm:px-3">
        {tx("After")} · {tx(item.afterCaption)}
      </div>
    </div>
  );
}

export function BeforeAfter() {
  const tx = useTx();
  const [active, setActive] = useState(0);
  const item = cases[active];
  return (
    <section className="relative bg-[#050B16] section-y">
      <div className="shell">
        <p className="text-label">{tx("Chapter 06 · Evidence")}</p>
        <h2 className="mt-4 max-w-3xl text-h1 sm:mt-6">
          {tx("Before. After. The same patient, the same vessel. - Dvt case . Only injections . Laser not done")}
        </h2>
        <p className="mt-4 max-w-xl text-body text-[var(--ink-dim)]">
          {tx("Interventional radiology is judged on images, not adjectives. Drag the line across each case to see what changed. Representative illustrations of typical treated cases, not identifiable patient records.")}
        </p>

        <div className="scroll-x -mx-5 mt-8 flex gap-2 px-5 sm:mx-0 sm:flex-wrap sm:px-0 sm:gap-3">
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              data-cursor="link"
              className={`min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-caption transition-colors sm:px-5 ${
                i === active
                  ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--ink)]"
                  : "border-white/[0.1] text-[var(--ink-dim)] hover:text-[var(--ink)]"
              }`}
            >
              {tx(c.region)} · {tx(c.title)}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-10">
          <Slider key={item.id} item={item} />
          <div className="pb-2">
            <p className="text-label">{tx("Case")} {String(active + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-h3">{tx(item.title)}</h3>
            <p className="mt-2 text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--accent)]">
              ↓ {tx(item.procedure)}
            </p>
            <p className="mt-4 text-body text-[var(--ink-dim)]">{tx(item.note)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
