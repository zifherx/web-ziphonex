"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

import { CARD_FEATURE_SERVICE_PROP } from "@/common/types";

export function CardFeatureService({ servicio }: CARD_FEATURE_SERVICE_PROP) {
  const {
    bgColor,
    color,
    icon: Icon,
    title,
    shortDescription,
    features,
    slug,
  } = servicio;

  return (
    <Card
      className={`h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 border-0 ${bgColor} backdrop-blur-sm relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <CardHeader className="text-center pb-4 relative z-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className={`mx-auto mb-4 p-4 bg-gradient-to-br ${color} rounded-2xl w-fit shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>

        <CardTitle className="font-playfair text-xl text-foreground group-hover:text-primary transition-colors duration-300s">
          {title}
        </CardTitle>

        <CardDescription className="text-muted-foreground">
          {shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 relative z-10">
        <ul className="space-y-3 mb-6">
          {features
            .filter((a) => a.isHomeFeature)
            .map(({ id, name }, indexFeature) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: id * 0.2 + indexFeature * 0.1 }}
                className="flex items-center text-sm text-muted-foreground"
              >
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className={`w-2 h-2 bg-gradient-to-r ${color} rounded-full mr-3 shadow-sm`}
                />
                {name}
              </motion.li>
            ))}
        </ul>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            className={`w-full group-hover:bg-gradient-to-r group-hover:${color} group-hover:text-white group-hover:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-lg`}
            asChild
          >
            <Link href={`/servicios/${slug}`}>Más Información</Link>
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
}
