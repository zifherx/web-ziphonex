import { Menu } from "lucide-react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

import { MOBILE_NAV_PROP } from "@/common/types";
import { NEW_HEADER_MENU } from "@/data";

export function MobileMenu({ isOpen, setIsOpen }: MOBILE_NAV_PROP) {
  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="hover:bg-primary/10">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] px-2">
          <div className="flex flex-col space-y-6 mt-6">
            <Link
              href="/"
              className="text-lg font-semibold hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Empresa
              </h3>
              {NEW_HEADER_MENU.compania.map(({ href, id, title }) => (
                <Link
                  key={id}
                  href={href}
                  className="block text-sm hover:text-primary transition-colors pl-4 border-l-2 border-transparent hover:border-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Servicios
              </h3>
              {NEW_HEADER_MENU.services.map(({ href, id, title }) => (
                <Link
                  key={id}
                  href={href}
                  className="block text-sm hover:text-primary transition-colors pl-4 border-l-2 border-transparent hover:border-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              ))}
            </div>

            <Link
              href="/contacto"
              className="text-lg font-semibold hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>

            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
              Cotizar Proyecto
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
