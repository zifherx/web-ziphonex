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
} from "@/components/ui/alert-dialog";

import { SOCIALMEDIA_DELETE_DIALOG_PROPS } from "@/common/types/socialmedia-props";

export function SocialMediaDeleteDialog({
  item,
  onConfirm,
  onOpenChange,
  open,
  isDeleting = false,
}: SOCIALMEDIA_DELETE_DIALOG_PROPS) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Está acción no se puede deshacer. Esto eliminará permanentemente la
            red social{" "}
            <span className="font-semibold text-gray-900">{item?.label}</span>.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} className="cursor-pointer">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            disabled={isDeleting}
            className="cursor-pointer bg-red-600 hover:scale-110 hover:bg-red-900"
          >
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Eliminando...
              </>
            ) : (
              <>
                Eliminar
                <Rocket className="ml-2 h-5 w-5" />
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
