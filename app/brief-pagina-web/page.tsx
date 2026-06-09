'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { WEB_EXPRESS_CONFIG } from '@/lib/web-express-config';
import { CONTACT } from '@/lib/constants';
import { getStoredUTMs, trackLead } from '@/lib/meta-pixel';

// ─── Steps ───────────────────────────────────────────────────────────────────

const STEPS = [
  'Información General',
  'Identidad Visual',
  'Contenido',
  'Objetivos',
];

// ─── Zod schemas per step ────────────────────────────────────────────────────

const step1Schema = z.object({
  nombre: z.string().min(2, 'Nombre requerido'),
  negocio: z.string().min(2, 'Nombre del negocio requerido'),
  rubro: z.string().min(2, 'Rubro requerido'),
  ciudad: z.string().min(2, 'Ciudad requerida'),
  whatsapp: z.string().min(6, 'WhatsApp requerido'),
  email: z.string().email('Email inválido'),
  redes: z.string().optional(),
  dominioExistente: z.string().optional(),
});

const step2Schema = z.object({
  logoUrl: z.string().optional(),
  colores: z.string().optional(),
  referencias: z.string().optional(),
  paginasQueLeGustan: z.string().optional(),
});

const step3Schema = z.object({
  descripcionNegocio: z.string().min(10, 'Descripción requerida (mínimo 10 caracteres)'),
  servicios: z.string().min(5, 'Servicios requeridos'),
  horarios: z.string().optional(),
  ubicacion: z.string().optional(),
  mediosContacto: z.string().optional(),
  faq: z.string().optional(),
  observaciones: z.string().optional(),
});

const step4Schema = z.object({
  objetivos: z.array(z.string()).min(1, 'Seleccioná al menos un objetivo'),
  observacionesFinales: z.string().optional(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;
type Step4Data = z.infer<typeof step4Schema>;

type AllData = Step1Data & Step2Data & Step3Data & Step4Data;

// ─── Input helpers ───────────────────────────────────────────────────────────

const inputCls = 'w-full bg-[#06060e] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-[#55556a] focus:outline-none focus:ring-2 focus:ring-[#00c896]/40 focus:border-[#00c896]/50 transition-colors';
const labelCls = 'block text-xs font-mono text-[#55556a] uppercase tracking-widest mb-1.5';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-[#00c896] text-xs mt-1">{message}</p>;
}

// ─── Step 1 ──────────────────────────────────────────────────────────────────

function Step1({ onNext, defaultValues }: { onNext: (d: Step1Data) => void; defaultValues?: Partial<Step1Data> }) {
  const { register, handleSubmit, formState: { errors } } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues,
  });
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Nombre *</label>
          <input {...register('nombre')} placeholder="Tu nombre" className={inputCls} />
          <FieldError message={errors.nombre?.message} />
        </div>
        <div>
          <label className={labelCls}>Nombre del negocio *</label>
          <input {...register('negocio')} placeholder="Ej: Panadería El Buen Pan" className={inputCls} />
          <FieldError message={errors.negocio?.message} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Rubro *</label>
          <input {...register('rubro')} placeholder="Ej: Gastronomía, Salud, Retail..." className={inputCls} />
          <FieldError message={errors.rubro?.message} />
        </div>
        <div>
          <label className={labelCls}>Ciudad *</label>
          <input {...register('ciudad')} placeholder="Ej: Mar del Plata" className={inputCls} />
          <FieldError message={errors.ciudad?.message} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>WhatsApp *</label>
          <input {...register('whatsapp')} type="tel" placeholder="+54 9 XXX XXX XXXX" className={inputCls} />
          <FieldError message={errors.whatsapp?.message} />
        </div>
        <div>
          <label className={labelCls}>Email *</label>
          <input {...register('email')} type="email" placeholder="tu@email.com" className={inputCls} />
          <FieldError message={errors.email?.message} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Redes sociales <span className="normal-case text-[#55556a]">(opcional)</span></label>
        <input {...register('redes')} placeholder="Ej: @tunegocio en Instagram, Facebook/tunegocio" className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Dominio existente <span className="normal-case text-[#55556a]">(si ya tenés)</span></label>
        <input {...register('dominioExistente')} placeholder="Ej: tunegocio.com.ar (dejar vacío si no tenés)" className={inputCls} />
      </div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors cursor-pointer">
        Siguiente <ChevronRight size={16} />
      </button>
    </form>
  );
}

// ─── Step 2 ──────────────────────────────────────────────────────────────────

function Step2({ onNext, onBack, defaultValues }: { onNext: (d: Step2Data) => void; onBack: () => void; defaultValues?: Partial<Step2Data> }) {
  const { register, handleSubmit } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues,
  });
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div>
        <label className={labelCls}>Logo — link o descripción</label>
        <input {...register('logoUrl')} placeholder="Ej: drive.google.com/... o 'tengo un PDF con el logo'" className={inputCls} />
        <p className="text-[#55556a] text-xs mt-1.5">Si no tenés logo, lo trabajamos juntos.</p>
      </div>
      <div>
        <label className={labelCls}>Colores preferidos</label>
        <input {...register('colores')} placeholder="Ej: verde y blanco, azul oscuro, colores de mi marca..." className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Referencias visuales</label>
        <textarea {...register('referencias')} rows={3} placeholder="Describí el estilo visual que te gusta: moderno, minimalista, colorido, etc." className={`${inputCls} resize-none`} />
      </div>
      <div>
        <label className={labelCls}>Páginas que te gustan</label>
        <textarea {...register('paginasQueLeGustan')} rows={3} placeholder="Links de páginas web que te gustan como referencia (de cualquier rubro)" className={`${inputCls} resize-none`} />
      </div>
      <div className="flex gap-3">
        <button type="button" onClick={onBack} className="flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/10 text-[#8888a4] hover:text-white hover:border-white/20 transition-colors cursor-pointer">
          <ChevronLeft size={16} /> Atrás
        </button>
        <button type="submit" className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors cursor-pointer">
          Siguiente <ChevronRight size={16} />
        </button>
      </div>
    </form>
  );
}

// ─── Step 3 ──────────────────────────────────────────────────────────────────

function Step3({ onNext, onBack, defaultValues }: { onNext: (d: Step3Data) => void; onBack: () => void; defaultValues?: Partial<Step3Data> }) {
  const { register, handleSubmit, formState: { errors } } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues,
  });
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div>
        <label className={labelCls}>Descripción del negocio *</label>
        <textarea {...register('descripcionNegocio')} rows={4} placeholder="Contanos qué hace tu negocio, cómo funciona, qué te hace diferente..." className={`${inputCls} resize-none`} />
        <FieldError message={errors.descripcionNegocio?.message} />
      </div>
      <div>
        <label className={labelCls}>Servicios o productos *</label>
        <textarea {...register('servicios')} rows={4} placeholder="Listá tus servicios o productos principales con una breve descripción de cada uno" className={`${inputCls} resize-none`} />
        <FieldError message={errors.servicios?.message} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Horarios</label>
          <input {...register('horarios')} placeholder="Ej: Lun–Vie 9:00–18:00" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Ubicación</label>
          <input {...register('ubicacion')} placeholder="Dirección o barrio" className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Medios de contacto</label>
        <input {...register('mediosContacto')} placeholder="Ej: WhatsApp, email, teléfono fijo, formulario web" className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Preguntas frecuentes de tus clientes</label>
        <textarea {...register('faq')} rows={3} placeholder="Listá las preguntas que te hacen más seguido y sus respuestas" className={`${inputCls} resize-none`} />
      </div>
      <div>
        <label className={labelCls}>Observaciones adicionales</label>
        <textarea {...register('observaciones')} rows={2} placeholder="Cualquier otra información relevante para el diseño" className={`${inputCls} resize-none`} />
      </div>
      <div className="flex gap-3">
        <button type="button" onClick={onBack} className="flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/10 text-[#8888a4] hover:text-white hover:border-white/20 transition-colors cursor-pointer">
          <ChevronLeft size={16} /> Atrás
        </button>
        <button type="submit" className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors cursor-pointer">
          Siguiente <ChevronRight size={16} />
        </button>
      </div>
    </form>
  );
}

// ─── Step 4 ──────────────────────────────────────────────────────────────────

const OBJETIVO_OPTIONS = [
  'Que me encuentren en Google',
  'Recibir más consultas por WhatsApp',
  'Mostrar mis servicios con claridad',
  'Transmitir una imagen profesional',
  'Reemplazar mi presencia en redes',
  'Captar nuevos clientes',
  'Fidelizar clientes existentes',
  'Otro',
];

function Step4({ onNext, onBack, defaultValues }: { onNext: (d: Step4Data) => void; onBack: () => void; defaultValues?: Partial<Step4Data> }) {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
    defaultValues: { objetivos: [], ...defaultValues },
  });

  const selected = watch('objetivos') ?? [];

  function toggleObjetivo(opt: string) {
    if (selected.includes(opt)) {
      setValue('objetivos', selected.filter((o) => o !== opt));
    } else {
      setValue('objetivos', [...selected, opt]);
    }
  }

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-6">
      <div>
        <label className={labelCls}>¿Cuál es el objetivo principal de tu web? *</label>
        <p className="text-[#55556a] text-xs mb-3">Podés seleccionar más de uno</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {OBJETIVO_OPTIONS.map((opt) => {
            const active = selected.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => toggleObjetivo(opt)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm text-left transition-all cursor-pointer ${
                  active
                    ? 'border-[#00c896]/50 bg-[#00c896]/10 text-white'
                    : 'border-white/8 bg-[#06060e] text-[#8888a4] hover:border-white/16 hover:text-white'
                }`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center flex-none border transition-colors ${active ? 'bg-[#00c896] border-[#00c896]' : 'border-white/20'}`}>
                  {active && <Check size={10} className="text-white" />}
                </div>
                {opt}
              </button>
            );
          })}
        </div>
        {/* hidden input to register objetivos */}
        <input type="hidden" {...register('objetivos')} />
        <FieldError message={errors.objetivos?.message} />
      </div>

      <div>
        <label className={labelCls}>Observaciones finales</label>
        <textarea {...register('observacionesFinales')} rows={3} placeholder="¿Hay algo más que quieras contarnos o aclarar?" className={`${inputCls} resize-none`} />
      </div>

      <div className="flex gap-3">
        <button type="button" onClick={onBack} className="flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/10 text-[#8888a4] hover:text-white hover:border-white/20 transition-colors cursor-pointer">
          <ChevronLeft size={16} /> Atrás
        </button>
        <button type="submit" className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#00c896] text-white font-semibold text-base hover:bg-[#00b085] transition-colors cursor-pointer">
          Enviar brief
        </button>
      </div>
    </form>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

export default function BriefPage() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const [data1, setData1] = useState<Partial<Step1Data>>({});
  const [data2, setData2] = useState<Partial<Step2Data>>({});
  const [data3, setData3] = useState<Partial<Step3Data>>({});

  async function submit(d4: Step4Data) {
    setSending(true);
    setError('');
    const utms = getStoredUTMs();
    const payload: AllData & Record<string, unknown> = {
      ...(data1 as Step1Data),
      ...(data2 as Step2Data),
      ...(data3 as Step3Data),
      ...d4,
      ...utms,
      form_type: 'brief_pagina_web',
      timestamp: new Date().toISOString(),
      referrer: typeof document !== 'undefined' ? document.referrer : '',
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
      } else {
        setError('Hubo un error al enviar. Intentá de nuevo o escribinos por WhatsApp.');
      }
    } catch {
      setError('Error de conexión. Por favor, intentá de nuevo.');
    } finally {
      setSending(false);
    }
  }

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <div className="min-h-screen bg-[#06060e] text-[#f0f0f5]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/6 bg-[#06060e]/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-5 py-3 flex items-center gap-3">
          <Link href="/pagina-web-para-tu-negocio" className="flex items-center gap-2 text-[#8888a4] hover:text-white transition-colors">
            <ChevronLeft size={16} />
            <span className="text-sm">Volver</span>
          </Link>
          <div className="flex-1" />
          <Image src="/logo.png" alt="MGB Software Factory" width={32} height={32} className="rounded-full" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-12 md:py-16">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <CheckCircle className="w-16 h-16 text-[#34d399] mx-auto mb-6" />
            <h1 className="font-heading font-bold text-3xl text-white mb-4">¡Listo!</h1>
            <p className="text-[#8888a4] text-lg leading-relaxed mb-6 max-w-lg mx-auto">
              Ya recibimos la información de tu negocio. Nuestro equipo la va a revisar y te vamos a contactar en menos de 24 horas para arrancar con el diseño.
            </p>
            <Link
              href="/pagina-web-para-tu-negocio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00c896] text-white font-semibold hover:bg-[#00b085] transition-colors"
            >
              Volver al inicio
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Title */}
            <div className="mb-8">
              <p className="text-xs font-mono text-[#00c896] tracking-widest uppercase mb-3">Brief</p>
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">
                Contanos sobre tu negocio
              </h1>
              <p className="text-[#8888a4] text-base leading-relaxed">
                Con esta información podemos diseñar una página que realmente represente a tu negocio.
              </p>
            </div>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                {STEPS.map((s, i) => (
                  <div
                    key={s}
                    className={`flex items-center gap-1.5 ${i <= step ? 'text-white' : 'text-[#55556a]'}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono flex-none border transition-colors ${
                      i < step
                        ? 'bg-[#00c896] border-[#00c896] text-white'
                        : i === step
                        ? 'border-[#00c896] text-[#00c896]'
                        : 'border-white/15 text-[#55556a]'
                    }`}>
                      {i < step ? <Check size={12} /> : i + 1}
                    </div>
                    <span className="text-xs hidden sm:block font-medium">{s}</span>
                  </div>
                ))}
              </div>
              <div className="h-1 bg-white/6 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#00c896] rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-[#55556a] text-xs font-mono mt-2">Paso {step + 1} de {STEPS.length} — {STEPS[step]}</p>
            </div>

            {/* Form step */}
            <div className="rounded-2xl border border-white/6 bg-[#0c0c18] p-6 md:p-8">
              <h2 className="font-heading font-semibold text-white text-xl mb-6">{STEPS[step]}</h2>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.2 }}
                >
                  {step === 0 && (
                    <Step1
                      defaultValues={data1}
                      onNext={(d) => { setData1(d); setStep(1); }}
                    />
                  )}
                  {step === 1 && (
                    <Step2
                      defaultValues={data2}
                      onBack={() => setStep(0)}
                      onNext={(d) => { setData2(d); setStep(2); }}
                    />
                  )}
                  {step === 2 && (
                    <Step3
                      defaultValues={data3}
                      onBack={() => setStep(1)}
                      onNext={(d) => { setData3(d); setStep(3); }}
                    />
                  )}
                  {step === 3 && (
                    <>
                      <Step4
                        onBack={() => setStep(2)}
                        onNext={submit}
                      />
                      {sending && (
                        <div className="flex items-center justify-center gap-2 mt-4 text-[#8888a4] text-sm">
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Enviando…
                        </div>
                      )}
                      {error && <p className="text-red-400 text-xs mt-3 text-center">{error}</p>}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-[#55556a] text-xs text-center mt-6">
              Toda la información se mantiene confidencial y se usa únicamente para el desarrollo de tu web.
            </p>
          </>
        )}
      </main>
    </div>
  );
}
