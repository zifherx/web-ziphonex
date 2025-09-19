"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="font-playfair font-bold text-4xl md:text-6xl text-white text-balance">
            ¿Listo para <span className="text-yellow-300">Transformar</span> tu
            Negocio?
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Únete a las empresas que ya están transformando sus industrias con
            nuestras soluciones tecnológicas de vanguardia
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="cursor-pointer bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              asChild
            >
              <Link href="/servicios">
                Comenzar Mi Proyecto Ahora
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer animate-bounce border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent font-semibold"
              asChild
            >
              <Link href="/contacto">
                Solicita tu demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
