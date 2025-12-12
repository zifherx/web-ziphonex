import { GENERAL_ICON } from "../types";

export interface IUserConnected {
  name: string;
  email: string;
  avatar: string;
  isActive: boolean;
  cerrarSesion: () => Promise<void>;
}

export interface ISidebarMenu {
  id: number;
  slug: string;
  label: string;
  icon: GENERAL_ICON;
  color: string;
  hasSubmenu: boolean;
  submenu?: ISidebarSubMenu[];
  isDropdown?: boolean;
  isActive?: boolean;
}

export interface ISidebarSubMenu {
  id: number;
  slug: string;
  label: string;
  icon?: GENERAL_ICON;
}
