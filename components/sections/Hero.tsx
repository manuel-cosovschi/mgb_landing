'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/lib/animations';
import { CONTACT } from '@/lib/constants';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { WebGLShader } from '@/components/ui/web-gl-shader';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

const STATS = [
  { value: 10, suffix: '+', label: 'Proyectos entregados' },
  { value: 3, suffix: '', label: 'Países con clientes' },
  { value: 100, suffix: '%', label: 'Satisfacción garantizada' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* WebGL shader background clipped to hero */}
      <div className="absolute inset-0 pointer-events-none">
        <WebGLShader className="absolute top-0 left-0 w-full h-full block" />
        {/* Dark overlay to keep brand's dark feel while letting shader show subtly */}
        <div className="absolute inset-0 bg-[#06060e]/82" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#00c896]/8 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#a78bfa]/6 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c896] animate-pulse" />
            <span className="text-xs font-mono text-[#8888a4] tracking-widest uppercase">Software factory · Mar del Plata, Argentina</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
          >
            Construimos
            <br />
            <span className="text-[#00c896]">software</span> que
            <br />
            hace crecer
            <br />
            tu negocio.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-[#8888a4] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Somos un equipo de tres ingenieros apasionados. Creamos páginas web,
            bots de WhatsApp, automatizaciones y apps móviles de calidad para
            empresas y emprendedores en Argentina y el mundo.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-20">
            <a
              href={CONTACT.googleMeet}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiquidButton
                size="xl"
                className="text-white border border-[#00c896]/50 bg-[#00c896]/15 hover:bg-[#00c896]/25 rounded-full font-semibold shadow-lg shadow-[#00c896]/20 w-full sm:w-auto"
              >
                Agendar reunión gratuita
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </LiquidButton>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white font-medium text-base hover:bg-white/5 transition-colors"
            >
              Ver proyectos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/6"
          >
            {STATS.map(({ value, suffix, label }) => (
              <div key={label}>
                <p className="font-heading font-bold text-2xl md:text-4xl text-white mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </p>
                <p className="text-[#8888a4] text-xs md:text-sm leading-snug">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[10px] font-mono text-[#55556a] tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#55556a] to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
