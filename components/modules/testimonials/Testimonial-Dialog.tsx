"use client";

import { useState } from "react";

import GenericDialog from "@/components/shared/Generic-Dialog";

import { TestimonialForm } from "./Testimonial-Form";

import { TESTIMONIAL_EDIT_DIALOG_PROPS } from "@/common/types/testimonial.props";
import { TestimonialResponseDto } from "@/common/dto/testimonial/testimonial-response.dto";

export function TestimonialDialog({
  open,
  onOpenChange,
  editedItem,
  onSubmit,
  isSubmitting = false,
  isFormDirty,
  setIsFormDirty,
}: TESTIMONIAL_EDIT_DIALOG_PROPS) {
  return (
    <GenericDialog<TestimonialResponseDto>
      open={open}
      onOpenChange={onOpenChange}
      editedItem={editedItem}
      createTitle="Nuevo Testimonio"
      editTitle="Editar Testimonio"
      createDescription="Completa los datos del nuevo testimonio"
      editDescription="Actualiza la información del testimonio"
      maxWidth="xl"
      isDirty={isFormDirty}
      confirmCloseTitle="¿Descartar cambios?"
      confirmCloseDescription="Los cambios que realizaste se perderán si cierras sin guardar."
    >
      <TestimonialForm
        open={open}
        onOpenChange={onOpenChange}
        editItem={editedItem}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        onDirtyChange={setIsFormDirty}
      />
    </GenericDialog>
  );
}
