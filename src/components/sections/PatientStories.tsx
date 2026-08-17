import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../../components/locale-link";
import { motion } from "framer-motion";
import { patientStories, consentNote } from "../../lib/stories";

export function PatientStories() {
  const tx = useTx();
  const stories = patientStories;

  return (
    <section className="relative bg-[#050B16] section-y">
      <div className="shell">
        <p className="text-label">{tx("Patient stories")}</p>
        <h2 className="text-h1 mt-6 max-w-3xl">{tx("In the patient's own words.")}</h2>
        <p className="mt-6 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">{consentNote}</p>

        {stories.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
            <p className="text-label">{tx("Currently")}</p>
            <p className="text-card-title mt-4 max-w-2xl">
              {tx("No stories are published yet. Until consented accounts are available, this section stays empty rather than filled with words no patient said.")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <LocaleLink
                to="/diseases"
                data-cursor="cta"
                className="inline-flex min-h-11 items-center rounded-full bg-white px-6 text-button text-black transition-colors hover:bg-[var(--accent)]"
              >
                {tx("Read the clinical guides")}
              </LocaleLink>
              <LocaleLink
                to="/second-opinion"
                data-cursor="link"
                className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-6 text-button transition-colors hover:bg-white/5"
              >
                {tx("Request a second opinion")}
              </LocaleLink>
            </div>
          </div>
        ) : (
          <>
            <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {stories.slice(0, 6).map((s, i) => (
                <motion.li
                  key={`${tx(s.name)}-${i}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6"
                >
                  <span
                    aria-hidden
                    className="text-h2 leading-none text-[color-mix(in_oklab,var(--accent)_60%,transparent)]"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-3 flex-1 text-small leading-relaxed text-[var(--ink)]">
                    {tx(s.quote)}
                  </blockquote>
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="text-card-title">{tx(s.name)}</p>
                    <p className="mt-1 text-caption text-[var(--ink-dim)]">
                      {tx(s.condition)} · {tx(s.city)}
                      {s.year ? ` · ${s.year}` : ""}
                    </p>
                    {s.guide ? (
                      <LocaleLink
                        to="/diseases/$slug"
                        params={{ slug: s.guide }}
                        data-cursor="link"
                        className="mt-3 inline-block text-label underline"
                      >
                        {tx("Read the case guide →")}
                      </LocaleLink>
                    ) : s.conditionSlug ? (
                      <LocaleLink
                        to="/conditions/$slug"
                        params={{ slug: s.conditionSlug }}
                        data-cursor="link"
                        className="mt-3 inline-block text-label underline"
                      >
                        {tx("About this condition →")}
                      </LocaleLink>
                    ) : null}
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10">
              <LocaleLink to="/testimonials" data-cursor="cta" className="text-label underline">
                {tx("All patient stories →")}
              </LocaleLink>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
