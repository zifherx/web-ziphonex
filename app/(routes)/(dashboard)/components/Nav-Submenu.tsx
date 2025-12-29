"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";
import { NAV_SUBMENU_PROP } from "@/common/types/dashboard/types";

export function NavSubmenu({ item }: NAV_SUBMENU_PROP) {
  const pathname = usePathname();

  const { color, hasSubmenu, icon: Icon, label, slug, submenu } = item;

  const isMainItemActive = pathname === `${slug}`;
  const hasActiveSubmenu = hasSubmenu && submenu?.some((subitem) => pathname === `${slug}/${subitem.slug}`);
  const shouldExpand = hasActiveSubmenu;

  return (
    <>
      {hasSubmenu ? (
        <Collapsible asChild defaultOpen={shouldExpand} className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger className="w-full">
              <SidebarMenuButton
                tooltip={label}
                className={cn(
                  "transition-colors",
                  hasActiveSubmenu && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
              >
                <Icon className={cn("transition-colors", color)} />
                <span className="font-medium">{label}</span>
                <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarMenuSub>
                {submenu?.map((subitem) => {
                  const subitemPath = `/${slug}/${subitem.slug}`;
                  const isSubitemActive = pathname === subitemPath;

                  return (
                    <SidebarMenuSubItem key={subitem.id}>
                      <SidebarMenuSubButton asChild isActive={isSubitemActive}>
                        <Link href={subitemPath} className={cn("transition-colors", isSubitemActive && "font-medium")}>
                          {isSubitemActive && <span className="absolute left-0 w-1 h-4 bg-primary rounded-r-full" />}
                          {subitem.label}
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ) : (
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={isMainItemActive} tooltip={label}>
            <Link href={`/${slug}`} className="transition-colors">
              <Icon strokeWidth={2} className={cn("transition-colors", isMainItemActive ? "text-primary" : color)} />
              <span className={cn("font-medium transition-colors", isMainItemActive && "text-foreground")}>
                {label}
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )}
    </>
  );
}
