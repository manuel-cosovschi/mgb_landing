"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "btn-shimmer inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E94560] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#E94560] text-white hover:bg-[#d63851] shadow-glow-sm hover:shadow-glow-md",
    secondary:
      "bg-[#10102A] text-[#EEEEF2] border border-[rgba(255,255,255,0.08)] hover:bg-[#1a1a3a] hover:border-[rgba(255,255,255,0.15)]",
    outline:
      "bg-transparent text-[#EEEEF2] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.03)]",
    ghost:
      "bg-transparent text-[#7A7A95] hover:text-[#EEEEF2] hover:bg-[rgba(255,255,255,0.04)]",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 h-9",
    md: "text-sm px-5 py-2.5 h-11",
    lg: "text-base px-7 py-3.5 h-13",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = loading ? (
    <>
      <svg
        className="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      Enviando...
    </>
  ) : (
    children
  );

  if (as === "a" && href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled || loading}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}
