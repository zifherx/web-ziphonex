import { Dispatch, SetStateAction } from "react";

import { TestimonialResponseDto } from "../dto/testimonial/testimonial-response.dto";
import { UpdateTestimonialDto } from "../dto/testimonial/update-testimonial.dto";
import { UpdateTestimonialInput } from "../validations/testimonial.validation";

export type TESTIMONIAL_INDICATORS_PROPS = {
  testimonial: TestimonialResponseDto[];
  isLoading: boolean;
};

export type TESTIMONIAL_FILTROS_PROPS = {
  view: "table" | "card";
  setView: Dispatch<SetStateAction<"table" | "card">>;
  authorNameFilter: string;
  onAuthorNameFilterChange: Dispatch<SetStateAction<string>>;
  statusFilter: string;
  onStatusFilterChange: Dispatch<SetStateAction<string>>;
};

export type TESTIMONIAL_CONTENT_PROPS = {
  isLoading: boolean;
  items: TestimonialResponseDto[];
  view: "table" | "card";
  authorNameFilter: string;
  statusFilter: string;
  isDeleting?: boolean;
  isUpdating?: boolean;
  processingItemId?: string | null;
  onEdit: (testimonial: TestimonialResponseDto) => void;
  onDelete: (testimonial: TestimonialResponseDto) => void;
};

export type TESTIMONIAL_CARD_VIEW_PROPS = {
  filteredItems: TestimonialResponseDto[];
  isUpdating?: boolean;
  isDeleting?: boolean;
  processingItemId?: string | null;
  onEdit: (item: TestimonialResponseDto) => void;
  onDelete: (item: TestimonialResponseDto) => void;
};

export type TESTIMONIAL_TABLE_VIEW_PROPS = {
  filteredItems: TestimonialResponseDto[];
  authorNameFilter: string;
  onEdit: (item: TestimonialResponseDto) => void;
  onDelete: (item: TestimonialResponseDto) => void;
};

export type TESTIMONIAL_DELETE_DIALOG_PROPS = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: TestimonialResponseDto | null;
  onConfirm: () => void;
  isDeleting?: boolean;
};

export type TESTIMONIAL_EDIT_DIALOG_PROPS = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editedItem: TestimonialResponseDto | null;
  onSubmit: (data: UpdateTestimonialInput) => void;
  isSubmitting?: boolean;
  isFormDirty: boolean;
  setIsFormDirty: Dispatch<SetStateAction<boolean>>;
};

export type TESTIMONIAL_FORM_PROPS = {
  editItem: TestimonialResponseDto | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: UpdateTestimonialInput) => void;
  isSubmitting?: boolean;
  onDirtyChange?: (isDirty: boolean) => void;
};
