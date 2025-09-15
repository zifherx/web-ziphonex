"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SERVICE_HERO_PROP } from "@/common/types";
import { formatPriceForPEN } from "@/common/utils/global";

export function FeaturesSection({ service }: SERVICE_HERO_PROP) {
  const { features, includes, price } = service;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Features List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground">
                ¿Qué incluye este servicio?
              </h2>

              <div className="space-y-4">
                {features
                  .filter((f) => f.isServiceFeature)
                  .map(({ id, name }) => (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: id * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {name}
                        </h3>
                        {/* {feature.description && (
                            <p className="text-muted-foreground text-sm mt-1">{feature.description}</p>
                          )} */}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>

          {/* Package Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="font-playfair text-2xl">
                    Paquete Completo
                  </CardTitle>
                  <CardDescription>
                    Todo lo que necesitas para empezar
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Incluye:
                      </h4>
                      <ul className="space-y-2">
                        {includes.map(({ id, name }) => (
                          <li
                            key={id}
                            className="flex items-center gap-3 text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            {name}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-muted-foreground">
                          Tiempo de entrega:
                        </span>
                        <span className="font-semibold">
                          {service.deliveryTime}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-muted-foreground">Precio:</span>
                        <span className="text-2xl font-bold text-primary">
                          Desde {formatPriceForPEN(price)}
                        </span>
                      </div>

                      <Button
                        className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
                        size="lg"
                      >
                        Contratar Ahora
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
