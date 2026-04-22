'use client';
import { motion } from 'framer-motion';
import { Monitor, MessageCircle, Zap, Smartphone, Globe, Shield } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/animations';
import { SERVICES } from '@/lib/constants';

const ICON_MAP: Record<string, React.ElementType> = {
  Monitor, MessageCircle, Zap, Smartphone, Globe, Shield,
};

export function Services() {
  return (
    <section id="servicios" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div variants={fadeUp} className="mb-16 md:mb-20 max-w-xl">
            <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">Servicios</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white mb-4">
              Lo que hacemos<span className="text-[#00c896]">.</span>
            </h2>
            <p className="text-[#8888a4] text-lg leading-relaxed">
              Desde una landing page hasta sistemas complejos. Siempre con código limpio y resultados reales.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
          >
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon] ?? Monitor;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="group bg-[#0c0c18] p-8 hover:bg-[#111122] transition-colors duration-300 relative cursor-pointer"
                >
                  <span className="absolute top-6 right-8 font-mono text-xs text-[#55556a]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 group-hover:shadow-[0_0_12px_currentColor] transition-shadow duration-300"
                    style={{ backgroundColor: `${service.color}18`, color: service.color }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-3 group-hover:text-[#00c896] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#8888a4] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-mono bg-white/5 text-[#55556a]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00c896] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
