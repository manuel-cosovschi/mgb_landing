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
  instagram: "https://www.instagram.com/mgbsoftware_factory",
  github: "https://github.com/mgbsoftwarefactory-web",
  calendly: "https://calendly.com/mgbsoftwarefactory/new-meeting",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "xkopknkd",
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
      "Los tres socios somos técnicos e ingenieros en sistemas y programamos activamente. No hay gerentes de cuenta ni intermediarios. Hablás directamente con quien construye tu producto.",
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
      "Las Cañas, un complejo de cabañas en Mar de Cobo, recibía cientos de consultas por WhatsApp que el equipo no daba abasto para responder, especialmente fuera del horario laboral.",
    solution:
      "Desarrollamos un bot conversacional inteligente que atiende automáticamente 24/7, entiende mensajes de texto y audio, y responde con información exacta del complejo sin intervención humana.",
    metrics: [
      { value: 70, suffix: "%", label: "menos consultas manuales", prefix: "-" },
      { value: 24, suffix: "/7", label: "disponibilidad", prefix: "" },
      { value: 2, suffix: "s", label: "tiempo de respuesta", prefix: "<" },
    ],
    tags: ["n8n", "OpenAI GPT-4o", "Whisper", "WhatsApp Business API"],
    imagePosition: "right" as const,
  },
  {
    id: "las-canas-web",
    name: "Sitio Web — Las Cañas Mar de Cobo",
    category: "Desarrollo Web",
    categoryColor: "#BD93F9",
    problem:
      "El complejo de cabañas Las Cañas no tenía presencia web propia y dependía de plataformas de terceros para captar reservas, perdiendo visibilidad y margen.",
    solution:
      "Diseñamos y desarrollamos lascaniasmardecobo.com, un sitio moderno con galería, información del complejo y contacto directo, optimizado para SEO y carga rápida.",
    metrics: [
      { value: 100, suffix: "%", label: "presencia web propia", prefix: "" },
      { value: 3, suffix: "s", label: "tiempo de carga", prefix: "<" },
      { value: 100, suffix: "%", label: "reservas directas", prefix: "" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    imagePosition: "left" as const,
  },
  {
    id: "fitnow",
    name: "FitNow — Marketplace de Actividades Físicas",
    category: "App Mobile",
    categoryColor: "#8BE9FD",
    problem:
      "No existe una plataforma unificada donde encontrar y reservar actividades físicas. Personal trainers, gyms y clubes están dispersos sin forma de compararlos ni gestionarlos en un solo lugar.",
    solution:
      "Estamos desarrollando FitNow, un marketplace de actividades físicas —el Pedidos Ya del fitness— donde podés encontrar entrenadores, gyms y clubes, reservar actividades y gestionar todo desde un único Dashboard.",
    metrics: [
      { value: 3, suffix: "", label: "tipos de proveedores", prefix: "" },
      { value: 1, suffix: "", label: "Dashboard unificado", prefix: "" },
      { value: 2, suffix: "", label: "plataformas objetivo", prefix: "" },
    ],
    tags: ["Swift", "Xcode", "iOS", "Node.js", "PostgreSQL"],
    imagePosition: "right" as const,
  },
  {
    id: "pitch",
    name: "Pitch Interactivo — Presentación Web",
    category: "Desarrollo Web",
    categoryColor: "#E94560",
    problem:
      "Necesitábamos presentar proyectos en una entrevista de forma memorable e impactante, más allá de un PDF aburrido.",
    solution:
      "Construimos una presentación completamente interactiva en código puro (HTML/CSS/JS), optimizada para iPad con navegación táctil y animaciones fluidas, deployada en GitHub Pages.",
    metrics: [
      { value: 100, suffix: "%", label: "código propio", prefix: "" },
      { value: 1, suffix: "s", label: "tiempo de carga", prefix: "<" },
      { value: 0, suffix: " deps", label: "dependencias externas", prefix: "" },
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    imagePosition: "left" as const,
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
      "30 días de mantenimiento incluido post-entrega: resolvemos bugs y ajustes sin costo adicional. Aclaramos que no es una garantía de devolución de dinero, sino de soporte técnico. Después, ofrecemos planes de mantenimiento mensual.",
    duration: "Ongoing",
  },
] as const;

// ── Team ──────────────────────────────────────
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  initials: string;
  photo: string; // path relativo a /public, ej: "/team/manuel.jpg" — vacío = muestra iniciales
  linkedin: string;
  github: string;
  accentColor: string;
}

export const TEAM: TeamMember[] = [
  {
    id: "manuel",
    name: "Manuel Cosovschi",
    role: "CEO & Fullstack Developer",
    bio: "Mi rol en MGB es conectar la necesidad del cliente con la solución técnica. Me especializo en desarrollo fullstack, automatizaciones e inteligencia artificial aplicada a productos reales. Creo que el mejor software se construye cuando quien lo programa entiende el negocio detrás.",
    skills: ["Node.js", "Python", "Next.js", "n8n", "OpenAI API", "Swift"],
    initials: "MC",
    photo: "/manuel.jpeg",
    linkedin: "https://www.linkedin.com/in/manuel-cosovschi-4b777923b",
    github: "https://github.com/manuel-cosovschi",
    accentColor: "#E94560",
  },
  {
    id: "gabriel",
    name: "Gabriel García Vázquez",
    role: "CTO & Frontend Lead",
    bio: "Mi rol en MGB es transformar ideas en interfaces que los usuarios realmente disfrutan usar. Me especializo en arquitectura frontend y desarrollo fullstack, construyendo soluciones eficientes y orientadas a resultados. Creo que el código más valioso es el que impacta directamente en el negocio del cliente.",
    skills: ["TypeScript", "Angular", "Node.js", "Java", "C++", "MySQL"],
    initials: "GG",
    photo: "/gabriel.jpeg",
    linkedin: "https://www.linkedin.com/in/gabriel-garcia-vazquez-2005b2260",
    github: "https://github.com/gabrielgarciavazquez57",
    accentColor: "#8BE9FD",
  },
  {
    id: "bruno",
    name: "Bruno Nicolás Romano",
    role: "COO & Backend Lead",
    bio: "Mi rol en MGB es darle estructura y escalabilidad a cada proyecto. Me enfoco en construir bases sólidas a nivel de código y asegurar la calidad de cada entrega. Para mí, un buen producto nace de entender el problema a fondo y diseñar una arquitectura que lo resuelva de forma definitiva.",
    skills: ["Java", "Python", "PostgreSQL", "Docker", "AWS", "GitHub Actions"],
    initials: "BR",
    photo: "/bruno.png",
    linkedin: "https://www.linkedin.com/in/brunoromano22",
    github: "https://github.com/romanobrunonicolas-netizen",
    accentColor: "#BD93F9",
  },
];

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
      "Incluimos 30 días de mantenimiento post-entrega: corregimos bugs y hacemos ajustes sin costo adicional. Importante: no es una garantía de devolución de dinero, sino de soporte técnico incluido ese mes. Después podés contratar un plan de mantenimiento mensual.",
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
    id: "payment",
    question: "¿Cómo es la forma de pago?",
    answer:
      "El pago se divide en dos partes: 50% al firmar el contrato para dar inicio al proyecto, y el 50% restante al momento de la entrega final. Sin costos ocultos ni sorpresas.",
  },
  {
    id: "contract",
    question: "¿Trabajan con un contrato?",
    answer:
      "Sí, siempre. Firmamos un contrato que define alcance, plazos, precio, forma de pago y condiciones. Todo claro desde el día uno.",
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
