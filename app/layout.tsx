import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mgbsoftware.com"),
  title: "MGB Software — Desarrollo de Software a Medida para PyMEs",
  description:
    "Somos tres ingenieros que desarrollamos aplicaciones web, bots de WhatsApp con IA y automatizaciones a medida. Soluciones digitales para PyMEs y emprendedores.",
  keywords: [
    "desarrollo de software",
    "software a medida",
    "bots de WhatsApp",
    "automatizaciones",
    "apps web",
    "PyMEs",
    "Argentina",
    "MGB Software",
  ],
  openGraph: {
    title: "MGB Software — Software a Medida para tu Negocio",
    description:
      "Aplicaciones web, bots de WhatsApp con IA y automatizaciones. Equipo de ingenieros con trato directo y precio justo.",
    url: "https://mgbsoftware.com",
    siteName: "MGB Software",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MGB Software — Software a Medida",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MGB Software — Software a Medida",
    description: "Tres ingenieros construyendo soluciones digitales para PyMEs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: "/favicon.ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MGB Software",
  url: "https://mgbsoftware.com",
  logo: "https://mgbsoftware.com/og-image.png",
  description:
    "Software factory argentina especializada en aplicaciones web, bots de WhatsApp con IA y automatizaciones para PyMEs.",
  address: { "@type": "PostalAddress", addressCountry: "AR" },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contacto@mgbsoftware.com",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
  },
  sameAs: [
    "https://linkedin.com/company/mgb-software",
    "https://github.com/mgb-software",
    "https://instagram.com/mgb.software",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Fonts loaded via CDN — works in production; next/font/google blocked in sandboxed CI */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050510] text-[#EEEEF2]">
        {children}
      </body>
    </html>
  );
}
