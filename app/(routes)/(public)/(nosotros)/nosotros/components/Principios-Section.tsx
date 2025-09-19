"use client";

import { motion } from "framer-motion";

import { PRINCIPIOS_PROP } from "@/common/types";

export function PrincipiosSection({ principios }: PRINCIPIOS_PROP) {
  return (
    <section className="py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
            Nuestros principios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principios.map(({ description, icon: Icon, id, title }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 rounded-lg border border-blue-200/50 bg-white/80 backdrop-blur-sm hover:border-blue-300 hover:bg-white/90 transition-all duration-300 h-full shadow-sm hover:shadow-md">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
