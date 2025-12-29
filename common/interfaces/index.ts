import { ComponentPropsWithoutRef, ReactNode } from "react";
import { BUSINESS_LINE, CATEGORY_SERVICE, GENERAL_ICON } from "../types";
import { LucideIcon } from "lucide-react";

export interface IGeneral {
  id: number;
}

export interface IHeaderMenu extends IGeneral {
  label: string;
  href: string;
}

export interface IShorcutsIconFooter extends IGeneral {
  icon: GENERAL_ICON;
  label: string;
}

export interface ISocialNetworkShorcut extends IGeneral {
  label: string;
  href: string;
  icon: GENERAL_ICON;
}

export interface IFeatureService extends IGeneral {
  name: string;
  isHomeFeature: boolean;
  isServiceFeature: boolean;
}

export interface IIncludeService extends IGeneral {
  name: string;
}

export interface IService extends IGeneral {
  id: number;
  icon: GENERAL_ICON;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: IFeatureService[];
  price: number;
  popular: boolean;
  isActive: boolean;
  isFeature: boolean;
  color: string;
  bgColor: string;
  category: CATEGORY_SERVICE;
  deliveryTime: string;
  includes: IIncludeService[];
}

export interface IHeroButtonCTA {
  text: string;
  href: string;
}

export interface IHeroBadge {
  icon: GENERAL_ICON;
  text: string;
}

export interface IHeroSlide extends IGeneral {
  title: string;
  highlight: string;
  description: string;
  badge: IHeroBadge;
  primaryCTA: IHeroButtonCTA;
  secondaryCTA: IHeroButtonCTA;
}

export interface IProcess extends IGeneral {
  icon: GENERAL_ICON;
  title: string;
  description: string;
  details?: string;
  color: string;
  bgColor: string;
  features?: IFeature[];
  duration?: string;
}

export interface IProcessHome extends IGeneral {
  icon: GENERAL_ICON;
  title: string;
  description: string;
  number: string;
  color: string;
  bgColor: string;
}

export interface ITrustIndicators extends IGeneral {
  icon: GENERAL_ICON;
  label: string;
}

export interface IFeature extends IGeneral {
  name: string;
}

export interface NumerParseResult {
  isNumber: boolean;
  numericValue: number;
  symbol?: string;
  originalValue: string | number;
}

export interface IStatGeneral {
  id: number;
  title: string;
  icon?: GENERAL_ICON;
  value: number;
  suffix: string;
  color: string;
}

export interface INewsletterFooter extends IGeneral {
  title: string;
}

export interface IAuthor {
  name: string;
  position: string;
  avatar: string;
  company: string;
}

export interface ITestimonial extends IGeneral {
  author: IAuthor;
  resena: string;
  rating: number;
  isActive: boolean;
}

export interface ListItemProps extends ComponentPropsWithoutRef<"li"> {
  title: string;
  href: string;
  children: ReactNode;
}

export interface IFloatingIcon extends IGeneral {
  icon: GENERAL_ICON;
  delay: number;
  x: string;
  y: string;
}

export interface IList extends IGeneral {
  name: string;
}

export interface IFaqContact extends IGeneral {
  icon: GENERAL_ICON;
  title: string;
  value: string;
  description: string;
  gradient: string;
  iconBg: string;
  iconColor: string;
}

export interface IResult extends IGeneral {
  metric: string;
  label: string;
}

export interface ITechnology extends IGeneral {
  name: string;
}

export interface ITestimonialCase {
  text: string;
  author: string;
  position: string;
}

export interface ICasoExito extends IGeneral {
  title: string;
  category: BUSINESS_LINE;
  description: string;
  image: string;
  results: IResult[];
  technologies: ITechnology[];
  testimonial: ITestimonialCase;
  link_website: string;
}

export interface IPrincipios_Nosotros extends IGeneral {
  icon: GENERAL_ICON;
  title: string;
  description: string;
}

export interface ITeamMember extends IGeneral {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface ITipoDocumento extends IGeneral {
  value: string;
  label: string;
  maxLength: number;
}

export interface IIconMapItem {
  icon: GENERAL_ICON;
  color: string;
  name: string;
}

export interface IIndicator {
  id: number;
  title: string;
  value: number;
  icon: LucideIcon;
  bgIcon: string;
  colorIcon: string;
}
