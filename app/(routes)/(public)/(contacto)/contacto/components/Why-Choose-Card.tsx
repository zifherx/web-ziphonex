"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { LIST_FAQ_CHOOSE_US } from "@/data";

export function WhyChooseCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardContent className="p-6">
          <h4 className="font-bold text-lg text-foreground mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-slate-600" />
            ¿Por qué elegirnos?
          </h4>
          <div className="space-y-3">
            {LIST_FAQ_CHOOSE_US.map(({ id, name }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: id * 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
                <span className="text-muted-foreground">{name}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
