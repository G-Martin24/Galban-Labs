/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tagline: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  type: string;
  shortDescription: string;
  features: string[];
  image: string;
  liveUrl: string;
  label: string;
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  timeframe: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export const BRAND_CONFIG = {
  name: "Galban Labs",
  founder: "Martín Galban",
  founderPhoto: "/assets/martin_galban.png", // Ruta editable para la foto profesional de Martín Galban
  whatsappNumber: "+54 9 3765 093201",
  whatsappUrl: "https://wa.me/5493765093201",
  whatsappDefaultMsg: "https://wa.me/5493765093201?text=Hola%20Mart%C3%ADn,%20vi%20la%20web%20de%20Galban%20Labs%20y%20quiero%20consultar%20por%20una%20p%C3%A1gina%20web.",
  email: "galbanmartin01@gmail.com",
  instagram: "@galban_labs",
  instagramUrl: "https://www.instagram.com/galban_labs/",
  github: "G-Martin24",
  githubUrl: "https://github.com/G-Martin24",
  location: "Posadas, Misiones, Argentina",
  tagline: "Soluciones digitales para negocios y emprendimientos.",
  logoTransparent: "/assets/galban_labs_logo_transparent.png",
  logoDarkMode: "/assets/galban_labs_logo_dark_mode.png",
  logoOriginal: "/assets/aistudio/Logotipo__minimalista_Galban_Labs_vectorial_bd8f88a4.png",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "landing-pages",
    title: "Landing pages",
    tagline: "Enfocadas en captar clientes",
    description: "Páginas de una sola sección optimizadas para presentar tu producto o servicio y generar contactos directos por WhatsApp.",
    icon: "Rocket",
    features: [
      "Estructura clara de alto impacto",
      "Llamados a la acción estratégicos",
      "Diseño adaptado a celulares",
      "Carga ultra rápida"
    ]
  },
  {
    id: "paginas-web-negocios",
    title: "Páginas web para negocios",
    tagline: "Tu identidad digital profesional",
    description: "Sitios web completos para comercios, profesionales y empresas que quieren transmitir confianza y ser fáciles de encontrar.",
    icon: "Globe",
    features: [
      "Secciones institucionales y servicios",
      "Ubicación y mapa interactivo",
      "Formularios y botón de WhatsApp",
      "Identidad visual personalizada"
    ]
  },
  {
    id: "catalogos-online",
    title: "Catálogos online",
    tagline: "Tus productos organizados",
    description: "Catálogo de productos organizado por categorías para mostrar fotos, precios y descripciones de tus productos listos para pedir por chat.",
    icon: "ShoppingBag",
    features: [
      "Filtros por categorías",
      "Botón 'Pedir por WhatsApp' por producto",
      "Fácil de consultar desde el celular",
      "Sin comisiones por venta"
    ]
  },
  {
    id: "integracion-whatsapp",
    title: "Integración con WhatsApp",
    tagline: "Contacto directo sin intermediarios",
    description: "Conectores y botones flotantes para que tus potenciales clientes inicien una conversación en un solo toque.",
    icon: "MessageSquare",
    features: [
      "Mensajes iniciales preconfigurados",
      "Acceso directo desde cualquier sección",
      "Menos fricción para consultar",
      "Atención rápida y personalizada"
    ]
  },
  {
    id: "integracion-redes-sociales",
    title: "Integración con redes sociales",
    tagline: "Potenciá tus canales digitales",
    description: "Vinculación directa con Instagram, Facebook, TikTok y perfiles de Google para unificar tu presencia digital.",
    icon: "Share2",
    features: [
      "Enlaces directos a tus redes",
      "Feed de Instagram o enlaces destacados",
      "Compatibilidad con link in bio",
      "Tarjetas visuales para compartir"
    ]
  },
  {
    id: "aplicaciones-web-moviles",
    title: "Aplicaciones web y móviles",
    tagline: "Soluciones a medida de tu idea",
    description: "Desarrollo de herramientas interactivas, calculadoras, paneles simples y sistemas web adaptados a tus requerimientos.",
    icon: "Smartphone",
    features: [
      "Desarrollo modular en React / Next",
      "Interfaces fluidas y modernas",
      "Adaptadas a pantallas táctiles",
      "Escalables según crezca tu proyecto"
    ]
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Diseño personalizado",
    description: "Cada web se diseña respetando los colores, la personalidad y el estilo único de tu marca o negocio.",
    icon: "Palette"
  },
  {
    title: "Adaptada a celulares",
    description: "La mayoría de tus clientes te van a visitar desde el móvil. La experiencia en smartphones es fluida e intuitiva.",
    icon: "Smartphone"
  },
  {
    title: "Navegación clara",
    description: "Estructuras simples donde el visitante encuentra de inmediato qué ofrecés, cuánto cuesta y cómo contactarte.",
    icon: "Compass"
  },
  {
    title: "Botón directo a WhatsApp",
    description: "Canal directo con mensajes pre-cargados para que nunca pierdas una consulta o potencial cliente.",
    icon: "MessageCircle"
  },
  {
    title: "Carga rápida",
    description: "Código liviano y optimizado para que la página abra al instante, sin esperas ni elementos innecesarios.",
    icon: "Zap"
  },
  {
    title: "Presencia profesional en internet",
    description: "Una dirección propia y un espacio digital sólido que transmite seguridad y seriedad a quienes te buscan.",
    icon: "ShieldCheck"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "cuenta-clara",
    name: "Cuenta Clara",
    type: "Aplicación web de gestión financiera personal",
    shortDescription: "Aplicación web para organizar cuentas y servicios, controlar vencimientos, registrar ingresos y presupuestos, consultar el historial de pagos, analizar gastos y establecer objetivos de ahorro.",
    features: [
      "Gestión de cuentas y servicios",
      "Control de vencimientos",
      "Historial de pagos",
      "Análisis de gastos",
      "Presupuestos",
      "Objetivos de ahorro",
      "Alertas de vencimientos",
      "Exportación de información a PDF"
    ],
    image: "/assets/projects/cuenta_clara.png",
    liveUrl: "https://cuenta-clara-iota.vercel.app/",
    label: "Proyecto propio"
  },
  {
    id: "vitality-ia",
    name: "Vitality IA",
    type: "Aplicación web de bienestar y seguimiento físico",
    shortDescription: "Aplicación web para realizar un seguimiento de objetivos de bienestar, alimentación, entrenamiento y progreso personal mediante un sistema visual de niveles, puntos y métricas.",
    features: [
      "Seguimiento de calorías",
      "Plan nutricional",
      "Registro de entrenamientos",
      "Progreso personal",
      "Sistema de niveles y experiencia",
      "Rachas de actividad",
      "Puntos y objetivos",
      "Asistente o coach"
    ],
    image: "/assets/projects/vitality_ia.png",
    liveUrl: "https://vitality-ai-two.vercel.app/",
    label: "Proyecto propio"
  },
  {
    id: "vita-id",
    name: "VITA ID",
    type: "Landing page y concepto de identificación médica digital",
    shortDescription: "VITA ID conecta un sticker físico con un perfil médico digital para que familiares, primeros respondedores y servicios de emergencia puedan encontrar información esencial en segundos.",
    features: [
      "Escaneo mediante código QR",
      "Perfil médico digital de emergencia",
      "Información de contacto de emergencia",
      "Información médica protegida por PIN",
      "Botones de llamada de emergencia",
      "Concepto de sticker físico para cascos y vehículos",
      "Landing page interactiva y adaptada a celulares"
    ],
    image: "/assets/projects/vita_id.png",
    liveUrl: "https://vita-id.vercel.app/",
    label: "Proyecto propio"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Conversamos sobre tu idea",
    description: "Hablamos por WhatsApp sobre tu negocio, qué querés comunicar y qué tipo de página web necesitás para tus objetivos.",
    timeframe: "Paso inicial"
  },
  {
    step: "02",
    title: "Definimos la estructura y el diseño",
    description: "Organizamos las secciones, los textos y el estilo visual según tus colores y marca, asegurando una experiencia atractiva.",
    timeframe: "Planificación"
  },
  {
    step: "03",
    title: "Desarrollo y revisión",
    description: "Programo la web con tecnologías modernas, cuidando la rapidez y la visualización en teléfonos. Revisamos avances juntos.",
    timeframe: "Construcción"
  },
  {
    step: "04",
    title: "Publicación y entrega",
    description: "Subimos tu página a internet con dominio propio o gratuito, la testeamos en vivo y te explico cómo aprovecharla al máximo.",
    timeframe: "Lanzamiento"
  }
];

export const ABOUT_INFO = {
  greeting: "Hola, soy Martín Galban",
  paragraph1: "Soy estudiante de Ciencia de Datos e Inteligencia Artificial y desarrollador web en formación. Desde Galban Labs creo páginas web modernas, aplicaciones y soluciones digitales personalizadas para negocios, profesionales y emprendimientos.",
  paragraph2: "Me gusta transformar ideas en herramientas claras, funcionales y fáciles de usar. Trabajo de manera directa con cada cliente para entender sus necesidades, definir una propuesta y acompañar el proceso hasta la entrega.",
  paragraph3: "Actualmente estoy construyendo mi portfolio y desarrollando proyectos propios como Cuenta Clara, Vitality IA y VITA ID.",
  photoPath: "/assets/martin_galban.png",
  highlights: [
    {
      title: "Trato directo y personal",
      desc: "Hablá directamente con la persona que programa tu sitio web, sin intermediarios ni demoras burocráticas."
    },
    {
      title: "Tecnologías actuales",
      desc: "Desarrollo con React, TypeScript y Tailwind CSS para lograr sitios modernos, veloces y mantenibles."
    },
    {
      title: "Compromiso y claridad",
      desc: "Precios transparentes acordados previamente, plazos realistas y soporte durante todo el camino."
    }
  ]
};

export const FAQ_ITEMS = [
  {
    question: "¿Cuánto tiempo demora el desarrollo de una web?",
    answer: "Depende del alcance del proyecto. Una landing page suele demorar entre 5 y 10 días, mientras que un sitio completo para negocio o un catálogo online puede requerir entre 10 y 20 días hábiles."
  },
  {
    question: "¿Necesito tener conocimientos técnicos para tener mi web?",
    answer: "No, para nada. En Galban Labs nos encargamos de toda la configuración técnica, el diseño y la puesta en línea. Vos solo nos compartís tus fotos, textos e ideas."
  },
  {
    question: "¿Cómo se gestionan los pedidos o consultas de los clientes?",
    answer: "Tu página contará con accesos directos a tu WhatsApp con mensajes personalizados según la sección o producto que la persona esté consultando, facilitando una respuesta rápida."
  },
  {
    question: "¿Qué necesito para empezar?",
    answer: "Solo tu idea de negocio, el logo si ya tenés uno (o te ayudamos a organizarlo), fotos de tus servicios o productos y una breve descripción de lo que ofrecés. Escribinos a WhatsApp y lo charlamos sin compromiso."
  }
];
