import { useTx } from "@/lib/i18n/tx";
import suiteControl from "../../assets/suite-control.jpg";
import microcatheter from "../../assets/microcatheter.jpg";
import consultDesk from "../../assets/consult-desk.jpg";
import recoveryRoom from "../../assets/recovery-room.jpg";
import hybridOt from "../../assets/hybrid-ot.jpg";
import handsCatheter from "../../assets/hands-catheter.jpg";
import { procedureVideos } from "../../lib/media";
import { ResponsiveVideo } from "../media/ResponsiveVideo";



const stills = [
  { src: suiteControl, caption: "Angiography suite — live vascular roadmap" },
  { src: microcatheter, caption: "Microcatheter and guidewire, ready on the field" },
  { src: hybridOt, caption: "Hybrid theatre, imaging and intervention together" },
  { src: consultDesk, caption: "Planning from your scans, before anything begins" },
  { src: handsCatheter, caption: "Access through a pinpoint opening" },
  { src: recoveryRoom, caption: "Recovery, usually the same or next day" },
];

const films = [
  { ...procedureVideos["thrombectomy"]!, caption: "Mechanical thrombectomy — the clot is withdrawn" },
  {
    ...procedureVideos["varicose-vein-ablation"]!,
    caption: "Endovenous ablation — the failing vein is sealed",
  },
];


export function MediaBand() {
  const tx = useTx();
  return (
    <section className="section-y border-t border-white/[0.05] bg-[#050B16]">
      <div className="shell">
        <p className="text-label">{tx("Inside the work")}</p>
        <h2 className="text-h2 mt-3 max-w-2xl">{tx("A look at how the treatment actually happens.")}</h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-[repeat(2,minmax(0,1fr))]">
          {films.map((f) => (
            <figure key={f.url} className="min-w-0 overflow-hidden rounded-xl border border-white/[0.06]">
              <ResponsiveVideo
                src={f.url}
                poster={f.poster}
                ratio={f.ratio}
                fit="contain"
                frameClassName="rounded-none border-0"
                label={`Open fullscreen: ${f.caption}`}
              />


              <figcaption className="px-4 py-3 text-caption text-[var(--ink-dim)]">{tx(f.caption)}</figcaption>
            </figure>
          ))}
        </div>


        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stills.map((s) => (
            <figure key={tx(s.caption)} className="overflow-hidden rounded-xl border border-white/[0.06]">
              <img
                src={s.src}
                alt={tx(s.caption)}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-caption text-[var(--ink-dim)]">{tx(s.caption)}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
