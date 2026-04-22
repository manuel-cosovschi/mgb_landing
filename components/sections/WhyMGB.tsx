'use client';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Wallet } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/animations';
import { WHY_MGB } from '@/lib/constants';

const ICON_MAP: Record<string, React.ElementType> = { Code2, Rocket, Users, Wallet };

export function WhyMGB() {
  return (
    <section className="py-28 md:py-36 bg-[#0c0c18]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <motion.p variants={fadeUp} className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">
                Por qué elegirnos
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white mb-6">
                Calidad de producto,<br />
                <span className="text-[#00c896]">trato humano</span>.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#8888a4] text-lg leading-relaxed">
                No somos una agencia grande y anónima. Somos tres ingenieros que se involucran
                personalmente en cada proyecto y entregan resultados que duran.
              </motion.p>
            </div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_MGB.map((item) => {
                const Icon = ICON_MAP[item.icon] ?? Code2;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="p-6 rounded-2xl border border-white/6 bg-[#06060e] hover:border-white/12 hover:bg-[#0c0c18]/80 transition-colors group cursor-default"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#00c896]/10 flex items-center justify-center mb-4 text-[#00c896]">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-heading font-semibold text-base text-white mb-2">{item.title}</h3>
                    <p className="text-[#8888a4] text-sm leading-relaxed mb-3">{item.description}</p>
                    <div className="border-t border-white/6 pt-3 mt-1">
                      <span className="font-mono text-sm font-semibold text-[#00c896]">{item.stat}</span>
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
