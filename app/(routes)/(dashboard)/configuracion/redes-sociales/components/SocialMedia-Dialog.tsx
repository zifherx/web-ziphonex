"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { SocialMediaForm } from "./SocialMedia-Form";

import { SOCIALMEDIA_DIALOG_PROP } from "@/common/types/socialmedia-props";

export function SocialMediaDialog({
  editItem,
  onOpenChange,
  onSubmit,
  open,
  isSubmitting,
}: SOCIALMEDIA_DIALOG_PROP) {
  const isEditing = !!editItem?.id;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-black">
            {isEditing ? `Editar Red Social` : "Nueva Red Social"}
          </DialogTitle>
          <DialogDescription className="text-sm font-semibold text-gray-600 ">
            {isEditing
              ? `Actualiza la información de la red social`
              : `Completa los datos de la nueva red social`}
          </DialogDescription>
        </DialogHeader>

        <SocialMediaForm
          editItem={editItem}
          onOpenChange={onOpenChange}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}
