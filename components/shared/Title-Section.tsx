"use client";

import { motion } from "framer-motion";

import { TITLE_SECTION_PROP } from "@/common/types";

export function TitleSection({
  description,
  colorTitle,
  plainTitle,
}: TITLE_SECTION_PROP) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4 text-balance">
        {plainTitle}{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {colorTitle}
        </span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
        {description}
      </p>
    </motion.div>
  );
}
