import { Metadata } from "next";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { NavigationApp } from "./components/Navigation-App";
import { SidebarApp } from "./components/Sidebar-App";
import DashboardProviders from "./providers";

import { GENERAL_TYPE } from "@/common/types";

export const metadata: Metadata = {
  title: {
    default: "CMS",
    template: "",
  },
};

export default function LayoutDashboard({ children }: GENERAL_TYPE) {
  return (
    <DashboardProviders>
      <SidebarProvider>
        <SidebarApp />
        <SidebarInset>
          <main className="flex flex-col gap-4 p-4 pt-5">
            <NavigationApp />
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </DashboardProviders>
  );
}
