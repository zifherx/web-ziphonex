"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { POPULATION_STARTS } from "@/common/types";

export function PopulationStars({ rating }: POPULATION_STARTS) {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <Star
            className={`h-6 w-6 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}
