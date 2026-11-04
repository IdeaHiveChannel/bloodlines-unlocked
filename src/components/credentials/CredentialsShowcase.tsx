import { useState } from "react";
import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../locale-link";
import { showcase, featuredShowcaseIds, type Evidence } from "@/lib/credentials";
import { CertificateButton, EvidenceDialog } from "./EvidenceViewer";

type Props = { variant: "home" | "about" | "media" };

const copy = {
  home: {
    label: "Training & academic work",
    title: "Trained, teaching and presenting — documented.",
    intro: "Photographs and certificates from Dr. Mandeep Sagar's international presentations, neurointerventional workshops and teaching. Each item is supported by an original document.",
  },
  about: {
    label: "Conferences, teaching & workshops",
    title: "Continuing education, in pictures.",
    intro: "Interventional radiology changes quickly. These photographs and certificates record where Dr. Mandeep Sagar has presented his work, taught other doctors and trained on new techniques.",
  },
  media: {
    label: "Photographs & certificates",
    title: "Conference and training gallery.",
    intro: "Original photographs and certificates from scientific presentations, international courses and hands-on workshops. Tap any image to view it in full.",
  },
} as const;

export function CredentialsShowcase({ variant }: Props) {
  const tx = useTx();
  const [active, setActive] = useState<Evidence | null>(null);
  const items = variant === "home" ? showcase.filter((s) => featuredShowcaseIds.includes(s.id)) : showcase;
  const c = copy[variant];
  const headingId = `showcase-${variant}-h`;

  return (
    <section className="relative bg-[#050B16] section-y border-t border-white/[0.05]" aria-labelledby={headingId}>
      <div className="shell">
        <p className="text-label">{tx(c.label)}</p>
        <h2 id={headingId} className="text-h1 mt-5 max-w-3xl">{tx(c.title)}</h2>
        <p className="mt-4 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">{tx(c.intro)}</p>

        <ul className={`mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 ${variant === "home" ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {items.map((s) => {
            const isCert = s.image.kind === "certificate";
            const anchor = s.id.startsWith("kcr-2025") ? "kcr-2025" : s.id.startsWith("linnc-2026") ? "linnc-2026" : s.id;
            return (
              <li key={s.id} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <figure className="flex flex-1 flex-col">
                  <button
                    type="button"
                    onClick={() => setActive({ ...s.image, caption: s.title })}
                    data-cursor="link"
                    className={`group relative block w-full overflow-hidden ${isCert ? "bg-white/[0.04]" : "bg-[#0a1525]"} aspect-[4/3]`}
                    aria-label={`${tx("Open image")}: ${tx(s.image.alt)}`}
                  >
                    <img
                      src={s.image.src}
                      alt={tx(s.image.alt)}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${isCert ? "object-contain p-3" : "object-cover"}`}
                    />
                  </button>
                  <figcaption className="flex flex-1 flex-col p-5">
                    <span className="text-label text-[var(--accent)]">{tx(s.category)}</span>
                    <h3 className="mt-2 text-h3">{tx(s.title)}</h3>
                    <p className="mt-1 text-caption text-[var(--ink-dim)]">{tx(s.meta)}</p>
                    <p className="mt-3 text-small leading-relaxed text-[var(--ink-dim)]">{tx(s.description)}</p>
                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
                      {s.certificates?.map((cert) => (
                        <CertificateButton key={cert.src} item={cert} onOpen={setActive} />
                      ))}
                      {variant !== "home" && (
                        <LocaleLink to={`/expertise#${anchor}`} data-cursor="link" className="text-caption underline">
                          {tx("On the timeline")} →
                        </LocaleLink>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>

        {variant === "home" && (
          <div className="mt-10 flex flex-wrap gap-3">
            <LocaleLink to="/expertise" data-cursor="cta" className="inline-flex min-h-11 items-center rounded-full bg-white px-6 text-button text-black transition-colors hover:bg-[var(--accent)]">
              {tx("See the full professional journey")}
            </LocaleLink>
            <LocaleLink to="/media" data-cursor="link" className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-6 text-button transition-colors hover:bg-white/5">
              {tx("All photographs & certificates")}
            </LocaleLink>
          </div>
        )}
      </div>
      <EvidenceDialog item={active} onClose={() => setActive(null)} />
    </section>
  );
}
