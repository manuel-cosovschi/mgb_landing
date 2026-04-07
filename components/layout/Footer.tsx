"use client";

import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

const SERVICES_LINKS = [
  { label: "Aplicaciones Web", href: "#servicios" },
  { label: "Bots de WhatsApp", href: "#servicios" },
  { label: "Automatizaciones", href: "#servicios" },
  { label: "Apps Mobile", href: "#servicios" },
  { label: "Landing Pages", href: "#servicios" },
  { label: "Soporte", href: "#servicios" },
];

const COMPANY_LINKS = [
  { label: "Sobre nosotros", href: "#equipo" },
  { label: "Proceso", href: "#proceso" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contacto" },
];

const LEGAL_LINKS = [
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Términos y condiciones", href: "/terminos" },
];

export function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.05)] bg-[#050510]">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(233,69,96,0.3)] to-transparent" />

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-bold font-heading">
                <span className="text-[#E94560]">M</span>
                <span className="text-[#EEEEF2]">GB</span>
              </span>
              <span className="text-[#4A4A65] text-sm font-mono">software</span>
            </a>
            <p className="text-[#7A7A95] text-sm leading-relaxed mb-5">
              Software a medida para PyMEs y emprendedores. Desarrollado en
              Argentina 🇦🇷
            </p>
            <div className="flex items-center gap-3">
              {CONTACT.linkedin && (
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#4A4A65] hover:text-[#EEEEF2] hover:bg-[rgba(255,255,255,0.06)] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
              {CONTACT.instagram && (
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#4A4A65] hover:text-[#EEEEF2] hover:bg-[rgba(255,255,255,0.06)] transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
              )}
              {CONTACT.github && (
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#4A4A65] hover:text-[#EEEEF2] hover:bg-[rgba(255,255,255,0.06)] transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
              )}
              <a
                href={`mailto:${CONTACT.email}`}
                className="p-2 rounded-lg text-[#4A4A65] hover:text-[#EEEEF2] hover:bg-[rgba(255,255,255,0.06)] transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#EEEEF2] mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleScroll(l.href)}
                    className="text-sm text-[#7A7A95] hover:text-[#EEEEF2] transition-colors cursor-pointer"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="text-sm font-semibold text-[#EEEEF2] mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleScroll(l.href)}
                    className="text-sm text-[#7A7A95] hover:text-[#EEEEF2] transition-colors cursor-pointer"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Legal + Location */}
          <div>
            <h4 className="text-sm font-semibold text-[#EEEEF2] mb-4">Legal</h4>
            <ul className="space-y-2.5 mb-6">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#7A7A95] hover:text-[#EEEEF2] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-2 text-[#4A4A65] text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>{CONTACT.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#4A4A65]">
          <span>© 2026 MGB Software. Todos los derechos reservados.</span>
          <span>
            Hecho con{" "}
            <span className="text-[#E94560]">💻</span>
            {" "}y{" "}
            <span className="text-[#FFB86C]">☕</span>
            {" "}por MGB
          </span>
        </div>
      </div>
    </footer>
  );
}
