"use client";

import { motion } from "framer-motion";
import { CheckCircle, CircleStar } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SERVICE_INFO_PROP } from "@/common/types";
import { formatPriceForPEN } from "@/common/utils/GlobalFunctions";

export function InfoProduct({ service }: SERVICE_INFO_PROP) {
  const {
    icon: Icon,
    title,
    longDescription,
    includes,
    deliveryTime,
    price,
  } = service;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="space-y-8"
    >
      <Card className="rounded-3xl overflow-hidden">
        <CardHeader className="text-center pb-6">
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="mx-auto mb-6 p-6 bg-gradient-to-br from-primary to-secondary rounded-2xl w-fit"
          >
            <Icon className="h-16 w-16 text-white" />
          </motion.div>

          <CardTitle className="font-bold text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </CardTitle>

          <CardDescription className="text-lg">
            {longDescription}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h4 className="font-bold text-xl text-foreground flex items-center gap-3">
              <CircleStar className="h-6 w-6 text-primary" />
              Incluye:
            </h4>
            <ul className="space-y-2">
              {includes.map(({ id, name }) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: id * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  {name}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="border-t border-boder/50 pt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Tiempo de entrega:</span>
              <span className="font-bold text-primary">{deliveryTime}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Precio base:</span>
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Desde {formatPriceForPEN(price)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl p-8"></Card>
    </motion.div>
  );
}
