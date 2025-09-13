"use client"

import { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { Rocket, Zap } from 'lucide-react'

import { CardHero } from '@/components/shared/Card-Hero'

import { MAIN_HERO_SLIDES } from '@/data'

export function HeroSection() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const heroSlides = MAIN_HERO_SLIDES;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 8000)
        return () => clearInterval(timer)
    }, [])

    const currentHero = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50">
        {/* Animated background elements */}
        <div className="absolute inset-0">
            <motion.div
                animate={{ rotate: 360, scale: [1,1.2,1]}}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'linear'}}
                className='absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl'
                />
                
            <motion.div
                animate={{ rotate: 360, scale: [1.2,1,1.2]}}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: 'linear'}}
                className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl'
            />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center'>
            
            <AnimatePresence mode='wait'>
                <CardHero key={currentHero.id} contentCard={currentHero}/>
            </AnimatePresence>

            {/* Slide Indicators */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ delay: 1.2}}
                className='flex justify-center space-x-2 mt-12'
            >
                {
                    heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125': 'bg-gray-300 hover:bg-gray-400'} `}
                        />
                    ))
                }
            </motion.div>
            
            {/* Floating Icons */}
            <div className='absolute inset-0 pointer-events-none'>
                <motion.div
                    animate={{y: [-10,  10, -10], rotate: [0,5,-5,0]}}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut'}}
                    className='absolute top-1/4 left-8 text-blue-400/40'
                >
                    <Zap className='h-8 w-8' strokeWidth={2}/>
                </motion.div>
                <motion.div
                    animate={{y: [10,  -10, 10], rotate: [0,-5,5,0]}}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut'}}
                    className='absolute top-1/3 right-8 text-purple-400/40'
                >
                    <Rocket className='h-8 w-8' strokeWidth={2}/>
                </motion.div>
            </div>
        </div>
    </section>
  )
}
