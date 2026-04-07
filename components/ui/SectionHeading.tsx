"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      className={cn("flex flex-col gap-3 mb-8 md:mb-12 lg:mb-16", alignClass, className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {label && (
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#E94560] uppercase tracking-widest">
            <span className="w-6 h-px bg-[#E94560] inline-block" />
            {label}
            <span className="w-6 h-px bg-[#E94560] inline-block" />
          </span>
        </motion.div>
      )}

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading"
        variants={fadeUp}
      >
        {titleHighlight ? (
          <>
            {title}{" "}
            <span className="gradient-text">{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={cn(
            "text-[#7A7A95] text-sm sm:text-base md:text-lg leading-relaxed",
            align === "center" && "max-w-2xl"
          )}
          variants={fadeUp}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
