"use client";

import { useDialog } from "@/contexts/DialogContext";

export function EstadisticasView() {
  const { openDialog, closeDialog, getDialogState } = useDialog();

  const editDialog = getDialogState("estadisticas-edit");
  const deleteDialog = getDialogState("estadisticas-delete");

  return <div>Estadisticas-View</div>;
}
