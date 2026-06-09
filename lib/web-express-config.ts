export const WEB_EXPRESS_CONFIG = {
  productName: "Página Web Profesional para tu Negocio",
  brandName: "MGB Software Factory",
  currentPrice: "",           // dejar vacío — no mostrar si vacío
  previousPrice: "",          // dejar vacío
  currency: "ARS",
  paymentUrl: "",             // dejar vacío
  whatsappMessage: "Hola, vi la propuesta de Web Express MGB y quiero consultar por una página web para mi negocio.",
  contactEmail: "mgbsoftwarefactory@gmail.com",
  standardDelivery: "Desde 48 hs hábiles",
  showDirectPayment: false,
  showPreviousPrice: false,
  showUrgentOptions: true,
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  formEndpoint: process.env.NEXT_PUBLIC_WEB_EXPRESS_FORM_ENDPOINT ?? "",
};
