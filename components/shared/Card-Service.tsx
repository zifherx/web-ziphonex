"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

import { CARD_FEATURE_SERVICE_PROP } from "@/common/types";
import { formatPriceForPEN } from "@/common/utils/global";

export function CardService({
  servicio,
  isHovered,
}: CARD_FEATURE_SERVICE_PROP) {
  const {
    popular,
    icon: Icon,
    shortDescription,
    features,
    price,
    slug,
    title,
    bgColor,
    color,
  } = servicio;

  return (
    <Card
      className={`h-full overflow-hidden border-0 shadow-2xl ${
        popular ? "ring-2 ring-primary/50" : ""
      } ${
        isHovered ? "shadow-primary/25" : "shadow-black/10"
      } transition-all duration-500`}
    >
      {/* Fondo degrade */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
          bgColor || "from-primary/5 to-secondary/5"
        }`}
      />

      {/* Borde animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-lg">
        <div className="w-full h-full bg-card rounded-lg" />
      </div>

      <CardHeader className="relative text-center pb-4 z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 p-4 rounded-2xl w-fit relative overflow-hidden"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              color || "from-primary to-secondary"
            } opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
          />
          <Icon className="relative h-10 w-10 text-primary z-10" />

          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 blur-xl"
            animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <CardTitle className="font-playfair text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>

        <CardDescription className="text-muted-foreground mb-4 text-base leading-relaxed">
          {shortDescription}
        </CardDescription>

        <motion.div
          className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          whileHover={{ scale: 1.1 }}
        >
          Desde {formatPriceForPEN(price)}
        </motion.div>
      </CardHeader>

      <CardContent className="relative pt-0 z-10">
        <ul className="space-y-4 mb-8">
          {features
            .filter((f) => f.isServiceFeature)
            .slice(0, 5)
            .map(({ id, name }) => (
              <motion.li
                key={id}
                className="flex items-start text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: id * 0.1 }}
              >
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                <span className="group-hover:text-foreground transition-colors duration-300">
                  {name}
                </span>
              </motion.li>
            ))}
        </ul>
      </CardContent>

      <CardFooter className="relative z-10 flex flex-col space-y-3">
        {/* <div className="flex flex-col"> */}
        <Button
          className={`w-full group relative overflow-hidden ${
            popular
              ? "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
              : "bg-secondary hover:bg-secondary/90"
          } text-white border-0 py-3 rounded-xl transition-all duration-300 transform hover:scale-105`}
          asChild
        >
          <Link href={`/servicios/${slug}`} className="relative z-10">
            Ver Detalles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </Link>
        </Button>

        <Button
          variant="outline"
          className="w-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 py-3 rounded-xl bg-transparent"
        >
          Solicitar Cotización
        </Button>
      </CardFooter>
    </Card>
  );
}
