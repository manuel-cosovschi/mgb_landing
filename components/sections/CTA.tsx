"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { CONTACT } from "@/lib/constants";
import { GlowEffect } from "@/components/ui/GlowEffect";

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export function CTA() {
  const waLink = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  return (
    <section
      id="cta"
      className="relative section-padding overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(233,69,96,0.07) 0%, rgba(189,147,249,0.04) 40%, #050510 70%)",
      }}
    >
      {/* Top + bottom separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(233,69,96,0.25)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(189,147,249,0.15)] to-transparent" />

      <GlowEffect color="#E94560" size="xl" opacity={0.06} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center gap-6"
        >
          {/* Label */}
          <motion.span
            variants={fadeUp}
            className="text-xs font-mono text-[#E94560] uppercase tracking-widest flex items-center gap-2"
          >
            <span className="w-6 h-px bg-[#E94560]" />
            ¿Listo para empezar?
            <span className="w-6 h-px bg-[#E94560]" />
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight"
          >
            ¿Tenés un proyecto{" "}
            <span className="gradient-text">en mente?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-[#7A7A95] text-lg max-w-xl leading-relaxed"
          >
            Contanos tu idea y te respondemos en menos de 24 horas. Sin
            compromiso.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
          >
            <motion.button
              onClick={() => scrollTo("#contacto")}
              className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#E94560] hover:bg-[#d63851] shadow-glow-md hover:shadow-glow-lg transition-all duration-200 cursor-pointer text-sm sm:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Empecemos
              <ArrowRight size={18} />
            </motion.button>

            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#50FA7B] border border-[rgba(80,250,123,0.25)] hover:bg-[rgba(80,250,123,0.06)] transition-all duration-200 text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-6 pt-4 text-[#4A4A65] text-sm"
          >
            {[
              "Respuesta en &lt;24hs",
              "Sin compromiso",
              "Presupuesto sin costo",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="text-[#50FA7B]">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
