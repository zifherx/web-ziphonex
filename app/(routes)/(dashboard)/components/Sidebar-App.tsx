"use client";

import { ComponentProps } from "react";
import { useUser } from "@stackframe/stack";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { LogoSidebar } from "./Logo-Sidebar";
import { NavMenu } from "./Nav-Menu";
import { NavUser } from "./Nav-User";

import { Sidebar_Menu } from "@/data/dashboard/menu.data";

export function SidebarApp({ ...props }: ComponentProps<typeof Sidebar>) {
  const userLogged = useUser();

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
