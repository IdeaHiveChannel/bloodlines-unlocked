import { LocaleLink } from "../locale-link";
import { Footer } from "./Footer";
import { useLocale } from "../../lib/i18n/react";
import { useTx } from "../../lib/i18n/tx";
import { infoPage, infoPageOrder } from "../../lib/patient-info";

const routeFor = (slug: string) => `/patient-information/${slug}`;

/** Shared layout for the patient-information pages. */
export function PatientInfoPage({ slug }: { slug: string }) {
  const locale = useLocale();
  const tx = useTx();
  const page = infoPage(slug, locale);
  const others = infoPageOrder.filter((s) => s !== slug);

  return (
    <>
      <main className="bg-[#050B16] pt-36 pb-24">
        <div className="shell">
          <p className="text-label">{page.eyebrow}</p>
          <h1 className="text-display-xl mt-6 max-w-3xl">{page.title}</h1>
          <p className="mt-6 max-w-2xl text-body leading-relaxed text-[var(--ink-dim)]">{page.lead}</p>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-2">
            {page.sections.map((s) => (
              <section key={s.heading} className="bg-[#050B16] p-8 sm:p-10">
                <h2 className="text-h3">{s.heading}</h2>
                <p className="mt-4 text-small leading-relaxed text-[var(--ink-dim)]">{s.body}</p>
                {s.points && (
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-small leading-relaxed text-[var(--ink-dim)]">
                        <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span className="min-w-0">{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <LocaleLink
              to="/contact"
              data-cursor="cta"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-7 text-button text-black transition-colors hover:bg-[var(--accent)]"
            >
              {tx("Book consultation")}
            </LocaleLink>
            <LocaleLink
              to="/second-opinion"
              data-cursor="cta"
              className="inline-flex min-h-12 items-center rounded-full border border-white/[0.14] px-7 text-button text-white transition-colors hover:bg-white/[0.06]"
            >
              {tx("Get a second opinion")}
            </LocaleLink>
          </div>

          <div className="mt-16 border-t border-white/[0.06] pt-8">
            <p className="text-label">{tx("Patient information")}</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {others.map((s) => (
                <li key={s}>
                  <LocaleLink
                    to={routeFor(s)}
                    data-cursor="link"
                    className="text-small text-[var(--ink-dim)] transition-colors hover:text-white"
                  >
                    {infoPage(s, locale).title} →
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
