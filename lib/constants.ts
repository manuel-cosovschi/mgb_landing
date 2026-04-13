export const CONTACT = {
  email: "mgbsoftwarefactory@gmail.com",
  whatsapp: "+542235383082",
  whatsappMessage: "Hola MGB! Estoy interesado en sus servicios de desarrollo. ¿Podemos hablar?",
  calendly: "https://calendly.com/mgbsoftwarefactory/30min",
  formspreeId: "xkopknkd",
  linkedin: "",
  github: "https://github.com/mgbsoftwarefactory-web",
  instagram: "https://www.instagram.com/mgb.software",
  location: "Mar del Plata, Argentina 🇦🇷",
  hours: "Lun – Vie, 9:00 – 19:00 (GMT-3). Respondemos fuera de horario en < 24hs.",
};

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Equipo", href: "#equipo" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const SERVICES = [
  { id: "web", icon: "Monitor", title: "Aplicaciones Web", description: "Desde dashboards internos hasta plataformas SaaS completas. Diseño, desarrollo y deploy llave en mano.", tags: ["Next.js", "React", "Node.js", "PostgreSQL"], color: "#ff3b5c" },
  { id: "whatsapp", icon: "MessageCircle", title: "Bots de WhatsApp con IA", description: "Atendé clientes 24/7 con bots que entienden texto y audio. Integración directa con tu negocio.", tags: ["OpenAI", "n8n", "Whisper", "WhatsApp API"], color: "#34d399" },
  { id: "automation", icon: "Zap", title: "Automatizaciones", description: "Eliminá tareas repetitivas conectando tus herramientas. Ahorrá horas de trabajo manual por semana.", tags: ["n8n", "APIs", "Webhooks", "Integración"], color: "#a78bfa" },
  { id: "mobile", icon: "Smartphone", title: "Apps Mobile", description: "Aplicaciones nativas para iOS y Android. Experiencias fluidas que tus usuarios van a amar.", tags: ["Swift", "React Native", "iOS", "Android"], color: "#00d4ff" },
  { id: "landing", icon: "Globe", title: "Landing Pages", description: "Sitios ultra rápidos y optimizados para SEO que convierten visitantes en clientes.", tags: ["Next.js", "Tailwind", "Vercel", "SEO"], color: "#f59e0b" },
  { id: "consulting", icon: "Shield", title: "Consultoría Técnica", description: "Te ayudamos a elegir el stack correcto, planificar la arquitectura y tomar decisiones técnicas.", tags: ["Arquitectura", "Stack", "Seguridad", "Escalabilidad"], color: "#ec4899" },
] as const;

export const WHY_MGB = [
  { id: "technical", icon: "Code2", title: "Equipo 100% técnico", description: "Los tres somos técnicos e ingenieros en sistemas que programamos activamente. Hablás directo con quien construye tu producto.", stat: "Sin intermediarios" },
  { id: "fast", icon: "Rocket", title: "Velocidad de entrega", description: "Equipo chico = cero burocracia. Tomamos decisiones rápido y entregamos rápido. Tu proyecto no queda en una cola.", stat: "Demos semanales" },
  { id: "direct", icon: "Users", title: "Comunicación directa", description: "Canal directo con nosotros. Sabés en qué estamos en todo momento y podés darnos feedback al instante.", stat: "Respuesta < 24hs" },
  { id: "price", icon: "Wallet", title: "Precio justo", description: "Sin oficinas caras ni capas de management. Calidad de primera a precio accesible para PyMEs.", stat: "Sin costos ocultos" },
] as const;

export const PORTFOLIO = [
  {
    id: "las-canas-bot",
    name: "Bot de WhatsApp con IA",
    client: "Las Cañas Mar de Cobo",
    category: "Bot con IA",
    color: "#34d399",
    problem: "El complejo de cabañas recibía cientos de consultas por WhatsApp que el equipo no daba abasto para responder fuera del horario laboral.",
    solution: "Bot conversacional 24/7 que entiende texto y audio, responde con información exacta del complejo y gestiona consultas sin intervención humana.",
    metrics: [
      { value: 70, suffix: "%", prefix: "-", label: "consultas manuales" },
      { value: 24, suffix: "/7", prefix: "", label: "disponibilidad" },
      { value: 2, suffix: "s", prefix: "<", label: "tiempo de respuesta" },
    ],
    tags: ["n8n", "OpenAI GPT-4o", "Whisper", "WhatsApp API"],
  },
  {
    id: "las-canas-web",
    name: "Sitio Web Oficial",
    client: "Las Cañas Mar de Cobo",
    category: "Desarrollo Web",
    color: "#a78bfa",
    problem: "El complejo no tenía presencia web propia y dependía de plataformas de terceros para captar reservas, perdiendo visibilidad y margen.",
    solution: "Diseñamos lascaniasmardecobo.com, sitio moderno con galería, info del complejo y contacto directo. SEO optimizado y carga ultrarrápida.",
    metrics: [
      { value: 100, suffix: "%", prefix: "", label: "presencia web propia" },
      { value: 3, suffix: "s", prefix: "<", label: "tiempo de carga" },
      { value: 100, suffix: "%", prefix: "", label: "reservas directas" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    id: "fitnow",
    name: "FitNow",
    client: "Proyecto propio",
    category: "App Mobile",
    color: "#00d4ff",
    problem: "No existe plataforma unificada para encontrar y reservar actividades físicas. Trainers, gyms y clubes están dispersos, sin forma de gestionarlos.",
    solution: "Marketplace de actividades físicas —el Pedidos Ya del fitness— donde encontrás entrenadores, gyms y clubes, reservás y gestionás todo desde un Dashboard.",
    metrics: [
      { value: 3, suffix: "", prefix: "", label: "tipos de proveedores" },
      { value: 1, suffix: "", prefix: "", label: "dashboard unificado" },
      { value: 2, suffix: "", prefix: "", label: "plataformas" },
    ],
    tags: ["Swift", "iOS", "Node.js", "PostgreSQL"],
  },
  {
    id: "cosov-pedidos",
    name: "COSOV. Pedidos",
    client: "Cosov — Pastelería artesanal",
    category: "Aplicación Web",
    color: "#f59e0b",
    problem: "La gestión de pedidos con 48h de anticipación se hacía por WhatsApp y Excel, sin control de stock ni visibilidad del negocio.",
    solution: "Sistema web completo con catálogo para el cliente, panel de admin, tracking de pedidos por código y módulo de stock con trazabilidad total.",
    metrics: [
      { value: 48, suffix: "h", prefix: "", label: "anticipación mínima de pedidos" },
      { value: 100, suffix: "%", prefix: "", label: "pedidos gestionados digitalmente" },
      { value: 0, suffix: "", prefix: "", label: "Excel en el proceso" },
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Resend", "Vercel"],
  },
  {
    id: "pitch",
    name: "Pitch Interactivo",
    client: "Proyecto interno",
    category: "Desarrollo Web",
    color: "#ff3b5c",
    problem: "Necesitábamos presentar proyectos de forma memorable e impactante, más allá de un PDF.",
    solution: "Presentación web interactiva en código puro, optimizada para iPad con navegación táctil y animaciones fluidas.",
    metrics: [
      { value: 100, suffix: "%", prefix: "", label: "código propio" },
      { value: 1, suffix: "s", prefix: "<", label: "tiempo de carga" },
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
  },
] as const;

export const PROCESS = [
  { id: "discover", step: "01", title: "Descubrimiento", description: "Nos sentamos con vos para entender tu negocio, tu problema y tus objetivos reales.", duration: "1 reunión de 30–60 min", icon: "Search" },
  { id: "proposal", step: "02", title: "Propuesta", description: "Presentamos una propuesta con alcance, timeline, tecnologías y precio cerrado. Sin letras chicas.", duration: "3–5 días hábiles", icon: "FileText" },
  { id: "develop", step: "03", title: "Desarrollo", description: "Construimos en sprints semanales. Cada semana una demo real. Tu feedback entra de inmediato.", duration: "Según proyecto", icon: "Code2" },
  { id: "deliver", step: "04", title: "Entrega", description: "Deploy a producción, capacitación y entrega de código fuente, documentación y accesos. El producto es tuyo.", duration: "Deploy + capacitación", icon: "Rocket" },
  { id: "support", step: "05", title: "Soporte", description: "30 días de mantenimiento incluido: bugs y ajustes sin costo adicional. Es soporte técnico, no garantía de devolución.", duration: "30 días incluidos", icon: "LifeBuoy" },
] as const;

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  initials: string;
  photo: string;
  linkedin: string;
  github: string;
  color: string;
}

export const TEAM: TeamMember[] = [
  { id: "manuel", name: "Manuel Cosovschi", role: "CEO & Fullstack Developer", bio: "Conecto la necesidad del cliente con la solución técnica. Especializado en desarrollo fullstack, automatizaciones e IA aplicada a productos reales.", skills: ["Node.js", "Python", "Next.js", "n8n", "OpenAI", "Swift"], initials: "MC", photo: "/manuel.jpeg", linkedin: "https://www.linkedin.com/in/manuel-cosovschi-4b777923b", github: "https://github.com/manuel-cosovschi", color: "#ff3b5c" },
  { id: "gabriel", name: "Gabriel García Vázquez", role: "CTO & Frontend Lead", bio: "Transformo ideas en interfaces que los usuarios disfrutan. Especializado en arquitectura frontend y desarrollo fullstack orientado a resultados.", skills: ["TypeScript", "Angular", "Node.js", "Java", "C++", "MySQL"], initials: "GG", photo: "/gabriel.jpeg", linkedin: "https://www.linkedin.com/in/gabriel-garcia-vazquez-2005b2260", github: "https://github.com/gabrielgarciavazquez57", color: "#00d4ff" },
  { id: "bruno", name: "Bruno Nicolás Romano", role: "COO & Backend Lead", bio: "Le doy estructura y escalabilidad a cada proyecto. Me enfoco en bases sólidas de código y en asegurar la calidad de cada entrega.", skills: ["Java", "Python", "PostgreSQL", "Docker", "AWS", "CI/CD"], initials: "BR", photo: "/bruno.png", linkedin: "https://www.linkedin.com/in/brunoromano22", github: "https://github.com/romanobrunonicolas-netizen", color: "#a78bfa" },
];

export const TECH_ROW_1 = ["Next.js", "React", "TypeScript", "Node.js", "Python", "Swift", "PostgreSQL", "MongoDB", "GPT-4o", "Claude API", "Gemini"];
export const TECH_ROW_2 = ["Tailwind CSS", "Supabase", "Vercel", "n8n", "Whisper", "LangChain", "Cursor", "v0", "Docker", "GitHub", "Figma", "Resend"];

export const FAQ = [
  { id: "cost", q: "¿Cuánto cuesta un proyecto?", a: "Depende del alcance. Una landing puede arrancar desde USD $300 y un sistema completo de $3.000 a $15.000+. Siempre damos presupuesto cerrado antes de empezar." },
  { id: "payment", q: "¿Cómo es la forma de pago?", a: "50% al firmar el contrato para iniciar el proyecto, y el 50% restante al entregar el producto final. Sin costos ocultos ni sorpresas." },
  { id: "time", q: "¿Cuánto tiempo tarda?", a: "Una landing en 1–2 semanas. Un bot de WhatsApp en 2–4 semanas. Una app web completa entre 2 y 5 meses. Timeline concreto en la propuesta." },
  { id: "remote", q: "¿Trabajan con clientes fuera de Argentina?", a: "Sí, trabajamos remoto con clientes de cualquier parte. Nos adaptamos a tu zona horaria para las reuniones." },
  { id: "after", q: "¿Qué pasa después de la entrega?", a: "30 días de mantenimiento incluido: corregimos bugs y hacemos ajustes sin costo. No es garantía de devolución, es soporte técnico incluido." },
  { id: "ownership", q: "¿El código es mío?", a: "Sí. Al completar el pago te entregamos código fuente completo, documentación y todos los accesos. El producto es 100% tuyo." },
  { id: "progress", q: "¿Puedo ver avances durante el desarrollo?", a: "Sí, cada semana mostramos una demo con el avance real. Das feedback y ajustamos en tiempo real." },
  { id: "contract", q: "¿Trabajan con contrato?", a: "Sí, siempre. Firmamos un contrato que define alcance, plazos, precio y condiciones. Todo claro desde el día uno." },
] as const;
