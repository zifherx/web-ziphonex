"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";

import { ListItem } from "./List-Item";

import { NEW_HEADER_MENU } from "@/data";

export function NewDesktopMenu() {
  return (
    <NavigationMenu className="hidden md:flex items-center">
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              Inicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-background hover:bg-accent text-lg">
            Empresa
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-5 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/80 to-accent p-3 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Sobre Ziphonex
                    </div>
                    <p className="text-sm leading-tight text-gray-100">
                      Transformamos ideas en soluciones digitales innovadoras
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <ListItem href="/nosotros#historia" title="Nuestra Historia">
                Conoce nuestro recorrido
              </ListItem>
              <ListItem href="/nosotros#equipo" title="Equipo">
                Los expertos detrás de Ziphonex
              </ListItem>
              <ListItem href="/casos-exito" title="Casos de Éxito">
                Proyectos que transformaron negocios
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-background hover:bg-accent text-lg">
            Servicios
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
              {NEW_HEADER_MENU.services.map(
                ({ description, href, id, title }) => (
                  <ListItem key={id} href={href} title={title}>
                    {description}
                  </ListItem>
                )
              )}
              <li className="col-span-full mt-4 flex justify-center">
                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent hover:scale-105"
                >
                  <Link href="/servicios">Ver todos los servicios</Link>
                </Button>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contacto" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              Contacto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
