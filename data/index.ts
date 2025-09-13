import {
  BarChart3,
  Code,
  Globe,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TestTube,
  Users,
  Zap,
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import {
  IHeaderMenu,
  IHeroSlide,
  IProcess,
  IService,
  IShorcutsIconFooter,
  ISocialNetworkShorcut,
  ITrustIndicators,
} from '@/common/interfaces';
import { transformActiveFeatureServicesToMenuItems } from '@/common/utils/global';

export const HEADER_MENU: IHeaderMenu[] = [
  { id: 1, href: '/', label: 'Inicio' },
  { id: 2, href: '/nosotros', label: 'Nosotros' },
  { id: 3, href: '/servicios', label: 'Servicios' },
  { id: 4, href: '/casos-exito', label: 'Casos de Exito' },
  { id: 5, href: '/contacto', label: 'Contacto' },
];

export const SHORCUTS_ICON_FOOTER: IShorcutsIconFooter[] = [
  { id: 1, icon: Mail, label: 'info@ziphonex.com' },
  { id: 2, icon: Phone, label: '+51 924 063 422' },
  { id: 3, icon: MapPin, label: 'Trujillo, Perú' },
];

export const SOCIAL_NETWORK_SHORCUT: ISocialNetworkShorcut[] = [
  { id: 1, icon: FaFacebook, href: '#', label: 'Facebook' },
  { id: 2, icon: FaTwitter, href: '#', label: 'Twitter' },
  { id: 3, icon: FaInstagram, href: '#', label: 'Instagram' },
  { id: 4, icon: FaLinkedin, href: '#', label: 'Linkedin' },
];

export const SERVICES_LIST: IService[] = [
  {
    id: 1,
    icon: Globe,
    title: 'Desarrollo Web',
    slug: 'desarrollo-web',
    shortDescription:
      'Sitios web modernos, responsivos y optimizados para conversión.',
    longDescription:
      'Creamos sitios web profesionales que no solo se ven increíbles, sino que también convierten visitantes en clientes. Utilizamos las últimas tecnologías y mejores prácticas para garantizar un rendimiento excepcional.',
    features: [
      {
        id: 1,
        name: 'Diseño Responsivo',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: 'SEO Optimizado',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: 'Carga Ultrarápida',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: 'Integración CMS Personalizado',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: 'Certificados SSL Incluidos',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: 'Mantenimiento y Actualizaciones',
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: 'from-blue-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50',
    price: 2500,
    category: 'DESARROLLO',
    deliveryTime: '2-4 semanas',
    includes: [
      { id: 1, name: 'Diseño personalizado' },
      { id: 2, name: 'Hosting por1 año' },
      { id: 3, name: 'Dominio .com' },
      { id: 4, name: 'Soporte 3 meses' },
    ],
    popular: false,
    isFeature: true,
    isActive: true,
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: 'E-commerce',
    slug: 'ecommerce',
    shortDescription:
      'Tiendas online que convierten visitantes en clientes fieles.',
    longDescription:
      'Desarrollamos plataformas de comercio electrónico completas con todas las funcionalidades necesarias para vender online de manera efectiva y segura.',
    features: [
      {
        id: 1,
        name: 'Pasarelas de Pago',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: 'Gestión de Inventario',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: 'Analytics Avanzado',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: 'Carrito de Compras Optimmizado',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: 'Integración con Redes Sociales',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: 'Sistema de Cupones y Descuentos',
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    price: 4500,
    category: 'E-COMMERCE',
    deliveryTime: '3-6 semanas',
    includes: [
      { id: 1, name: 'Tienda completa' },
      { id: 2, name: 'Pasarela de pagos' },
      { id: 3, name: 'Panel administrativo' },
      { id: 4, name: 'Capacitación' },
    ],
    popular: true,
    isFeature: true,
    isActive: true,
  },
  {
    id: 3,
    icon: Search,
    title: 'SEO & SEM',
    slug: 'seo-sem',
    shortDescription:
      'Posicionamiento estratégico en buscadores para máxima visibilidad.',
    longDescription:
      'Implementamos estrategias integrales de SEO y SEM para posicionar tu negocio en los primeros resultados de búsqueda y atraer tráfico cualificado.',
    features: [
      {
        id: 1,
        name: 'Keyword Research',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: 'Google Ads',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: 'Análisis Competencia',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: 'Auditoría SEO Completa',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: 'Content Marketing Strategy',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: 'Reportes Mensuales Detallados',
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: 'from-green-500 to-teal-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
    price: 1800,
    category: 'MARKETING',
    deliveryTime: 'Resultados en 3-6 meses',
    includes: [
      { id: 1, name: 'Auditoria inicial' },
      { id: 2, name: 'Estrategia personalizada' },
      { id: 3, name: 'Reportes mensuales' },
      { id: 4, name: 'Soporte Continuo' },
    ],
    popular: false,
    isFeature: true,
    isActive: true,
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Apps Móviles',
    slug: 'apps-moviles',
    shortDescription: 'Aplicaciones nativas e híbridas para iOS y Android.',
    longDescription:
      'Desarrollamos aplicaciones móviles innovadoras que ofrecen experiencias excepcionales a tus usuarios en dispositivos iOS y Android.',
    features: [
      {
        id: 1,
        name: 'UI/UX Intuitivo',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: 'Push Notificacions',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: 'Offline Support',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: 'Desarrollo Nativo iOS/Adnroid',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: 'Integración con APIs',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: 'Publicación en App Stores',
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
    price: 8000,
    category: 'DESARROLLO',
    deliveryTime: '6-12 semanas',
    includes: [
      { id: 1, name: 'App nativa' },
      { id: 2, name: 'Diseño UX/UI' },
      { id: 3, name: 'Publicación en stores' },
      { id: 4, name: 'Soporte 6 meses' },
    ],
    popular: false,
    isFeature: true,
    isActive: true,
  },
  {
    id: 5,
    icon: BarChart3,
    title: 'Marketing Digital',
    slug: 'marketing-digital',
    shortDescription:
      'Estrategias integrales para hacer crecer tu negocio online.',
    longDescription:
      'Implementamos estrategias de marketing digital 360° que incluyen redes sociales, email marketing y content marketing para hacer crecer tu negocio.',
    features: [
      {
        id: 1,
        name: 'Social Media',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: 'Email Marketing',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: 'Content Strategy',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: 'Automatización de Marketing',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: 'Análisis de ROI',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: 'Gestión de Campañas',
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-grandient-to-br from-indigo-50 to-purple-50',
    price: 2200,
    category: 'MARKETING',
    deliveryTime: 'Resultados en 1-3 meses',
    includes: [
      { id: 1, name: 'Estrategia personalizada' },
      { id: 2, name: 'Gestión de redes' },
      { id: 3, name: 'Reportes semanales' },
      { id: 4, name: 'Creativos incluidos' },
    ],
    popular: false,
    isFeature: true,
    isActive: true,
  },
  {
    id: 6,
    icon: Shield,
    title: 'Consultoría TI',
    slug: 'consultoria-ti',
    shortDescription:
      'Asesoría especializada en transformación digital empresarial.',
    longDescription:
      'Ofrecemos consultoría especializada para guiar tu empresa en el proceso de transformación digital, optimizando procesos y tecnologías.',
    features: [
      {
        id: 1,
        name: 'Auditoría Digital',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 2,
        name: 'Migración Cloud',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 3,
        name: 'Seguridad Web',
        isHomeFeature: true,
        isServiceFeature: true,
      },
      {
        id: 4,
        name: 'Automatización de Procesos',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 5,
        name: 'Estrategia de Transformación',
        isHomeFeature: false,
        isServiceFeature: true,
      },
      {
        id: 6,
        name: 'Capacitación del Equipo',
        isHomeFeature: false,
        isServiceFeature: true,
      },
    ],
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
    price: 3500,
    category: 'CONSULTORIA',
    deliveryTime: '4-8 semanas',
    includes: [
      { id: 1, name: 'Auditoría completa' },
      { id: 2, name: 'Plan de Transformación' },
      { id: 3, name: 'Implementación' },
      { id: 4, name: 'Seguimiento 3 meses' },
    ],
    popular: false,
    isFeature: true,
    isActive: true,
  },
];

export const SERVICES_FOOTER_MENU = SERVICES_LIST.filter(
  option => option.isFeature
);

export const FOOTER_MENU_COMPANY: IHeaderMenu[] = [
  { id: 1, label: 'Nosotros', href: '/nosotros' },
  { id: 2, label: 'Casos de Exito', href: '/casos-exito' },
  { id: 3, label: 'Blog', href: '/blog' },
  { id: 4, label: 'Carreras', href: '/carreras' },
  { id: 5, label: 'Contacto', href: '/contacto' },
];

export const MAIN_HERO_SLIDES: IHeroSlide[] = [
  {
    id: 1,
    title: 'Revolucionamos tu',
    highlight: 'Presencia Digital',
    description:
      'Somos Ziphonex, la agencia que combina innovación, tecnológica con estrategia digital para impulsar tu negocio hacia el futuro.',
    badge: {
      icon: Sparkles,
      text: 'Tranformación Digital Disruptiva',
    },
    primaryCTA: {
      text: 'Iniciar Mi Proyecto',
      href: '#',
    },
    secondaryCTA: {
      text: 'Ver Nuestros Casos',
      href: '#',
    },
  },
  {
    id: 2,
    title: 'Convertimos Ideas en',
    highlight: 'Exito Digital',
    description:
      'Desarrollamos soluciones web innovadoras que generan resultados medibles y transforman la manera en que tus clientes interactúan con tu marca.',
    badge: {
      icon: Target,
      text: 'Resultados Garantizados',
    },
    primaryCTA: {
      text: 'Solicitar Cotización',
      href: '#',
    },
    secondaryCTA: {
      text: 'Ver Portafolio',
      href: '#',
    },
  },
  {
    id: 3,
    title: 'Construimos el',
    highlight: 'Futuro Digital',
    description:
      'Utilizamos las tecnologias más avanzadas para crear experiencias digitales únicas que posicionan tu empresa como líder en su industria.',
    badge: {
      icon: Star,
      text: 'Líderes en Innovación',
    },
    primaryCTA: {
      text: 'Comenzar Ahora',
      href: '#',
    },
    secondaryCTA: {
      text: 'Conocer Más',
      href: '#',
    },
  },
];

export const NEW_HEADER_MENU = {
  compania: [
    {
      id: 1,
      title: 'Nuestra Historia',
      description: 'Conoce nuestro recorrido',
      href: '/nosotros#historia',
    },
    {
      id: 2,
      title: 'Equipo',
      description: 'Los expertos detrás de Ziphonex',
      href: '/nosotros#equipo',
    },
    {
      id: 3,
      title: 'Casos de Éxito',
      description: 'Proyectos que transformaron negocios',
      href: '/casos-exito',
    },
  ],
  services: transformActiveFeatureServicesToMenuItems(SERVICES_LIST),
};

export const ACTIVE_SERVICE_LIST = SERVICES_LIST.filter(
  service => service.isActive && service.isFeature
);

export const PROCESS_LIST: IProcess[] = [
  {
    id: 1,
    icon: Target,
    title: 'Análisis & Estrategia',
    description: 'Evaluamos tu negocio y definimos objetivos claros',
    details: '',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-500/10 to-cyan-500/10',
    features: [
      { id: 1, name: 'Análisis de mercado' },
      { id: 2, name: 'Definición de objetivos' },
      { id: 3, name: 'Estrategia personalizada' },
      { id: 4, name: 'Roadmap detallado' },
    ],
    duration: '1-2 semanas',
  },
  {
    id: 2,
    icon: Lightbulb,
    title: 'Diseño & Prototipado',
    description: 'Creamos prototipos interactivos y diseños únicos',
    details:
      'Desarrollamos wireframes, mockups y prototipos funcionales que reflejan la identidad de tu marca y optimizan la experiencia del usuario.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-500/10 to-pink-500/10',
    features: [
      { id: 1, name: 'Wireframes detallados' },
      { id: 2, name: 'Diseño UI/UX' },
      { id: 3, name: 'Prototipos interactivos' },
      { id: 4, name: 'Guía de estilo' },
    ],
    duration: '2-3 semanas',
  },
  {
    id: 3,
    icon: Code,
    title: 'Desarrollo & Programación',
    description: 'Construimos soluciones robustas y escalables',
    details:
      'Nuestro equipo de desarrolladores expertos utiliza las últimas tecnologías para crear aplicaciones rápidas, seguras y escalables.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-500/10 to-emerald-500/10',
    features: [
      { id: 1, name: 'Código limpio' },
      { id: 2, name: 'Arquitectura escalable' },
      { id: 3, name: 'APIs robustas' },
      { id: 4, name: 'Integración continua' },
    ],
    duration: '4-8 semanas',
  },
  {
    id: 4,
    icon: TestTube,
    title: 'Testing & Optimización',
    description: 'Garantizamos calidad y rendimiento óptimo',
    details:
      'Realizamos pruebas exhaustivas de funcionalidad, rendimiento y seguridad, optimizando cada aspecto de tu solución digital.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-500/10 to-red-500/10',
    features: [
      { id: 1, name: 'Testing automatizado' },
      { id: 2, name: 'Pruebas de rendimiento' },
      { id: 3, name: 'Auditoría de seguridad' },
      { id: 4, name: 'Optimización SEO' },
    ],
    duration: '1-2 semanas',
  },
  {
    id: 5,
    icon: Globe,
    title: 'Lanzamiento & Soporte',
    description: 'Desplegamos y brindamos soporte continuo',
    details:
      'Lanzamos tu proyecto con un plan de despliegue sin interrupciones y ofrecemos soporte técnico 24/7 para garantizar el éxito continuo.',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'from-indigo-500/10 to-purple-500/10',
    features: [
      { id: 1, name: 'Despliegue seguro' },
      { id: 2, name: 'Monitoreo 24/7' },
      { id: 3, name: 'Soporte técnico' },
      { id: 4, name: 'Actualizaciones regulares' },
    ],
    duration: 'Continuo',
  },
];

export const INDICADORES_CONFIANZA: ITrustIndicators[] = [
  { id: 1, icon: Shield, label: '100% seguro' },
  { id: 2, icon: Zap, label: 'Respuesta en 24h' },
  { id: 3, icon: Users, label: '+500 clientes satisfechos' },
];
