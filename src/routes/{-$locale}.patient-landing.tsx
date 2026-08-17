import { createFileRoute } from "@tanstack/react-router";
import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "@/components/locale-link";
import { Anatomy } from "@/components/anatomy/Anatomy";
import { useSiteNav } from "@/lib/nav";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, UserCheck, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/{-$locale}/patient-landing")({
  component: PatientLanding,
});

function PatientLanding() {
  const tx = useTx();
  const nav = useSiteNav();
  
  // Extract categories for easier access
  const treatGroup = nav.groups.find(g => g.key === 'treat');
  
  return (
    <main className="bg-[#050B16] min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="shell relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-label text-[var(--accent)] mb-4">{tx("Patient Information")}</p>
            <h1 className="text-display-lg mb-6">
              {tx("Start with your problem.")}
            </h1>
            <p className="text-body-lg text-[var(--ink-dim)] max-w-2xl">
              {tx("Conditions affecting the brain, blood vessels, veins and other parts of the body can sometimes be treated through image-guided procedures. Explore the conditions relevant to your symptoms or diagnosis.")}
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-l from-[var(--accent)] to-transparent" />
        </div>
      </section>

      {/* Interactive Anatomy Section */}
      <Anatomy />

      {/* Condition Links Grid */}
      <section className="section-y bg-black/20">
        <div className="shell">
          <div className="flex items-end justify-between mb-12 gap-6">
            <h2 className="text-h2">{tx("What I treat")}</h2>
            <LocaleLink to="/conditions" className="text-label underline hover:text-[var(--accent)] transition-colors">
              {tx("View all conditions →")}
            </LocaleLink>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {treatGroup?.links.map((link) => (
              <LocaleLink
                key={link.to}
                to={link.to as any}
                className="group p-8 bg-[#050B16] hover:bg-white/[0.02] transition-colors flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <h3 className="text-card-title group-hover:text-[var(--accent)] transition-colors">{tx(link.label)}</h3>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-caption uppercase tracking-widest text-[var(--ink-dim)]">{tx("Learn more")}</span>
                  <ArrowRight size={16} className="text-[var(--ink-dim)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                </div>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions / Journey */}
      <section className="section-y">
        <div className="shell">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: "/patient-information/how-treatment-works", label: "How treatment works", icon: BookOpen },
              { to: "/second-opinion", label: "Second opinion", icon: UserCheck },
              { to: "/contact", label: "Book consultation", icon: MessageSquare },
              { to: "/testimonials", label: "Patient stories", icon: ArrowRight },
            ].map((item) => (
              <LocaleLink
                key={item.to}
                to={item.to as any}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[var(--accent)]/30 transition-all flex flex-col gap-4"
              >
                <item.icon className="text-[var(--accent)]" size={24} />
                <span className="text-nav">{tx(item.label)}</span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
