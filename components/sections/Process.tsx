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
            <p className="text-xs font-mono text-[#ff3b5c] tracking-widest uppercase mb-4">Cómo trabajamos</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white">
              Nuestro proceso<span className="text-[#ff3b5c]">.</span>
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/6 hidden sm:block md:block" />

            <div className="space-y-8 md:space-y-0">
              {PROCESS.map((step, i) => {
                const Icon = ICON_MAP[step.icon] ?? Search;
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={step.id}
                    variants={fadeUp}
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                      i > 0 ? 'md:mt-12' : ''
                    }`}
                  >
                    {/* Step number — center dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#06060e] border border-[#ff3b5c]/50 items-center justify-center z-10">
                      <span className="font-mono text-xs text-[#ff3b5c] font-bold">{step.step}</span>
                    </div>

                    {/* Content — alternating sides */}
                    <div className={`${isEven ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}`}>
                      <div className={`flex items-center gap-4 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                        <div className="md:hidden w-8 h-8 rounded-full bg-[#ff3b5c]/10 flex items-center justify-center text-[#ff3b5c]">
                          <Icon size={16} />
                        </div>
                        <span className="font-mono text-xs text-[#ff3b5c]">{step.step}</span>
                        <h3 className="font-heading font-semibold text-xl text-white">{step.title}</h3>
                      </div>
                      <p className="text-[#8888a4] text-base leading-relaxed mb-2">{step.description}</p>
                      <span className="font-mono text-xs text-[#55556a]">{step.duration}</span>
                    </div>

                    {/* Icon side (desktop) */}
                    <div className={`hidden md:flex ${isEven ? 'md:col-start-2 md:pl-8 justify-start' : 'md:col-start-1 md:row-start-1 md:pr-8 justify-end'}`}>
                      <div className="w-14 h-14 rounded-2xl bg-[#ff3b5c]/8 border border-[#ff3b5c]/15 flex items-center justify-center text-[#ff3b5c]">
                        <Icon size={24} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
