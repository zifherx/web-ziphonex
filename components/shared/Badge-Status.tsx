import { Badge } from "../ui/badge";
import { BADGE_STATUS_PROP } from "@/common/types";

export function BadgeStatus({ status }: BADGE_STATUS_PROP) {
  const estilos = {
    published: "bg-green-10 text-green-700 border-green-200",
    draft: "bg-yellow-100 text-yellow-700 border-yellow-200",
    archived: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return (
    <Badge
      className={`text-xs font-semibold border ${
        estilos[status as keyof typeof estilos]
      }`}
    >
      {status === "published"
        ? "Publicado"
        : status === "draft"
        ? "Borrador"
        : "Archivado"}
    </Badge>
  );
}
