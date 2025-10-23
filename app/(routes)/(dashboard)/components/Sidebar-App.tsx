"use client"

import { ComponentProps } from "react"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"
import { NavUser } from "./Nav-User"

export function SidebarApp({...props}: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>
        <NavUser/>
      </SidebarFooter>
    </Sidebar>
  )
}
