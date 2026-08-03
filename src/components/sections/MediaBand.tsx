import suiteControl from "../../assets/suite-control.jpg";
import microcatheter from "../../assets/microcatheter.jpg";
import consultDesk from "../../assets/consult-desk.jpg";
import recoveryRoom from "../../assets/recovery-room.jpg";
import hybridOt from "../../assets/hybrid-ot.jpg";
import handsCatheter from "../../assets/hands-catheter.jpg";
import thrombectomy from "../../assets/video-thrombectomy.mp4.asset.json";
import varicose from "../../assets/video-varicose-vein-ablation.mp4.asset.json";

const stills = [
  { src: suiteControl, caption: "Angiography suite — live vascular roadmap" },
  { src: microcatheter, caption: "Microcatheter and guidewire, ready on the field" },
  { src: hybridOt, caption: "Hybrid theatre, imaging and intervention together" },
  { src: consultDesk, caption: "Planning from your scans, before anything begins" },
  { src: handsCatheter, caption: "Access through a pinpoint opening" },
  { src: recoveryRoom, caption: "Recovery, usually the same or next day" },
];

const films = [
  { url: thrombectomy.url, caption: "Mechanical thrombectomy — the clot is withdrawn" },
  { url: varicose.url, caption: "Endovenous ablation — the failing vein is sealed" },
];

export function MediaBand() {
  return (
    <section className="section-y border-t border-white/[0.05] bg-[#050B16]">
      <div className="shell">
        <p className="text-label">Inside the work</p>
        <h2 className="text-h2 mt-3 max-w-2xl">A look at how the treatment actually happens.</h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {films.map((f) => (
            <figure key={f.url} className="overflow-hidden rounded-xl border border-white/[0.06]">
              <video
                src={f.url}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-video w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-caption text-[var(--ink-dim)]">{f.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stills.map((s) => (
            <figure key={s.caption} className="overflow-hidden rounded-xl border border-white/[0.06]">
              <img
                src={s.src}
                alt={s.caption}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-caption text-[var(--ink-dim)]">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
