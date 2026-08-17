import { useT } from "@/lib/i18n/react";
import { useTx } from "@/lib/i18n/tx";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronRight } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const t = useT();
  const tx = useTx();
  const [openIndex, setOpenIndex] = useState<string | null>("brain-0");

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="relative border-t border-white/[0.05] bg-[#050B16] section-y overflow-hidden">
      <div className="shell">
        <div className="max-w-3xl">
          <p className="text-label">{tx(t.faq.eyebrow)}</p>
          <h2 className="mt-4 text-display-md lg:text-display-lg">{tx(t.faq.h2)}</h2>
          <p className="mt-6 text-small text-[var(--ink-dim)] max-w-xl">
            {tx(t.faq.description)}
          </p>
        </div>

        <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-4">
            <nav className="flex flex-col gap-2">
              {t.faq.categories.map((cat: any) => (
                <button
                  key={cat.id}
                  onClick={() => setOpenIndex(`${cat.id}-0`)}
                  className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left border ${
                    openIndex?.startsWith(cat.id)
                      ? "bg-white/[0.05] border-white/10 text-[var(--accent)]"
                      : "bg-transparent border-transparent text-[var(--ink-dim)] hover:bg-white/[0.02]"
                  }`}
                >
                  <span className="text-[15px] font-medium tracking-wide">
                    {tx(cat.label)}
                  </span>
                  <ChevronRight 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      openIndex?.startsWith(cat.id) ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                    }`}
                  />
                </button>
              ))}
            </nav>
            
            <div className="mt-10 pt-10 border-t border-white/5 hidden lg:block">
               <a 
                href="#contact" 
                className="text-label text-[var(--accent)] hover:opacity-80 transition-opacity flex items-center gap-2"
              >
                {tx(t.faq.cta)} <ChevronRight size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {t.faq.categories.map((cat: any) => (
              <div 
                key={cat.id} 
                className={openIndex?.startsWith(cat.id) ? "block" : "hidden lg:block"}
              >
                <div className="space-y-4">
                  {cat.questions.map((q: any, i: number) => {
                    const id = `${cat.id}-${i}`;
                    const isOpen = openIndex === id;
                    
                    return (
                      <div 
                        key={id}
                        className={`group border rounded-2xl transition-all duration-500 ${
                          isOpen 
                            ? "bg-white/[0.03] border-white/10" 
                            : "bg-transparent border-white/5 hover:border-white/10"
                        }`}
                      >
                        <button
                          onClick={() => toggle(id)}
                          className="w-full flex items-start justify-between p-6 text-left"
                        >
                          <span className={`text-[16px] lg:text-[18px] font-medium leading-snug transition-colors duration-300 ${
                            isOpen ? "text-white" : "text-[var(--ink-dim)] group-hover:text-white"
                          }`}>
                            {tx(q.q)}
                          </span>
                          <span className="mt-1 ml-4 flex-shrink-0 text-[var(--accent)]">
                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                          </span>
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            >
                              <div className="px-6 pb-8 text-[15px] lg:text-[16px] leading-relaxed text-[var(--ink-dim)] border-t border-white/5 pt-6 mx-6">
                                {tx(q.a)}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
