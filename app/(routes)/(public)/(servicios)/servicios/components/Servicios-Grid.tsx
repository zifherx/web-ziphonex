'use client';

import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';

import { CardService } from '@/components/shared/Card-Service';

import { SERVICES_LIST } from '@/data';

export function ServiciosGrid() {
  return (
    <section id='grid-section' className='py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='relative'
            >
              {service.popular && (
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 z-10'>
                  <Badge className='bg-secondary text-secondary-foreground'>
                    Más Popular
                  </Badge>
                </div>
              )}

              <CardService servicio={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
