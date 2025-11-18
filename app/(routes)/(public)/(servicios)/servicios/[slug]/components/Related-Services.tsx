"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TitleSection } from "@/components/shared/Title-Section";

import { formatPriceForPEN } from "@/common/utils/GlobalFunctions";
import { RELATED_SERVICES_PROP } from "@/common/types";

export function RelatedServices({ relatedServices }: RELATED_SERVICES_PROP) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <TitleSection
          plainTitle="Servicios"
          colorTitle="Relacionados"
          description="Otros servicios que podrían interesarte"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map(
            ({ id, icon: Icon, title, shortDescription, price, slug }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: id * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-playfair text-xl">
                      {title}
                    </CardTitle>
                    <CardDescription>{shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-4">
                      <div className="text-xl font-bold text-primary">
                        Desde {formatPriceForPEN(price)}
                      </div>
                      <Button variant="outline" asChild>
                        <Link
                          href={`/servicios/${slug}`}
                          className="w-full bg-transparent"
                        >
                          Ver Detalles
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
