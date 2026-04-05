"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const waLink = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3">
      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#0A0A1A] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#7A7A95] hover:text-[#EEEEF2] hover:border-[rgba(255,255,255,0.2)] hover:bg-[#10102A] transition-all shadow-card cursor-pointer"
            aria-label="Volver arriba"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-13 h-13 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        style={{ backgroundColor: "#25D366" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contactar por WhatsApp"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ backgroundColor: "#25D366" }}
        />
        <MessageCircle size={22} className="text-white relative z-10" />
      </motion.a>
    </div>
  );
}
