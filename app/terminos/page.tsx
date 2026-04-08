import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Términos y Condiciones | MGB Software',
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-xs font-mono text-[#ff3b5c] tracking-widest uppercase mb-4">Legal</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-[#8888a4] text-sm mb-12">Última actualización: abril 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">1. Aceptación de los términos</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Al contratar los servicios de MGB Software Factory, usted acepta estar vinculado por estos Términos y
                Condiciones. Si no está de acuerdo con alguno de estos términos, no utilice nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">2. Descripción de servicios</h2>
              <p className="text-[#8888a4] leading-relaxed">
                MGB Software Factory ofrece servicios de desarrollo de software a medida, incluyendo pero no limitado a:
                aplicaciones web, bots de WhatsApp con inteligencia artificial, automatizaciones, aplicaciones móviles,
                landing pages y consultoría técnica. El alcance específico de cada proyecto se define en una propuesta
                comercial firmada por ambas partes.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">3. Proceso de contratación y pagos</h2>
              <p className="text-[#8888a4] leading-relaxed mb-3">
                Para iniciar cualquier proyecto, se firma un contrato que define alcance, plazos y precio. La estructura
                de pago es la siguiente:
              </p>
              <ul className="list-disc list-inside text-[#8888a4] space-y-2 ml-2">
                <li><strong className="text-white">50% al inicio:</strong> Se abona al firmar el contrato. Este pago habilita el comienzo del desarrollo.</li>
                <li><strong className="text-white">50% al finalizar:</strong> Se abona contra entrega del producto terminado, junto con el código fuente y los accesos.</li>
              </ul>
              <p className="text-[#8888a4] leading-relaxed mt-3">
                No se realizan reembolsos del anticipo una vez iniciado el desarrollo. Cambios fuera del alcance acordado
                pueden generar costos adicionales, que serán presupuestados y acordados antes de ejecutarse.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">4. Plazos de entrega</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Los plazos de entrega se estiman en la propuesta comercial y dependen de la complejidad del proyecto y
                la disponibilidad del cliente para revisiones y feedback. Los plazos pueden extenderse si el cliente no
                provee materiales, accesos o feedback en tiempo y forma.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">5. Soporte post-entrega</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Incluimos 30 días de soporte técnico post-entrega. Durante este período, corregimos bugs y realizamos
                ajustes menores sin costo adicional. Este soporte cubre errores de funcionamiento, no implica garantía
                de devolución ni incluye nuevas funcionalidades o cambios de alcance.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">6. Propiedad del código y entregables</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Una vez completado el pago total, el cliente recibe la propiedad completa del código fuente, documentación
                y todos los activos del proyecto. MGB Software Factory retiene el derecho de mencionar el proyecto en su
                portfolio, salvo acuerdo de confidencialidad explícito.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">7. Confidencialidad</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Toda información sensible del negocio del cliente compartida durante el proyecto será tratada con
                estricta confidencialidad. Podemos firmar un acuerdo de confidencialidad (NDA) formal si el cliente lo
                requiere.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">8. Limitación de responsabilidad</h2>
              <p className="text-[#8888a4] leading-relaxed">
                MGB Software Factory no será responsable por pérdidas indirectas, incidentales o consecuentes derivadas
                del uso de los productos entregados. Nuestra responsabilidad máxima estará limitada al monto total
                abonado por el proyecto en cuestión.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">9. Ley aplicable</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa se resolverá en los
                tribunales competentes de la ciudad de Mar del Plata, Provincia de Buenos Aires.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">10. Contacto</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Para cualquier consulta sobre estos términos, contáctenos en{' '}
                <a href="mailto:mgbsoftwarefactory@gmail.com" className="text-[#ff3b5c] hover:underline">
                  mgbsoftwarefactory@gmail.com
                </a>.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/6">
            <Link href="/" className="text-[#8888a4] text-sm hover:text-white transition-colors">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
