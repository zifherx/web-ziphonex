'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Badge } from '../ui/badge';

import { LOGO_PROP } from '@/common/types';

export function Logo({ badge, href, name, imageSource }: LOGO_PROP) {
  return (
    <Link href={href} className='flex items-center space-x-3 group'>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className='relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300'
      >
        <Image src={imageSource} alt={name} fill className='object-contain' />
      </motion.div>
      <div className='flex flex-col'>
        <span className='font-playfair font-boold text-xl text-foreground group-hover:text-primary transition-colors duration-300'>
          {name}
        </span>
        <Badge
          variant='secondary'
          className='text-xs px-2 py-0 bg-primary text-white border-primary font-medium'
        >
          {badge}
        </Badge>
      </div>
    </Link>
  );
}
