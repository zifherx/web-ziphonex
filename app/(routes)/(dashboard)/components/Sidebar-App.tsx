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
  // const mockUserLogged = {
  //   avatar: "",
  //   email: "frojasq@ziphonex.com",
  //   name: "Fernando Rojas",
  //   isActive: true,
  //   cerrarSesion: async () => await console.log("Cerrar sesión"),
  // };

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
            // usuarioConectado={{
            //   avatar: userLogged.avatar,
            //   email: userLogged.email,
            //   name: userLogged.name,
            //   isActive: userLogged.isActive,
            //   cerrarSesion: userLogged.cerrarSesion,
            // }}
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
