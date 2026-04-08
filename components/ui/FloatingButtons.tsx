'use client';
import { motion } from 'framer-motion';
import { CONTACT } from '@/lib/constants';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';
import { MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#1fb558] text-white rounded-full shadow-lg shadow-[#25D366]/25 transition-all duration-200 pr-5 pl-4 py-3"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:block">WhatsApp</span>
      </a>
    </motion.div>
  );
}
