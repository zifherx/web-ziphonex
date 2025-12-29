import { STATUS_TYPE_ENTRY_CMS } from "./social-media.types";

export interface AuthorEntity {
  name: string;
  position: string;
  avatar: string;
  company: string;
}

export interface TestimonialEntity {
  _id: string;
  resena: string;
  rating: number;
  author: AuthorEntity;
  status: STATUS_TYPE_ENTRY_CMS;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TestimonialFilters {
  isActive?: boolean;
  rating?: number;
  minRating?: number;
  status?: STATUS_TYPE_ENTRY_CMS;
}

export type TestimonialSortField = "createdAt" | "updatedAt" | "rating";
export type SortOrder = "asc" | "desc";

export interface TestimonialSort {
  field: TestimonialSortField;
  order: SortOrder;
}
