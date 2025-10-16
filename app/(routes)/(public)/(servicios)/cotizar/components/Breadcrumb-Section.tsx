"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { BREADCRUMB_COTIZAR_PROP } from "@/common/types";

export function BreadcrumbSection({
  namePage,
  slugPage,
}: BREADCRUMB_COTIZAR_PROP) {
  return (
    <section className="pt-24 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
      <div className="absolute inset-0 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-4"
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="font-semibold flex items-center gap-2 hover:text-secondary transition-colors"
                  >
                    <Home className="w-5 h-5" strokeWidth={2} />
                    Inicio
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/servicios"
                    className="font-semibold hover:text-secondary transition-colors"
                  >
                    Servicios
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href={`/servicios/${slugPage}`}
                    className="font-semibold hover:text-secondary transition-colors"
                  >
                    {namePage}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-secondary font-bold">
                  Cotizar
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>
      </div>
    </section>
  );
}
