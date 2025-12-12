"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";

import { CARD_HERO_PROP } from "@/common/types";

export function CardHero({ contentCard }: CARD_HERO_PROP) {
  const { badge, description, highlight, primaryCTA, secondaryCTA, title } =
    contentCard;
  const { icon: Icon, text } = badge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
      className="space-y-8 w-full"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-100 to-purple-100 text-primary px-6 py-3 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border border-blue-200/50"
      >
        <Icon className="h-5 w-5" />
        <span>{text}</span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance"
      >
        {title}
        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
          {highlight}
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty"
      >
        {description}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white group shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            {primaryCTA.text}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {secondaryCTA.text}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
