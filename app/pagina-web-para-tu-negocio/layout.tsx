import type { Metadata } from 'next';
import { WEB_EXPRESS_CONFIG } from '@/lib/web-express-config';
import { PixelInit } from './PixelInit';

export const metadata: Metadata = {
  title: 'Página Web Profesional para tu Negocio | MGB Software Factory',
  description:
    'Conseguí una página web profesional para tu negocio en pocas horas. Diseño a medida, responsive, con WhatsApp, formulario de contacto, SEO básico y deploy incluido.',
  alternates: {
    canonical: 'https://mgbsoftware.com/pagina-web-para-tu-negocio',
  },
  openGraph: {
    title: 'Página Web Profesional para tu Negocio | MGB Software Factory',
    description:
      'Diseño personalizado, adaptado para celular, con botón de WhatsApp y deploy incluido. Entrega desde 48 hs hábiles.',
    url: 'https://mgbsoftware.com/pagina-web-para-tu-negocio',
    siteName: 'MGB Software Factory',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Página Web Profesional para tu Negocio | MGB Software Factory',
    description:
      'Diseño personalizado, adaptado para celular, con botón de WhatsApp y deploy incluido.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto demora la entrega?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La entrega estándar es desde 48 hs hábiles una vez que recibimos todo el material necesario (textos, fotos, logo, etc.).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tengo que enviar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Necesitamos textos sobre tu negocio y servicios, fotos o imágenes, tu logo (si tenés) y tus datos de contacto. Te guiamos en cada paso a través de un formulario de brief.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El dominio está incluido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La conexión de dominio está incluida, pero el dominio pago (.com, .com.ar, etc.) se contrata por separado. Te asesoramos sobre cómo obtenerlo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La página funciona en celular?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, todas nuestras páginas son 100% responsive y están optimizadas para funcionar perfectamente en celulares, tablets y computadoras.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo pedir cambios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, incluye una ronda de ajustes y 30 días de soporte técnico después de la entrega.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Incluye tienda online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, esta propuesta no incluye e-commerce. Si necesitás tienda online consultanos por una solución a medida.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo agregar más secciones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La propuesta incluye hasta 7 secciones. Si necesitás más, podemos cotizar las adicionales sin problema.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La página aparece en Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Incluimos SEO básico (meta tags, títulos optimizados, sitemap). El posicionamiento en Google lleva tiempo y depende de varios factores; el SEO básico es el primer paso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué sucede después de la entrega?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Te entregamos el código fuente completo y todos los accesos. Incluye 30 días de soporte técnico para bugs y ajustes menores. Después podés gestionar la página de manera autónoma o contratarnos para mantenimiento.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: WEB_EXPRESS_CONFIG.productName,
  provider: {
    '@type': 'Organization',
    name: WEB_EXPRESS_CONFIG.brandName,
    url: 'https://mgbsoftware.com',
    email: WEB_EXPRESS_CONFIG.contactEmail,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mar del Plata',
      addressCountry: 'AR',
    },
  },
  description:
    'Diseño y desarrollo de páginas web profesionales para negocios. Incluye diseño personalizado, adaptación para celular, botón de WhatsApp, formulario de contacto, SEO básico y deploy.',
  areaServed: 'AR',
};

export default function WebExpressLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {WEB_EXPRESS_CONFIG.metaPixelId && (
        <PixelInit pixelId={WEB_EXPRESS_CONFIG.metaPixelId} />
      )}
      {children}
    </>
  );
}
