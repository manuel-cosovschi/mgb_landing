import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mgbsoftware.com"),
  title: "MGB Software — Desarrollo de Software a Medida para PyMEs",
  description: "Somos un equipo de ingenieros en sistemas que desarrollamos aplicaciones web, bots de WhatsApp con IA y automatizaciones a medida para PyMEs y emprendedores.",
  keywords: ["desarrollo de software", "software a medida", "bots WhatsApp", "automatizaciones", "apps web", "PyMEs", "Argentina", "MGB Software"],
  openGraph: {
    title: "MGB Software — Software a Medida para tu Negocio",
    description: "Aplicaciones web, bots de WhatsApp con IA y automatizaciones. Equipo técnico, trato directo, precio justo.",
    url: "https://mgbsoftware.com",
    siteName: "MGB Software",
    locale: "es_AR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "MGB Software", description: "Software a medida para PyMEs argentinas." },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="noise-bg">{children}</body>
    </html>
  );
}
