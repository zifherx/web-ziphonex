"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Package, Rocket } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { SERVICE_HERO_PROP } from "@/common/types";
import { formatPriceForPEN } from "@/common/utils/global";
import Link from "next/link";
import { ICON_LABEL_SERVICE } from "@/data";

export function HeroSection({ service }: SERVICE_HERO_PROP) {
  const {
    title,
    deliveryTime,
    longDescription,
    category,
    color,
    price,
    icon: Icon,
    slug,
  } = service;

  return (
    <section className="pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-2 font-bold rounded-full">
                  {category}
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-bold text-3xl md:text-5xl lg:text-7xl text-foreground text-balance leading-none"
              >
                {title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, rotateX: -90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                    className={
                      index % 2 === 1 ? "text-primary" : "text-secondary"
                    }
                    style={{ display: "inline-block", marginRight: "0.5rem" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-2xl md:text-3xl text-muted-foreground text-pretty leading-relaxed"
              >
                {longDescription}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Button
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-12 py-6 text-xl font-bold rounded-2xl group"
                size="lg"
                asChild
              >
                <Link href={`/cotizar/${slug}`}>
                  <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Cotizar Ahora
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {ICON_LABEL_SERVICE.map(({ id, icon: Icon }) => {
                const newLabels = [deliveryTime, category, "Premium"];
                return (
                  <div
                    key={id}
                    className="flex items-center gap-2 rounded-xl px-2 py-1"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-base font-semibold">
                      {newLabels[id - 1]}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div className="relative perspective-midrange">
            <motion.div
              className="relative transform-3d"
              whileHover={{ scale: 1.05, rotateY: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={`p-12 bg-gradient-to-br ${color} rounded-3xl shadow-2xl relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20" />
                <div className="relative z-10 text-center text-white space-y-8">
                  <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Icon className="w-32 h-32 mx-auto drop-shadow-2xl" />
                  </motion.div>
                  <div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="text-6xl font-bold mb-4"
                    >
                      {formatPriceForPEN(price)}
                    </motion.div>
                    <div className="text-2xl opacity-90">Inversión inicial</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
