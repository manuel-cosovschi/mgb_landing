'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/lib/animations';
import { PORTFOLIO } from '@/lib/constants';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const [active, setActive] = useState(0);
  const project = PORTFOLIO[active];

  return (
    <section id="portfolio" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-xs font-mono text-[#ff3b5c] tracking-widest uppercase mb-4">Portfolio</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white">
              Proyectos reales<span className="text-[#ff3b5c]">.</span>
            </h2>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
            {PORTFOLIO.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? 'bg-[#ff3b5c] text-white'
                    : 'border border-white/10 text-[#8888a4] hover:border-white/20 hover:text-white'
                }`}
              >
                {p.name}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Left — info */}
              <div className="rounded-2xl border border-white/6 bg-[#0c0c18] p-8 md:p-10 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="inline-block px-2.5 py-1 rounded-full text-xs font-mono mb-3"
                      style={{ backgroundColor: `${project.color}20`, color: project.color }}
                    >
                      {project.category}
                    </span>
                    <h3 className="font-heading font-bold text-2xl text-white">{project.name}</h3>
                    <p className="text-[#8888a4] text-sm mt-1">{project.client}</p>
                  </div>
                </div>

                <div className="space-y-5 flex-1">
                  <div>
                    <p className="text-xs font-mono text-[#55556a] uppercase tracking-widest mb-2">El problema</p>
                    <p className="text-[#8888a4] text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#55556a] uppercase tracking-widest mb-2">La solución</p>
                    <p className="text-[#8888a4] text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 text-[#55556a]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — metrics */}
              <div className="flex flex-col gap-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex-1 rounded-2xl border border-white/6 bg-[#0c0c18] p-8 flex flex-col justify-center"
                  >
                    <p
                      className="font-heading font-bold mb-2 leading-none"
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: project.color }}
                    >
                      <AnimatedCounter target={m.value} prefix={m.prefix} suffix={m.suffix} />
                    </p>
                    <p className="text-[#8888a4] text-sm">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
