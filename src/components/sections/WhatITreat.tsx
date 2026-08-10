import { useTx } from "@/lib/i18n/tx";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LocaleLink } from "../locale-link";

/**
 * Twelve patient-facing categories, each a doorway into the relevant guide.
 * Deliberately not the full catalogue — that lives one click away.
 */
const categories = [
  { to: "/diseases/stroke", label: "Brain & stroke", note: "Stroke, brain bleeds, blocked brain arteries" },
  { to: "/diseases/poor-blood-circulation", label: "Circulation problems", note: "Leg pain on walking, cold feet, poor blood supply" },
  { to: "/diseases/varicose-veins", label: "Vein problems", note: "Varicose veins, clots, leg swelling and ulcers" },
  { to: "/diseases/brain-aneurysm", label: "Aneurysms", note: "Brain and aortic aneurysms" },
  { to: "/diseases/diabetic-foot", label: "Diabetic foot & limb problems", note: "Non-healing ulcers, gangrene, threatened amputation" },
  { to: "/diseases/thyroid-nodules", label: "Thyroid", note: "Benign thyroid nodules and neck swelling" },
  { to: "/diseases/liver-tumours", label: "Liver tumours", note: "Liver cancer and portal hypertension" },
  { to: "/conditions/renal-artery-stenosis", label: "Kidney & urinary problems", note: "Renal artery narrowing and kidney tumours" },
  { to: "/diseases/knee-osteoarthritis", label: "Knee pain", note: "Long-standing knee osteoarthritis pain" },
  { to: "/diseases/uterine-fibroids", label: "Women's health", note: "Fibroids and pelvic congestion" },
  { to: "/diseases/enlarged-prostate", label: "Prostate", note: "Enlarged prostate and urinary symptoms" },
  { to: "/conditions/dialysis-access-failure", label: "Dialysis access", note: "Failing fistulas and grafts" },
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
            {tx("Conditions affecting the brain, blood vessels, veins and other parts of the body can sometimes be treated through image-guided procedures. Explore the conditions relevant to your symptoms or diagnosis.")}
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
