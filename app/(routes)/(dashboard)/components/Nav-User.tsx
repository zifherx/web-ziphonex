"use client";

import { useState } from "react";
import { Bell, ChevronsUpDown, Loader2, LogOut, Settings, ShieldUser } from "lucide-react";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { CMS_USER_PROP } from "@/common/types/dashboard/types";
import { getInitials } from "@/common/utils/GlobalFunctions";

export function NavUser({ usuarioConectado }: CMS_USER_PROP) {
  const { avatar, cerrarSesion, email, isActive, name } = usuarioConectado;
  const { isMobile } = useSidebar();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const initials = getInitials(name);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await cerrarSesion();
    } catch (err: any) {
      console.error("Error al cerrar sesión", err.message);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-9 w-9 rounded-lg">
                <AvatarImage src={avatar !== null ? avatar : "/avatars/shadcn.jpg"} alt={`Avatar de ${name}`} />
                <AvatarFallback className="rounded-lg bg-primary/10 text-primary font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{name}</span>
                <span className="truncate text-xs">{email}</span>
              </div>

              <ChevronsUpDown className="ml-auto size-5" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-10 w-10 rounded-lg">
                  <AvatarImage src={avatar !== null ? avatar : "/avatars/shadcn.jpg"} alt={name} />
                  <AvatarFallback className="rounded-lg bg-primary/10 text-primary font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{name}</span>
                  <span className="truncate text-xs">{email}</span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 w-4 h-4" />
                Configuración
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Bell className="mr-2 w-4 h-4" />
                Notificaciones
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <ShieldUser className="mr-2 w-4 h-4" />
                Privacidad
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => cerrarSesion()}
              disabled={isLoggingOut}
              className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
            >
              {isLoggingOut ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Cerrando sesión...</span>
                </>
              ) : (
                <>
                  <LogOut className="mr-2 w-4 h-4" />
                  <span>Cerrar sesión</span>
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
