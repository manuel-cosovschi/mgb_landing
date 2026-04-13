'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/lib/animations';
import { TEAM } from '@/lib/constants';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons';

export function Team() {
  return (
    <section id="equipo" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div variants={fadeUp} className="mb-16 md:mb-20 max-w-xl">
            <p className="text-xs font-mono text-[#ff3b5c] tracking-widest uppercase mb-4">El equipo</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white">
              Las personas detrás<span className="text-[#ff3b5c]">.</span>
            </h2>
            <p className="text-[#8888a4] text-lg leading-relaxed mt-4">
              Tres ingenieros que se involucran personalmente en cada proyecto.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TEAM.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeUp}
                className="group rounded-2xl border border-white/6 bg-[#0c0c18] overflow-hidden hover:border-white/12 transition-colors"
              >
                {/* Photo area */}
                <div className="relative h-80 overflow-hidden bg-[#111122]">
                  <Image
                    src={member.photo}
                    alt={`Foto de ${member.name}, ${member.role}`}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ${
                      member.id === 'manuel'
                        ? 'object-center scale-110'
                        : 'object-[center_10%]'
                    }`}
                    unoptimized
                  />
                  {/* Subtle bottom fade only — does NOT cover the face */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0c0c18] to-transparent" />

                  {/* Color accent tag */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-semibold"
                    style={{ backgroundColor: `${member.color}20`, color: member.color, border: `1px solid ${member.color}40` }}
                  >
                    {member.role.split(' & ')[0]}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-white mb-0.5">{member.name}</h3>
                  <p className="text-sm mb-4" style={{ color: member.color }}>{member.role}</p>
                  <p className="text-[#8888a4] text-sm leading-relaxed mb-5">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {member.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 text-xs font-mono rounded-full bg-white/5 text-[#55556a]">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#55556a] hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#55556a] hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedInIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
