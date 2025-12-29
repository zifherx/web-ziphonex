import { IconType } from "react-icons";
import * as ReactIcons from "react-icons/fa";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { IService, NumerParseResult } from "../interfaces";
import { GENERAL_ICON } from "../types";

export const transformServicesToMenuItems = (servicios: IService[]) => {
  return servicios.map((servicio) => ({
    id: servicio.id,
    title: servicio.title,
    description: servicio.shortDescription,
    href: `/servicios/${servicio.slug}`,
  }));
};

export const transformActiveFeatureServicesToMenuItems = (servicios: IService[]) => {
  return servicios
    .filter((servicio) => servicio.isActive && servicio.isFeature)
    .map((servicio) => ({
      id: servicio.id,
      title: servicio.title,
      description: servicio.shortDescription,
      href: `/servicios/${servicio.slug}`,
    }));
};

export const formatPriceForPEN = (amount: number, includeDecimals: boolean = true): string => {
  if (isNaN(amount)) {
    throw new Error("El monto debe ser un número válido");
  }

  const formatter = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: includeDecimals ? 2 : 0,
    maximumFractionDigits: includeDecimals ? 2 : 0,
  });

  return formatter.format(amount);
};

export const parseCounterValue = (finalNumber: string | number): NumerParseResult => {
  if (typeof finalNumber === "number") {
    return {
      isNumber: true,
      numericValue: finalNumber,
      originalValue: finalNumber,
    };
  }

  const stringValue = finalNumber.toString();

  const match = stringValue.match(/^([^0-9]*)?([0-9]+(?:\.[0-9]+)?)(.*)?$/);

  if (match) {
    const [, prefixSymbol = "", numberPart, suffixSymbol = ""] = match;
    const numericValue = parseFloat(numberPart);
    const symbol = (prefixSymbol + suffixSymbol).trim();
    return {
      isNumber: false,
      numericValue,
      symbol: symbol || undefined,
      originalValue: finalNumber,
    };
  }

  return {
    isNumber: false,
    numericValue: 0,
    symbol: stringValue,
    originalValue: finalNumber,
  };
};

export const getIconComponent = (iconName: string): GENERAL_ICON | null => {
  const lucidIcon = (LucideIcons as any)[iconName];
  if (lucidIcon) {
    return lucidIcon as LucideIcon;
  }

  const reactIcon = (ReactIcons as any)[iconName];
  if (reactIcon) {
    return reactIcon as IconType;
  }

  return null;
};

export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const formatSegment = (segment: string): string => {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const buildPath = (segments: string[], index: number): string => {
  return "/" + segments.slice(0, index + 1).join("/");
};
