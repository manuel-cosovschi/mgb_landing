"use client";

import { useInView as useFramerInView } from "framer-motion";
import { useRef } from "react";

interface UseInViewOptions {
  once?: boolean;
  amount?: number;
  margin?: `${number}px ${number}px ${number}px ${number}px` | `${number}px ${number}px ${number}px` | `${number}px ${number}px` | `${number}px`;
}

export function useInView(options: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useFramerInView(ref as any, {
    once: options.once ?? true,
    amount: options.amount ?? 0.15,
  });
  return { ref, inView };
}
