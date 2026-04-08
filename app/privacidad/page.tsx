import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Política de Privacidad | MGB Software',
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-xs font-mono text-[#ff3b5c] tracking-widest uppercase mb-4">Legal</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Política de Privacidad
          </h1>
          <p className="text-[#8888a4] text-sm mb-12">Última actualización: abril 2025</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8">
            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">1. Información que recopilamos</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Recopilamos información que usted nos proporciona directamente a través de nuestro formulario de contacto:
                nombre completo, dirección de correo electrónico y el mensaje enviado. No recopilamos información de pago
                ni datos sensibles a través del sitio web.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">2. Uso de la información</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Utilizamos la información recopilada exclusivamente para:
              </p>
              <ul className="list-disc list-inside text-[#8888a4] space-y-1 mt-2 ml-2">
                <li>Responder a sus consultas y solicitudes de información</li>
                <li>Enviar propuestas comerciales relacionadas con sus consultas</li>
                <li>Mejorar nuestros servicios y la experiencia del usuario</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">3. Almacenamiento y seguridad</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Los mensajes enviados a través de nuestro formulario son procesados por Formspree (formspree.io), un
                servicio de terceros que cumple con las normativas de protección de datos. No almacenamos sus datos
                personales en servidores propios más allá del correo electrónico que recibimos en respuesta a su consulta.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">4. Cookies y tecnologías de seguimiento</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Este sitio web no utiliza cookies de seguimiento ni herramientas de análisis de comportamiento (como
                Google Analytics). No realizamos seguimiento de su actividad de navegación.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">5. Compartición de datos con terceros</h2>
              <p className="text-[#8888a4] leading-relaxed">
                No vendemos, alquilamos ni compartimos su información personal con terceros con fines comerciales.
                Únicamente compartimos datos con proveedores de servicios necesarios para operar nuestro sitio
                (como Formspree para el formulario de contacto y Vercel para el alojamiento web).
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">6. Sus derechos</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Usted tiene derecho a acceder, rectificar o eliminar los datos personales que nos haya proporcionado.
                Para ejercer cualquiera de estos derechos, puede contactarnos en{' '}
                <a href="mailto:mgbsoftwarefactory@gmail.com" className="text-[#ff3b5c] hover:underline">
                  mgbsoftwarefactory@gmail.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">7. Menores de edad</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Nuestros servicios están dirigidos a empresas y adultos. No recopilamos conscientemente información de
                menores de 18 años.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">8. Cambios a esta política</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos de cambios significativos
                publicando la nueva política en esta página con la fecha de actualización revisada.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-white mb-3">9. Contacto</h2>
              <p className="text-[#8888a4] leading-relaxed">
                Si tiene preguntas sobre esta política, puede contactarnos en{' '}
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
