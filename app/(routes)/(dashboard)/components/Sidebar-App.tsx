"use client";

import { ComponentProps } from "react";
import { useUser } from "@stackframe/stack";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

import { LogoSidebar } from "./Logo-Sidebar";
import { NavMenu } from "./Nav-Menu";
import { NavUser } from "./Nav-User";

import { Sidebar_Menu } from "@/data/dashboard/menu.data";
import { Skeleton } from "@/components/ui/skeleton";

export function SidebarApp({ ...props }: ComponentProps<typeof Sidebar>) {
  const userLogged = useUser();

  if (!userLogged) {
    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <LogoSidebar />
        </SidebarHeader>
        <SidebarContent>
          <NavMenu menu={Sidebar_Menu} />
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2 p-2">
            <Skeleton className="h-9 w-9 rounded-lg" />
            <div className="flex-1 space-y-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    );
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoSidebar />
      </SidebarHeader>

      <SidebarContent>
        <NavMenu menu={Sidebar_Menu} />
      </SidebarContent>

      <SidebarFooter>
        {userLogged && (
          <NavUser
            usuarioConectado={{
              avatar: userLogged.profileImageUrl!,
              email: userLogged.primaryEmail!,
              name: userLogged.displayName!,
              isActive: true,
              cerrarSesion: userLogged.signOut,
            }}
          />
        )}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
