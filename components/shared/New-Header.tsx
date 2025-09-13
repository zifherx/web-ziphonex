'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Logo } from './Logo';
import { NewDesktopMenu } from './New-Desktop-Menu';
import { MobileMenu } from './Mobile-Menu';

export function NewHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className='fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 z-50 shadow-lg shadow-primary/5'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Logo
            badge='Agencia Digital'
            name='Ziphonex'
            href='/'
            imageSource='/images/logo/logo.png'
          />

          {/* Desktop-Menu */}
          <NewDesktopMenu />

          {/* Mobile-Menu */}
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navMenu={[]}/>
        </div>
      </div>
    </motion.nav>
  );
}
