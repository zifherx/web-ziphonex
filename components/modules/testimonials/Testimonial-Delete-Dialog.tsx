"use client";

import { Tag } from "lucide-react";

import { GenericDeleteDialog } from "@/components/shared/Generic-Delete-Dialog";

import { TESTIMONIAL_DELETE_DIALOG_PROPS } from "@/common/types/testimonial.props";
import { TestimonialResponseDto } from "@/common/dto/testimonial/testimonial-response.dto";

export function TestimonialDeleteDialog({
  item,
  onConfirm,
  onOpenChange,
  open,
  isDeleting = false,
}: TESTIMONIAL_DELETE_DIALOG_PROPS) {
  return (
    <GenericDeleteDialog<TestimonialResponseDto>
      open={open}
      onOpenChange={onOpenChange}
      item={item}
      onConfirm={onConfirm}
      isDeleting={isDeleting}
      getItemName={(testimonio) => testimonio.author.name}
      title="¿Eliminar testimonio?"
      confirmText="Si, eliminar"
      confirmIcon={<Tag className="ml-2 h-5 w-5" />}
      confirmButtonClass="bg-red-600 hover:bg-red-700"
    />
  );
}
