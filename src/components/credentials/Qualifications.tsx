import { useState } from "react";
import { useTx } from "@/lib/i18n/tx";
import { qualifications, type Evidence } from "@/lib/credentials";
import { CertificateButton, EvidenceDialog } from "./EvidenceViewer";

export function Qualifications() {
  const tx = useTx();
  const [active, setActive] = useState<Evidence | null>(null);
  return (
    <section className="bg-[#050B16] section-y" aria-labelledby="qualifications-h">
      <div className="shell">
        <p className="text-label">{tx("Verified credentials")}</p>
        <h2 id="qualifications-h" className="text-h1 mt-5 max-w-2xl">{tx("Qualifications and registration.")}</h2>
        <p className="mt-4 max-w-xl text-small leading-relaxed text-[var(--ink-dim)]">
          {tx("Each entry below is supported by an original document reviewed for this website.")}
        </p>
        <dl className="mt-10 grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {qualifications.map((q) => (
            <div key={q.k} className="bg-[#050B16] p-6 sm:p-8">
              <dt className="text-label text-[var(--accent)]">{tx(q.k)}</dt>
              <dd className="mt-3">
                <p className="text-h3">{tx(q.v)}</p>
                <p className="mt-2 text-small leading-relaxed text-[var(--ink-dim)]">{tx(q.detail)}</p>
                {q.evidence && <div className="mt-4"><CertificateButton item={q.evidence} onOpen={setActive} /></div>}
                {q.link && (
                  <a href={q.link.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-caption underline">
                    {tx(q.link.label)} ↗
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <EvidenceDialog item={active} onClose={() => setActive(null)} />
    </section>
  );
}
