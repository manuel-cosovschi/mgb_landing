import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — MGB Software",
  description:
    "Política de privacidad de MGB Software. Cómo recopilamos, usamos y protegemos tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#050510] text-[#EEEEF2]">
      {/* Header */}
      <header className="border-b border-[rgba(255,255,255,0.05)] py-5 px-8 md:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#7A7A95] hover:text-[#EEEEF2] transition-colors text-sm"
        >
          ← Volver al inicio
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-8 md:px-12 py-16 md:py-24">
        <div className="mb-10">
          <span className="text-xs font-mono text-[#E94560] uppercase tracking-widest">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-3">
            Política de Privacidad
          </h1>
          <p className="text-[#7A7A95] text-sm">
            Última actualización: abril de 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-[#7A7A95] leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-[#EEEEF2]">
              1. Responsable del tratamiento
            </h2>
            <p>
              MGB Software (en adelante, "nosotros" o "MGB") es el responsable
              del tratamiento de los datos personales recopilados a través del
              sitio web <span className="text-[#EEEEF2]">mgb-landing-xi.vercel.app</span> y
              sus formularios de contacto.
            </p>
            <p>
              Podés contactarnos en cualquier momento a través de:{" "}
              <a
                href="mailto:mgbsoftwarefactory@gmail.com"
                className="text-[#E94560] hover:underline"
              >
                mgbsoftwarefactory@gmail.com
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-[#EEEEF2]">
              2. Datos que recopilamos
            </h2>
            <p>
              Recopilamos únicamente los datos que vos mismo nos proporcionás a
              través del formulario de contacto:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de WhatsApp / teléfono (opcional)</li>
              <li>Nombre de empresa o negocio (opcional)</li>
              <li>Servicio de interés y presupuesto estimado</li>
              <li>Descripción del proyecto</li>
            </ul>
            <p>
              No recopilamos datos de manera automática más allá de los logs
              estándar del servidor (dirección IP, navegador, fecha/hora de
              acceso) que son inherentes al funcionamiento de cualquier sitio web.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-[#EEEEF2]">
              3. Finalidad del tratamiento
            </h2>
            <p>Usamos tus datos exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Responder a tu consulta o solicitud de presupuesto</li>
              <li>
                Contactarte para agendar una reunión o dar seguimiento a tu
                proyecto
              </li>
              <li>
                Enviarte información relevante relacionada con el servicio que
                consultaste
              </li>
            </ul>
            <p>
              No utilizamos tus datos para publicidad, marketing no solicitado
              ni ningún fin distinto al contacto comercial directo relacionado
              con tu consulta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-[#EEEEF2]">
              4. Base legal
            </h2>
            <p>
              El tratamiento de tus datos se basa en tu consentimiento explícito
              al completar y enviar el formulario de contacto. Podés retirar ese
              consentimiento en cualquier momento escribiéndonos a nuestro email.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-[#EEEEF2]">
              5. Conservación de datos
            </h2>
            <p>
              Conservamos tus datos mientras exista una relación comercial
              activa o potencial. Si no avanzamos con ningún proyecto y no
              tenemos comunicación por más de 12 meses, eliminamos tu
              información de nuestros sistemas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-[#EEEEF2]">
              6. Compartición de datos con terceros
            </h2>
            <p>
              No vendemos, cedemos ni compartimos tus datos personales con
              terceros con fines comerciales. Los datos enviados a través del
              formulario son procesados por{" "}
              <a
                href="https://formspree.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E94560] hover:underline"
              >
                Formspree
              </a>
              , un servicio de gestión de formularios que actúa como encargado
              del tratamiento bajo sus propias políticas de privacidad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-[#EEEEF2]">
              7. Tus derechos
            </h2>
            <p>
              De acuerdo con la Ley N° 25.326 de Protección de los Datos
              Personales (Argentina) y normativa aplicable, tenés derecho a:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <span className="text-[#EEEEF2]">Acceder</span> a los datos
                personales que tenemos de vos
              </li>
              <li>
                <span className="text-[#EEEEF2]">Rectificar</span> datos
                incorrectos o desactualizados
              </li>
              <li>
                <span className="text-[#EEEEF2]">Suprimir</span> tus datos de
                nuestros registros
              </li>
              <li>
                <span className="text-[#EEEEF2]">Oponerte</span> al tratamiento
                de tus datos
              </li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, escribinos a{" "}
              <a
                href="mailto:mgbsoftwarefactory@gmail.com"
                className="text-[#E94560] hover:underline"
              >
                mgbsoftwarefactory@gmail.com
              </a>{" "}
              indicando tu nombre y la solicitud. Respondemos en un plazo máximo
              de 10 días hábiles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-[#EEEEF2]">
              8. Seguridad
            </h2>
            <p>
              Implementamos medidas técnicas y organizativas razonables para
              proteger tus datos contra acceso no autorizado, pérdida o
              alteración. La transmisión de datos se realiza siempre mediante
              conexiones cifradas (HTTPS).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-[#EEEEF2]">
              9. Cambios en esta política
            </h2>
            <p>
              Podemos actualizar esta política en cualquier momento. La fecha de
              última actualización figura al comienzo del documento. El uso
              continuado del sitio después de publicar cambios implica la
              aceptación de la versión actualizada.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-[#EEEEF2]">
              10. Contacto
            </h2>
            <p>
              Ante cualquier consulta relacionada con esta política o el
              tratamiento de tus datos, podés escribirnos a:{" "}
              <a
                href="mailto:mgbsoftwarefactory@gmail.com"
                className="text-[#E94560] hover:underline"
              >
                mgbsoftwarefactory@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.05)]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#7A7A95] hover:text-[#EEEEF2] transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
