"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import { CARD_STAT_PROP } from "@/common/types";

export function CardStat({ stat }: CARD_STAT_PROP) {
  const { color, icon: Icon, title, suffix, value } = stat;

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className={`mx-auto mb-4 p-4 bg-gradient-to-br ${color} rounded-2xl w-fit shadow-lg group-hover:shadow-xl transition-all duration-300`}
      >
        {Icon && <Icon className="w-8 h-8 text-white" />}
      </motion.div>

      <CountUp
        start={0}
        end={value}
        suffix={suffix}
        duration={5}
        className="text-3xl md:text-4xl font-bold text-primary mb-2"
      />
      <div className="text-muted-foreground font-medium">{title}</div>
    </>
  );
}
