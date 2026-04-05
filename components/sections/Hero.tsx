"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { GlowEffect } from "@/components/ui/GlowEffect";

const TECH_LOGOS = [
  "Next.js", "React", "TypeScript", "Node.js", "OpenAI", "n8n", "Swift", "Vercel",
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* ── Background layers ── */}
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Radial gradient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(233,69,96,0.07) 0%, rgba(189,147,249,0.04) 50%, transparent 70%)",
        }}
      />

      {/* Glows */}
      <GlowEffect
        color="#E94560"
        size="xl"
        opacity={0.06}
        className="-top-40 left-1/2 -translate-x-1/2"
      />
      <GlowEffect
        color="#BD93F9"
        size="lg"
        opacity={0.05}
        className="top-1/3 -left-32"
      />
      <GlowEffect
        color="#8BE9FD"
        size="lg"
        opacity={0.04}
        className="top-1/3 -right-32"
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-24 left-[8%] w-20 h-20 rounded-full border border-[rgba(233,69,96,0.12)] hidden lg:block"
        animate={{ y: [0, -12, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[12%] w-12 h-12 rounded-lg border border-[rgba(139,233,253,0.1)] hidden lg:block"
        animate={{ y: [0, 10, 0], rotate: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-40 right-[10%] w-16 h-16 rounded-lg border border-[rgba(189,147,249,0.1)] hidden lg:block"
        animate={{ y: [0, -8, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-40 right-[8%] w-10 h-10 rounded-full border border-[rgba(80,250,123,0.08)] hidden lg:block"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-5 max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border-gradient-animated text-[#EEEEF2]">
            <Sparkles size={14} className="text-[#E94560]" />
            Abiertos a nuevos proyectos
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tight mb-6"
          variants={fadeUp}
        >
          Construimos el software
          <br />
          <span className="gradient-text">que tu negocio</span>
          <br />
          necesita
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[#7A7A95] text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          variants={fadeUp}
        >
          Somos tres ingenieros en sistemas que desarrollamos{" "}
          <span className="text-[#EEEEF2]">aplicaciones web</span>,{" "}
          <span className="text-[#EEEEF2]">bots de WhatsApp con inteligencia artificial</span>{" "}
          y{" "}
          <span className="text-[#EEEEF2]">automatizaciones a medida</span>{" "}
          para PyMEs y emprendedores.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          variants={fadeUp}
        >
          <motion.button
            onClick={() => scrollTo("#contacto")}
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#E94560] hover:bg-[#d63851] shadow-glow-sm hover:shadow-glow-md transition-all duration-200 cursor-pointer text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Contactanos
            <ArrowRight size={18} />
          </motion.button>
          <motion.button
            onClick={() => scrollTo("#portfolio")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#EEEEF2] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.03)] transition-all duration-200 cursor-pointer text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Ver nuestro trabajo
          </motion.button>
        </motion.div>

        {/* Social proof / tech strip */}
        <motion.div
          className="flex flex-col items-center gap-4"
          variants={fadeUp}
        >
          <p className="text-[#4A4A65] text-xs uppercase tracking-widest font-mono">
            Tecnologías que dominamos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TECH_LOGOS.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-[#7A7A95] px-3 py-1 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:text-[#EEEEF2] hover:border-[rgba(255,255,255,0.12)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4A4A65]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs font-mono uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
