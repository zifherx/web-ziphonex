"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FOOTER_MENU_COMPANY,
  SERVICES_FOOTER_MENU,
  SHORCUTS_ICON_FOOTER,
  SOCIAL_NETWORK_SHORCUT,
} from "@/data";

export function FooterContent() {
  return (
    <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="space-y-6">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-20 h-20"
          >
            <Image
              src="/images/logo/logo-square-text.png"
              alt="Ziphonex Logo"
              fill
              className="object-contain rounded-lg"
            />
          </motion.div>
        </Link>
        <p className="text-background/80 text-sm leading-relaxed">
          Transformamos negocios a través de soluciones digitales innovadoras.
          Tu éxito digital es nuestra pasión.
        </p>

        <div className="flex space-x-4">
          {SOCIAL_NETWORK_SHORCUT.map(({ href, icon: Icon, id, label }) => (
            <motion.a
              key={id}
              href={href}
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors"
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Servicios */}
      <div className="space-y-6">
        <h3 className="font-playfair font-semibold text-lg">Servicios</h3>
        <ul className="space-y-3">
          {SERVICES_FOOTER_MENU.map(({ id, title, slug }) => (
            <li key={id}>
              <Link
                href={`/servicios/${slug}`}
                className="text-background/80 hover:text-primary transition-colors text-sm"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Company */}
      <div className="space-y-6">
        <h3 className="font-playfair font-semibold">Compañia</h3>
        <ul className="space-y-3">
          {FOOTER_MENU_COMPANY.map(({ href, id, label }) => (
            <li key={id}>
              <Link
                href={href}
                className="text-background/80 hover:text-primary transition-colors text-sm"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Shorcuts */}
      <div className="space-y-6">
        <h3 className="font-playfair font-semibold text-lg">Contacto</h3>
        <div className="space-y-4">
          {SHORCUTS_ICON_FOOTER.map(({ icon: Icon, id, label }) => (
            <div key={id} className="flex items-center space-x-3">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-background/80 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
