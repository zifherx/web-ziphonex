"use client"

import Link from "next/link";

import { Button } from "../ui/button";

import { DESKTOP_MENU_PROP } from "@/common/types";

export function DesktopMenu({navMenu}: DESKTOP_MENU_PROP) {
  return (
    <div className="hidden md:flex items-center space-x-8">
        {
            navMenu.map(({href, id, label}) => (
                <Link key={id} href={href} className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                    { label}
                </Link>
            ))
        }
        <Button className="bg-primary hover:bg-primary/90">
            Cotizar Proyecto
        </Button>
    </div>
  )
}
