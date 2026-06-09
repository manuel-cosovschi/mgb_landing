export const WEB_EXPRESS_CONFIG = {
  productName: "Página Web Profesional para tu Negocio",
  brandName: "MGB Software Factory",

  tiers: [
    {
      id: "landing",
      name: "Landing Page",
      description: "Una página profesional de una sola vista para mostrar tu negocio.",
      priceUSD: 100,
      includes: [
        "Diseño personalizado",
        "Hasta 7 secciones",
        "Responsive (celular, tablet, PC)",
        "Botón de WhatsApp",
        "Formulario de contacto",
        "SEO básico",
        "Deploy y publicación",
        "Una ronda de ajustes",
        "30 días de soporte técnico",
      ],
    },
    {
      id: "web-admin",
      name: "Web + Panel Admin",
      description: "Sitio con múltiples páginas y panel para editar contenido.",
      priceUSD: 150,
      extras: [
        { label: "Hasta 5 páginas", priceUSD: 0 },
        { label: "Hasta 10 páginas", priceUSD: 25 },
        { label: "Blog integrado", priceUSD: 25 },
      ],
      includes: [
        "Todo lo de Landing Page",
        "Múltiples páginas",
        "Dashboard de administrador",
        "Editar textos e imágenes sin código",
        "Redes sociales integradas",
        "Ubicación o mapa",
        "Conexión de dominio",
        "Código fuente entregable",
      ],
    },
    {
      id: "sistema",
      name: "Sistema a Medida",
      description: "Sistema completo con funcionalidades avanzadas para tu negocio.",
      priceUSD: 300,
      includes: [
        "Todo lo de Web + Panel Admin",
        "Funcionalidades a medida",
        "Base de datos",
        "Autenticación de usuarios",
        "Integraciones con APIs",
        "Arquitectura escalable",
        "Documentación técnica",
        "Soporte extendido",
      ],
    },
  ],

  payment: {
    mercadoPagoUrl: "https://link.mercadopago.com.ar/mgbsoftwarefactory",
    transferAlias: "mgb.pay",
    transferHolder: "MGB Software Factory",
  },

  whatsappMessage: "Hola, vi la propuesta de Web Express MGB y quiero consultar por una página web para mi negocio.",
  contactEmail: "mgbsoftwarefactory@gmail.com",
  standardDelivery: "Desde 48 hs hábiles",
  showUrgentOptions: true,

  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  formEndpoint: process.env.NEXT_PUBLIC_WEB_EXPRESS_FORM_ENDPOINT ?? "",
};

export type Tier = typeof WEB_EXPRESS_CONFIG.tiers[number];
export type TierExtra = { label: string; priceUSD: number };
