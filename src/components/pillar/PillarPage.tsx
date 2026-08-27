import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../../components/locale-link";
import { useEffect, useState } from "react";
import type { Pillar } from "../../lib/pillars";
import { hasPillar, slugToLabel } from "../../lib/pillars";
import { useConditions, useProcedures } from "../../lib/i18n/data";
import { useLocale } from "../../lib/i18n/react";
import { aliasFor } from "../../lib/seo/aliases";
import { pillarSeoFor } from "../../lib/seo/pillar-seo";
import { conditionImages } from "../../lib/condition-images";
import { evidenceFor } from "../../lib/condition-evidence";
import diagnosisImg from "../../assets/section-diagnosis.jpg";
import treatmentImg from "../../assets/hands-catheter.jpg";
import recoveryImg from "../../assets/section-recovery.jpg";

import { procedureVideos } from "../../lib/media";
import { ProcedureVideo } from "../procedures/ProcedureVideo";
import { Consultation } from "../sections/Consultation";
import { Footer } from "../sections/Footer";


const doors = [
  { id: "symptoms", label: "Symptoms" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "recovery", label: "Recovery" },
];

function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: number;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-white/[0.06] py-16 sm:section-y">
      <div className="grid gap-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8">
        <div>
          <p className="text-label">
            {String(index).padStart(2, "0")} · {label}
          </p>
        </div>
        <div>
          <h2 className="text-h1">{title}</h2>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((s) => (
        <li key={s} className="flex gap-3 text-small leading-relaxed text-[var(--ink-dim)]">
          <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-[var(--accent)]" />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={1600}
        height={900}
        className="aspect-[16/9] w-full rounded-2xl border border-white/[0.06] object-cover opacity-90"
      />
      <figcaption className="mt-3 max-w-2xl text-caption text-[var(--ink-dim)]">{caption}</figcaption>
    </figure>
  );
}



function SubNav() {
  const tx = useTx();
  const [active, setActive] = useState<string>("symptoms");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    doors.forEach((d) => {
      const el = document.getElementById(d.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return (
    <div className="sticky top-[72px] z-30 -mx-5 mb-2 border-y border-white/[0.06] bg-[#050B16]/85 px-5 py-2.5 backdrop-blur-md sm:top-[86px] sm:-mx-10 sm:px-10 sm:py-3">
      <ul className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-center gap-3 sm:gap-6">
        {doors.map((d) => (
          <li key={d.id}>
            <a
              href={`#${d.id}`}
              data-cursor="link"
              className={`whitespace-nowrap text-label transition-colors ${
                active === d.id ? "text-[var(--accent)]" : "text-[var(--ink-dim)] hover:text-white"
              }`}
            >
              {tx(d.label)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PillarPage({ pillar }: { pillar: Pillar }) {
  const tx = useTx();
  const isMl = useLocale() === "ml";
  const alias = aliasFor(pillar.slug);
  const seo = pillarSeoFor(pillar.slug);
  const procedures = useProcedures();
  const conditions = useConditions();

  const pillarProcedures = pillar.procedures.map((slug) => ({
    slug,
    entry: procedures.find((p) => p.slug === slug),
  }));
  const videos = pillar.procedures
    .map((slug) => procedureVideos[slug])
    .filter((v): v is NonNullable<typeof v> => Boolean(v));
  const related = pillar.relatedConditions
    .filter((slug) => slug !== pillar.slug)
    .map((slug) => ({
      slug,
      pillar: hasPillar(slug),
      condition: conditions.find((c) => c.slug === slug),
    }))
    .filter((r) => r.pillar || r.condition);

  const searchFaqs = (seo?.searchFaqs ?? []).map((f) => ({ q: isMl ? f.qMl : f.q, a: isMl ? f.aMl : f.a }));
  const allFaqs = [...pillar.faqs, ...searchFaqs];

  return (
    <>
      <main className="bg-[#050B16] pt-32">
        <div className="shell">
          {/* 01 — Hero */}
          <header className="pb-14 pt-6">
            <LocaleLink to="/conditions" className="text-label" data-cursor="link">
              {tx("← All conditions")}
            </LocaleLink>
            <p className="mt-10 text-label text-[var(--accent)]">
              {tx(pillar.patientTerm ? "Patient guide" : "Condition")}
            </p>
            <h1 className="text-display-xl mt-5 max-w-4xl">
              {pillar.heroQuote}
            </h1>
            <p className="mt-4 text-small uppercase tracking-[0.22em] text-[var(--ink-dim)]">
              {pillar.title}
            </p>
            <p className="mt-8 max-w-2xl text-body leading-relaxed text-[var(--ink-dim)]">
              {pillar.heroLead}
            </p>
            {heroImage && (
              <img
                src={heroImage}
                alt={pillar.title}
                width={1600}
                height={900}
                className="mt-10 aspect-[16/9] w-full rounded-2xl border border-white/[0.06] object-cover opacity-90"
              />
            )}

            {(alias || seo) && (
              <div className="mt-8 max-w-2xl space-y-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                {alias && (
                  <p className="text-small leading-relaxed text-[var(--ink-dim)]">
                    <span className="text-label text-[var(--accent)]">{tx("Also known as")}</span>
                    <br />
                    {isMl ? alias.mlAlsoKnownAs : alias.alsoKnownAs}
                  </p>
                )}
                {seo && (
                  <p className="text-small leading-relaxed">
                    {isMl ? seo.answerMl : seo.answer}
                  </p>
                )}
                {seo && (
                  <p className="text-small leading-relaxed text-[var(--ink-dim)]">
                    <span className="text-label text-[var(--accent)]">{tx("How image-guided treatment helps")}</span>
                    <br />
                    {isMl ? seo.imageGuidedMl : seo.imageGuided}
                  </p>
                )}
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <LocaleLink
                to="/contact"
                data-cursor="cta"
                className="rounded-full bg-white px-6 py-3 text-button text-black transition-colors hover:bg-[var(--accent)]"
              >
                {tx("Book consultation")}
              </LocaleLink>
              <LocaleLink
                to="/second-opinion"
                data-cursor="link"
                className="rounded-full border border-white/[0.14] px-6 py-3 text-button transition-colors hover:border-white/40"
              >
                {tx("Second opinion on your scans")}
              </LocaleLink>
              <a
                href="#treatment"
                data-cursor="link"
                className="rounded-full border border-white/[0.14] px-6 py-3 text-button transition-colors hover:border-white/40"
              >
                {tx("How it is treated")}
              </a>
            </div>
          </header>

          <SubNav />

          {/* 02 */}
          <Section id="symptoms" index={2} label={tx("Symptoms")} title={tx("What patients notice.")}>
            <Bullets items={pillar.symptoms} />
          </Section>

          {/* 03 */}
          <Section id="causes" index={3} label={tx("Causes")} title={tx("Why it happens.")}>
            <Bullets items={pillar.causes} />
          </Section>

          {/* 04 */}
          <Section id="risk-factors" index={4} label={tx("Risk factors")} title={tx("Who it affects.")}>
            <Bullets items={pillar.riskFactors} />
          </Section>

          {/* 05 */}
          <Section id="warning-signs" index={5} label={tx("Warning signs")} title={tx("When to act immediately.")}>
            <ul className="space-y-4">
              {pillar.warningSigns.map((w) => (
                <li
                  key={w}
                  className="rounded-xl border border-[var(--accent)]/25 bg-[var(--accent)]/[0.05] px-5 py-4 text-small leading-relaxed"
                >
                  {w}
                </li>
              ))}
            </ul>
          </Section>

          {/* 06 */}
          <Section id="diagnosis" index={6} label={tx("Diagnosis")} title={tx("How it is confirmed.")}>
            <Figure
              src={diagnosisImg}
              alt={tx("Vascular imaging reviewed on a diagnostic workstation")}
              caption={tx("The diagnosis is built on imaging — ultrasound, CT or MR angiography — before anything is treated.")}
            />
            <ol className="mt-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">

              {pillar.diagnosis.map((d, i) => (
                <li key={d.step} className="grid gap-3 py-5 sm:grid-cols-[56px_170px_minmax(0,1fr)] sm:gap-4 sm:py-6">
                  <span className="text-label pt-1">0{i + 1}</span>
                  <p className="text-display text-xl">{d.step}</p>
                  <p className="text-small leading-relaxed text-[var(--ink-dim)]">{d.detail}</p>
                </li>
              ))}
            </ol>
          </Section>

          {/* 07 */}
          <Section id="tests" index={7} label={tx("Tests explained")} title={tx("Why each test is done.")}>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2">
              {pillar.tests.map((t) => (
                <div key={t.name} className="bg-[#050B16] p-6">
                  <h3 className="text-display text-xl">{t.name}</h3>
                  <p className="mt-3 text-small leading-relaxed text-[var(--ink-dim)]">{t.why}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 08 */}
          <Section id="treatment" index={8} label={tx("Image-guided treatment options")} title={tx("Every route, stated plainly.")}>
            <Figure
              src={treatmentImg}
              alt={tx("Catheter and guidewire handled under image guidance")}
              caption={tx("Image-guided treatment is carried out through a small puncture, guided by live imaging.")}
            />
            <ul className="mt-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">

              {pillar.treatments.map((t) => (
                <li key={t.name} className="grid gap-3 py-5 sm:grid-cols-[minmax(0,1fr)_2fr] sm:py-6">
                  <div>
                    <p className="text-display text-xl">{t.name}</p>
                    <p className="mt-1 text-label">{t.kind}</p>
                  </div>
                  <p className="text-small leading-relaxed text-[var(--ink-dim)]">{t.detail}</p>
                </li>
              ))}
            </ul>
          </Section>

          {/* 09 — Evidence */}
          <Section id="evidence" index={9} label={tx("Evidence")} title={tx("What the imaging shows.")}>
            {evidence ? (
              <figure>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { src: evidence.before, label: evidence.beforeLabel },
                    { src: evidence.after, label: evidence.afterLabel },
                  ].map((im) => (
                    <div key={im.label} className="overflow-hidden rounded-2xl border border-white/[0.06]">
                      <img
                        src={im.src}
                        alt={`${pillar.title} — ${tx(im.label)}`}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <p className="bg-white/[0.02] px-4 py-3 text-label">{tx(im.label)}</p>
                    </div>
                  ))}
                </div>
                <figcaption className="mt-5 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
                  {tx(evidence.note)}{" "}
                  {tx("Imaging figures are illustrative of the technique. They are not a patient case report and results differ from person to person.")}
                </figcaption>
              </figure>
            ) : (
              <p className="max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
                {tx("Imaging figures for this condition are being prepared. Case imaging is published only once it is anonymised and verified.")}
              </p>
            )}
          </Section>

          {/* 10 */}
          <Section id="approach" index={10} label={tx("The approach")} title={tx("How Dr. Mandeep treats it.")}>

            <ol className="space-y-6">
              {pillar.approach.map((a, i) => (
                <li key={a} className="grid grid-cols-[40px_minmax(0,1fr)] gap-4 sm:grid-cols-[54px_minmax(0,1fr)] sm:gap-5">
                  <span className="text-label pt-2">0{i + 1}</span>
                  <p className="text-body leading-relaxed">{a}</p>
                </li>
              ))}
            </ol>
          </Section>

          {/* 11 */}
          <Section id="procedures" index={11} label={tx("Procedures")} title={tx("What is actually performed.")}>

            <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {pillarProcedures.map(({ slug, entry }) =>
                entry ? (
                  <li key={slug}>
                    <LocaleLink
                      to="/procedures/$slug"
                      params={{ slug }}
                      data-cursor="link"
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-2 py-5 sm:gap-6 sm:py-6 transition-colors hover:bg-white/[0.02]"
                    >
                      <div>
                        <p className="text-card-title">{entry.name}</p>
                        <p className="mt-2 text-small text-[var(--ink-dim)]">{entry.oneLiner}</p>
                      </div>
                      <span className="text-label">→</span>
                    </LocaleLink>
                  </li>
                ) : (
                  <li key={slug} className="px-2 py-6">
                    <p className="text-card-title">{tx(slugToLabel(slug))}</p>
                    <p className="mt-2 text-small text-[var(--ink-dim)]">
                      {tx("Performed through a small puncture under image guidance — discussed in detail at consultation.")}
                    </p>
                  </li>
                ),
              )}
            </ul>
          </Section>

          {/* 12 */}
          <Section id="recovery" index={12} label={tx("Recovery")} title={tx("What the timeline looks like.")}>
            <Figure
              src={recoveryImg}
              alt={tx("Patient walking in a hospital corridor after treatment")}
              caption={tx("Most image-guided treatments involve a short stay, with walking resumed early where the treating team allows it.")}
            />
            <ol className="relative mt-8 border-l border-white/[0.08] pl-8">

              {pillar.recovery.map((r) => (
                <li key={r.when} className="relative pb-9 last:pb-0">
                  <span className="absolute -left-[37px] top-2 size-2 rounded-full bg-[var(--accent)]" />
                  <p className="text-label">{r.when}</p>
                  <p className="mt-2 text-small leading-relaxed text-[var(--ink-dim)]">{r.what}</p>
                </li>
              ))}
            </ol>
          </Section>

          {/* 13 */}
          <Section id="prevention" index={13} label={tx("Prevention")} title={tx("What keeps it from returning.")}>

            <Bullets items={pillar.prevention} />
          </Section>

          {/* 14 */}
          <Section
            id="faqs"
            index={14}

            label={tx("Questions")}
            title={`${allFaqs.length} ${tx("questions patients ask.")}`}
          >
            <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {allFaqs.map((f) => (
                <details key={f.q} className="group py-5" data-cursor="link">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-body leading-snug marker:hidden">
                    <span>{f.q}</span>
                    <span className="mt-1 shrink-0 text-[var(--ink-dim)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-small leading-relaxed text-[var(--ink-dim)]">{f.a}</p>
                </details>
              ))}
            </div>
          </Section>

          {/* 15 */}
          <Section id="patient-stories" index={15} label={tx("Patient stories")} title={tx("Verified accounts only.")}>

            <p className="max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
              {tx("No testimonials are published here yet. Patient accounts will appear only once they are consented and verified — nothing on this page is written on a patient's behalf.")}
            </p>
            <LocaleLink to="/testimonials" className="mt-6 inline-block text-label" data-cursor="link">
              {tx("Patient stories →")}
            </LocaleLink>
          </Section>

          {/* 16 */}
          <Section id="videos" index={16} label={tx("Videos")} title={tx("See the procedure.")}>

            {videos.length > 0 ? (
              <div className="grid gap-8">
                {videos.map((v) => (
                  <ProcedureVideo key={v.url} video={v} />
                ))}
              </div>
            ) : (
              <p className="max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
                {tx("Animated films for this condition are being produced. In the meantime, the procedure pages above set out each step in sequence.")}
              </p>
            )}
          </Section>

          {/* 17 */}
          <Section id="related-conditions" index={17} label={tx("Related conditions")} title={tx("Conditions that travel together.")}>

            <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) =>
                r.pillar ? (
                  <li key={r.slug} className="bg-[#050B16]">
                    <LocaleLink
                      to="/conditions/$slug"
                      params={{ slug: r.slug }}
                      data-cursor="link"
                      className="block h-full p-6 transition-colors hover:bg-white/[0.03]"
                    >
                      <p className="text-display text-xl">{tx(slugToLabel(r.slug))}</p>
                      <p className="mt-3 text-label">{tx("Full guide →")}</p>
                    </LocaleLink>
                  </li>
                ) : (
                  <li key={r.slug} className="bg-[#050B16]">
                    <LocaleLink
                      to="/conditions/$slug"
                      params={{ slug: r.slug }}
                      data-cursor="link"
                      className="block h-full p-6 transition-colors hover:bg-white/[0.03]"
                    >
                      <p className="text-display text-xl">{r.condition?.name ?? slugToLabel(r.slug)}</p>
                      <p className="mt-3 line-clamp-2 text-caption text-[var(--ink-dim)]">
                        {r.condition?.intro}
                      </p>
                    </LocaleLink>
                  </li>
                ),
              )}
            </ul>
          </Section>
        </div>
      </main>
      {/* 17 */}
      <Consultation />
      <Footer />
    </>
  );
}
