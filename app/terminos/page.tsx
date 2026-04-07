import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones — MGB Software",
  description:
    "Términos y condiciones de contratación de MGB Software. Alcance de servicios, forma de pago, entregas y garantías.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[#050510] text-[#EEEEF2]">
      {/* Header */}
      <header className="border-b border-[rgba(255,255,255,0.05)] py-5 px-6 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#7A7A95] hover:text-[#EEEEF2] transition-colors text-sm"
        >
          ← Volver al inicio
        </Link>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 sm:px-8 py-14 sm:py-20">
        {/* Page header */}
        <header className="mb-12">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-[#E94560]">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight leading-tight mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-sm text-[#4A4A65]">
            Última actualización: abril de 2025
          </p>
        </header>

        {/* Content */}
        <div className="space-y-10 text-base leading-7 text-[#7A7A95]">

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              1. Identificación
            </h2>
            <p>
              Estos Términos y Condiciones regulan la relación entre MGB
              Software (en adelante, "MGB" o "el proveedor") y el cliente que
              contrata nuestros servicios de desarrollo de software, diseño web,
              automatizaciones y servicios relacionados.
            </p>
            <p>
              Contacto:{" "}
              <a
                href="mailto:mgbsoftwarefactory@gmail.com"
                className="text-[#E94560] hover:underline"
              >
                mgbsoftwarefactory@gmail.com
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              2. Alcance de los servicios
            </h2>
            <p>
              MGB ofrece servicios de desarrollo de software a medida, que
              incluyen pero no se limitan a: aplicaciones web, sitios web,
              aplicaciones móviles, bots de WhatsApp con IA, automatizaciones
              de procesos y landing pages.
            </p>
            <p>
              El alcance específico, las funcionalidades, el plazo de entrega y
              el precio de cada proyecto quedan definidos en una propuesta
              escrita y en el contrato firmado entre ambas partes, que
              prevalece sobre cualquier comunicación informal previa.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              3. Forma de pago
            </h2>
            <p>
              El pago de cualquier proyecto se estructura de la siguiente manera:
            </p>
            <ul className="space-y-3 pl-5 list-disc marker:text-[#E94560]">
              <li>
                <span className="text-[#EEEEF2] font-medium">50% al firmar el contrato:</span>{" "}
                este pago da inicio formal al proyecto y reserva la capacidad
                del equipo. No se inicia ningún trabajo sin la recepción de
                este primer pago.
              </li>
              <li>
                <span className="text-[#EEEEF2] font-medium">50% al entregar el producto final:</span>{" "}
                este pago se realiza al momento de la entrega del producto
                terminado y aprobado por el cliente.
              </li>
            </ul>
            <p>
              Los medios de pago aceptados (transferencia bancaria u otros) se
              especifican en el contrato de cada proyecto.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              4. Proceso de desarrollo y entregas
            </h2>
            <p>
              El desarrollo se realiza en sprints semanales con demos periódicas
              para el cliente. El cliente se compromete a brindar feedback en
              los plazos acordados. Demoras en la revisión y aprobación por
              parte del cliente pueden extender el plazo de entrega sin
              responsabilidad para MGB.
            </p>
            <p>
              Cualquier modificación del alcance original durante el desarrollo
              (nuevas funcionalidades, cambios de diseño, etc.) deberá acordarse
              por escrito y puede implicar un ajuste de precio y/o plazo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              5. Período de mantenimiento post-entrega
            </h2>
            <p>
              Todo proyecto incluye{" "}
              <span className="text-[#EEEEF2] font-medium">
                30 días de mantenimiento post-entrega
              </span>{" "}
              sin costo adicional, que comprenden:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-[#E94560]">
              <li>
                Corrección de bugs o errores de funcionamiento detectados en el
                producto entregado
              </li>
              <li>
                Ajustes menores que no impliquen nuevas funcionalidades o
                cambios de alcance
              </li>
            </ul>
            <p className="text-[#EEEEF2] bg-[rgba(233,69,96,0.06)] border border-[rgba(233,69,96,0.15)] rounded-xl px-4 py-3 leading-7">
              Este período de mantenimiento <strong>no constituye una garantía
              de devolución de dinero</strong>. Una vez iniciado el proyecto y
              desembolsado el primer pago, no se realizan reembolsos bajo ningún
              concepto, salvo incumplimiento grave por parte de MGB demostrable
              por escrito.
            </p>
            <p>
              Al finalizar los 30 días, el cliente puede contratar un plan de
              mantenimiento mensual para mantener el producto actualizado y con
              soporte continuo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              6. Propiedad intelectual
            </h2>
            <p>
              Una vez recibido el pago total del proyecto, el cliente adquiere
              la propiedad plena del código fuente, diseños y todos los activos
              digitales desarrollados específicamente para su proyecto.
            </p>
            <p>
              MGB se reserva el derecho de utilizar el proyecto como caso de
              estudio en su portfolio, salvo que el cliente solicite expresamente
              lo contrario por escrito.
            </p>
            <p>
              Las librerías, frameworks y herramientas de terceros utilizadas en
              el desarrollo están sujetas a sus propias licencias, que son
              responsabilidad del cliente conocer y respetar en el uso posterior
              del producto.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              7. Confidencialidad
            </h2>
            <p>
              MGB se compromete a mantener la confidencialidad de toda la
              información sensible del cliente (datos de negocio, estrategias,
              información de usuarios, etc.) y no la compartirá con terceros
              salvo requerimiento legal o acuerdo expreso del cliente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              8. Limitación de responsabilidad
            </h2>
            <p>
              MGB no se hace responsable por pérdidas económicas indirectas,
              lucro cesante ni daños consecuentes derivados del uso o
              imposibilidad de uso del software entregado. La responsabilidad
              máxima de MGB ante cualquier reclamo se limita al monto
              efectivamente pagado por el cliente en el proyecto en cuestión.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              9. Jurisdicción
            </h2>
            <p>
              Estos términos se rigen por la legislación de la República
              Argentina. Cualquier disputa será sometida a los tribunales
              ordinarios de la ciudad de Mar del Plata, provincia de Buenos
              Aires, con renuncia expresa a cualquier otro fuero.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              10. Modificaciones
            </h2>
            <p>
              MGB se reserva el derecho de actualizar estos términos. Los
              proyectos en curso se rigen por la versión vigente al momento de
              la firma del contrato. La versión actualizada se aplica a nuevos
              contratos a partir de su publicación.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold font-heading text-[#EEEEF2]">
              11. Contacto
            </h2>
            <p>
              Para consultas sobre estos términos o la contratación de
              servicios:{" "}
              <a
                href="mailto:mgbsoftwarefactory@gmail.com"
                className="text-[#E94560] hover:underline"
              >
                mgbsoftwarefactory@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-[rgba(255,255,255,0.05)]">
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
