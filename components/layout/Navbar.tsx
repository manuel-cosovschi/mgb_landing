'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT } from '@/lib/constants';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#06060e]/90 backdrop-blur-xl border-b border-white/5' : ''
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={handleNavClick}>
            <span className="w-7 h-7 rounded-md bg-[#ff3b5c] flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-white leading-none">M</span>
            </span>
            <span className="font-heading font-semibold text-sm tracking-tight text-white">
              MGB <span className="text-[#8888a4]">Software</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#8888a4] hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={CONTACT.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff3b5c] text-[#ff3b5c] text-sm font-medium hover:bg-[#ff3b5c] hover:text-white transition-all duration-200"
          >
            Hablemos
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 z-50 relative"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white origin-center transition-all"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white origin-center transition-all"
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#06060e] flex flex-col px-8 pt-24 pb-12"
          >
            <nav className="flex flex-col gap-8 flex-1">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className="text-3xl font-heading font-semibold text-white hover:text-[#ff3b5c] transition-colors"
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full py-4 rounded-2xl bg-[#ff3b5c] text-white font-semibold text-center text-lg"
            >
              Agendar llamada
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
