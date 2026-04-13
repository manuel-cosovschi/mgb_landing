'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/lib/animations';
import { TECH_ROW_1, TECH_ROW_2 } from '@/lib/constants';

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex-none px-5 py-2.5 rounded-full border border-white/8 bg-[#0c0c18] text-[#8888a4] text-sm font-mono whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.p variants={fadeUp} className="text-xs font-mono text-[#ff3b5c] tracking-widest uppercase mb-4">
            Stack & herramientas
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white mb-4">
            Usamos las herramientas de IA<br />
            <span className="text-[#ff3b5c]">más avanzadas del mercado.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#8888a4] text-lg max-w-xl leading-relaxed">
            GPT-4o, Claude, Whisper, LangChain — integramos los últimos modelos en productos reales, no solo como experimento.
          </motion.p>
        </motion.div>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={TECH_ROW_1} />
        <MarqueeRow items={TECH_ROW_2} reverse />
      </div>
    </section>
  );
}
