"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";

// Only render if there are real testimonials (not all placeholders)
const HAS_REAL_TESTIMONIALS = false; // [PLACEHOLDER — cambiar a true cuando tengas testimonios reales]

export function Testimonials() {
  if (!HAS_REAL_TESTIMONIALS) return null;

  return (
    <section
      id="testimonios"
      className="relative section-padding overflow-hidden"
      style={{ background: "#050510" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          label="Testimonios"
          title="Lo que dicen nuestros"
          titleHighlight="clientes"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              className="bg-[#0A0A1A] rounded-2xl border border-[rgba(255,255,255,0.05)] p-6 flex flex-col gap-4"
              variants={fadeUp}
              whileHover={{
                y: -4,
                borderColor: "rgba(255,255,255,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <Quote size={24} className="text-[#E94560] opacity-60" />

              <p className="text-[#EEEEF2] text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="text-[#FFB86C] fill-[#FFB86C]"
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[rgba(255,255,255,0.05)]">
                <div className="w-9 h-9 rounded-full bg-[rgba(233,69,96,0.15)] flex items-center justify-center text-xs font-bold text-[#E94560]">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#EEEEF2]">{t.author}</p>
                  <p className="text-xs text-[#4A4A65]">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
