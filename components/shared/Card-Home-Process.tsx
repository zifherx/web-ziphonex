"use client";

import { motion } from "framer-motion";

import { CARD_HOME_PROCESS_PROP } from "@/common/types";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";

export function CardHomeProcess({
  process,
  totalStep,
}: CARD_HOME_PROCESS_PROP) {
  const { bgColor, color, description, icon: Icon, id, title } = process;

  return (
    <Card
      className={`relative h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border-0 bg-gradient-to-br ${bgColor} backdrop-blur-sm overflow-hidden group`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-12 h-12 bg-gradient-to-r ${color} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg`}
        >
          0{id}
        </motion.div>
      </div>

      <CardContent className="p-8 text-center relative z-10 pt-12">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
        >
          <Icon className="h-10 w-10 text-white" />
        </motion.div>

        <h3 className="text-2xl font-playfair font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Arrow indicator for connection */}
        {id < totalStep - 1 && (
          <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className={`w-8 h-8 bg-gradient-to-r ${color} rounded-full flex items-center justify-center shadow-lg`}
            >
              <ArrowRight className="h-4 w-4 text-white" />
            </motion.div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
