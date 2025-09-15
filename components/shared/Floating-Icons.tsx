"use client";

import { motion } from "framer-motion";

import { FLOATING_ICONS_PROP } from "@/common/types";

export function FloatingIcons({ iconList }: FLOATING_ICONS_PROP) {
  return (
    <>
      {iconList.map(({ delay, icon: Icon, id, x, y }) => (
        <motion.div
          key={id}
          className="absolute pointer-events-none"
          style={{ left: x, top: y }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay,
            ease: "easeInOut",
          }}
        >
          <div className="p-4 bg-gradient-to-br from-blue-100/40 to-purple-100/40 backdrop-blur-sm rounded-2xl border border-white/30 shadow-2xl">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        </motion.div>
      ))}
    </>
  );
}
