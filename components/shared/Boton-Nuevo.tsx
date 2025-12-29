import { Button } from "../ui/button";

import { GENERAL_ICON } from "@/common/types";

export type BtnNuevoType = {
  onClick: () => void;
  icono: GENERAL_ICON;
  title: string;
};

export function BotonNuevo({ icono: Icon, onClick, title }: BtnNuevoType) {
  return (
    <Button
      variant="ghost"
      className="bg-secondary text-white cursor-pointer hover:scale-110 transition-transform"
      onClick={onClick}
      title={`Nuevo ${title}`}
    >
      <Icon className="h-6 w-6" strokeWidth={2} />
      <span className="sr-only">Nuevo {title}</span>
    </Button>
  );
}
