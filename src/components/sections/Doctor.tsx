import portraitAsset from "../../assets/dr-mandeep-sagar.webp.asset.json";
import hands from "../../assets/hands-catheter.jpg";
import ot from "../../assets/hybrid-ot.jpg";
import { Link } from "@tanstack/react-router";

export function Doctor() {
  return (
    <section className="relative bg-[#050B16] section-y">
      <div className="shell">
        <p className="text-label">Chapter 06 · The physician</p>
        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="text-display-xl">
              A practice built around image-guided precision.
            </h2>
            <p className="mt-8 max-w-xl text-small leading-relaxed text-[var(--ink-dim)]">
              Dr. Mandeep Sagar is a Vascular and Neuro Interventional Radiologist. The work spans the full vascular system — from cerebral aneurysms to below-knee revascularisation — performed through pinpoint access, under real-time imaging.
            </p>
            <p className="mt-6 max-w-xl text-caption leading-relaxed text-[var(--ink-dim)] italic">
              Verified credentials, fellowships, hospital affiliations and publications will be listed here once supplied. No claims are made on this page without source.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
              {[
                { k: "Specialty", v: "Vascular & Neuro Interventional Radiology" },
                { k: "Modalities", v: "Fluoroscopy · CT · MR · Ultrasound guidance" },
                { k: "Scope", v: "Brain · Carotid · Aorta · Peripheral · Venous" },
                { k: "Setting", v: "Hybrid Cath Lab" },
              ].map((d) => (
                <div key={d.k} className="bg-[#050B16] p-6">
                  <p className="text-label">{d.k}</p>
                  <p className="mt-3 text-small text-[var(--ink)]">{d.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <Link to="/about" data-cursor="link" className="inline-flex rounded-full border border-white/15 px-5 py-3 text-caption tracking-wide hover:bg-white/5 transition-colors">Full profile</Link>
              <Link to="/contact" data-cursor="cta" className="inline-flex rounded-full bg-white text-black px-5 py-3 text-caption tracking-wide hover:bg-[var(--accent)] transition-colors">Book consultation</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0a1525]">
              <img src={portraitAsset.url} alt="Dr. Mandeep Sagar"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <p className="text-label">On Practice</p>
                <p className="mt-2 text-h3 max-w-[260px]">"The disease is approached where it lives — through the vessel itself."</p>

              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div className="aspect-square overflow-hidden rounded-2xl border border-white/[0.06]">
                <img src={hands} alt="Catheter manipulation" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl border border-white/[0.06]">
                <img src={ot} alt="Hybrid operating theatre" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
