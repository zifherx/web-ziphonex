"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";
import { NAV_SUBMENU_PROP } from "@/common/types/dashboard/types";

export function NavSubmenu({ item }: NAV_SUBMENU_PROP) {
  const {
    color,
    hasSubmenu,
    icon: Icon,
    isActive,
    label,
    slug,
    isDropdown,
    submenu,
  } = item;

  return (
    <>
      {hasSubmenu ? (
        <Collapsible
          asChild
          defaultOpen={isDropdown}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger className="w-full">
              <SidebarMenuButton tooltip={label}>
                <Icon className={cn(color)} />
                <span>{label}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {submenu?.map((subitem) => (
                  <SidebarMenuSubItem key={subitem.id}>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${slug}/${subitem.slug}`}>
                        {subitem.label}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ) : (
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={isActive}>
            <Link href={`/${slug}`}>
              <Icon strokeWidth={2} />
              <span>{label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )}
    </>
  );
}
