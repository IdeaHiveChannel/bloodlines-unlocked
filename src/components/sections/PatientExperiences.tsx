import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "@/components/locale-link";
import { GOOGLE_REVIEW_URL } from "@/lib/reviews";

/**
 * Homepage "Patient Experiences" section. Genuine Google reviews require a
 * connected Google Business Profile; until then only the invitation is shown,
 * never placeholder testimonials.
 */
export function PatientExperiences() {
  const tx = useTx();
  return (
    <section className="relative bg-[#050B16] section-y">
      <div className="shell">
        <p className="text-label">Google</p>
        <h2 className="text-h1 mt-6 max-w-3xl">{tx("Patient Experiences")}</h2>
        <p className="mt-6 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
          {tx("Experiences shared by patients and families who consulted Dr. Mandeep Sagar.")}
        </p>
        <div className="mt-12 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
          <p className="max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
            {tx("Verified Google reviews will appear here once the practice's Google Business Profile is connected. No review is shown that a patient did not write.")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <LocaleLink to="/reviews" data-cursor="cta" className="inline-flex min-h-11 items-center rounded-full bg-white px-6 text-button text-black transition-colors hover:bg-[var(--accent)]">
              {tx("Share your experience")}
            </LocaleLink>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-6 text-button transition-colors hover:bg-white/5">
              Google Reviews ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
