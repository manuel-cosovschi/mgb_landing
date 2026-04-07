"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { TEAM } from "@/lib/constants";

export function Team() {
  return (
    <section
      id="equipo"
      className="relative section-padding overflow-hidden"
      style={{ background: "#050510" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          label="Equipo"
          title="Quiénes"
          titleHighlight="somos"
          subtitle="Tres ingenieros, una misión: hacer que la tecnología trabaje para tu negocio."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {TEAM.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>

        {/* Team tagline */}
        <motion.p
          className="text-center text-[#7A7A95] text-sm mt-10 max-w-2xl mx-auto leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          Dos ingenieros en sistemas y un técnico en programación de la UTN, todos
          desarrolladores activos. Lo que nos une va más allá del código:{" "}
          <span className="text-[#EEEEF2]">somos amigos desde chicos.</span>
        </motion.p>
      </div>
    </section>
  );
}

interface TeamCardProps {
  member: (typeof TEAM)[number];
}

function TeamCard({ member }: TeamCardProps) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = member.photo && !imgError;

  return (
    <motion.div
      className="group relative bg-[#0A0A1A] rounded-2xl border border-[rgba(255,255,255,0.05)] p-6 sm:p-8 flex flex-col items-center text-center overflow-hidden"
      variants={fadeUp}
      whileHover={{
        y: -6,
        borderColor: "rgba(255,255,255,0.1)",
        boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 20px 50px rgba(0,0,0,0.5), 0 0 40px ${member.accentColor}10`,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ background: member.accentColor }}
      />

      {/* Avatar — foto o iniciales */}
      <motion.div
        className="relative w-24 h-24 rounded-full mb-5 overflow-hidden shrink-0"
        style={{
          border: `2px solid ${member.accentColor}30`,
          boxShadow: `0 0 0 0px ${member.accentColor}50`,
        }}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.3 }}
      >
        {showPhoto ? (
          <Image
            src={member.photo}
            alt={`Foto de ${member.name}`}
            fill
            className="object-cover object-top"
            sizes="96px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-xl font-bold font-heading"
            style={{
              background: `${member.accentColor}18`,
              color: member.accentColor,
            }}
          >
            {member.initials}
          </div>
        )}

        {/* Hover ring */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 2px ${member.accentColor}50`,
          }}
        />
      </motion.div>

      {/* Name + role */}
      <h3 className="text-lg font-bold font-heading text-[#EEEEF2] mb-1">
        {member.name}
      </h3>
      <span
        className="text-xs font-mono font-medium px-3 py-1 rounded-full mb-4 inline-block"
        style={{
          color: member.accentColor,
          background: `${member.accentColor}12`,
          border: `1px solid ${member.accentColor}20`,
        }}
      >
        {member.role}
      </span>

      {/* Bio */}
      <p className="text-[#7A7A95] text-sm leading-relaxed mb-5">{member.bio}</p>

      {/* Skill tags */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-mono text-[#4A4A65] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] px-2 py-0.5 rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Social links */}
      {(member.linkedin || member.github) && (
        <div className="flex items-center gap-3 mt-auto">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#4A4A65] hover:text-[#EEEEF2] hover:bg-[rgba(255,255,255,0.06)] transition-all"
              aria-label={`LinkedIn de ${member.name}`}
            >
              <LinkedinIcon size={16} />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#4A4A65] hover:text-[#EEEEF2] hover:bg-[rgba(255,255,255,0.06)] transition-all"
              aria-label={`GitHub de ${member.name}`}
            >
              <GithubIcon size={16} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
