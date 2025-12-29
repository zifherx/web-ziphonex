"use client";

import { useCallback, useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

import { GenericDialogProps } from "@/common/types";

export default function GenericDialog<TItem = any>({
  open,
  onOpenChange,
  editedItem,
  createTitle = "Crear nuevo",
  editTitle = "Editar",
  createDescription = "Completa los datos del nuevo registro",
  editDescription = "Actualiza la información del registro",
  children,
  className = "max-w-2xl max-h-[80vh] overflow-y-auto",
  prevenOutsideClick = true,
  preventEscapeClose = true,
  maxWidth = "2xl",
  isDirty = false,
  confirmCloseTitle = "¿Descartar cambios?",
  confirmCloseDescription = "Tienes cambios sin guardar. ¿Estás seguro de que quieres cerrar?",
}: GenericDialogProps<TItem>) {
  const [showConfirmClose, setShowConfirmClose] = useState(false);
  const isEditing = !!editedItem;

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full",
  };

  const computedClassName = className.includes("max-w-") ? className : `${maxWidthClasses[maxWidth]} ${className}`;

  const handleClose = useCallback(() => {
    if (isDirty) {
      setShowConfirmClose(true);
    } else {
      onOpenChange(false);
    }
  }, [isDirty, onOpenChange]);

  const handleConfirmClose = useCallback(() => {
    setShowConfirmClose(false);
    onOpenChange(false);
  }, [onOpenChange]);

  const handleCancelClose = useCallback(() => {
    setShowConfirmClose(false);
  }, []);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className={computedClassName}
          onPointerDownOutside={(e) => {
            if (prevenOutsideClick || isDirty) {
              e.preventDefault();
              if (isDirty) {
                handleClose();
              }
            }
          }}
          onEscapeKeyDown={(e) => {
            if (preventEscapeClose || isDirty) {
              e.preventDefault();
              if (isDirty) {
                handleClose();
              }
            }
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-black">{isEditing ? editTitle : createTitle}</DialogTitle>

            <DialogDescription className="text-sm font-semibold text-gray-600">
              {isEditing ? editDescription : createDescription}
            </DialogDescription>
          </DialogHeader>

          {children}
        </DialogContent>
      </Dialog>

      <AlertDialog open={showConfirmClose} onOpenChange={setShowConfirmClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{confirmCloseTitle}</AlertDialogTitle>
            <AlertDialogDescription>{confirmCloseDescription}</AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelClose}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmClose} className="bg-red-600 hover:bg-red-700">
              Descartar cambios
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
