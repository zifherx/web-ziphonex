"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ParticlesFloating } from "@/components/shared/Particles-Floating";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      className="relative pt-24 pb-40 overflow-hidden"
      ref={containerRef}
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-10"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)]" />

      <ParticlesFloating quantity={20} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-6 py-2 text-lg">
              🚀 Servicios del Futuro
            </Badge>
          </motion.div>

          <motion.h1
            className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl text-foreground text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transformamos{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
              Ideas
            </span>{" "}
            en{" "}
            <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              Realidad Digital
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Soluciones tecnológicas disruptivas que impulsan tu negocio hacia el
            futuro digital
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="cursor-pointer bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href={`/servicios#grid-section`}>
                Explorar Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary cursor-pointer text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              Ver Demo Interactivo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
