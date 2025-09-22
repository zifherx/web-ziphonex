"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

import { SERVICE_BREADCRUMB_PROP } from "@/common/types";

export function HeroSection({ namePage }: SERVICE_BREADCRUMB_PROP) {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8 mb-16"
        >
          <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 text-lg font-bold rounded-full">
            Cotización Personalizada
          </Badge>

          <h1 className="font-bold text-5xl md:text-7xl text-foreground text-balance leading-none">
            Cotiza tu{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {namePage}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Obtén una cotización personalizada para tu proyecto. Nuestro equipo
            te contactará en emnos de 24 horas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
