import {
  ISidebarMenu,
  IUserConnected,
} from "@/common/interfaces/dashboard.interface";

export type CMS_USER_PROP = {
  usuarioConectado: IUserConnected;
};

export type NAV_MENU_PROP = {
  menu: ISidebarMenu[];
};

export type NAV_SUBMENU_PROP = {
  item: ISidebarMenu;
};
