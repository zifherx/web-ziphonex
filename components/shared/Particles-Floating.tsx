"use client";

import { motion } from "framer-motion";

import { PARTICLES_FLOATING_PROP } from "@/common/types";

export function ParticlesFloating({ quantity }: PARTICLES_FLOATING_PROP) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(quantity)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
