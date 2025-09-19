"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            Casos de Éxito Reales
          </Badge>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
            Historias de <span className="text-primary">Transformación</span>{" "}
            Digital
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar el
            éxito en el mundo digital.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
