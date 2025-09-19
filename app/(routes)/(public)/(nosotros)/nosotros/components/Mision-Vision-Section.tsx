"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export function MisionVisionSection() {
  return (
    <section className="py-32 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  01. Misión
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-16">
                Democratizar el acceso a tecnología de vanguardia, creando
                soluciones que impulsen el crecimiento exponencial de nuestros
                clientes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  02. Visión
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-16">
                Ser la agencia líder en Latinoamérica, reconocida por crear el
                futuro digital que otros solo imaginan.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
