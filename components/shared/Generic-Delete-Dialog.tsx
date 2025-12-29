"use client";

import { Loader2, Rocket } from "lucide-react";

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

import { GenericDeleteDialogProps } from "@/common/types";

export function GenericDeleteDialog<TItem = any>({
  open,
  onOpenChange,
  item,
  onConfirm,
  isDeleting = false,
  title = "¿Estás absolutamente seguro?",
  description,
  getItemName,
  confirmText = "Eliminar",
  cancelText = "Cancelar",
  confirmIcon = <Rocket className="ml-2 h-5 w-5" />,
  confirmButtonClass = "bg-red-600 hover:scale-110 hover:bg-red-900",
}: GenericDeleteDialogProps<TItem>) {
  const defaultDescription =
    item && getItemName ? (
      <>
        Esta acción no se puede deshacer. Esto eliminará permanentemente{" "}
        <span className="font-semibold text-gray-900">{getItemName(item)}</span>
      </>
    ) : (
      "Esta acción no se puede deshacer. Esto eliminará permanentemente el registro seleccionado."
    );

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>

          <AlertDialogDescription>{description || defaultDescription}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} className="cursor-pointer">
            {cancelText}
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onConfirm}
            disabled={isDeleting}
            className={`cursor-pointer ${confirmButtonClass}`}
          >
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Eliminando...
              </>
            ) : (
              <>
                {confirmText}
                {confirmIcon}
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
