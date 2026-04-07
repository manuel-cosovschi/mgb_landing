"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { FAQ as FAQ_DATA } from "@/lib/constants";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="faq"
      className="relative section-padding overflow-hidden"
      style={{ background: "#050510" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <SectionHeading
          label="FAQ"
          title="Preguntas"
          titleHighlight="frecuentes"
          subtitle="Todo lo que necesitás saber antes de empezar."
        />

        <motion.div
          className="flex flex-col gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {FAQ_DATA.map((item) => (
            <motion.div
              key={item.id}
              className="bg-[#0A0A1A] rounded-xl border border-[rgba(255,255,255,0.05)] overflow-hidden"
              variants={fadeUp}
              animate={{
                borderColor:
                  openId === item.id
                    ? "rgba(233,69,96,0.2)"
                    : "rgba(255,255,255,0.05)",
              }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                onClick={() => toggle(item.id)}
                aria-expanded={openId === item.id}
              >
                <span className="text-sm font-semibold text-[#EEEEF2] leading-snug">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === item.id ? 0 : 0 }}
                  className="shrink-0 text-[#E94560]"
                >
                  {openId === item.id ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <div className="h-px bg-[rgba(255,255,255,0.05)] mb-4" />
                      <p className="text-[#7A7A95] text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
