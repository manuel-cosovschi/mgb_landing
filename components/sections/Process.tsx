"use client";

import { motion } from "framer-motion";
import { Search, FileText, Code2, Rocket, LifeBuoy, LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  FileText,
  Code2,
  Rocket,
  LifeBuoy,
};

export function Process() {
  return (
    <section
      id="proceso"
      className="relative section-padding overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(10,10,26,0.8) 0%, #050510 70%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(189,147,249,0.15)] to-transparent" />

      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <SectionHeading
          label="Proceso"
          title="Cómo"
          titleHighlight="trabajamos"
          subtitle="Un proceso claro de principio a fin. Sin sorpresas."
        />

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Vertical line */}
          <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(233,69,96,0.3)] via-[rgba(189,147,249,0.2)] to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  className={`relative flex items-start gap-5 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  variants={fadeUp}
                >
                  {/* Desktop: half-width content */}
                  <div className={`hidden md:block w-[calc(50%-40px)] ${isEven ? "pr-8 text-right" : "pl-8 text-left order-last"}`}>
                    <div className={`bg-[#0A0A1A] rounded-xl border border-[rgba(255,255,255,0.05)] p-5 ${isEven ? "ml-auto" : "mr-auto"}`}>
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? "justify-end" : "justify-start"}`}>
                        <span className="text-xs font-mono text-[#E94560] uppercase tracking-wider">
                          Paso {step.number}
                        </span>
                      </div>
                      <h3 className="text-base font-bold font-heading text-[#EEEEF2] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#7A7A95] text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#BD93F9] bg-[rgba(189,147,249,0.08)] border border-[rgba(189,147,249,0.15)] px-2.5 py-1 rounded-full">
                        ⏱ {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 w-9 h-9 md:w-11 md:h-11 shrink-0 md:mx-auto rounded-full bg-[#0A0A1A] border-2 border-[rgba(233,69,96,0.4)] flex items-center justify-center">
                    {Icon && <Icon size={16} className="text-[#E94560]" />}
                  </div>

                  {/* Spacer for even items on desktop */}
                  <div className={`hidden md:block w-[calc(50%-40px)] ${!isEven ? "pr-8" : "pl-8 order-last"}`} />

                  {/* Mobile card */}
                  <div className="flex-1 md:hidden bg-[#0A0A1A] rounded-xl border border-[rgba(255,255,255,0.05)] p-5">
                    <span className="text-xs font-mono text-[#E94560] uppercase tracking-wider block mb-1.5">
                      Paso {step.number}
                    </span>
                    <h3 className="text-base font-bold font-heading text-[#EEEEF2] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#7A7A95] text-sm leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#BD93F9] bg-[rgba(189,147,249,0.08)] border border-[rgba(189,147,249,0.15)] px-2.5 py-1 rounded-full">
                      ⏱ {step.duration}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
