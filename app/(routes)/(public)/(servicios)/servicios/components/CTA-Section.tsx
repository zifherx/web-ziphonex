"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { INDICADORES_CONFIANZA } from "@/data";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2
            className="font-playfair font-bold text-4xl md:text-6xl text-white text-balance"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            ¿Listo para el{" "}
            <span className="text-yellow-300">Futuro Digital</span>?
          </motion.h2>

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
              className="bg-white text-primary cursor-pointer hover:bg-white/90 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Iniciar Transformación Digital
              <Rocket className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white cursor-pointer text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent font-semibold"
            >
              Agendar Demo Personalizado
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 mt-12 text-white/70 text-sm"
          >
            {INDICADORES_CONFIANZA.map(({ icon: Icon, id, label }) => (
              <div key={id} className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
