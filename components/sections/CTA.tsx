'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/lib/animations';
import { CONTACT } from '@/lib/constants';

export function CTA() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00c896]/8 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-6">
            ¿Listo para empezar?
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold leading-tight text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Hablemos de tu
            <br />
            <span className="text-[#00c896]">próximo proyecto</span>.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#8888a4] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Primera llamada gratuita. Sin compromiso. Te damos una propuesta con alcance y precio
            en 3–5 días hábiles.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors shadow-2xl shadow-[#00c896]/30"
            >
              Agendar llamada gratuita
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/12 text-white font-medium text-base hover:bg-white/5 transition-colors"
            >
              Escribir por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
