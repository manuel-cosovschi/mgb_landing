"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "green" | "blue" | "purple" | "animated";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const base =
    "inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full";

  const variants = {
    default:
      "bg-[rgba(255,255,255,0.05)] text-[#7A7A95] border border-[rgba(255,255,255,0.08)]",
    accent:
      "bg-[rgba(233,69,96,0.1)] text-[#E94560] border border-[rgba(233,69,96,0.2)]",
    green:
      "bg-[rgba(80,250,123,0.1)] text-[#50FA7B] border border-[rgba(80,250,123,0.2)]",
    blue: "bg-[rgba(139,233,253,0.1)] text-[#8BE9FD] border border-[rgba(139,233,253,0.2)]",
    purple:
      "bg-[rgba(189,147,249,0.1)] text-[#BD93F9] border border-[rgba(189,147,249,0.2)]",
    animated: "border-gradient-animated text-[#EEEEF2]",
  };

  return (
    <span className={cn(base, variants[variant], className)}>{children}</span>
  );
}
