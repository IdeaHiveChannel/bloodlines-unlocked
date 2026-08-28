import { localeHead } from "@/lib/i18n/meta";
import { sectionSchema } from "@/lib/seo/schema";
import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../components/locale-link";
import { createFileRoute } from "@tanstack/react-router";
import { usePillars } from "../lib/i18n/data";
import { Footer } from "../components/sections/Footer";
import { Consultation } from "../components/sections/Consultation";

export const Route = createFileRoute("/{-$locale}/conditions/")({
  head: ({ params }) => localeHead(params, "/conditions", {
    title: "Patient guides — Dr. Mandeep Sagar",
    description:
      "Complete patient guides to stroke, varicose veins, diabetic foot, PAD, DVT, fibroids, prostate, brain aneurysm and liver tumours.",
    ogTitle: "Patient guides — Dr. Mandeep Sagar",
    ogDescription:
      "Symptoms, tests, treatment options and recovery, explained condition by condition.",
    scripts: sectionSchema({ path: "/conditions", name: "Conditions treated", description: "Complete patient guides to stroke, varicose veins, diabetic foot, PAD, DVT, fibroids, prostate, brain aneurysm and liver tumours." }),
  }),
  component: DiseasesIndex,
});

function DiseasesIndex() {
  const tx = useTx();
  const items = usePillars();
  return (
    <>
      <main className="bg-[#050B16] pt-36 pb-24">
        <div className="shell">
          <p className="text-label">{tx("Patient guides")}</p>
          <h1 className="text-display-xl mt-6 max-w-3xl">
            {tx("Fourteen conditions, explained end to end.")}
          </h1>
          <p className="mt-6 max-w-xl text-small leading-relaxed text-[var(--ink-dim)]">
            {tx("Each guide runs from the first symptom to the final follow-up — what it is, which tests answer it, every treatment route, how it is treated here, and what recovery actually looks like.")}
          </p>

          <ol className="mt-16 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {items.map((p, i) => (
              <li key={p.slug}>
                <LocaleLink
                  to="/conditions/$slug"
                  params={{ slug: p.slug }}
                  data-cursor="link"
                  className="group grid items-start gap-5 px-2 py-8 transition-colors hover:bg-white/[0.02] sm:grid-cols-[70px_minmax(0,1fr)_auto]"
                >
                  <span className="text-label pt-2">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-h1">
                      {p.name}
                      {p.patientTerm && (
                        <span className="ml-3 align-middle text-label text-[var(--accent)]">
                          {tx("Patient term")}
                        </span>
                      )}
                    </h2>
                    <p className="mt-3 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
                      {p.summary}
                    </p>
                  </div>
                  <span className="text-label opacity-0 transition-opacity group-hover:opacity-100 sm:pt-3">
                    {tx("Read →")}
                  </span>
                </LocaleLink>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <Consultation />
      <Footer />
    </>
  );
}
