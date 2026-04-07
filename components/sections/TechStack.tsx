"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { TECH_STACK_ROW1, TECH_STACK_ROW2 } from "@/lib/constants";

// Tech icons as simple SVG text badges — no external deps
function TechBadge({ name }: { name: string }) {
  return (
    <div className="group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#0A0A1A] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 shrink-0 cursor-default">
      <span className="text-sm font-medium text-[#7A7A95] group-hover:text-[#EEEEF2] transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function TechStack() {
  const row1 = [...TECH_STACK_ROW1, ...TECH_STACK_ROW1];
  const row2 = [...TECH_STACK_ROW2, ...TECH_STACK_ROW2];

  return (
    <section
      id="tecnologias"
      className="relative section-padding overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 100% 50% at 50% 50%, rgba(10,10,26,0.6) 0%, #050510 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          label="Stack"
          title="Tecnologías que"
          titleHighlight="dominamos"
          subtitle="Usamos las herramientas más modernas del ecosistema para construir productos rápidos, escalables y mantenibles."
        />
      </div>

      {/* Marquee rows — outside max-w for full bleed */}
      <motion.div
        className="flex flex-col gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {/* Row 1 → */}
        <div className="marquee-track overflow-hidden">
          <div className="marquee-inner flex gap-4 animate-marquee">
            {row1.map((tech, i) => (
              <TechBadge key={`${tech.name}-${i}`} name={tech.name} />
            ))}
          </div>
        </div>

        {/* Row 2 ← */}
        <div className="marquee-track overflow-hidden">
          <div className="marquee-inner flex gap-4 animate-marquee-reverse">
            {row2.map((tech, i) => (
              <TechBadge key={`${tech.name}-${i}`} name={tech.name} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
