"use client";

import { motion } from "framer-motion";
import { Brain, CheckCircle, Target, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SERVICE_HERO_PROP } from "@/common/types";
import { formatPriceForPEN } from "@/common/utils/GlobalFunctions";
import Link from "next/link";

export function FeaturesSection({ service }: SERVICE_HERO_PROP) {
  const { features, includes, price, deliveryTime, slug } = service;

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.h2
                className="font-bold font-playfair text-5xl md:text-6xl text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                ¿Qué incluye este{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  servicio?
                </span>
              </motion.h2>
              <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>

            <div className="space-y-3">
              {features
                .filter((a) => a.isServiceFeature)
                .map(({ id, name }) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: -50, rotateY: -90 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.6, delay: id * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-3 rounded-2xl group hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="shrink-0">
                      <CheckCircle className="h-8 w-8 text-primary group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {name}
                    </h3>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-3xl p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50" />
              <div className="relative z-10">
                <CardHeader className="px-0 pt-0 pb-8">
                  <CardTitle className="font-bold text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Paquete Completo
                  </CardTitle>
                  <CardDescription className="text-xl text-muted-foreground">
                    Todo lo que necesitas para dominar el mercado
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0 space-y-8">
                  <div className="space-y-6">
                    <h4 className="font-bold text-2xl text-foreground flex items-center gap-3">
                      <Target className="h-6 w-6 text-primary" />
                      Incluye:
                    </h4>
                    <ul className="space-y-4">
                      {includes.map(({ id, name }) => (
                        <motion.li
                          key={id}
                          className="flex items-center gap-4 text-lg text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: id * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                          <span className="font-medium">{name}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border/50 pt-8 space-y-6">
                    <div className="flex justify-between items-center text-lg">
                      <span className="text-muted-foreground font-medium">
                        Tiempo de entrega:
                      </span>
                      <span className="font-semibold">{deliveryTime}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xl text-muted-foreground font-medium">
                        Inversión:
                      </span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Desde {formatPriceForPEN(price)}
                      </span>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white py-6 text-xl font-bold rounded-2xl group"
                      size="lg"
                      asChild
                    >
                      <Link href={`/cotizar/${slug}`}>
                        <Brain className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                        Contratar Ahora
                        <Zap className="ml-3 h-6 w-6 group-hover:scale-125 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
