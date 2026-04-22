'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/animations';
import { CONTACT } from '@/lib/constants';

const schema = z.object({
  name: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  service: z.string().min(1, 'Seleccioná un servicio'),
  message: z.string().min(10, 'El mensaje es muy corto'),
});
type FormData = z.infer<typeof schema>;

const SERVICES_OPTIONS = [
  'Aplicación Web', 'Bot de WhatsApp con IA', 'Automatización',
  'App Mobile', 'Landing Page', 'Consultoría Técnica', 'Otro',
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${CONTACT.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-28 md:py-36 bg-[#0c0c18]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <motion.p variants={fadeUp} className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-4">
                Contacto
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white mb-6">
                Escribinos<span className="text-[#00c896]">.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#8888a4] text-lg leading-relaxed mb-10">
                Contanos qué necesitás y te respondemos en menos de 24 horas con ideas concretas.
              </motion.p>

              <motion.div variants={stagger} className="space-y-5">
                {[
                  { Icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { Icon: MapPin, label: 'Ubicación', value: CONTACT.location, href: null },
                  { Icon: Clock, label: 'Horario', value: CONTACT.hours, href: null },
                ].map(({ Icon, label, value, href }) => (
                  <motion.div key={label} variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#00c896]/10 flex items-center justify-center text-[#00c896] flex-none mt-0.5">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#55556a] uppercase tracking-widest mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-[#8888a4] text-sm hover:text-white transition-colors break-all">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#8888a4] text-sm">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div variants={fadeUp}>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 rounded-2xl border border-white/6 bg-[#06060e]">
                  <CheckCircle className="w-12 h-12 text-[#34d399] mb-4" />
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-[#8888a4]">Te respondemos en menos de 24 horas.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 p-8 rounded-2xl border border-white/6 bg-[#06060e]"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-2">Nombre</label>
                    <input
                      {...register('name')}
                      placeholder="Tu nombre"
                      className="w-full bg-[#0c0c18] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-[#55556a] focus:outline-none focus:ring-2 focus:ring-[#00c896]/40 focus:border-[#00c896]/50 transition-colors"
                    />
                    {errors.name && <p className="text-[#00c896] text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-2">Email</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full bg-[#0c0c18] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-[#55556a] focus:outline-none focus:ring-2 focus:ring-[#00c896]/40 focus:border-[#00c896]/50 transition-colors"
                    />
                    {errors.email && <p className="text-[#00c896] text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-2">Servicio</label>
                    <div className="relative">
                      <select
                        {...register('service')}
                        defaultValue=""
                        className="w-full bg-[#0c0c18] border border-white/8 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00c896]/40 focus:border-[#00c896]/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-[#55556a]">¿Qué necesitás?</option>
                        {SERVICES_OPTIONS.map((s) => (
                          <option key={s} value={s} className="bg-[#0c0c18] text-white">{s}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#55556a]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    {errors.service && <p className="text-[#00c896] text-xs mt-1">{errors.service.message}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-2">Mensaje</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Contanos tu idea o proyecto..."
                      className="w-full bg-[#0c0c18] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-[#55556a] focus:outline-none focus:ring-2 focus:ring-[#00c896]/40 focus:border-[#00c896]/50 transition-colors resize-none"
                    />
                    {errors.message && <p className="text-[#00c896] text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
