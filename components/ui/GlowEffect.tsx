"use client";

import { cn } from "@/lib/utils";

interface GlowEffectProps {
  color?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  opacity?: number;
}

export function GlowEffect({
  color = "#E94560",
  size = "md",
  className,
  opacity = 0.15,
}: GlowEffectProps) {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[600px] h-[600px]",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full pointer-events-none blur-3xl",
        sizes[size],
        className
      )}
      style={{ backgroundColor: color, opacity }}
      aria-hidden="true"
    />
  );
}
