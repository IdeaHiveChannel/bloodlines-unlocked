import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient stories — Dr. Mandeep Sagar" },
      { name: "description", content: "Verified patient experiences of image-guided vascular and neurointerventional care." },
      { property: "og:title", content: "Patient stories" },
      { property: "og:description", content: "Verified patient experiences, published only with consent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16] min-h-screen">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <p className="text-label">Chapter 09 · Patient care today</p>
          <h1 className="text-display-xl mt-6">Patient stories.</h1>
          <p className="mt-8 text-body leading-relaxed text-[var(--ink-dim)]">
            Verified patient experiences will be published here, in the patient's own words and only with written consent. Nothing on this page is written on their behalf.
          </p>
          <div className="mt-14 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10">
            <p className="text-label">Currently</p>
            <p className="text-card-title mt-4">
              No stories are published yet. Until they are, this page stays empty rather than filled.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" data-cursor="cta"
                className="inline-flex rounded-full bg-white text-black px-6 py-3 text-button hover:bg-[var(--accent)] transition-colors">
                Book consultation
              </Link>
              <Link to="/expertise" data-cursor="link"
                className="inline-flex rounded-full border border-white/15 px-6 py-3 text-button hover:bg-white/5 transition-colors">
                Back to the journey
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
