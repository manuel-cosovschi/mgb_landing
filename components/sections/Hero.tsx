'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animations';
import { CONTACT } from '@/lib/constants';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const WebGLShader = dynamic(
  () => import('@/components/ui/web-gl-shader').then(m => ({ default: m.WebGLShader })),
  { ssr: false }
);

const STATS = [
  { value: 10, suffix: '+', label: 'Proyectos entregados' },
  { value: 3, suffix: '', label: 'Países con clientes' },
  { value: 100, suffix: '%', label: 'Satisfacción garantizada' },
];

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center pt-20 md:pt-16 min-h-[calc(100svh-0px)] overflow-hidden">
      {/* Background — WebGL only on desktop, static glow on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block absolute inset-0">
          <WebGLShader className="absolute top-0 left-0 w-full h-full block" />
        </div>
        <div className="absolute inset-0 bg-[#06060e]/82" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#00c896]/8 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#a78bfa]/6 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-24 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c896] animate-pulse" />
            <span className="text-xs font-mono text-[#8888a4] tracking-widest uppercase">Software factory · Mar del Plata, Argentina</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold leading-[1.08] tracking-tight mb-4 md:mb-6 text-[clamp(2.4rem,7vw,7rem)]"
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
            className="text-[#8888a4] text-base md:text-xl max-w-2xl mb-8 md:mb-10 leading-relaxed"
          >
            Somos un equipo de tres ingenieros apasionados. Creamos páginas web,
            bots de WhatsApp, automatizaciones y apps móviles de calidad para
            empresas y emprendedores en Argentina y el mundo.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-12 md:mb-20">
            <Link
              href="/pagina-web-para-tu-negocio"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors shadow-lg shadow-[#00c896]/20"
            >
              Quiero mi página web
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={CONTACT.googleMeet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#00c896]/50 text-[#00c896] font-medium text-base hover:bg-[#00c896]/10 transition-colors"
            >
              Agendar reunión gratuita
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
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
