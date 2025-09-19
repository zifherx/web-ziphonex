"use client";

import { TitleSection } from "@/components/shared/Title-Section";
import { STATS_NOSOTROS } from "@/data";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export function StatsSection() {
  return (
    <section className="py-32 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleSection
          plainTitle="Números que nos"
          colorTitle="definen"
          description=""
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS_NOSOTROS.map(({ id, suffix, title, value }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <CountUp
                start={0}
                end={value}
                suffix={suffix}
                duration={5}
                enableScrollSpy
                className="font-playfair text-4xl md:text-5xl font-bold text-primary"
              />
              <div className="text-muted-foreground font-medium mt-3">
                {title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
