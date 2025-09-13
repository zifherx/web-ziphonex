import { CATEGORY_SERVICE, GENERAL_ICON } from '../types';

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
  details: string;
  color: string;
  bgColor: string;
  features: IFeature[];
  duration: string;
}

export interface ITrustIndicators extends IGeneral {
  icon: GENERAL_ICON;
  label: string;
}

export interface IFeature extends IGeneral {
  name: string;
}
