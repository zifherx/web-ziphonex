"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

import { TitleSection } from "@/components/shared/Title-Section";
import { CardService } from "@/components/shared/Card-Service";

import { SERVICE_GRID_PROPS } from "@/common/types";

export function ServiciosGrid({
  servicios,
  hoveredService,
  setHoveredService,
}: SERVICE_GRID_PROPS) {
  return (
    <section id="grid-section" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleSection
          plainTitle="Servicios"
          colorTitle="Revolucionarios"
          description="Cada servicio está diseñado para superar las expectativas y transformar tu visión en realidad"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((service, index) => {
            const isHovered = hoveredService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="relative group perspective-distant"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {service.popular && (
                  <motion.div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-4 py-1 shadow-lg">
                      ⭐ Más Popular
                    </Badge>
                  </motion.div>
                )}

                <motion.div
                  className="relative h-full"
                  whileHover={{
                    rotateY: 3,
                    rotateX: 3,
                    scale: 1.01,
                    z: 50,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <CardService servicio={service} isHovered={isHovered} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
