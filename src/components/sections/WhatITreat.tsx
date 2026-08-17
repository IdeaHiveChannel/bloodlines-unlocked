import { useTx } from "@/lib/i18n/tx";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LocaleLink } from "../locale-link";

/**
 * Twelve patient-facing categories, each a doorway into the relevant guide.
 * Deliberately not the full catalogue — that lives one click away.
 */
const categories = [
  { to: "/diseases/stroke", label: "Stroke and blocked blood vessels in the brain", note: "Brain blood vessel clot causing stroke" },
  { to: "/diseases/brain-aneurysm", label: "Brain aneurysm and abnormal blood vessels", note: "Bleeding from a brain aneurysm" },
  { to: "/diseases/poor-blood-circulation", label: "Blocked arteries and poor blood circulation in the legs", note: "Pain while walking, cold feet, reduced blood supply" },
  { to: "/diseases/diabetic-foot", label: "Diabetic foot and non-healing wounds", note: "Threatened limb and gangrene" },
  { to: "/diseases/varicose-veins", label: "Varicose veins, blood clots and venous ulcers", note: "Swollen leg veins and non-healing sores" },
  { to: "/conditions/visceral-aneurysm", label: "Aneurysms of the aorta and abdominal blood vessels", note: "Visceral artery aneurysms" },
  { to: "/conditions/renal-artery-stenosis", label: "Kidney blood vessel problems and selected kidney tumours", note: "Renal artery narrowing and tumours" },
  { to: "/diseases/liver-tumours", label: "Liver tumours and selected vascular liver conditions", note: "Hepatocellular carcinoma and hemangioma" },
  { to: "/conditions/dialysis-access-failure", label: "Dialysis access problems", note: "Fistula and graft narrowing or blockage" },
  { to: "/diseases/thyroid-nodules", label: "Thyroid nodules and thyroid swelling", note: "Benign neck lumps and goitre" },
  { to: "/diseases/enlarged-prostate", label: "Enlarged prostate and urinary symptoms", note: "Difficulty passing urine and frequent urination" },
  { to: "/diseases/uterine-fibroids", label: "Uterine fibroids and selected pelvic conditions", note: "Heavy periods and pelvic pain" },
  { to: "/diseases/knee-osteoarthritis", label: "Knee osteoarthritis pain", note: "Chronic knee pain relief" },
];

export function WhatITreat() {
  const tx = useTx();
  return (
    <section className="relative border-t border-white/[0.05] bg-[#050B16] section-y">
      <div className="shell">
        <p className="text-label">{tx("What I treat")}</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-12">
          <h2 className="text-display-xl lg:col-span-6">{tx("Start with your problem.")}</h2>
          <p className="max-w-xl text-small leading-relaxed text-[var(--ink-dim)] lg:col-span-6 lg:pt-4">
            {tx("Conditions affecting the blood vessels of the brain, legs, abdomen and other parts of the body can sometimes be treated through image-guided minimally invasive procedures.")}
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.li
              key={c.to}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.04 }}
              className="bg-[#050B16]"
            >
              <LocaleLink
                to={c.to}
                data-cursor="link"
                className="group flex h-full items-start justify-between gap-4 p-7 transition-colors hover:bg-white/[0.03]"
              >
                <span className="min-w-0">
                  <span className="block text-h3 transition-colors group-hover:text-[color-mix(in_oklab,var(--accent)_75%,white)]">
                    {tx(c.label)}
                  </span>
                  <span className="mt-2 block text-caption leading-relaxed text-[var(--ink-dim)]">
                    {tx(c.note)}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="mt-1 shrink-0 text-[var(--ink-dim)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                />
              </LocaleLink>
            </motion.li>
          ))}
        </ul>

        <div className="mt-10">
          <LocaleLink to="/conditions" data-cursor="link" className="text-label underline">
            {tx("View all conditions →")}
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}
