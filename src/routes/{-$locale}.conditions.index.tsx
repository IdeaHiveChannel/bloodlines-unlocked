import { LocaleLink } from "../components/locale-link";
import { createFileRoute } from "@tanstack/react-router";
import { conditions } from "../lib/content";
import { conditionToPillar } from "../lib/pillars";
import { Footer } from "../components/sections/Footer";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/{-$locale}/conditions/")({
  head: () => ({
    meta: [
      { title: "Conditions treated — Dr. Mandeep Sagar" },
      {
        name: "description",
        content:
          "The full disease library treated through image-guided intervention — from stroke and aneurysms to fibroids, liver tumours, diabetic foot and varicose veins.",
      },
      { property: "og:title", content: "Conditions treated by Dr. Mandeep Sagar" },
      {
        property: "og:description",
        content: "Featured guides and the complete catalogue of conditions treated without major surgery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/conditions` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/conditions` }],
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
          <h1 className="text-display-xl mt-6 max-w-3xl">
            Conditions treated.
          </h1>
          <p className="mt-6 max-w-xl text-small leading-relaxed text-[var(--ink-dim)]">
            Each condition links to a focused explanation of what it is, what it feels like, and how
            it is treated through image-guided intervention. The featured diseases carry a complete
            guide — symptoms, causes, diagnosis, treatment options, recovery and questions.
          </p>

          <section className="mt-20">
            <h2 className="text-label">Featured — complete guides</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
              {featured.map((c) => (
                <LocaleLink
                  key={c.slug}
                  to="/conditions/$slug"
                  params={{ slug: c.slug }}
                  data-cursor="link"
                  className="group bg-[#050B16] p-8 hover:bg-white/[0.03] transition-colors"
                >
                  <p className="text-label">{labels[c.region] ?? c.region}</p>
                  <h3 className="text-card-title mt-4">{c.name}</h3>
                  <p className="mt-3 text-caption leading-relaxed text-[var(--ink-dim)] line-clamp-3">
                    {c.intro}
                  </p>
                  <p className="mt-5 text-caption tracking-[0.16em] uppercase text-[var(--accent)]">
                    Complete guide →
                  </p>
                </LocaleLink>
              ))}
            </div>
          </section>

          <section className="mt-24 space-y-16">
            <p className="text-label">Other conditions treated</p>
            {Object.entries(byRegion).map(([region, list]) => (
              <div key={region}>
                <h2 className="text-label">{labels[region] ?? region}</h2>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
                  {list.map((c) => (
                    <LocaleLink
                      key={c.slug}
                      to="/conditions/$slug"
                      params={{ slug: c.slug }}
                      data-cursor="link"
                      className="group bg-[#050B16] p-6 hover:bg-white/[0.03] transition-colors"
                    >
                      <h3 className="text-card-title">{c.name}</h3>
                      <p className="mt-3 text-caption leading-relaxed text-[var(--ink-dim)] line-clamp-3">
                        {c.intro}
                      </p>
                      <p className="mt-4 text-label opacity-0 group-hover:opacity-100 transition-opacity">
                        Read →
                      </p>
                    </LocaleLink>
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

