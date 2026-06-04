import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

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
    <html lang="es" className={`antialiased ${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="noise-bg">{children}</body>
    </html>
  );
}
