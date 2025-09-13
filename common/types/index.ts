import { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  IHeaderMenu,
  IHeroBadge,
  IHeroButtonCTA,
  IHeroSlide,
  IService,
} from '../interfaces';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

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
  | 'DESARROLLO'
  | 'MARKETING'
  | 'CONSULTORIA'
  | 'E-COMMERCE';

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
};

export type PARTICLES_FLOATING_PROP = {
  quantity: number;
};
