import { createFileRoute, Link } from "@tanstack/react-router";
import { conditions } from "../lib/content";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Conditions Treated — Dr. Mandeep Sagar" },
      { name: "description", content: "Vascular and neurointerventional conditions treated through image-guided procedures." },
      { property: "og:title", content: "Conditions Treated" },
      { property: "og:description", content: "From stroke to peripheral artery disease — the full scope of image-guided vascular intervention." },
    ],
  }),
  component: ConditionsIndex,
});

function ConditionsIndex() {
  const byRegion = conditions.reduce<Record<string, typeof conditions>>((acc, c) => {
    (acc[c.region] ||= []).push(c);
    return acc;
  }, {});
  const labels: Record<string, string> = { brain: "Brain & Cerebral", neck: "Carotid", chest: "Aorta & Access", abdomen: "Abdominal", pelvis: "Pelvic", legs: "Lower Limbs" };
  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16]">
        <div className="mx-auto max-w-[1480px] px-6 sm:px-10">
          <p className="text-label">Catalogue</p>
          <h1 className="mt-6 text-display text-[clamp(2.4rem,6vw,6rem)] max-w-3xl">Conditions treated.</h1>
          <p className="mt-6 max-w-xl text-[14px] text-[var(--ink-dim)]">
            Each condition links to a focused explanation of what it is, what it feels like, and how it is treated through image-guided intervention.
          </p>
          <div className="mt-16 space-y-16">
            {Object.entries(byRegion).map(([region, list]) => (
              <section key={region}>
                <p className="text-label">{labels[region] ?? region}</p>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
                  {list.map((c) => (
                    <Link key={c.slug} to="/conditions/$slug" params={{ slug: c.slug }} data-cursor="link"
                      className="group bg-[#050B16] p-6 hover:bg-white/[0.03] transition-colors">
                      <h3 className="text-display text-2xl">{c.name}</h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-[var(--ink-dim)] line-clamp-3">{c.intro}</p>
                      <p className="mt-4 text-label opacity-0 group-hover:opacity-100 transition-opacity">Read →</p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
