"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Package } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { SERVICE_HERO_PROP } from "@/common/types";
import { formatPriceForPEN } from "@/common/utils/global";

export function HeroSection({ service }: SERVICE_HERO_PROP) {
  const {
    title,
    deliveryTime,
    longDescription,
    category,
    color,
    price,
    icon: Icon,
  } = service;

  return (
    <section className="pb-16 bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                {category}
              </Badge>
              <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground text-balance">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                {longDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>{deliveryTime}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Package className="h-5 w-5" />
                <span>{category}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="cursor-pointer bg-primary hover:bg-primary/90"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                Agendar Consulta
              </Button>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`p-8 bg-gradient-to-br ${color} rounded-3xl shadow-2xl`}
            >
              <div className="text-center text-white space-y-6">
                <Icon className="h-24 w-24 mx-auto" />
                <div>
                  <div className="text-4xl font-bold mb-2">
                    Desde {formatPriceForPEN(price)}
                  </div>
                  <div className="text-lg opacity-90">Precio inicial</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
