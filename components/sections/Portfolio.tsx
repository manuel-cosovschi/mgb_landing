"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";
import { PORTFOLIO } from "@/lib/constants";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative section-padding overflow-hidden"
      style={{ background: "#050510" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionHeading
          label="Portfolio"
          title="Nuestro"
          titleHighlight="trabajo"
          subtitle="Proyectos reales con resultados medibles."
        />

        <div className="flex flex-col gap-10 md:gap-16">
          {PORTFOLIO.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PORTFOLIO)[number];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isLeft = project.imagePosition === "left";

  return (
    <motion.article
      className="group relative bg-[#0A0A1A] rounded-2xl border border-[rgba(255,255,255,0.05)] overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      whileHover={{
        borderColor: "rgba(255,255,255,0.1)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.5)",
        transition: { duration: 0.3 },
      }}
    >
      <div className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
        {/* Mockup / visual — oculto en mobile para ahorrar espacio */}
        <motion.div
          className="hidden md:flex w-full md:w-2/5 min-h-[240px] md:min-h-full relative items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.categoryColor}08 0%, rgba(10,10,26,0.8) 100%)`,
            borderRight: !isLeft ? "none" : "1px solid rgba(255,255,255,0.04)",
            borderLeft: isLeft ? "none" : "1px solid rgba(255,255,255,0.04)",
          }}
          variants={isLeft ? fadeLeft : fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Abstract code mockup */}
          <div className="p-6 w-full max-w-xs">
            <div className="bg-[#050510] rounded-xl border border-[rgba(255,255,255,0.08)] p-4 font-mono text-xs">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E94560]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFB86C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#50FA7B]" />
              </div>
              <div className="space-y-1.5 text-[10px]">
                {project.tags.map((tag, j) => (
                  <div key={tag} className="flex items-center gap-2">
                    <span className="text-[#4A4A65]">{String(j + 1).padStart(2, "0")}</span>
                    <span
                      className="font-semibold"
                      style={{ color: project.categoryColor }}
                    >
                      import
                    </span>
                    <span className="text-[#EEEEF2]">{tag}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.05)]">
                <span className="text-[#50FA7B] text-[10px]">✓ Build successful</span>
              </div>
            </div>
          </div>

          {/* Category label watermark */}
          <div
            className="absolute top-4 left-4 text-[10px] font-mono font-medium px-2 py-1 rounded"
            style={{
              color: project.categoryColor,
              background: `${project.categoryColor}15`,
              border: `1px solid ${project.categoryColor}25`,
            }}
          >
            {project.category}
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-9 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-3 md:mb-4">
            <span
              className="text-xs font-mono font-medium px-2.5 py-1 rounded-full mb-2 inline-block"
              style={{
                color: project.categoryColor,
                background: `${project.categoryColor}15`,
                border: `1px solid ${project.categoryColor}25`,
              }}
            >
              {project.category}
            </span>
            <h3 className="text-base md:text-xl font-bold font-heading text-[#EEEEF2]">
              {project.name}
            </h3>
          </div>

          {/* Problem / Solution */}
          <div className="space-y-2.5 mb-4 md:mb-6">
            <div>
              <span className="text-[10px] font-mono text-[#4A4A65] uppercase tracking-wider">
                Problema
              </span>
              <p className="text-[#7A7A95] text-xs sm:text-sm mt-1 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#4A4A65] uppercase tracking-wider">
                Solución
              </span>
              <p className="text-[#EEEEF2] text-xs sm:text-sm mt-1 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-3 md:gap-5 mb-4 md:mb-6">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold font-heading text-[#EEEEF2]">
                  {metric.prefix}
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </span>
                <span className="text-[10px] sm:text-xs text-[#7A7A95]">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-[#4A4A65] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
