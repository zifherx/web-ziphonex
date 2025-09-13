'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';

import { CARD_FEATURE_SERVICE_PROP } from '@/common/types';
import { formatPriceForPEN } from '@/common/utils/global';

export function CardService({ servicio }: CARD_FEATURE_SERVICE_PROP) {
  const {
    popular,
    icon: Icon,
    shortDescription,
    features,
    price,
    slug,
    title,
  } = servicio;

  return (
    <Card
      className={`h-full hover:shadow-xl transition-all duration-300 group ${
        popular ? 'border-primary/50 shadow-lg' : ''
      }`}
    >
      <CardHeader className='text-center pb-4'>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className='mx-auto mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors'
        >
          <Icon className='h-8 w-8 text-primary' />
        </motion.div>
        <CardTitle className='font-playfair text-xl text-foreground mb-2'>
          {title}
        </CardTitle>
        <CardDescription className='text-muted-foreground mb-4'>
          {shortDescription}
        </CardDescription>
        <div className='text-2xl font-bold text-primary'>
          Desde {formatPriceForPEN(price)}
        </div>
      </CardHeader>
      <CardContent className='pt-0'>
        <ul className='space-y-3 mb-6'>
          {features
            .filter(f => f.isServiceFeature)
            .map(({ id, name }) => (
              <li
                key={id}
                className='flex items-start text-sm text-muted-foreground'
              >
                <CheckCircle className='h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0' />
                {name}
              </li>
            ))}
        </ul>
        <div className='space-y-3'>
          <Button
            className={`w-full group ${
              popular
                ? 'bg-primary hover:bg-primary/90'
                : 'bg-secondary hover:bg-secondary/90'
            }`}
            asChild
          >
            <Link href={`/servicios/${slug}`}>
              Ver Detalles
              <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
            </Link>
          </Button>
          <Button variant='outline' className='w-full bg-transparent'>
            Solicitar Cotización
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
