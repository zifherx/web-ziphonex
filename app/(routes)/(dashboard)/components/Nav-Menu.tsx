import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { NavSubmenu } from "./Nav-Submenu";

import { NAV_MENU_PROP } from "@/common/types/dashboard/types";

export function NavMenu({ menu }: NAV_MENU_PROP) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-0">
          {menu.map((item, idx) => (
            <NavSubmenu key={idx} item={item} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
