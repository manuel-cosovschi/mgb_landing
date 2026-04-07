"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Wallet, LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { WHY_MGB } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Rocket,
  Users,
  Wallet,
};

export function WhyMGB() {
  return (
    <section
      id="por-que-mgb"
      className="relative section-padding overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(10,10,26,0.95) 0%, #050510 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(233,69,96,0.12)] to-transparent" />

      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionHeading
          label="Diferenciadores"
          title="¿Por qué"
          titleHighlight="elegirnos?"
          subtitle="No somos una agencia más. Esto es lo que nos hace diferentes."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {WHY_MGB.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return <WhyCard key={item.id} item={item} Icon={Icon} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

interface WhyCardProps {
  item: (typeof WHY_MGB)[number];
  Icon: LucideIcon;
}

function WhyCard({ item, Icon }: WhyCardProps) {
  return (
    <motion.div
      className="group relative bg-[#0A0A1A] rounded-2xl border border-[rgba(255,255,255,0.05)] p-6 sm:p-8 overflow-hidden"
      variants={fadeUp}
      whileHover={{
        borderColor: "rgba(255,255,255,0.1)",
        y: -4,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Big background number */}
      <span
        className="absolute top-4 right-6 text-7xl font-bold font-heading text-[rgba(255,255,255,0.025)] select-none pointer-events-none group-hover:text-[rgba(233,69,96,0.06)] transition-colors duration-500"
        aria-hidden="true"
      >
        {item.number}
      </span>

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-[rgba(233,69,96,0.1)] flex items-center justify-center mb-5">
        {Icon && <Icon size={20} className="text-[#E94560]" />}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold font-heading text-[#EEEEF2] mb-2">
        {item.title}
      </h3>
      <p className="text-[#7A7A95] text-sm leading-relaxed mb-5">
        {item.description}
      </p>

      {/* Stat badge */}
      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E94560] bg-[rgba(233,69,96,0.08)] border border-[rgba(233,69,96,0.15)] px-3 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E94560] animate-pulse-slow" />
        {item.stat}
      </span>
    </motion.div>
  );
}
