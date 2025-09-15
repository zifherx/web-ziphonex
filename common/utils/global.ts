import { IService, NumerParseResult } from "../interfaces";

export const transformServicesToMenuItems = (servicios: IService[]) => {
  return servicios.map((servicio) => ({
    id: servicio.id,
    title: servicio.title,
    description: servicio.shortDescription,
    href: `/servicios/${servicio.slug}`,
  }));
};

export const transformActiveFeatureServicesToMenuItems = (
  servicios: IService[]
) => {
  return servicios
    .filter((servicio) => servicio.isActive && servicio.isFeature)
    .map((servicio) => ({
      id: servicio.id,
      title: servicio.title,
      description: servicio.shortDescription,
      href: `/servicios/${servicio.slug}`,
    }));
};

export const formatPriceForPEN = (
  amount: number,
  includeDecimals: boolean = true
): string => {
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

export const parseCounterValue = (
  finalNumber: string | number
): NumerParseResult => {
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
