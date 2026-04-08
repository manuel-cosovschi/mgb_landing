'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/animations';
import { FAQ as FAQ_ITEMS } from '@/lib/constants';

export function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="py-28 md:py-36 bg-[#0c0c18]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <motion.p variants={fadeUp} className="text-xs font-mono text-[#ff3b5c] tracking-widest uppercase mb-4">
                FAQ
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white mb-6">
                Preguntas<br />frecuentes<span className="text-[#ff3b5c]">.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#8888a4] text-lg leading-relaxed">
                Si tu pregunta no está acá, escribinos y te respondemos en menos de 24 horas.
              </motion.p>
            </div>

            {/* Right — accordion */}
            <motion.div variants={stagger} className="space-y-3">
              {FAQ_ITEMS.map((item) => {
                const isOpen = open === item.id;
                return (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    className={`rounded-xl border transition-colors duration-200 ${
                      isOpen ? 'border-[#ff3b5c]/30 bg-[#ff3b5c]/5' : 'border-white/6 bg-[#06060e]'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="font-heading font-medium text-base text-white">{item.q}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-none text-[#ff3b5c]"
                      >
                        <Plus size={18} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-[#8888a4] text-sm leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
