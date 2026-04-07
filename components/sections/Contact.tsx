"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";
import { CONTACT } from "@/lib/constants";

// ── Zod schema ──
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresá un email válido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Seleccioná un servicio"),
  budget: z.string().min(1, "Seleccioná un presupuesto"),
  message: z
    .string()
    .min(20, "Contanos un poco más (mínimo 20 caracteres)")
    .max(1000, "El mensaje no puede superar los 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SERVICE_OPTIONS = [
  { value: "", label: "¿Qué servicio te interesa?" },
  { value: "web", label: "Desarrollo web" },
  { value: "whatsapp", label: "Bot de WhatsApp" },
  { value: "automation", label: "Automatización" },
  { value: "mobile", label: "App mobile" },
  { value: "landing", label: "Landing page" },
  { value: "other", label: "Otro" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Presupuesto estimado" },
  { value: "<500", label: "Menos de USD $500" },
  { value: "500-2000", label: "$500 – $2.000" },
  { value: "2000-5000", label: "$2.000 – $5.000" },
  { value: "5000-15000", label: "$5.000 – $15.000" },
  { value: ">15000", label: "Más de $15.000" },
  { value: "unknown", label: "No sé todavía" },
];

// ── Form field component ──
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-[#7A7A95] uppercase tracking-wide">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            className="text-xs text-[#E94560]"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full bg-[#10102A] border border-[rgba(255,255,255,0.06)] rounded-xl px-4 py-3 text-sm text-[#EEEEF2] placeholder:text-[#4A4A65] focus:outline-none focus:border-[rgba(233,69,96,0.4)] focus:ring-1 focus:ring-[rgba(233,69,96,0.2)] transition-all duration-200";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      const endpoint = `https://formspree.io/f/${CONTACT.formspreeId}`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error al enviar el formulario");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(
        "Hubo un error al enviar el mensaje. Por favor intentá de nuevo o escribinos directamente por WhatsApp."
      );
    }
  };

  const waLink = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  return (
    <section
      id="contacto"
      className="relative section-padding overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(10,10,26,0.9) 0%, #050510 70%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          label="Contacto"
          title="Hablemos de tu"
          titleHighlight="proyecto"
          subtitle="Contanos tu idea. Te respondemos en menos de 24 horas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* ── Form ── */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="bg-[#0A0A1A] rounded-2xl border border-[rgba(255,255,255,0.05)] p-6 sm:p-7 md:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[rgba(80,250,123,0.1)] border border-[rgba(80,250,123,0.2)] flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-[#50FA7B]" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-[#EEEEF2]">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-[#7A7A95] text-sm max-w-xs">
                      Te respondemos en menos de 24 horas. Mientras tanto, también
                      podés escribirnos por WhatsApp.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm text-[#E94560] hover:underline mt-2 cursor-pointer"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Nombre completo *" error={errors.name?.message}>
                        <input
                          {...register("name")}
                          placeholder="Tu nombre"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Email *" error={errors.email?.message}>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="tu@email.com"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="WhatsApp / Teléfono" error={errors.phone?.message}>
                        <input
                          {...register("phone")}
                          placeholder="+54 9 11..."
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Empresa / Negocio" error={errors.company?.message}>
                        <input
                          {...register("company")}
                          placeholder="Nombre de tu empresa"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    {/* Row 3: Service + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Servicio *" error={errors.service?.message}>
                        <select
                          {...register("service")}
                          className={`${inputClass} appearance-none`}
                          defaultValue=""
                        >
                          {SERVICE_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value} disabled={!o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Presupuesto *" error={errors.budget?.message}>
                        <select
                          {...register("budget")}
                          className={`${inputClass} appearance-none`}
                          defaultValue=""
                        >
                          {BUDGET_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value} disabled={!o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    {/* Message */}
                    <Field label="Contanos sobre tu proyecto *" error={errors.message?.message}>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="¿Qué querés construir? ¿Qué problema querés resolver? ¿Tenés algún plazo?"
                        className={`${inputClass} resize-none`}
                      />
                    </Field>

                    {/* Submit error */}
                    <AnimatePresence>
                      {submitError && (
                        <motion.p
                          className="text-sm text-[#E94560] bg-[rgba(233,69,96,0.08)] border border-[rgba(233,69,96,0.2)] rounded-xl px-4 py-3"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          {submitError}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-shimmer flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white bg-[#E94560] hover:bg-[#d63851] shadow-glow-sm hover:shadow-glow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar mensaje
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ── Contact info ── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Info cards */}
            <div className="bg-[#0A0A1A] rounded-2xl border border-[rgba(255,255,255,0.05)] p-6 flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-[#EEEEF2] mb-1">
                Otras formas de contacto
              </h3>

              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-sm text-[#7A7A95] hover:text-[#EEEEF2] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(233,69,96,0.1)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(233,69,96,0.15)] transition-colors">
                  <Mail size={14} className="text-[#E94560]" />
                </div>
                <span>{CONTACT.email}</span>
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#7A7A95] hover:text-[#EEEEF2] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(80,250,123,0.1)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(80,250,123,0.15)] transition-colors">
                  <MessageCircle size={14} className="text-[#50FA7B]" />
                </div>
                <span>WhatsApp: {CONTACT.whatsapp}</span>
              </a>

              {CONTACT.linkedin && (
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#7A7A95] hover:text-[#EEEEF2] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(139,233,253,0.1)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(139,233,253,0.15)] transition-colors">
                    <LinkedinIcon size={14} className="text-[#8BE9FD]" />
                  </div>
                  <span>LinkedIn</span>
                </a>
              )}

              {CONTACT.instagram && (
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#7A7A95] hover:text-[#EEEEF2] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(189,147,249,0.1)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(189,147,249,0.15)] transition-colors">
                    <InstagramIcon size={14} className="text-[#BD93F9]" />
                  </div>
                  <span>Instagram</span>
                </a>
              )}

              {CONTACT.github && (
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#7A7A95] hover:text-[#EEEEF2] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                    <GithubIcon size={14} className="text-[#EEEEF2]" />
                  </div>
                  <span>GitHub</span>
                </a>
              )}

              <div className="flex items-center gap-3 text-sm text-[#4A4A65]">
                <div className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.03)] flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </div>
                <span>{CONTACT.location}</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#4A4A65] pt-2 border-t border-[rgba(255,255,255,0.05)]">
                <div className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.03)] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} />
                </div>
                <span>{CONTACT.hours}</span>
              </div>
            </div>

            {/* Calendly card */}
            <div className="bg-[#0A0A1A] rounded-2xl border border-[rgba(255,255,255,0.05)] p-6">
              <p className="text-sm text-[#7A7A95] mb-4 leading-relaxed">
                ¿Preferís una llamada? Agendá una reunión de 20 minutos sin compromiso.
              </p>
              <a
                href={CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center gap-2 w-full justify-center py-3 px-5 rounded-xl font-medium text-sm text-[#EEEEF2] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.03)] transition-all"
              >
                <Calendar size={16} className="text-[#BD93F9]" />
                Agendar reunión
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
