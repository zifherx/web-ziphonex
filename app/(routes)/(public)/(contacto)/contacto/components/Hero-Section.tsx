"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative z-20 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(147, 51, 234, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block"
          >
            <Badge className="bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-700 hover:from-blue-200/80 hover:to-purple-200/80 backdrop-blur-sm border border-blue-200/50 px-6 py-2 text-lg">
              <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
              Conecta con el Futuro
            </Badge>
          </motion.div>

          <motion.h1
            className="font-playfair font-bold text-5xl md:text-7xl text-slate-800 text-balance"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Transforma tu{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              Visión Digital
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Cada gran proyecto comienza con una conversación. Cuéntanos tu
            visión y la haremos realidad.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
