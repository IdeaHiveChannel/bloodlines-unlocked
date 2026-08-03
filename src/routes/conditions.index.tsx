import { createFileRoute, Link } from "@tanstack/react-router";
import { conditions } from "../lib/content";
import { conditionToPillar } from "../lib/pillars";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/conditions/")({
  head: () => ({
    meta: [
      { title: "Conditions treated — Dr. Mandeep Sagar" },
      {
        name: "description",
        content:
          "The full disease library treated through image-guided intervention — from stroke and aneurysms to fibroids, liver tumours, diabetic foot and varicose veins.",
      },
      { property: "og:title", content: "Conditions treated" },
      {
        property: "og:description",
        content: "Featured guides and the complete catalogue of conditions treated without major surgery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConditionsIndex,
});

const labels: Record<string, string> = {
  brain: "Brain & cerebral",
  neck: "Carotid & neck",
  chest: "Aorta & chest",
  abdomen: "Abdomen",
  pelvis: "Pelvis",
  legs: "Lower limbs",
};

function ConditionsIndex() {
  const featured = conditions.filter((c) => conditionToPillar[c.slug]);
  const others = conditions.filter((c) => !conditionToPillar[c.slug]);

  const byRegion = others.reduce<Record<string, typeof conditions>>((acc, c) => {
    (acc[c.region] ||= []).push(c);
    return acc;
  }, {});

  return (
    <>
      <main className="pt-36 pb-24 bg-[#050B16]">
        <div className="shell">
          <p className="text-label">Catalogue</p>
          <h1 className="mt-6 text-display text-[clamp(2.4rem,6vw,6rem)] max-w-3xl">
            Conditions treated.
          </h1>
          <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-[var(--ink-dim)]">
            Each condition links to a focused explanation of what it is, what it feels like, and how
            it is treated through image-guided intervention. The featured diseases carry a complete
            guide — symptoms, causes, diagnosis, treatment options, recovery and questions.
          </p>

          <section className="mt-20">
            <p className="text-label">Featured — complete guides</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
              {featured.map((c) => (
                <Link
                  key={c.slug}
                  to="/conditions/$slug"
                  params={{ slug: c.slug }}
                  data-cursor="link"
                  className="group bg-[#050B16] p-8 hover:bg-white/[0.03] transition-colors"
                >
                  <p className="text-label">{labels[c.region] ?? c.region}</p>
                  <h2 className="mt-4 text-display text-2xl">{c.name}</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-[var(--ink-dim)] line-clamp-3">
                    {c.intro}
                  </p>
                  <p className="mt-5 text-[12px] tracking-[0.16em] uppercase text-[var(--accent)]">
                    Complete guide →
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-24 space-y-16">
            <p className="text-label">Other conditions treated</p>
            {Object.entries(byRegion).map(([region, list]) => (
              <div key={region}>
                <p className="text-label">{labels[region] ?? region}</p>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
                  {list.map((c) => (
                    <Link
                      key={c.slug}
                      to="/conditions/$slug"
                      params={{ slug: c.slug }}
                      data-cursor="link"
                      className="group bg-[#050B16] p-6 hover:bg-white/[0.03] transition-colors"
                    >
                      <h3 className="text-display text-2xl">{c.name}</h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-[var(--ink-dim)] line-clamp-3">
                        {c.intro}
                      </p>
                      <p className="mt-4 text-label opacity-0 group-hover:opacity-100 transition-opacity">
                        Read →
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

