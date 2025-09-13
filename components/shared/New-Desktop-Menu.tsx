"use client"

import Link from 'next/link';
import {motion} from 'framer-motion'
import { ChevronRight } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { Button } from '../ui/button';

import { NEW_HEADER_MENU } from '@/data';

export function NewDesktopMenu() {
  return (
    <div className='hidden md:flex items-center'>
      <NavigationMenu>
        <NavigationMenuList className='space-x-2'>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
                Inicio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-background hover:bg-accent'>
              Empresa
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='grid gap-3 p-6 w-[400px]'>
                <div className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <Link href="/nosotros">
                      <div className='mb-2 mt-4 text-lg font-medium text-primary'>
                        Sobre Ziphonex
                      </div>
                      <p className='text-sm leading-tight text-muted-foreground'>
                        Transformamos ideas en soluciones digitales innovadoras
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>

                <div className='grid gap-2'>
                  {
                    NEW_HEADER_MENU.compania.map(({id, title, description, href}) => (
                      <NavigationMenuLink key={id} asChild>
                          <Link href={href} className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group'>
                            <div className='text-sm font-medium leading-none flex items-center'>
                              {title}
                              <ChevronRight className='w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity'/>
                            </div>
                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{description}</p>
                          </Link>
                      </NavigationMenuLink>
                    ))
                  }
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-background hover:bg-accent'>
              Servicios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                  <div className='grid w-[600px] gap-3 p-4 md:grid-cols-2'>
                    {
                      NEW_HEADER_MENU.services.map(({description,href, id, title}) => (
                        <NavigationMenuLink key={id} asChild>
                          <Link href={href} className='block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group border border-transparent hover:border-primary/20'>
                            <div className='text-sm font-medium leading-none flex items-center'>
                              {title}
                              <ChevronRight className='w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity'/>
                            </div>
                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground mt-1'>
                              {description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))
                    }
                  </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link href="/contacto" legacyBehavior passHref>
              <NavigationMenuLink className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
              Contacto
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <motion.div
        whileHover={{scale: 1.05}}
        whileTap={{ scale: 0.95}}
        className='ml-6'
      >
        <Button className='bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 font-medium'>
          Cotizar Proyecto
        </Button>
      </motion.div>
    </div>
  );
}
