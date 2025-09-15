"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "../ui/card";

import { PopulationStars } from "./Population-Stars";

import { CARD_TESTIMONIAL_PROP } from "@/common/types";

export function CardTestimonial({ testimonial }: CARD_TESTIMONIAL_PROP) {
  const { author, rating, resena } = testimonial;

  return (
    <Card className="h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-6 md:p-8 relative z-10 text-center h-full flex flex-col justify-between">
        <div>
          <PopulationStars rating={rating} />
          <blockquote className="text-muted-foreground mb-6 italic text-lg leading-relaxed font-light">
            "{resena}"
          </blockquote>
        </div>

        <div className="flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full mr-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
          />
          <div className="text-left">
            <div className="font-bold text-base text-foreground mb-1">
              {author.name}
            </div>
            <div className="text-sm font-medium text-primary">
              {author.position}
            </div>
            <div className="text-sm text-muted-foreground font-normal">
              {author.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
