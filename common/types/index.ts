import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  IFloatingIcon,
  IHeaderMenu,
  IHeroSlide,
  IProcess,
  IService,
  IStatGeneral,
  ITestimonial,
} from "../interfaces";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type GENERAL_TYPE = {
  children: ReactNode;
};

export type DESKTOP_MENU_PROP = {
  navMenu: IHeaderMenu[];
};

export type MOBILE_NAV_PROP = DESKTOP_MENU_PROP & {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type BOTTOM_BAR_PROP = {
  currentYear: number;
};

export type GENERAL_ICON = LucideIcon | IconType;

export type CATEGORY_SERVICE =
  | "DESARROLLO"
  | "MARKETING"
  | "CONSULTORIA"
  | "E-COMMERCE";

export type CARD_HERO_PROP = {
  contentCard: IHeroSlide;
};

export type LOGO_PROP = {
  href: string;
  name: string;
  badge: string;
  imageSource: string;
};

export type TITLE_SECTION_PROP = {
  plainTitle: string;
  colorTitle: string;
  description: string;
};

export type CARD_FEATURE_SERVICE_PROP = {
  servicio: IService;
  isHovered?: boolean;
};

export type PARTICLES_FLOATING_PROP = {
  quantity: number;
};

export type CARD_STAT_PROP = {
  stat: IStatGeneral;
};

export type CARD_HOME_PROCESS_PROP = {
  process: IProcess;
  totalStep: number;
};

export type CARD_TESTIMONIAL_PROP = {
  testimonial: ITestimonial;
};

export type POPULATION_STARTS = {
  rating: number;
};

export type SERVICE_GRID_PROPS = {
  hoveredService: number | null;
  setHoveredService: Dispatch<SetStateAction<number | null>>;
  servicios: IService[];
};

export type SERVICE_VIEW_PROP = {
  servicioSlug: string;
};

export type SERVICE_BREADCRUMB_PROP = {
  namePage: string;
};

export type SERVICE_HERO_PROP = {
  service: IService;
};

export type FLOATING_ICONS_PROP = {
  iconList: IFloatingIcon[];
};
