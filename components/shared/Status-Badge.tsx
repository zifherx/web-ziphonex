import { Badge } from "../ui/badge";

export interface StatusBadgeProps {
  status: STATUS_TYPE_ENTRY_CMS;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    published: "bg-green-100 text-green-700 border-green-200",
    draft: "bg-yellow-100 text-yellow-700 border-yellow-200",
    archived: "bg-gray-100 text-gray-700 border-gray-200",
  };

  return (
    <Badge
      className={`text-xs font-semibold border ${
        styles[status as keyof typeof styles]
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
