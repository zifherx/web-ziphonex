export type SocialMediaIcon = string;

export interface SocialMediaEntity {
  _id: string;
  label: string;
  icon: SocialMediaIcon;
  href: string;
  order: number;
  isActive: boolean;
  openInNewTab: boolean;
  status: STATUS_TYPE_ENTRY_CMS;
  color?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SocialMediaFilters {
  isActive?: boolean;
  icon?: SocialMediaIcon;
}

export type SocialMediaSortField =
  | "order"
  | "label"
  | "createdAt"
  | "updatedAt";
export type SortOrder = "asc" | "desc";

export interface SocialMediaSort {
  field: SocialMediaSortField;
  order: SortOrder;
}

export type STATUS_TYPE_ENTRY_CMS = "published" | "archived" | "draft";
