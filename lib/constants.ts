/* ─────────────────────────────────────────────
   MGB Software — Site Constants & Data
   Placeholders marked with [PLACEHOLDER]
───────────────────────────────────────────── */

// ── Contact info ──────────────────────────────
export const CONTACT = {
  email: "mgbsoftwarefactory@gmail.com",
  whatsapp: "+542235383082",
  whatsappMessage: "Hola, vi su página web y me interesa consultar sobre sus servicios",
  linkedin: "", // [PLACEHOLDER — completar cuando creen la página de empresa en LinkedIn]
  instagram: "", // [PLACEHOLDER — completar cuando creen la cuenta de Instagram]
  github: "", // [PLACEHOLDER — completar cuando creen el org de GitHub]
  calendly: "https://calendly.com/mgbsoftwarefactory/new-meeting",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORMSPREE_ID", // Configurar en Vercel como variable de entorno
  location: "Argentina 🇦🇷",
  hours: "Lunes a viernes, 9 a 19hs (Argentina)",
} as const;

// ── Services ──────────────────────────────────
export const SERVICES = [
  {
    id: "web-apps",
    icon: "Monitor",
    title: "Aplicaciones Web a Medida",
    description:
      "Sistemas de gestión, dashboards, plataformas y herramientas internas diseñadas exactamente para cómo trabaja tu negocio.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    accentColor: "#E94560",
  },
  {
    id: "whatsapp-bots",
    icon: "MessageCircle",
    title: "Bots de WhatsApp con IA",
    description:
      "Tu negocio atendiendo consultas 24/7 de forma inteligente. El bot entiende texto y audio, responde como un humano y nunca se cansa.",
    tags: ["OpenAI", "WhatsApp API", "n8n"],
    accentColor: "#50FA7B",
  },
  {
    id: "automations",
    icon: "Zap",
    title: "Automatizaciones de Procesos",
    description:
      "Eliminamos las tareas repetitivas que te roban tiempo. Conectamos tus herramientas para que trabajen solas.",
    tags: ["n8n", "APIs", "Webhooks", "Integrations"],
    accentColor: "#BD93F9",
  },
  {
    id: "mobile-apps",
    icon: "Smartphone",
    title: "Apps Mobile",
    description:
      "Aplicaciones nativas para iOS y Android que tus clientes van a querer usar todos los días.",
    tags: ["Swift", "React Native", "Xcode"],
    accentColor: "#8BE9FD",
  },
  {
    id: "landing-pages",
    icon: "Globe",
    title: "Landing Pages & Sitios Web",
    description:
      "Tu presencia digital profesional: rápida, moderna y optimizada para convertir visitantes en clientes.",
    tags: ["Next.js", "Vercel", "SEO", "Tailwind"],
    accentColor: "#FFB86C",
  },
  {
    id: "support",
    icon: "Shield",
    title: "Mantenimiento & Soporte",
    description:
      "No desaparecemos después de entregar. Monitoreamos, actualizamos y mejoramos tu producto continuamente.",
    tags: ["24/7", "SLA", "Updates", "Monitoring"],
    accentColor: "#E94560",
  },
] as const;

// ── Why MGB ───────────────────────────────────
export const WHY_MGB = [
  {
    id: "technical-team",
    icon: "Code2",
    title: "Equipo 100% técnico",
    description:
      "Los tres socios somos ingenieros en sistemas y programamos activamente. No hay gerentes de cuenta ni intermediarios. Hablás directamente con quien construye tu producto.",
    stat: "3 de 3 socios son developers",
    number: "01",
  },
  {
    id: "fast-delivery",
    icon: "Rocket",
    title: "Velocidad de entrega",
    description:
      "Equipo chico = cero burocracia. Tomamos decisiones rápido, iteramos rápido y entregamos rápido. Tu proyecto no va a quedar en una cola de espera.",
    stat: "Entregas semanales con demos",
    number: "02",
  },
  {
    id: "direct-comms",
    icon: "Users",
    title: "Comunicación directa",
    description:
      "Nada de tickets que nadie lee. Tenés un canal directo con nosotros. Sabés en qué estamos en todo momento y podés darnos feedback al instante.",
    stat: "Respuesta en menos de 24hs",
    number: "03",
  },
  {
    id: "fair-price",
    icon: "Wallet",
    title: "Precio justo",
    description:
      "No tenemos oficinas caras ni capas de management. Nuestra estructura lean nos permite ofrecer calidad de primera a un precio accesible para PyMEs.",
    stat: "Sin costos ocultos, presupuesto cerrado",
    number: "04",
  },
] as const;

// ── Portfolio ─────────────────────────────────
export const PORTFOLIO = [
  {
    id: "las-canas",
    name: "Bot de WhatsApp con IA — Las Cañas",
    category: "Bot con IA",
    categoryColor: "#50FA7B",
    problem:
      "Un negocio gastronómico saturado de consultas repetitivas por WhatsApp que no podía atender fuera del horario laboral.",
    solution:
      "Desarrollamos un bot conversacional inteligente que atiende automáticamente 24/7, entiende mensajes de texto y audio, y responde con la información exacta del negocio.",
    metrics: [
      { value: 70, suffix: "%", label: "menos consultas manuales", prefix: "-" },
      { value: 24, suffix: "/7", label: "disponibilidad", prefix: "" },
      { value: 2, suffix: "s", label: "tiempo de respuesta", prefix: "<" },
    ],
    tags: ["n8n", "OpenAI GPT-4o", "Whisper", "WhatsApp Business API"],
    imagePosition: "right" as const,
  },
  {
    id: "fitnow",
    name: "FitNow — App de Fitness",
    category: "App Mobile",
    categoryColor: "#8BE9FD",
    problem:
      "Los entrenadores personales gestionan a sus clientes con WhatsApp y planillas de Excel, perdiendo tiempo y profesionalismo.",
    solution:
      "Estamos desarrollando una app mobile nativa para iOS que permite a entrenadores crear rutinas, hacer seguimiento de progreso y comunicarse con sus alumnos desde una sola plataforma.",
    metrics: [
      { value: 100, suffix: "%", label: "nativo iOS", prefix: "" },
      { value: 0, suffix: "", label: "dependencias externas", prefix: "" },
      { value: 2, suffix: "", label: "plataformas objetivo", prefix: "" },
    ],
    tags: ["Swift", "Xcode", "iOS"],
    imagePosition: "left" as const,
  },
  {
    id: "pitch",
    name: "Pitch Interactivo — Presentación Web",
    category: "Desarrollo Web",
    categoryColor: "#BD93F9",
    problem:
      "Necesitábamos presentar proyectos en una entrevista de forma memorable e impactante, más allá de un PDF aburrido.",
    solution:
      "Construimos una presentación completamente interactiva en código puro (HTML/CSS/JS), optimizada para iPad con navegación táctil y animaciones fluidas, deployada en GitHub Pages.",
    metrics: [
      { value: 0, suffix: "", label: "dependencias externas", prefix: "" },
      { value: 100, suffix: "%", label: "código propio", prefix: "" },
      { value: 0, suffix: "s", label: "tiempo de carga", prefix: "~" },
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    imagePosition: "right" as const,
  },
] as const;

// ── Process ───────────────────────────────────
export const PROCESS_STEPS = [
  {
    id: "discovery",
    number: "01",
    icon: "Search",
    title: "Descubrimiento",
    description:
      "Nos sentamos con vos (virtual o presencial) para entender tu negocio, tu problema y tus objetivos. Hacemos las preguntas correctas para no construir algo que no necesitás.",
    duration: "1 reunión de 30-60 min",
  },
  {
    id: "proposal",
    number: "02",
    icon: "FileText",
    title: "Propuesta",
    description:
      "Te presentamos una propuesta detallada con alcance, timeline, tecnologías y precio cerrado. Sin letras chicas, sin costos ocultos.",
    duration: "3-5 días hábiles",
  },
  {
    id: "development",
    number: "03",
    icon: "Code2",
    title: "Desarrollo",
    description:
      "Construimos tu producto en sprints semanales. Cada semana te mostramos el avance real, recogemos tu feedback y ajustamos. Ves tu proyecto crecer en tiempo real.",
    duration: "Según el proyecto",
  },
  {
    id: "delivery",
    number: "04",
    icon: "Rocket",
    title: "Entrega",
    description:
      "Deployamos a producción, te capacitamos y te entregamos todo: código fuente, documentación, accesos. El producto es tuyo.",
    duration: "Deploy + capacitación",
  },
  {
    id: "support",
    number: "05",
    icon: "LifeBuoy",
    title: "Soporte",
    description:
      "30 días de garantía incluidos. Después, si querés, ofrecemos planes de mantenimiento mensual para que tu producto siempre esté al día.",
    duration: "Ongoing",
  },
] as const;

// ── Team ──────────────────────────────────────
export const TEAM = [
  {
    id: "manuel",
    name: "Manuel Cosovschi",
    role: "CEO & Fullstack Developer",
    bio: "Combina desarrollo técnico con visión de negocio. Especialista en automatizaciones, bots con IA y backend. También es personal trainer, así que entiende lo que es resolver problemas reales para emprendedores.",
    initials: "MC",
    linkedin: "", // [PLACEHOLDER — agregar URL de LinkedIn personal]
    github: "https://github.com/manuel-cosovschi",
    accentColor: "#E94560",
  },
  {
    id: "gabriel",
    name: "Gabriel García Vázquez",
    role: "CTO & Frontend Lead",
    bio: "[PLACEHOLDER — Bio de Gabriel pendiente. Pedile: especialidad técnica, algo personal que lo humanice, su enfoque del desarrollo.]",
    initials: "GG",
    linkedin: "", // [PLACEHOLDER — agregar URL de LinkedIn de Gabriel]
    github: "", // [PLACEHOLDER — agregar GitHub de Gabriel]
    accentColor: "#8BE9FD",
  },
  {
    id: "bruno",
    name: "Bruno Nicolás Romano",
    role: "COO & Backend Lead",
    bio: "[PLACEHOLDER — Bio de Bruno pendiente. Pedile: especialidad técnica, algo personal que lo humanice, su enfoque del desarrollo.]",
    initials: "BR",
    linkedin: "", // [PLACEHOLDER — agregar URL de LinkedIn de Bruno]
    github: "", // [PLACEHOLDER — agregar GitHub de Bruno]
    accentColor: "#BD93F9",
  },
] as const;

// ── Tech Stack ────────────────────────────────
export const TECH_STACK_ROW1 = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Python", icon: "python" },
  { name: "Swift", icon: "swift" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
] as const;

export const TECH_STACK_ROW2 = [
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Prisma", icon: "prisma" },
  { name: "Supabase", icon: "supabase" },
  { name: "Vercel", icon: "vercel" },
  { name: "n8n", icon: "n8n" },
  { name: "OpenAI", icon: "openai" },
  { name: "GitHub", icon: "github" },
  { name: "Figma", icon: "figma" },
  { name: "Docker", icon: "docker" },
] as const;

// ── Testimonials ──────────────────────────────
// [PLACEHOLDER — reemplazar con testimonios reales]
export const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "[PLACEHOLDER] El bot que desarrollaron para nuestro negocio fue un game changer. Ahora atendemos el doble de consultas sin esfuerzo adicional.",
    author: "Nombre Cliente 1",
    role: "Dueño",
    company: "Nombre Empresa",
    rating: 5,
    initials: "NC",
  },
  {
    id: "t2",
    quote:
      "[PLACEHOLDER] Profesionalismo de otro nivel. Entregaron en tiempo y forma, con comunicación constante. Los volvería a contratar sin dudarlo.",
    author: "Nombre Cliente 2",
    role: "CEO",
    company: "Nombre Empresa",
    rating: 5,
    initials: "NC",
  },
  {
    id: "t3",
    quote:
      "[PLACEHOLDER] No esperaba encontrar un equipo tan técnico y al mismo tiempo tan fácil de hablar. El resultado superó mis expectativas.",
    author: "Nombre Cliente 3",
    role: "Fundador",
    company: "Nombre Empresa",
    rating: 5,
    initials: "NC",
  },
] as const;

// ── FAQ ───────────────────────────────────────
export const FAQ = [
  {
    id: "cost",
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "Depende del alcance y la complejidad. Una landing page puede arrancar desde USD $300 y un sistema completo puede ir de $3.000 a $15.000+. Siempre te damos un presupuesto cerrado antes de empezar, sin sorpresas.",
  },
  {
    id: "time",
    question: "¿Cuánto tiempo tarda un proyecto?",
    answer:
      "Una landing page puede estar lista en 1-2 semanas. Un bot de WhatsApp en 2-4 semanas. Una app web completa entre 2 y 5 meses. Te damos un timeline concreto en la propuesta.",
  },
  {
    id: "remote",
    question: "¿Trabajan con clientes fuera de Argentina?",
    answer:
      "Sí, trabajamos de forma remota con clientes de cualquier parte del mundo. Nos adaptamos a tu zona horaria para las reuniones.",
  },
  {
    id: "after-delivery",
    question: "¿Qué pasa después de la entrega?",
    answer:
      "Incluimos 30 días de garantía donde corregimos cualquier bug sin costo. Después, ofrecemos planes de mantenimiento mensual para que tu producto esté siempre al día.",
  },
  {
    id: "ownership",
    question: "¿El código es mío?",
    answer:
      "Sí. Al completar el pago, te entregamos el código fuente completo, documentación y todos los accesos. El producto es 100% tuyo.",
  },
  {
    id: "start",
    question: "¿Qué necesito para arrancar?",
    answer:
      "Solo una reunión de 30 minutos para entender tu necesidad. Nosotros nos encargamos del resto: te presentamos una propuesta y si te convence, arrancamos.",
  },
  {
    id: "progress",
    question: "¿Puedo ver avances durante el desarrollo?",
    answer:
      "Sí, es parte de nuestro proceso. Cada semana te mostramos una demo con lo que avanzamos. Podés dar feedback en tiempo real y ajustamos sobre la marcha.",
  },
  {
    id: "contract",
    question: "¿Trabajan con un contrato?",
    answer:
      "Sí, siempre. Firmamos un contrato que define alcance, plazos, precio y condiciones. Todo claro desde el día uno.",
  },
] as const;

// ── Nav links ─────────────────────────────────
export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Equipo", href: "#equipo" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
] as const;
