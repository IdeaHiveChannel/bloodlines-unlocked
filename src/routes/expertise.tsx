import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "../components/sections/Footer";

const pillars = [
  { t: "Neurointervention", body: "Acute stroke thrombectomy. Cerebral aneurysm embolization. AVM management. Time-critical, image-guided." },
  { t: "Peripheral Vascular", body: "From iliac to pedal arch — angioplasty, stenting, atherectomy. Limb-salvage strategies for critical ischemia and diabetic foot." },
  { t: "Aortic Disease", body: "Endovascular repair of aortic aneurysms (EVAR / TEVAR) through small access points, with reduced recovery time." },
  { t: "Venous Disease", body: "Endovenous ablation for varicose veins. Catheter-directed therapy for DVT. Restoration of venous return without surgery." },
  { t: "Embolization", body: "Uterine fibroid and prostate artery embolization. Targeted devascularisation of disease that does not require excision." },
  { t: "Dialysis Access", body: "Maintenance of fistulas and grafts — fistuloplasty, declotting, salvage. Keeping lifelines open." },
];

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Dr. Mandeep Sagar" },
      { name: "description", content: "Areas of vascular and neurointerventional practice." },
      { property: "og:title", content: "Expertise" },
      { property: "og:description", content: "The full scope of image-guided vascular intervention." },
    ],
  }),
  component: Expertise,
});

function Expertise() {
  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16]">
        <div className="mx-auto max-w-[1480px] px-6 sm:px-10">
          <p className="text-label">Practice</p>
          <h1 className="mt-6 text-display text-[clamp(2.4rem,6vw,6rem)] max-w-3xl">Areas of expertise.</h1>
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {pillars.map((p) => (
              <div key={p.t} className="bg-[#050B16] p-10">
                <h2 className="text-display text-3xl">{p.t}</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-[var(--ink-dim)]">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/conditions" className="text-label underline" data-cursor="link">See conditions treated →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
