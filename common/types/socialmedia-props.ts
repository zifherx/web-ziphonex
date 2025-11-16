import { Dispatch, SetStateAction } from "react";
import { SocialMediaResponseDto } from "../dto/social-media/social-media-response.dto";
import { UpdateSocialMediaInput } from "../validations/social-media.validation";
import { UseFormReturn } from "react-hook-form";

export type SORTABLE_TABLE_ROW_PROP = {
  item: SocialMediaResponseDto;
  onEdit: (item: SocialMediaResponseDto) => void;
  onDelete: (item: SocialMediaResponseDto) => void;
  onToggle: (id: string) => void;
};

export type SOCIALMEDIA_DIALOG_PROP = {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  editItem: SocialMediaResponseDto | null;
  onSubmit: (data: UpdateSocialMediaInput) => void;
  isSubmitting?: boolean;
};

export type SOCIALMEDIA_FORM_PROP = {
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  editItem: SocialMediaResponseDto | null;
  onSubmit: (data: UpdateSocialMediaInput) => void;
  isSubmitting?: boolean;
  form?: UseFormReturn<UpdateSocialMediaInput>;
};

export type SOCIALMEDIA_DELETE_DIALOG_PROPS = {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  item: SocialMediaResponseDto | null;
  onConfirm: () => void;
  isDeleting?: boolean;
};

export type SOCIALMEDIA_INDICATORS_PROPS = {
  socialMedia: SocialMediaResponseDto[];
  isLoading: boolean;
};

export type SOCIALMEDIA_FILTROS_PROPS = {
  view: "table" | "card";
  setView: Dispatch<SetStateAction<"table" | "card">>;
  iconNameFilter: string;
  onIconNameFilterChange: Dispatch<SetStateAction<string>>;
  statusFilter: string;
  onStatusFilterChange: Dispatch<SetStateAction<string>>;
};

export type SOCIALMEDIA_CONTENT_PROPS = {
  isLoading: boolean;
  items: SocialMediaResponseDto[];
  view: "table" | "card";
  iconNameFilter: string;
  statusFilter: string;
  onEdit: (socialMedia: SocialMediaResponseDto) => void;
  onDelete: (socialMedia: SocialMediaResponseDto) => void;
};

export type SOCIALMEDIA_TABLE_VIEW_PROPS = {
  filteredItems: SocialMediaResponseDto[];
  iconNameFilter: string;
  onEdit: (item: SocialMediaResponseDto) => void;
  onDelete: (item: SocialMediaResponseDto) => void;
};
