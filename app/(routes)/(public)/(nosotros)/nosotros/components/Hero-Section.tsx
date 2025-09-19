"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section id="historia" className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Somos ZiphoneX
            </Badge>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-foreground">Construimos el</span>
              <br />
              <span className="text-primary">futuro digital</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Desde 2015, transformamos ideas en experiencias digitales
              extraordinarias. Somos el puente entre la visión y la realidad
              tecnológica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
