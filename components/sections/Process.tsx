'use client';
import { motion } from 'framer-motion';
import { Search, FileText, Code2, Rocket, LifeBuoy } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/animations';
import { PROCESS } from '@/lib/constants';

const ICON_MAP: Record<string, React.ElementType> = { Search, FileText, Code2, Rocket, LifeBuoy };

export function Process() {
  return (
    <section id="proceso" className="py-28 md:py-36 bg-[#0c0c18]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div variants={fadeUp} className="mb-16 md:mb-20 max-w-xl">
            <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">Cómo trabajamos</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white">
              Nuestro proceso<span className="text-[#00c896]">.</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
              style={{ background: 'linear-gradient(to bottom, #00c89644, #00c89622, transparent)' }}
            />

            <motion.div variants={stagger} className="space-y-6">
              {PROCESS.map((step) => {
                const Icon = ICON_MAP[step.icon] ?? Search;
                return (
                  <motion.div
                    key={step.id}
                    variants={fadeUp}
                    className="relative flex gap-6 sm:gap-8 group"
                  >
                    {/* Step dot / icon */}
                    <div className="flex-none flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#06060e] border border-[#00c896]/40 flex items-center justify-center text-[#00c896] z-10 relative group-hover:ring-2 group-hover:ring-[#00c896]/30 group-hover:ring-offset-2 group-hover:ring-offset-[#0c0c18] transition-all duration-300">
                        <Icon size={16} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-6 sm:pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs text-[#00c896]">{step.step}</span>
                        <h3 className="font-heading font-semibold text-xl text-white">{step.title}</h3>
                      </div>
                      <p className="text-[#8888a4] text-base leading-relaxed mb-2">
                        {step.description}
                      </p>
                      <span className="font-mono text-xs text-[#55556a]">{step.duration}</span>
                    </div>
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
