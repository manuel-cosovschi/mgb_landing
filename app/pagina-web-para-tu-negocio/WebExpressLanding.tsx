'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Paintbrush, Smartphone, MessageCircle, Code2, Check, ChevronDown,
  ExternalLink, ArrowRight, Globe, Users, Clock, Zap,
} from 'lucide-react';
import { WEB_EXPRESS_CONFIG, type TierExtra } from '@/lib/web-express-config';
import { CONTACT, PORTFOLIO } from '@/lib/constants';
import { trackContact, trackLead, trackInitiateCheckout, trackViewContent, getStoredUTMs } from '@/lib/meta-pixel';
import { useDolarBlue, formatARS } from '@/lib/use-dolar-blue';

// ─── helpers ───────────────────────────────────────────────────────────────

function whatsappUrl(msg: string) {
  return `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
}

const WA_URL = whatsappUrl(WEB_EXPRESS_CONFIG.whatsappMessage);

function ctaPrimaryHref() {
  if (WEB_EXPRESS_CONFIG.payment.mercadoPagoUrl) {
    return WEB_EXPRESS_CONFIG.payment.mercadoPagoUrl;
  }
  return WA_URL;
}

const HERO_COPY = {
  a: {
    title: 'Tu negocio merece una web que trabaje por vos.',
    body: 'Creamos una página moderna, rápida y adaptable a cualquier dispositivo para que muestres lo que hacés, generes confianza y lleves potenciales clientes directamente a WhatsApp.',
  },
  b: {
    title: 'Convertí visitas en consultas con una web profesional.',
    body: 'Mostrá tus servicios con claridad, transmití confianza desde el primer contacto y facilitá que nuevos clientes te escriban.',
  },
};

const TRUST_ITEMS = [
  { icon: Paintbrush, label: 'Diseño adaptado a tu negocio' },
  { icon: Smartphone, label: 'Optimizada para celular' },
  { icon: MessageCircle, label: 'Contacto directo por WhatsApp' },
  { icon: Code2, label: 'Código y accesos para vos' },
];

const INCLUDES = [
  'Diseño personalizado',
  'Hasta 7 secciones',
  'Adaptación para celular',
  'Botón de WhatsApp',
  'Formulario de contacto',
  'Redes sociales',
  'Ubicación o mapa',
  'SEO básico',
  'Deploy y publicación',
  'Conexión de dominio',
  'Código fuente',
  'Una ronda de ajustes',
  '30 días de soporte técnico',
];

const STEPS = [
  { n: '01', title: 'Iniciás tu pedido', body: 'Comprás el servicio o nos escribís para resolver cualquier duda antes de avanzar.' },
  { n: '02', title: 'Completás un brief simple', body: 'Nos enviás la información de tu negocio, logo, colores, fotografías y datos de contacto.' },
  { n: '03', title: 'Diseñamos y desarrollamos', body: 'Armamos una página profesional adaptada a tu identidad y optimizada para distintos dispositivos.' },
  { n: '04', title: 'Publicamos tu web', body: 'Realizamos los ajustes acordados, conectamos el dominio y dejamos la página lista para compartir.' },
];

const WHY = [
  { icon: Users, title: 'Sin intermediarios', body: 'Hablás directamente con el equipo que diseña y desarrolla tu página.' },
  { icon: Paintbrush, title: 'Diseño pensado para negocios', body: 'No hacemos una plantilla genérica sin criterio. Adaptamos la estructura a tu actividad y a tus clientes.' },
  { icon: Clock, title: 'Entrega clara', body: 'Definimos qué incluye la web, qué necesitamos de tu parte y cuándo comienza el desarrollo.' },
  { icon: Zap, title: 'Tu página es tuya', body: 'Recibís los accesos y el código correspondiente al proyecto.' },
];

const FAQS = [
  { q: '¿Cuánto demora la entrega?', a: 'La entrega estándar comienza desde las 48 horas hábiles posteriores a la recepción de toda la información necesaria. También podés consultar por opciones prioritarias de 24, 12 u 8 horas hábiles con costo adicional.' },
  { q: '¿Qué tengo que enviar?', a: 'Necesitamos la información de tu negocio, logo si ya tenés uno, colores o referencias visuales, servicios principales, fotografías, redes sociales y datos de contacto.' },
  { q: '¿El dominio está incluido?', a: 'El dominio pago no está incluido, pero te ayudamos a elegirlo, comprarlo y conectarlo correctamente.' },
  { q: '¿La página funciona en celular?', a: 'Sí. Diseñamos la web para que se adapte correctamente a celulares, tablets y computadoras.' },
  { q: '¿Puedo pedir cambios?', a: 'La propuesta incluye una ronda de ajustes. Antes de comenzar te explicamos con claridad qué tipo de modificaciones están contempladas.' },
  { q: '¿Incluye tienda online?', a: 'La propuesta estándar está orientada a una página informativa o comercial de una sola página. Una tienda online, sistema de reservas o funcionalidades avanzadas requieren una cotización personalizada.' },
  { q: '¿Puedo agregar más secciones?', a: 'Sí. Si necesitás una web más amplia, podemos cotizar una versión personalizada.' },
  { q: '¿La página aparece en Google?', a: 'Incluimos una configuración SEO básica para que la página pueda ser indexada correctamente. El posicionamiento orgánico depende de múltiples factores y no se garantiza de forma inmediata.' },
  { q: '¿Qué sucede después de la entrega?', a: 'Incluimos 30 días de soporte técnico para errores o ajustes técnicos menores. También podemos cotizar mejoras futuras.' },
];

// ─── Browser Mockup ─────────────────────────────────────────────────────────

function BrowserMockup() {
  return (
    <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
      {/* Browser chrome */}
      <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2 border-b border-white/8">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-3 bg-[#0c0c1e] rounded-md px-3 py-1 text-[10px] text-[#55556a] font-mono truncate">
          www.tunegocio.com.ar
        </div>
      </div>
      {/* Page preview */}
      <div className="bg-[#0c0c18] p-4 space-y-3">
        {/* Hero bar */}
        <div className="bg-[#00c896]/15 rounded-lg p-4 border border-[#00c896]/20">
          <div className="h-3 bg-white/20 rounded w-3/4 mb-2" />
          <div className="h-2 bg-white/10 rounded w-1/2 mb-3" />
          <div className="flex gap-2">
            <div className="h-7 bg-[#00c896]/60 rounded-full px-3 flex items-center">
              <div className="h-2 bg-white/60 rounded w-14" />
            </div>
            <div className="h-7 border border-white/20 rounded-full px-3 flex items-center">
              <div className="h-2 bg-white/30 rounded w-10" />
            </div>
          </div>
        </div>
        {/* Services row */}
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map(i => (
            <div key={i} className="bg-[#111122] rounded-lg p-2 border border-white/6">
              <div className="w-5 h-5 rounded-md bg-[#00c896]/20 mb-1.5" />
              <div className="h-2 bg-white/15 rounded mb-1" />
              <div className="h-1.5 bg-white/8 rounded w-4/5" />
            </div>
          ))}
        </div>
        {/* Gallery row */}
        <div className="grid grid-cols-4 gap-1.5">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="h-12 bg-[#1a1a2e] rounded-md border border-white/6" />
          ))}
        </div>
        {/* CTA bar */}
        <div className="bg-[#00c896]/10 rounded-lg p-3 border border-[#00c896]/20 flex items-center justify-between">
          <div className="h-2 bg-white/20 rounded w-2/5" />
          <div className="h-6 bg-[#25D366]/60 rounded-full px-3 flex items-center gap-1">
            <MessageCircle size={10} className="text-white/60" />
            <div className="h-1.5 bg-white/50 rounded w-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mockup con anotaciones ─────────────────────────────────────────────────

function AnnotatedMockup() {
  const annotations = [
    { label: 'Mensaje claro', pos: 'top-4 -left-2 md:-left-24', arrow: 'right' },
    { label: 'CTA visible', pos: 'top-4 -right-2 md:-right-24', arrow: 'left' },
    { label: 'Diseño responsive', pos: 'bottom-24 -left-2 md:-left-28', arrow: 'right' },
    { label: 'Contacto rápido', pos: 'bottom-10 -right-2 md:-right-28', arrow: 'left' },
  ];
  return (
    <div className="relative max-w-sm mx-auto px-8 md:px-16">
      {annotations.map(({ label, pos, arrow }) => (
        <div key={label} className={`absolute hidden md:flex items-center gap-1 z-10 ${pos}`}>
          {arrow === 'right' && <div className="w-6 h-px bg-[#00c896]/50" />}
          <span className="text-[10px] font-mono text-[#00c896] bg-[#00c896]/10 border border-[#00c896]/20 px-2 py-0.5 rounded-full whitespace-nowrap">{label}</span>
          {arrow === 'left' && <div className="w-6 h-px bg-[#00c896]/50" />}
        </div>
      ))}
      <BrowserMockup />
    </div>
  );
}

// ─── FAQ Accordion ──────────────────────────────────────────────────────────

function FAQAccordion({ items }: { items: typeof FAQS }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {items.map(({ q, a }, i) => (
        <div key={i} className="border border-white/8 rounded-xl overflow-hidden bg-[#0c0c18]">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c896]/50"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-white text-sm font-medium leading-snug">{q}</span>
            <ChevronDown
              size={16}
              className={`text-[#8888a4] flex-none transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-[#8888a4] text-sm leading-relaxed">{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ─── Pricing Section ───────────────────────────────────────────────────────

function PricingSection({ onRequestForm }: { onRequestForm: () => void }) {
  const { tiers, payment } = WEB_EXPRESS_CONFIG;
  const dolar = useDolarBlue();
  const [selectedTier, setSelectedTier] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState<number[]>([]);
  const [showTransfer, setShowTransfer] = useState(false);

  const tier = tiers[selectedTier];
  const extras = ('extras' in tier ? (tier as { extras: TierExtra[] }).extras : []) as TierExtra[];
  const extrasCost = selectedExtras.reduce((sum, i) => sum + (extras[i]?.priceUSD ?? 0), 0);
  const totalUSD = tier.priceUSD + extrasCost;
  const totalARS = dolar.promedio ? totalUSD * dolar.promedio : 0;

  const hasMPLink = !!payment.mercadoPagoUrl;

  function handleTierChange(idx: number) {
    setSelectedTier(idx);
    setSelectedExtras([]);
    setShowTransfer(false);
  }

  function toggleExtra(idx: number) {
    setSelectedExtras(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  }

  return (
    <section className="py-24 md:py-32 px-5 md:px-10 bg-[#0c0c18]" id="comprar">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">WEB EXPRESS MGB</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">
            Elegí el plan ideal para tu negocio.
          </h2>
          <p className="text-[#8888a4] text-base max-w-xl mx-auto">
            Precio en dólares, pagás en pesos al tipo de cambio del día.
          </p>
        </div>

        {/* Tier selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {tiers.map((t, i) => (
            <button
              key={t.id}
              onClick={() => handleTierChange(i)}
              className={`text-left p-5 rounded-xl border transition-all cursor-pointer ${
                selectedTier === i
                  ? 'border-[#00c896] bg-[#00c896]/8 shadow-lg shadow-[#00c896]/10'
                  : 'border-white/8 bg-[#06060e] hover:border-white/15'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading font-bold text-lg text-white">{t.name}</h3>
                <span className="font-heading font-bold text-lg text-[#00c896]">
                  USD {t.priceUSD}
                </span>
              </div>
              <p className="text-[#8888a4] text-sm leading-relaxed">{t.description}</p>
            </button>
          ))}
        </div>

        {/* Selected tier detail */}
        <div className="rounded-2xl border border-[#00c896]/20 bg-[#06060e] overflow-hidden shadow-2xl shadow-[#00c896]/10">
          {/* Price header */}
          <div className="p-6 md:p-8 border-b border-white/6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-1">{tier.name}</h3>
                <p className="text-[#8888a4] text-sm">{tier.description}</p>
              </div>
              <div className="text-left md:text-right">
                <div className="font-heading font-bold text-3xl md:text-4xl text-white">
                  USD {totalUSD}
                </div>
                {dolar.loading ? (
                  <p className="text-[#55556a] text-sm mt-1 animate-pulse">Calculando en pesos...</p>
                ) : dolar.error ? (
                  <p className="text-[#55556a] text-sm mt-1">Consultá el precio en pesos por WhatsApp</p>
                ) : (
                  <p className="text-[#8888a4] text-sm mt-1">
                    ≈ {formatARS(totalARS)} <span className="text-[#55556a]">(dólar blue {formatARS(dolar.promedio)})</span>
                  </p>
                )}
              </div>
            </div>

            {/* Extras for web-admin tier */}
            {extras.length > 0 && (
              <div className="mt-5 pt-5 border-t border-white/6">
                <p className="text-xs font-mono text-[#55556a] uppercase tracking-widest mb-3">Opciones adicionales</p>
                <div className="space-y-2">
                  {extras.map((extra, i) => (
                    <label
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedExtras.includes(i)
                          ? 'border-[#00c896]/40 bg-[#00c896]/5'
                          : 'border-white/8 hover:border-white/15'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedExtras.includes(i)}
                        onChange={() => toggleExtra(i)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border flex-none flex items-center justify-center transition-colors ${
                        selectedExtras.includes(i)
                          ? 'bg-[#00c896] border-[#00c896]'
                          : 'border-white/20'
                      }`}>
                        {selectedExtras.includes(i) && <Check size={10} className="text-white" />}
                      </div>
                      <span className="text-white text-sm flex-1">{extra.label}</span>
                      {extra.priceUSD > 0 && (
                        <span className="text-[#00c896] text-sm font-medium">+USD {extra.priceUSD}</span>
                      )}
                      {extra.priceUSD === 0 && (
                        <span className="text-[#55556a] text-xs">Incluido</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Includes */}
          <div className="p-6 md:p-8 space-y-2.5">
            <p className="text-xs font-mono text-[#55556a] uppercase tracking-widest mb-3">Incluye</p>
            {tier.includes.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check size={14} className="text-[#00c896] flex-none" />
                <span className="text-[#8888a4] text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="px-6 md:px-8 pb-8 space-y-3">
            {/* Mercado Pago */}
            {hasMPLink ? (
              <a
                href={payment.mercadoPagoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout()}
                className="block w-full py-4 rounded-full bg-[#00c896] text-white font-semibold text-center hover:bg-[#00b085] transition-colors cursor-pointer"
              >
                Pagar con Mercado Pago — USD {totalUSD}
              </a>
            ) : (
              <button
                onClick={onRequestForm}
                className="block w-full py-4 rounded-full bg-[#00c896] text-white font-semibold text-center hover:bg-[#00b085] transition-colors cursor-pointer"
              >
                Quiero mi página web — USD {totalUSD}
              </button>
            )}

            {/* Transferencia */}
            <button
              onClick={() => setShowTransfer(!showTransfer)}
              className="block w-full py-3.5 rounded-full border border-white/12 text-white font-medium text-center hover:bg-white/5 transition-colors text-sm cursor-pointer"
            >
              Pagar por transferencia bancaria
            </button>

            <AnimatePresence>
              {showTransfer && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="rounded-xl border border-white/10 bg-[#0c0c18] p-5 space-y-3">
                    <p className="text-white text-sm font-medium">Datos para transferencia:</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[#8888a4] text-sm">Alias</span>
                        <span className="text-white text-sm font-mono font-medium">{payment.transferAlias}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#8888a4] text-sm">Titular</span>
                        <span className="text-white text-sm">{payment.transferHolder}</span>
                      </div>
                      {!dolar.loading && !dolar.error && (
                        <div className="flex items-center justify-between pt-2 border-t border-white/6">
                          <span className="text-[#8888a4] text-sm">Monto a transferir</span>
                          <span className="text-[#00c896] text-sm font-bold">{formatARS(totalARS)}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-[#55556a] text-xs leading-relaxed">
                      Después de transferir, envianos el comprobante por WhatsApp junto con tu nombre y negocio.
                    </p>
                    <a
                      href={whatsappUrl(`Hola, acabo de transferir ${formatARS(totalARS)} por el plan ${tier.name} de Web Express MGB. Mi comprobante:`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => { trackContact(); trackInitiateCheckout(); }}
                      className="block w-full py-3 rounded-full bg-[#25D366] text-white font-semibold text-center hover:bg-[#1fb558] transition-colors text-sm"
                    >
                      Enviar comprobante por WhatsApp
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* WhatsApp consulta */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact()}
              className="block w-full py-3 text-[#8888a4] font-medium text-center hover:text-white transition-colors text-sm"
            >
              ¿Tenés dudas? Consultanos por WhatsApp
            </a>

            <p className="text-[#55556a] text-xs text-center leading-relaxed">
              Luego del pago te enviamos un brief simple para conocer tu negocio y reunir el contenido.
            </p>
            {WEB_EXPRESS_CONFIG.showUrgentOptions && (
              <p className="text-[#55556a] text-xs text-center border-t border-white/6 pt-4">
                ¿La necesitás antes?{' '}
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackContact()} className="text-[#00c896] hover:underline">
                  Consultanos por entregas prioritarias.
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Lead Form ──────────────────────────────────────────────────────────────

const schema = z.object({
  name: z.string().min(2, 'Ingresá tu nombre'),
  business: z.string().min(2, 'Ingresá el nombre de tu negocio'),
  whatsapp: z.string().min(8, 'Ingresá tu WhatsApp'),
  email: z.string().email('Email inválido'),
  rubro: z.string().min(2, 'Ingresá el rubro'),
  hasWeb: z.string().min(1, 'Seleccioná una opción'),
  message: z.string().optional(),
  privacy: z.literal(true, { error: () => ({ message: 'Necesitamos tu aceptación' }) }),
  website: z.string().max(0).optional(), // honeypot
});
type FormData = z.infer<typeof schema>;

function LeadForm({ variant, onClose }: { variant: 'a' | 'b'; onClose?: () => void }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const inputClass = "w-full bg-[#06060e] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-[#55556a] focus:outline-none focus:ring-2 focus:ring-[#00c896]/40 focus:border-[#00c896]/50 transition-colors";

  const onSubmit = async (data: FormData) => {
    if (data.website) return; // honeypot
    setLoading(true);
    const utms = getStoredUTMs();
    const payload = {
      ...data,
      ...utms,
      landing_variant: variant,
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      timestamp: new Date().toISOString(),
    };
    try {
      const endpoint = WEB_EXPRESS_CONFIG.formEndpoint || `https://formspree.io/f/${CONTACT.formspreeId}`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        trackLead();
        setSent(true);
      }
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-8 space-y-3">
        <div className="w-12 h-12 rounded-full bg-[#00c896]/15 border border-[#00c896]/30 flex items-center justify-center mx-auto">
          <Check size={20} className="text-[#00c896]" />
        </div>
        <h3 className="font-heading font-bold text-xl text-white">¡Mensaje enviado!</h3>
        <p className="text-[#8888a4] text-sm">Te respondemos en menos de 24 horas.</p>
        {onClose && (
          <button onClick={onClose} className="mt-2 text-xs text-[#55556a] hover:text-white transition-colors">
            Cerrar
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* honeypot — hidden from real users */}
      <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-1.5">Nombre</label>
          <input id="name" {...register('name')} placeholder="Tu nombre" className={inputClass} />
          {errors.name && <p className="text-[#00c896] text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="business" className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-1.5">Negocio</label>
          <input id="business" {...register('business')} placeholder="Nombre de tu negocio" className={inputClass} />
          {errors.business && <p className="text-[#00c896] text-xs mt-1">{errors.business.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="wa" className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-1.5">WhatsApp</label>
          <input id="wa" {...register('whatsapp')} placeholder="+54 9 223 ..." className={inputClass} />
          {errors.whatsapp && <p className="text-[#00c896] text-xs mt-1">{errors.whatsapp.message}</p>}
        </div>
        <div>
          <label htmlFor="em" className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-1.5">Email</label>
          <input id="em" type="email" {...register('email')} placeholder="tu@email.com" className={inputClass} />
          {errors.email && <p className="text-[#00c896] text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rubro" className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-1.5">Rubro</label>
          <input id="rubro" {...register('rubro')} placeholder="Ej: Gastronomía, Servicios..." className={inputClass} />
          {errors.rubro && <p className="text-[#00c896] text-xs mt-1">{errors.rubro.message}</p>}
        </div>
        <div>
          <label htmlFor="hasweb" className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-1.5">¿Ya tenés una web?</label>
          <div className="relative">
            <select id="hasweb" {...register('hasWeb')} defaultValue="" className={`${inputClass} appearance-none`}>
              <option value="" disabled>Seleccioná...</option>
              <option value="no">No tengo</option>
              <option value="si-vieja">Sí, pero está desactualizada</option>
              <option value="si-otra">Sí, quiero mejorarla</option>
            </select>
            <ChevronDown size={12} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#55556a] pointer-events-none" />
          </div>
          {errors.hasWeb && <p className="text-[#00c896] text-xs mt-1">{errors.hasWeb.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="msg" className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-1.5">Mensaje (opcional)</label>
        <textarea id="msg" {...register('message')} rows={3} placeholder="Contanos algo sobre tu negocio..." className={`${inputClass} resize-none`} />
      </div>

      <div className="flex items-start gap-3">
        <input id="privacy" type="checkbox" {...register('privacy')} className="mt-0.5 w-4 h-4 accent-[#00c896] cursor-pointer flex-none" />
        <label htmlFor="privacy" className="text-xs text-[#8888a4] leading-relaxed">
          Acepto la{' '}
          <Link href="/privacidad" target="_blank" className="text-[#00c896] hover:underline">
            política de privacidad
          </Link>
          {' '}de MGB Software Factory.
        </label>
      </div>
      {errors.privacy && <p className="text-[#00c896] text-xs -mt-2">{errors.privacy.message}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : 'Quiero recibir una propuesta'}
      </button>
    </form>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function WebExpressLanding() {
  const [showSticky, setShowSticky] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [variant, setVariant] = useState<'a' | 'b'>('a');
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('variant') === 'b') setVariant('b');
  }, []);

  const hero = HERO_COPY[variant];
  const primaryCta = '#comprar';
  const hasMPLink = !!WEB_EXPRESS_CONFIG.payment.mercadoPagoUrl;

  // pixel view content once
  useEffect(() => {
    trackViewContent('Web Express MGB', 'Business Website Service');
  }, []);

  // sticky CTA scroll logic
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 300;
      const footer = footerRef.current;
      const nearFooter = footer ? window.scrollY + window.innerHeight > footer.offsetTop - 80 : false;
      setShowSticky(scrolled && !nearFooter);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // portfolio: only real projects with web category or URL
  const portfolioProjects = PORTFOLIO.filter(
    (p) => p.category === 'Desarrollo Web' || ('url' in p && p.url)
  );

  return (
    <div className="min-h-screen bg-[#06060e] text-white">

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#06060e]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-4">
          <Link href="/" aria-label="MGB Software Factory — inicio">
            <Image src="/logo.png" alt="MGB Software Factory" width={36} height={36} className="rounded-full" priority />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#ejemplos" className="text-sm text-[#8888a4] hover:text-white transition-colors">Ver ejemplos</a>
            <a href="#faq" className="text-sm text-[#8888a4] hover:text-white transition-colors">Preguntas frecuentes</a>
          </nav>
          <a
            href={primaryCta}
            target="_self"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00c896] text-white text-sm font-semibold hover:bg-[#00b085] transition-colors shadow-lg shadow-[#00c896]/25"
          >
            Quiero mi página web
          </a>
        </div>
      </header>

      <main>
        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-5 md:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">
                PÁGINAS WEB PROFESIONALES PARA NEGOCIOS
              </p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white mb-5">
                {hero.title}
              </h1>
              <p className="text-[#8888a4] text-lg leading-relaxed mb-8 max-w-lg">
                {hero.body}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <a
                  href={primaryCta}
                  target="_self"
                  rel="noopener noreferrer"
                  onClick={() => trackInitiateCheckout()}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors shadow-xl shadow-[#00c896]/25"
                >
                  Quiero mi página web
                  <ArrowRight size={16} />
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContact()}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/12 text-white font-medium text-base hover:bg-white/5 transition-colors"
                >
                  Consultar por WhatsApp
                </a>
              </div>
              <p className="text-[#55556a] text-xs font-mono mb-2">Diseño profesional · Responsive · Deploy incluido</p>
              <p className="text-[#55556a] text-xs">Entrega estándar desde 48 hs hábiles una vez recibido todo el material.</p>
            </div>
            <div className="order-first lg:order-last">
              <BrowserMockup />
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ─────────────────────────────────────── */}
        <section className="border-y border-white/6 bg-[#0c0c18] py-6 px-5 md:px-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#00c896]/10 flex items-center justify-center flex-none">
                  <Icon size={15} className="text-[#00c896]" />
                </div>
                <span className="text-[#8888a4] text-xs leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SHOWCASE IMAGE ─────────────────────────────────── */}
        <section className="py-16 md:py-24 px-5 md:px-10">
          <div className="max-w-5xl mx-auto">
            <Image
              src="/web-express-hero.png"
              alt="Ejemplos reales de sitios web desarrollados por MGB Software Factory"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl border border-white/8 shadow-2xl shadow-black/40"
              priority={false}
            />
          </div>
        </section>

        {/* ── PRECIO Y CTA ──────────────────────────────────── */}
        <PricingSection onRequestForm={() => setShowForm(true)} />

        {/* ── PROBLEMA ──────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-5 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">El problema</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                ¿Tu negocio depende solamente de Instagram o WhatsApp?
              </h2>
              <p className="text-[#8888a4] text-lg leading-relaxed">
                Las redes sociales son importantes, pero una página web profesional te permite ordenar tu información, mostrar tus servicios con claridad y transmitir confianza desde el primer contacto.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: 'Tu información, siempre disponible', body: 'Tus clientes encuentran horarios, servicios, ubicación y medios de contacto en un solo lugar.' },
                { title: 'Una imagen más profesional', body: 'Una web cuidada ayuda a que tu negocio se vea serio, confiable y preparado para crecer.' },
                { title: 'Más consultas directas', body: 'Cada sección está diseñada para llevar al visitante hacia WhatsApp o tu formulario de contacto.' },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-[#0c0c18] p-6 hover:border-white/14 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#00c896]/10 flex items-center justify-center mb-4">
                    <Globe size={16} className="text-[#00c896]" />
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-2 text-lg">{title}</h3>
                  <p className="text-[#8888a4] text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULTADO VISUAL ──────────────────────────────── */}
        <section className="py-24 md:py-32 px-5 md:px-10 bg-[#0c0c18]">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">Resultado</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-12 max-w-2xl mx-auto">
              Una página simple, pero pensada para convertir.
            </h2>
            <AnnotatedMockup />
          </div>
        </section>

        {/* ── INCLUYE ───────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-5 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">Qué incluye</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                Todo lo necesario para que tu negocio tenga una presencia profesional.
              </h2>
              <p className="text-[#8888a4] text-lg leading-relaxed">
                Sin vueltas técnicas. Nosotros nos ocupamos del diseño, el desarrollo y la publicación.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {INCLUDES.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-[#0c0c18] border border-white/6 rounded-xl px-4 py-3">
                  <div className="w-5 h-5 rounded-full bg-[#00c896]/15 border border-[#00c896]/30 flex items-center justify-center flex-none">
                    <Check size={11} className="text-[#00c896]" />
                  </div>
                  <span className="text-[#8888a4] text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#55556a] text-xs">
              El dominio pago y los servicios externos pagos se contratan por separado. Te ayudamos a configurarlos.
            </p>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ─────────────────────────────────── */}
        <section className="py-24 md:py-32 px-5 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-xl mb-14">
              <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">Proceso</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
                Tu web lista en cuatro pasos.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map(({ n, title, body }) => (
                <div key={n} className="relative">
                  <span className="font-heading font-bold text-5xl text-white/5 mb-3 block leading-none">{n}</span>
                  <h3 className="font-heading font-semibold text-white mb-2">{title}</h3>
                  <p className="text-[#8888a4] text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO / EJEMPLOS ──────────────────────────── */}
        <section id="ejemplos" className="py-24 md:py-32 px-5 md:px-10 bg-[#0c0c18]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-xl mb-14">
              <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">Portfolio</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
                Proyectos que convierten ideas en experiencias digitales.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {portfolioProjects.length > 0 ? portfolioProjects.map((project) => (
                <div key={project.id} className="rounded-2xl border border-white/8 bg-[#06060e] overflow-hidden hover:border-white/14 transition-colors group">
                  {/* Placeholder visual con color del proyecto */}
                  <div
                    className="h-40 flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}15`, borderBottom: `1px solid ${project.color}20` }}
                  >
                    <Globe size={32} style={{ color: project.color, opacity: 0.6 }} />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-mono uppercase tracking-widest mb-1 block" style={{ color: project.color }}>
                      {project.category}
                    </span>
                    <h3 className="font-heading font-semibold text-white mb-1">{project.name}</h3>
                    <p className="text-[#55556a] text-xs mb-3">{project.client}</p>
                    <p className="text-[#8888a4] text-sm leading-relaxed mb-4">{project.solution}</p>
                    {'url' in project && project.url && (
                      <a
                        href={project.url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00c896] hover:underline"
                      >
                        Ver proyecto <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              )) : (
                // Placeholder cuando no hay proyectos web aún
                [1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl border border-white/8 bg-[#06060e] overflow-hidden">
                    <div className="h-40 bg-[#0c0c18] flex items-center justify-center border-b border-white/6">
                      <Globe size={32} className="text-[#55556a]" />
                    </div>
                    <div className="p-5 space-y-2">
                      <div className="h-2 bg-white/8 rounded w-1/3" />
                      <div className="h-3 bg-white/12 rounded w-2/3" />
                      <div className="h-2 bg-white/6 rounded w-full" />
                      <div className="h-2 bg-white/6 rounded w-4/5" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* ── POR QUÉ MGB ───────────────────────────────────── */}
        <section className="py-24 md:py-32 px-5 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-xl mb-14">
              <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">Por qué elegirnos</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
                Tecnología profesional, con trato directo.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHY.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-[#0c0c18] p-6 hover:border-white/14 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#00c896]/10 flex items-center justify-center mb-4">
                    <Icon size={16} className="text-[#00c896]" />
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-2">{title}</h3>
                  <p className="text-[#8888a4] text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section id="faq" className="py-24 md:py-32 px-5 md:px-10 bg-[#0c0c18]">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">FAQ</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
                Preguntas frecuentes
              </h2>
            </div>
            <FAQAccordion items={FAQS} />
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────── */}
        <section className="py-28 md:py-36 px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-6">¿Listo para empezar?</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white mb-5">
              Tu negocio ya existe. Ahora necesita una web a la altura.
            </h2>
            <p className="text-[#8888a4] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Mostrá tus servicios con claridad, transmití confianza y convertí visitas en nuevas consultas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a
                href={primaryCta}
                target="_self"
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors shadow-2xl shadow-[#00c896]/30"
              >
                Quiero mi página web
                <ArrowRight size={16} />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContact()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/12 text-white font-medium text-base hover:bg-white/5 transition-colors"
              >
                Hablar por WhatsApp
              </a>
            </div>
            <p className="text-[#55556a] text-xs">Respuesta directa del equipo de MGB Software Factory.</p>
          </div>
        </section>
      </main>

      {/* ── FOOTER SIMPLIFICADO ───────────────────────────── */}
      <footer ref={footerRef} className="border-t border-white/6 bg-[#06060e] py-10 px-5 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="MGB Software Factory" width={32} height={32} className="rounded-full" />
            <div>
              <p className="text-sm font-heading font-semibold text-white">MGB Software Factory</p>
              <p className="text-xs text-[#55556a]">Mar del Plata, Argentina</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#55556a]">
            <a href={`mailto:${WEB_EXPRESS_CONFIG.contactEmail}`} className="hover:text-white transition-colors">
              {WEB_EXPRESS_CONFIG.contactEmail}
            </a>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          </div>
          <p className="text-xs text-[#55556a]">© {new Date().getFullYear()} MGB Software Factory</p>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ─────────────────────────────── */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onClick={() => trackContact()}
        className="fixed bottom-24 right-5 md:bottom-6 z-40 w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1fb558] flex items-center justify-center shadow-lg shadow-[#25D366]/25 transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.537 4.09 1.477 5.832L.057 23.997l6.352-1.645A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 01-5.031-1.379l-.361-.214-3.741.981.997-3.638-.235-.374A9.817 9.817 0 012.143 12C2.143 6.545 6.545 2.143 12 2.143c5.455 0 9.857 4.402 9.857 9.857 0 5.455-4.402 9.857-9.857 9.857z" />
        </svg>
      </a>

      {/* ── STICKY CTA MOBILE ─────────────────────────────── */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0c0c18] border-t border-white/8 px-4 py-3 flex items-center justify-between gap-3"
            style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
          >
            <span className="text-sm text-[#8888a4]">Creá la web de tu negocio</span>
            <a
              href={primaryCta}
              target="_self"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout()}
              className="px-5 py-2.5 rounded-full bg-[#00c896] text-white text-sm font-semibold hover:bg-[#00b085] transition-colors whitespace-nowrap"
            >
              Empezar
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LEAD FORM MODAL ──────────────────────────────── */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0c0c18] border border-white/8 rounded-2xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-bold text-xl text-white">Quiero recibir una propuesta</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-[#55556a] hover:text-white transition-colors p-1"
                  aria-label="Cerrar formulario"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <LeadForm variant={variant} onClose={() => setShowForm(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
