import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "../components/hero/Hero";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Mandeep Sagar — Restoring blood flow with image-guided precision" },
      { name: "description", content: "A documentary on advanced vascular and neurointerventional radiology — minimally invasive procedures performed through pinpoint access, under real-time imaging." },
      { property: "og:title", content: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist" },
      { property: "og:description", content: "Restoring blood flow with image-guided precision." },
    ],
  }),
  component: Index,
});

const chapters = [
  { to: "/about", label: "About", body: "The clinician, the training, the philosophy of image-guided care." },
  { to: "/expertise", label: "Expertise", body: "Neurointervention, peripheral vascular, aorta, veins, embolization, dialysis access." },
  { to: "/anatomy", label: "Anatomy", body: "An interactive map of the vascular system — hover a region, read the disease it hides." },
  { to: "/procedures", label: "Procedures", body: "Every intervention told beat by beat, from access to closure." },
  { to: "/conditions", label: "Conditions", body: "Catalogue of vascular and neurological disease treated without open surgery." },
  { to: "/results", label: "Results", body: "Before-and-after imaging — occlusion to restored flow, side by side." },
  { to: "/recovery", label: "Recovery", body: "What the days after look like when the incision is the size of a pen tip." },
  { to: "/journey", label: "Patient journey", body: "From first call to follow-up — the seven steps of interventional care." },
  { to: "/resources", label: "Resources", body: "Searchable patient education across conditions and procedures." },
  { to: "/contact", label: "Consultation", body: "Book a review, share imaging, ask a second opinion." },
] as const;

function Index() {
  return (
    <main>
      <Hero />
      <section className="bg-[#050B16] py-24 sm:py-36">
        <div className="mx-auto max-w-[1480px] px-6 sm:px-10">
          <p className="text-label">Contents</p>
          <h2 className="mt-6 text-display text-[clamp(2rem,4.5vw,4rem)] max-w-3xl">Ten chapters, one practice.</h2>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {chapters.map((c) => (
              <Link key={c.to} to={c.to} data-cursor="link"
                className="group bg-[#050B16] p-8 hover:bg-white/[0.03] transition-colors flex flex-col justify-between min-h-[180px]">
                <div>
                  <p className="text-label">Chapter</p>
                  <h3 className="mt-4 text-display text-2xl">{c.label}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-[var(--ink-dim)]">{c.body}</p>
                </div>
                <span className="mt-6 text-label opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
