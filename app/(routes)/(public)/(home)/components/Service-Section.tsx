'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

import { CardFeatureService } from '@/components/shared/Card-Feature-Service';
import { TitleSection } from '@/components/shared/Title-Section';

import { ACTIVE_SERVICE_LIST } from '@/data';

export function ServiceSection() {
  return (
    <section className='py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        <TitleSection
          plainTitle='Servicios que'
          colorTitle='Transforman'
          description='Ofrecemos soluciones digitales integrales diseñadas para impulsar tu negocio hacía el éxito en la era digital.'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {ACTIVE_SERVICE_LIST.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className='group'
            >
              <CardFeatureService servicio={service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size='lg'
              asChild
              className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <Link href='/servicios'>Ver Todos los Servicios</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
