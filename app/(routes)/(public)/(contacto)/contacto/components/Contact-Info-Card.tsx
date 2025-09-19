"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

import { LIST_FAQ_CONTACT } from "@/data";

export function ContactInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-xl text-foreground mb-4">
        Información de Contacto
      </h3>
      <div className="space-y-4">
        {LIST_FAQ_CONTACT.map(
          ({
            id,
            description,
            gradient,
            icon: Icon,
            iconBg,
            iconColor,
            title,
            value,
          }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: id * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-gradient-to-br ${gradient} border-border/50 hover:shadow-md transition-all duration-300 hover:scale-[1.02]`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 ${iconBg} rounded-lg`}>
                      <Icon className={`w-4 h-4 ${iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm">
                        {title}
                      </h4>
                      <h4 className="text-foreground font-medium text-sm">
                        {value}
                      </h4>
                      <h4 className="text-muted-foreground text-xs">
                        {description}
                      </h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
}
