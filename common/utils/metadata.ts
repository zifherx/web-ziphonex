import { Metadata } from "next";

export const METADATA: Metadata = {
  title: {
    template: "%s | Ziphonex Tech",
    default: "Ziphonex Tech",
  },
  description:
    "Líder en servicios digitales, desarrollo web, marketing digital y soluciones tecnológicas integrales en Perú. Transformamos tu negocio con innovación y expertise.",
  generator: "Ziphonex Tech",
  referrer: "origin-when-cross-origin",
  keywords:
    "transformación digital, desarrollo web, marketing digital, páginas web, e-commerce, SEO, Perú",
  authors: [{ name: "Ziphonex" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ziphonex - Transformación Digital Innovadora",
    description:
      "Líder en servicios digitales y transformación digital en Perú",
    type: "website",
    locale: "es_PE",
  },
};
