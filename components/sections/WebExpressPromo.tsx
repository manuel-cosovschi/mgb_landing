'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Check } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/animations';

const HIGHLIGHTS = [
  'Diseño personalizado',
  'Responsive',
  'Deploy incluido',
  'Entrega desde 48 hs hábiles',
];

export function WebExpressPromo() {
  return (
    <section className="py-20 md:py-28 bg-[#06060e]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl overflow-hidden border border-[#00c896]/20 bg-[#0c0c18] p-8 md:p-12"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00c896]/8 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00c896]/30 bg-[#00c896]/10 mb-5">
                  <Globe size={13} className="text-[#00c896]" />
                  <span className="text-xs font-mono text-[#00c896] tracking-widest uppercase">Páginas web</span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
                  ¿Necesitás una página web para tu negocio?
                </h2>

                <p className="text-[#8888a4] text-lg leading-relaxed mb-7 max-w-lg">
                  Diseño profesional, adaptado a celular, con todo lo que necesitás para que tus clientes te encuentren y te contacten.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {HIGHLIGHTS.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-[#8888a4]">
                      <div className="w-4 h-4 rounded-full bg-[#00c896]/15 flex items-center justify-center flex-none">
                        <Check size={10} className="text-[#00c896]" />
                      </div>
                      {h}
                    </div>
                  ))}
                </div>

                <Link
                  href="/pagina-web-para-tu-negocio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors shadow-lg shadow-[#00c896]/20"
                >
                  Ver propuesta
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right — simple visual */}
              <div className="hidden lg:block">
                <div className="rounded-xl border border-white/8 overflow-hidden shadow-xl shadow-black/40">
                  {/* Browser chrome */}
                  <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2 border-b border-white/6">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 mx-2 bg-[#0c0c1e] rounded-md px-3 py-1 text-[10px] text-[#55556a] font-mono truncate">
                      tunegocio.com.ar
                    </div>
                  </div>
                  {/* Page mockup */}
                  <div className="bg-[#0c0c18] p-4 space-y-3">
                    <div className="bg-[#00c896]/12 rounded-lg p-4 border border-[#00c896]/15">
                      <div className="h-3 bg-white/20 rounded w-3/4 mb-2" />
                      <div className="h-2 bg-white/10 rounded w-1/2 mb-3" />
                      <div className="h-7 bg-[#00c896]/50 rounded-full w-28" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="bg-[#111122] rounded-lg p-2 border border-white/5">
                          <div className="w-5 h-5 rounded bg-[#00c896]/20 mb-1.5" />
                          <div className="h-2 bg-white/15 rounded mb-1" />
                          <div className="h-1.5 bg-white/8 rounded w-4/5" />
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="h-10 bg-[#1a1a2e] rounded border border-white/5" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
