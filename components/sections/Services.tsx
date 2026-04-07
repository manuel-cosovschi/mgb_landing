"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  MessageCircle,
  Zap,
  Smartphone,
  Globe,
  Shield,
  LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Monitor,
  MessageCircle,
  Zap,
  Smartphone,
  Globe,
  Shield,
};

export function Services() {
  return (
    <section
      id="servicios"
      className="relative section-padding overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 50% at 50% 0%, rgba(10,10,26,0.8) 0%, transparent 70%), #050510",
      }}
    >
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          label="Servicios"
          title="Lo que"
          titleHighlight="hacemos"
          subtitle="Soluciones digitales de punta a punta para tu negocio. Cada servicio diseñado para generar resultados reales."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <ServiceCard key={service.id} service={service} Icon={Icon} />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof SERVICES)[number];
  Icon: LucideIcon;
}

function ServiceCard({ service, Icon }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative bg-[#0A0A1A] rounded-xl border border-[rgba(255,255,255,0.05)] p-4 sm:p-6 overflow-hidden cursor-default"
      variants={fadeUp}
      whileHover={{
        scale: 1.02,
        y: -4,
        borderColor: "rgba(255,255,255,0.1)",
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      style={{
        boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 30% 30%, ${service.accentColor}0a 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div className="relative mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${service.accentColor}15` }}
        >
          {Icon && (
            <Icon
              size={22}
              className="transition-all duration-300"
              style={{ color: service.accentColor }}
            />
          )}
        </div>
        {/* Icon glow */}
        <div
          className="absolute inset-0 w-12 h-12 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
          style={{ background: service.accentColor }}
        />
      </div>

      {/* Content */}
      <h3 className="text-base font-semibold font-heading text-[#EEEEF2] mb-2 leading-snug">
        {service.title}
      </h3>
      <p className="text-[#7A7A95] text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-[#4A4A65] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
