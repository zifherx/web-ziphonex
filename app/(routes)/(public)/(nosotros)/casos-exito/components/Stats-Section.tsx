"use client";

import { motion } from "framer-motion";

import { LIST_STATS_NOSOTROS } from "@/data";
import CountUp from "react-countup";

export function StatsSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {LIST_STATS_NOSOTROS.map(({ id, suffix, title, value }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <CountUp
                start={0}
                end={value}
                suffix={suffix}
                duration={5}
                className="text-3xl md:text-4xl font-bold mb-2"
                enableScrollSpy
              />
              <div className="text-primary-foreground/80 text-sm">{title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
