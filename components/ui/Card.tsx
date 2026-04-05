"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glowColor?: string;
}

export function Card({
  children,
  className,
  hover = true,
  glow = false,
  glowColor = "#E94560",
}: CardProps) {
  const base =
    "relative bg-[#0A0A1A] rounded-xl border border-[rgba(255,255,255,0.05)] p-6 overflow-hidden";

  return (
    <motion.div
      className={cn(base, className)}
      initial={hover ? "rest" : undefined}
      whileHover={
        hover
          ? {
              scale: 1.02,
              y: -4,
              borderColor: "rgba(255,255,255,0.12)",
              boxShadow: glow
                ? `0 0 0 1px rgba(255,255,255,0.1), 0 8px 40px rgba(0,0,0,0.6), 0 0 40px ${glowColor}18`
                : "0 0 0 1px rgba(255,255,255,0.1), 0 8px 40px rgba(0,0,0,0.6)",
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }
          : undefined
      }
      style={{
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      {children}
    </motion.div>
  );
}
