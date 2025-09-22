"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import { ICON_STATS_SERVICE } from "@/data";

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="absolute inset-0 opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ICON_STATS_SERVICE.map(
            ({ id, icon: Icon, title, value, suffix, color }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: id * 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-6 rounded-2xl p-8 group"
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:animate-pulse">
                  {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>
                <motion.div
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: id * 0.5,
                  }}
                  className={`text-5xl font-bold ${color}`}
                >
                  <CountUp
                    start={0}
                    end={value}
                    suffix={suffix}
                    enableScrollSpy
                    duration={4}
                  />
                </motion.div>
                <div className="text-lg text-muted-foreground font-semibold">
                  {title}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
