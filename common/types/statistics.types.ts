import { STATUS_TYPE_ENTRY_CMS } from "./social-media.types";

export type StatisticSymbol = "+" | "%" | "/" | "-" | "×" | "=" | "";

export interface StatisticEntity {
  _id: string;
  icon: string;
  iconColor: string;
  iconBGColor: string;
  value: number;
  symbol: StatisticSymbol;
  secondaryValue?: number;
  title: string;
  description?: string;
  order: number;
  status: STATUS_TYPE_ENTRY_CMS;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface StatisticFilters {
  status?: STATUS_TYPE_ENTRY_CMS;
  isActive?: boolean;
  minValue?: number;
  maxValue?: number;
}

export type StatisticSortField = "order" | "createdAt" | "value" | "title";
export type SortOrder = "asc" | "desc";

export interface StatisticSort {
  field: StatisticSortField;
  order: SortOrder;
}
