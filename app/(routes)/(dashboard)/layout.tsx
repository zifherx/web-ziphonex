import { Metadata } from "next";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { NavigationApp } from "./components/Navigation-App";
import { SidebarApp } from "./components/Sidebar-App";

import { REACT_CHILDREN_PROP } from "@/types/common.types";

export const metadata: Metadata = {
  title: {
    default: 'CMS Dashboard',
    template: ''
  }
}

export default function LayoutDashboard({children}: REACT_CHILDREN_PROP) {
  return (
    <SidebarProvider>
      <SidebarApp/>
      <SidebarInset>
        <main className="flex flex-col gap-4 p-4 pt-5">
          <NavigationApp/>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

