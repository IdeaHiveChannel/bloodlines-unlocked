import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "../components/sections/Footer";
import { ExpertiseTimeline } from "../components/sections/ExpertiseTimeline";

const pillars = [
  { t: "Neurointervention", body: "Acute stroke thrombectomy, cerebral aneurysm embolization, AVM and dural fistula management. Time-critical work, performed under live imaging." },
  { t: "Stroke care", body: "The clock-driven pathway: recognition, imaging, decision, and clot retrieval. Coordination matters as much as the catheter." },
  { t: "Peripheral vascular", body: "From iliac to pedal arch — angioplasty, stenting, atherectomy. Limb-salvage strategies for critical ischaemia and diabetic foot." },
  { t: "Aortic disease", body: "Endovascular repair of aortic aneurysms and dissections (EVAR / TEVAR) through small access points, with shorter recovery." },
  { t: "Venous disease", body: "Endovenous ablation for varicose veins, catheter-directed therapy for DVT, venous stenting for outflow obstruction." },
  { t: "Interventional oncology", body: "TACE, microwave ablation and portal vein embolization — treatment delivered into the tumour, sparing the organ around it." },
  { t: "Hepatobiliary & portal", body: "TIPS for portal hypertension, variceal bleeding control, biliary drainage and transjugular biopsy." },
  { t: "Thyroid intervention", body: "Radiofrequency and microwave ablation of benign thyroid nodules — no incision, no scar, no lifelong replacement." },
  { t: "Renal & genitourinary", body: "Renal artery angioplasty, renal tumour ablation, prostate artery embolization and varicocele treatment." },
  { t: "Musculoskeletal & pain", body: "Genicular artery embolization for knee osteoarthritis, and image-guided treatment of chronic joint pain." },
  { t: "Women's health", body: "Uterine fibroid embolization and pelvic vein embolization for pelvic congestion — organ-preserving by design." },
  { t: "Dialysis access", body: "Maintenance of fistulas and grafts — fistuloplasty, declotting, central vein recanalisation. Keeping lifelines open." },
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
        <div className="shell">
          <p className="text-label">Practice</p>
          <h1 className="text-display-xl mt-6 max-w-3xl">Areas of expertise.</h1>
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {pillars.map((p) => (
              <div key={p.t} className="bg-[#050B16] p-10">
                <h2 className="text-h3">{p.t}</h2>
                <p className="mt-4 text-small leading-relaxed text-[var(--ink-dim)]">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-28">
            <p className="text-label">Professional journey</p>
            <h2 className="text-h1 mt-6 max-w-2xl">
              Training, teaching, and the practice it built.
            </h2>
            <p className="mt-4 max-w-xl text-small leading-relaxed text-[var(--ink-dim)]">
              In sequence — foundation, fellowship, high-volume practice, and the international
              courses that keep technique current.
            </p>
            <ExpertiseTimeline />
          </div>


          <div className="mt-20">
            <Link to="/conditions" className="text-label underline" data-cursor="link">See conditions treated →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
