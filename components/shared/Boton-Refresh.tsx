import { Button } from "../ui/button";

import { GENERAL_ICON } from "@/common/types";

export type BtnRefreshType = {
  onClick: () => void;
  icono: GENERAL_ICON;
  title: string;
  cargando: boolean;
};

export function BotonRefresh({ cargando = false, icono: Icon, onClick, title }: BtnRefreshType) {
  return (
    <Button
      variant="outline"
      className="cursor-pointer hover:scale-110 transition-transform"
      onClick={onClick}
      disabled={cargando}
      title={`Actualizar ${title}`}
    >
      <Icon size={20} strokeWidth={2} className={cargando ? "animate-spin" : ""} />
      <span className="sr-only">{title}</span>
    </Button>
  );
}
