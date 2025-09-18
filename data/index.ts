import {
  Award,
  BarChart3,
  Clock,
  Code,
  Facebook,
  Globe,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Search,
  Shield,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TestTube,
  TrendingUp,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import {
  ICasoExito,
  IFaqContact,
  IFloatingIcon,
  IHeaderMenu,
  IHeroSlide,
  IList,
  INewsletterFooter,
  IProcess,
  IService,
  IShorcutsIconFooter,
  ISocialNetworkShorcut,
  IStatGeneral,
  ITestimonial,
  ITrustIndicators,
} from "@/common/interfaces";
import { transformActiveFeatureServicesToMenuItems } from "@/common/utils/global";

export const HEADER_MENU: IHeaderMenu[] = [
  { id: 1, href: "/", label: "Inicio" },
  { id: 2, href: "/nosotros", label: "Nosotros" },
  { id: 3, href: "/servicios", label: "Servicios" },
  { id: 4, href: "/casos-exito", label: "Casos de Exito" },
  { id: 5, href: "/contacto", label: "Contacto" },
];

export const SHORCUTS_ICON_FOOTER: IShorcutsIconFooter[] = [
  { id: 1, icon: Mail, label: "info@ziphonex.com" },
  { id: 2, icon: Phone, label: "+51 924 063 422" },
  { id: 3, icon: MapPin, label: "Trujillo, Perú" },
];

export const SOCIAL_NETWORK_SHORCUT: ISocialNetworkShorcut[] = [
  // { id: 1, icon: FaFacebook, href: "#", label: "Facebook" },
  // { id: 2, icon: FaTwitter, href: "#", label: "Twitter" },
  // { id: 3, icon: FaInstagram, href: "#", label: "Instagram" },
  // { id: 4, icon: FaLinkedin, href: "#", label: "Linkedin" },
  { id: 1, icon: Facebook, href: "#", label: "Facebook" },
  { id: 2, icon: Twitter, href: "#", label: "Twitter" },
  { id: 3, icon: Instagram, href: "#", label: "Instagram" },
  { id: 4, icon: Linkedin, href: "#", label: "Linkedin" },
];

export const SERVICES_LIST: IService[] = [
  {
    id: 1,
    icon: Globe,
    title: "Desarrollo Web",
    slug: "desarrollo-web",
    shortDescription:
      "Sitios web modernos, responsivos y optimizados para conversión.",
    longDescription:
      "Creamos sitios web profesionales que no solo se ven increíbles, sino que también convierten visitantes en clientes. Utilizamos las últimas tecnologías y mejores prácticas para garantizar un rendimiento excepcional.",
    features: [
      {
        id: 1,
        name: "Diseño Responsivo",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: "SEO Optimizado",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: "Carga Ultrarápida",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: "Integración CMS Personalizado",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: "Certificados SSL Incluidos",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: "Mantenimiento y Actualizaciones",
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    price: 2500,
    category: "DESARROLLO",
    deliveryTime: "2-4 semanas",
    includes: [
      { id: 1, name: "Diseño personalizado" },
      { id: 2, name: "Hosting por1 año" },
      { id: 3, name: "Dominio .com" },
      { id: 4, name: "Soporte 3 meses" },
    ],
    popular: false,
    isFeature: true,
    isActive: true,
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "E-commerce",
    slug: "ecommerce",
    shortDescription:
      "Tiendas online que convierten visitantes en clientes fieles.",
    longDescription:
      "Desarrollamos plataformas de comercio electrónico completas con todas las funcionalidades necesarias para vender online de manera efectiva y segura.",
    features: [
      {
        id: 1,
        name: "Pasarelas de Pago",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: "Gestión de Inventario",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: "Analytics Avanzado",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: "Carrito de Compras Optimmizado",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: "Integración con Redes Sociales",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: "Sistema de Cupones y Descuentos",
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    price: 4500,
    category: "E-COMMERCE",
    deliveryTime: "3-6 semanas",
    includes: [
      { id: 1, name: "Tienda completa" },
      { id: 2, name: "Pasarela de pagos" },
      { id: 3, name: "Panel administrativo" },
      { id: 4, name: "Capacitación" },
    ],
    popular: true,
    isFeature: true,
    isActive: true,
  },
  {
    id: 3,
    icon: Search,
    title: "SEO & SEM",
    slug: "seo-sem",
    shortDescription:
      "Posicionamiento estratégico en buscadores para máxima visibilidad.",
    longDescription:
      "Implementamos estrategias integrales de SEO y SEM para posicionar tu negocio en los primeros resultados de búsqueda y atraer tráfico cualificado.",
    features: [
      {
        id: 1,
        name: "Keyword Research",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: "Google Ads",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: "Análisis Competencia",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: "Auditoría SEO Completa",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: "Content Marketing Strategy",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: "Reportes Mensuales Detallados",
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: "from-green-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
    price: 1800,
    category: "MARKETING",
    deliveryTime: "Resultados en 3-6 meses",
    includes: [
      { id: 1, name: "Auditoria inicial" },
      { id: 2, name: "Estrategia personalizada" },
      { id: 3, name: "Reportes mensuales" },
      { id: 4, name: "Soporte Continuo" },
    ],
    popular: false,
    isFeature: true,
    isActive: true,
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Apps Móviles",
    slug: "apps-moviles",
    shortDescription: "Aplicaciones nativas e híbridas para iOS y Android.",
    longDescription:
      "Desarrollamos aplicaciones móviles innovadoras que ofrecen experiencias excepcionales a tus usuarios en dispositivos iOS y Android.",
    features: [
      {
        id: 1,
        name: "UI/UX Intuitivo",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: "Push Notificacions",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: "Offline Support",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: "Desarrollo Nativo iOS/Adnroid",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: "Integración con APIs",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: "Publicación en App Stores",
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: "from-orange-500 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    price: 8000,
    category: "DESARROLLO",
    deliveryTime: "6-12 semanas",
    includes: [
      { id: 1, name: "App nativa" },
      { id: 2, name: "Diseño UX/UI" },
      { id: 3, name: "Publicación en stores" },
      { id: 4, name: "Soporte 6 meses" },
    ],
    popular: false,
    isFeature: true,
    isActive: true,
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Marketing Digital",
    slug: "marketing-digital",
    shortDescription:
      "Estrategias integrales para hacer crecer tu negocio online.",
    longDescription:
      "Implementamos estrategias de marketing digital 360° que incluyen redes sociales, email marketing y content marketing para hacer crecer tu negocio.",
    features: [
      {
        id: 1,
        name: "Social Media",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: "Email Marketing",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: "Content Strategy",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: "Automatización de Marketing",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: "Análisis de ROI",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: "Gestión de Campañas",
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-grandient-to-br from-indigo-50 to-purple-50",
    price: 2200,
    category: "MARKETING",
    deliveryTime: "Resultados en 1-3 meses",
    includes: [
      { id: 1, name: "Estrategia personalizada" },
      { id: 2, name: "Gestión de redes" },
      { id: 3, name: "Reportes semanales" },
      { id: 4, name: "Creativos incluidos" },
    ],
    popular: false,
    isFeature: true,
    isActive: true,
  },
  {
    id: 6,
    icon: Shield,
    title: "Consultoría TI",
    slug: "consultoria-ti",
    shortDescription:
      "Asesoría especializada en transformación digital empresarial.",
    longDescription:
      "Ofrecemos consultoría especializada para guiar tu empresa en el proceso de transformación digital, optimizando procesos y tecnologías.",
    features: [
      {
        id: 1,
        name: "Auditoría Digital",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: "Migración Cloud",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: "Seguridad Web",
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: "Automatización de Procesos",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: "Estrategia de Transformación",
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: "Capacitación del Equipo",
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
    price: 3500,
    category: "CONSULTORIA",
    deliveryTime: "4-8 semanas",
    includes: [
      { id: 1, name: "Auditoría completa" },
      { id: 2, name: "Plan de Transformación" },
      { id: 3, name: "Implementación" },
      { id: 4, name: "Seguimiento 3 meses" },
    ],
    popular: false,
    isFeature: true,
    isActive: true,
  },
];

export const SERVICES_FOOTER_MENU = SERVICES_LIST.filter(
  (option) => option.isFeature
);

export const FOOTER_MENU_COMPANY: IHeaderMenu[] = [
  { id: 1, label: "Nosotros", href: "/nosotros" },
  { id: 2, label: "Casos de Exito", href: "/casos-exito" },
  { id: 3, label: "Blog", href: "/blog" },
  { id: 4, label: "Carreras", href: "/carreras" },
  { id: 5, label: "Contacto", href: "/contacto" },
];

export const MAIN_HERO_SLIDES: IHeroSlide[] = [
  {
    id: 1,
    title: "Revolucionamos tu",
    highlight: "Presencia Digital",
    description:
      "Somos Ziphonex, la agencia que combina innovación, tecnológica con estrategia digital para impulsar tu negocio hacia el futuro.",
    badge: {
      icon: Sparkles,
      text: "Tranformación Digital Disruptiva",
    },
    primaryCTA: {
      text: "Iniciar Mi Proyecto",
      href: "#",
    },
    secondaryCTA: {
      text: "Ver Nuestros Casos",
      href: "#",
    },
  },
  {
    id: 2,
    title: "Convertimos Ideas en",
    highlight: "Exito Digital",
    description:
      "Desarrollamos soluciones web innovadoras que generan resultados medibles y transforman la manera en que tus clientes interactúan con tu marca.",
    badge: {
      icon: Target,
      text: "Resultados Garantizados",
    },
    primaryCTA: {
      text: "Solicitar Cotización",
      href: "#",
    },
    secondaryCTA: {
      text: "Ver Portafolio",
      href: "#",
    },
  },
  {
    id: 3,
    title: "Construimos el",
    highlight: "Futuro Digital",
    description:
      "Utilizamos las tecnologias más avanzadas para crear experiencias digitales únicas que posicionan tu empresa como líder en su industria.",
    badge: {
      icon: Star,
      text: "Líderes en Innovación",
    },
    primaryCTA: {
      text: "Comenzar Ahora",
      href: "#",
    },
    secondaryCTA: {
      text: "Conocer Más",
      href: "#",
    },
  },
];

export const NEW_HEADER_MENU = {
  compania: [
    {
      id: 1,
      title: "Nuestra Historia",
      description: "Conoce nuestro recorrido",
      href: "/nosotros#historia",
    },
    {
      id: 2,
      title: "Equipo",
      description: "Los expertos detrás de Ziphonex",
      href: "/nosotros#equipo",
    },
    {
      id: 3,
      title: "Casos de Éxito",
      description: "Proyectos que transformaron negocios",
      href: "/casos-exito",
    },
  ],
  services: transformActiveFeatureServicesToMenuItems(SERVICES_LIST),
};

export const ACTIVE_SERVICE_LIST = SERVICES_LIST.filter(
  (service) => service.isActive && service.isFeature
);

export const getServiceBySlug = (slug: string): IService | undefined => {
  return SERVICES_LIST.find((servicio) => servicio.slug === slug);
};

export const getRelatedServiceBySlug = (
  service: IService,
  qtyServices: number
): IService[] => {
  return SERVICES_LIST.filter((item) => item.id !== service.id).slice(
    0,
    qtyServices
  );
};

export const PROCESS_SERVICE_LIST: IProcess[] = [
  {
    id: 1,
    icon: Target,
    title: "Análisis & Estrategia",
    description: "Evaluamos tu negocio y definimos objetivos claros",
    details: "",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    features: [
      { id: 1, name: "Análisis de mercado" },
      { id: 2, name: "Definición de objetivos" },
      { id: 3, name: "Estrategia personalizada" },
      { id: 4, name: "Roadmap detallado" },
    ],
    duration: "1-2 semanas",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Diseño & Prototipado",
    description: "Creamos prototipos interactivos y diseños únicos",
    details:
      "Desarrollamos wireframes, mockups y prototipos funcionales que reflejan la identidad de tu marca y optimizan la experiencia del usuario.",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    features: [
      { id: 1, name: "Wireframes detallados" },
      { id: 2, name: "Diseño UI/UX" },
      { id: 3, name: "Prototipos interactivos" },
      { id: 4, name: "Guía de estilo" },
    ],
    duration: "2-3 semanas",
  },
  {
    id: 3,
    icon: Code,
    title: "Desarrollo & Programación",
    description: "Construimos soluciones robustas y escalables",
    details:
      "Nuestro equipo de desarrolladores expertos utiliza las últimas tecnologías para crear aplicaciones rápidas, seguras y escalables.",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
    features: [
      { id: 1, name: "Código limpio" },
      { id: 2, name: "Arquitectura escalable" },
      { id: 3, name: "APIs robustas" },
      { id: 4, name: "Integración continua" },
    ],
    duration: "4-8 semanas",
  },
  {
    id: 4,
    icon: TestTube,
    title: "Testing & Optimización",
    description: "Garantizamos calidad y rendimiento óptimo",
    details:
      "Realizamos pruebas exhaustivas de funcionalidad, rendimiento y seguridad, optimizando cada aspecto de tu solución digital.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    features: [
      { id: 1, name: "Testing automatizado" },
      { id: 2, name: "Pruebas de rendimiento" },
      { id: 3, name: "Auditoría de seguridad" },
      { id: 4, name: "Optimización SEO" },
    ],
    duration: "1-2 semanas",
  },
  {
    id: 5,
    icon: Globe,
    title: "Lanzamiento & Soporte",
    description: "Desplegamos y brindamos soporte continuo",
    details:
      "Lanzamos tu proyecto con un plan de despliegue sin interrupciones y ofrecemos soporte técnico 24/7 para garantizar el éxito continuo.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-500/10 to-purple-500/10",
    features: [
      { id: 1, name: "Despliegue seguro" },
      { id: 2, name: "Monitoreo 24/7" },
      { id: 3, name: "Soporte técnico" },
      { id: 4, name: "Actualizaciones regulares" },
    ],
    duration: "Continuo",
  },
];

export const PROCESS_HOME_LIST: IProcess[] = [
  {
    id: 1,
    icon: Search,
    title: "Análisis",
    description:
      "Estudiamos tu negocios, competencia y objetivos para crear una estrategia personalizada.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Estrategia",
    description:
      "Diseñamos una hoja de ruta clara con soluciones innovadoras adaptadas a tus necesidades.",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    id: 3,
    icon: Code,
    title: "Desarrollo",
    description:
      "Implementamos las soluciones usando las últimas tecnologías, mejores prácticas y con grandes profesionales.",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Desplegamos tu proyecto y te acompañamos en el crecimiento continuo de tu negocio.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
  },
];

export const INDICADORES_CONFIANZA: ITrustIndicators[] = [
  { id: 1, icon: Shield, label: "100% seguro" },
  { id: 2, icon: Zap, label: "Respuesta en 24h" },
  { id: 3, icon: Users, label: "+500 clientes satisfechos" },
];

export const STATS_HOME: IStatGeneral[] = [
  {
    id: 1,
    title: "Proyectos Completados",
    icon: TrendingUp,
    value: 500,
    suffix: "+",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Satisfacción del Cliente",
    icon: Award,
    value: 98,
    suffix: "%",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Soporte Técnico",
    icon: Clock,
    value: 24,
    suffix: "/7",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "Años de Experiencia",
    icon: Users,
    value: 5,
    suffix: "+",
    color: "from-purple-500 to-pink-600",
  },
];

export const NEWSLETTER_FOOTER: INewsletterFooter[] = [
  { id: 1, title: "Tips semanales gratuitos" },
  { id: 2, title: "Descuentos exclusivos" },
  { id: 3, title: "Sin spam, cancela cuando quieras" },
];

export const TESTIMONIAL_LIST: ITestimonial[] = [
  {
    id: 1,
    author: {
      name: "Marco Vives",
      position: "CEO",
      company: "Markethink Group",
      avatar: "https://github.com/shadcn.png",
    },
    resena:
      "Ziphonex transformó completamente nuestra presencia digital. Nuestras ventas online aumentaron un 300% en solo 6 meses.",
    rating: 5,
    isActive: true,
  },
  {
    id: 2,
    author: {
      name: "César Márquez",
      position: "CEO",
      company: "Pro Ambiente Saneamiento SAC",
      avatar: "https://github.com/shadcn.png",
    },
    resena:
      "El equipo de Ziphonex no solo entregó un sitio web excepcional, sino que nos acompañó en todo el proceso de transformación digital.",
    rating: 5,
    isActive: true,
  },
  {
    id: 3,
    author: {
      name: "Cárlos Peramás",
      position: "Jefe de Marketing",
      company: "Sociedad Automotores Inka",
      avatar: "https://github.com/shadcn.png",
    },
    resena:
      "Profesionalismo, creatividad y resultados. Ziphonex superó todas nuestras expectativas y nos ayudó a destacar en nuestro sector.",
    rating: 5,
    isActive: true,
  },
  {
    id: 4,
    author: {
      name: "Raúl Vergara",
      position: "CEO",
      company: "Footloose",
      avatar: "https://github.com/shadcn.png",
    },
    resena:
      "La arquitectura técnica que desarrollaron es impresionante. Nuestro sistema ahora maneja 10x más tráfico sin problemas.",
    rating: 4,
    isActive: true,
  },
  {
    id: 5,
    author: {
      name: "Alejandro Penagos",
      position: "CEO",
      company: "VCC Tecnología",
      avatar: "https://github.com/shadcn.png",
    },
    resena:
      "Su enfoque en UX/UI es excepcional. Nuestros clientes ahora navegan de forma más intuitiva y las conversiones subieron 250%.",
    rating: 5,
    isActive: true,
  },
  {
    id: 6,
    author: {
      name: "Carlos Escala",
      position: "CEO",
      company: "EK Consulting Group",
      avatar: "https://github.com/shadcn.png",
    },
    resena:
      "Implementaron funcionalidades complejas de manera elegante. La seguridad y perfomance de nuestra plataforma es de clase mundial.",
    rating: 4,
    isActive: true,
  },
  {
    id: 7,
    author: {
      name: "Saulo Otoya",
      position: "CEO",
      company: "Multiservicios Said",
      avatar: "https://github.com/shadcn.png",
    },
    resena:
      "Su metodología ágil y comunicación constante hicieron que el proyecto fuera un éxito rotundo. Recomiendo Ziphonex sin dudarlo.",
    rating: 4,
    isActive: true,
  },
  {
    id: 8,
    author: {
      name: "Paul Holguin",
      position: "CEO",
      company: "Credo Inc",
      avatar: "https://github.com/shadcn.png",
    },
    resena:
      "Hemos trabajado con muchas agencias, pero Ziphonex destaca por su innovación y capacidad de entregar resultados medibles.",
    rating: 4,
    isActive: true,
  },
];

export const FLOATING_ICON_LIST: IFloatingIcon[] = [
  { id: 1, icon: Zap, delay: 0, x: "10%", y: "20%" },
  { id: 2, icon: Shield, delay: 1, x: "80%", y: "30%" },
  { id: 3, icon: Sparkles, delay: 2, x: "15%", y: "70%" },
  { id: 4, icon: Clock, delay: 1.5, x: "85%", y: "80%" },
];

export const LIST_FAQ_CHOOSE_US: IList[] = [
  { id: 1, name: "Consulta inicial gratuita" },
  { id: 2, name: "Propuesta en 24 horas" },
  { id: 3, name: "Equipo experto certificado" },
  { id: 4, name: "Soporte técnico incluido" },
  { id: 5, name: "Garantía de satisfacción" },
];

export const LIST_FAQ_CONTACT: IFaqContact[] = [
  {
    id: 1,
    icon: Mail,
    title: "Email",
    value: "info@ziphonex.com",
    description: "Respuesta en 24 horas",
    gradient: "from-blue-50/60 to-blue-100/40",
    iconBg: "bg-blue-100/50",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: Phone,
    title: "Teléfono",
    value: "+51 924 063 422",
    description: "Lun - Vie: 9AM - 6PM",
    gradient: "from-emerald-50/60 to-emerald-100/40",
    iconBg: "bg-emerald-100/50",
    iconColor: "text-emerald-600",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Oficina",
    value: "San Isidro, Trujillo",
    description: "Cita previa",
    gradient: "from-purple-50/60 to-purple-100/40",
    iconBg: "bg-purple-100/50",
    iconColor: "text-purple-600",
  },
];

export const LIST_STATS_NOSOTROS: IStatGeneral[] = [
  { id: 1, title: "Proyectos Exitosos", value: 50, suffix: "+", color: "" },
  { id: 2, title: "Clientes Satisfechos", value: 98, suffix: "%", color: "" },
  { id: 3, title: "ROI Promedio", value: 250, suffix: "%", color: "" },
  { id: 4, title: "Soporte Técnico", value: 24, suffix: "/7", color: "" },
];

export const LIST_CASOS_EXITO: ICasoExito[] = [
  {
    id: 1,
    title: "TechnoStore Perú",
    category: "E-commerce",
    description:
      "Transformación digital completa de tienda de tecnología con aumento del 300% en ventas online.",
    image: "",
    results: [
      { id: 1, metric: "300%", label: "Aumento en Ventas" },
      { id: 2, metric: "150%", label: "Más Tráfico Web" },
      { id: 3, metric: "85%", label: "Tasa de Conversión" },
    ],
    technologies: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Stripe" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Vercel" },
    ],
    testimonial: {
      text: "Ziphonex transformó completamente nuestro negocio. Las ventas online se triplicaron en solo 6 meses.",
      author: "Carlos Mendoza",
      position: "CEO, TechnoStore",
    },
    link_website: "#",
  },
];
