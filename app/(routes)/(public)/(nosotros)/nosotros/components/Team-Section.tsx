"use client";

import { motion } from "framer-motion";

import { CardTeamMember } from "@/components/shared/Card-Team-Member";

import { TEAM_MEMBER } from "@/data";

export function TeamSection() {
  return (
    <section
      id="equipo"
      className="py-32 bg-gradient-to-r from-blue-50/30 to-purple-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
            El equipo detrás de la magia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBER.map((member, index) => (
            <CardTeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
