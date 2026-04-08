import Link from 'next/link';
import { CONTACT } from '@/lib/constants';
import { GitHubIcon, InstagramIcon } from '@/components/ui/SocialIcons';

const LINKS = {
  Secciones: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'FAQ', href: '#faq' },
  ],
  Legal: [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos', href: '/terminos' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 bg-[#06060e]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-md bg-[#ff3b5c] flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-white leading-none">M</span>
              </span>
              <span className="font-heading font-semibold text-sm tracking-tight text-white">
                MGB <span className="text-[#8888a4]">Software</span>
              </span>
            </div>
            <p className="text-[#8888a4] text-sm leading-relaxed max-w-xs mb-6">
              Software factory de Mar del Plata. Construimos productos digitales que hacen crecer negocios reales.
            </p>
            <div className="flex items-center gap-4">
              {CONTACT.github && (
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#55556a] hover:text-white transition-colors">
                  <GitHubIcon className="w-4 h-4" />
                </a>
              )}
              {CONTACT.instagram && (
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#55556a] hover:text-white transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              <a href={`mailto:${CONTACT.email}`} className="text-[#55556a] hover:text-white transition-colors text-xs font-mono">
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-mono text-[#55556a] uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-[#8888a4] text-sm hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#55556a] text-xs font-mono">
            © {year} MGB Software Factory. Todos los derechos reservados.
          </p>
          <p className="text-[#55556a] text-xs font-mono">{CONTACT.location}</p>
        </div>
      </div>
    </footer>
  );
}
