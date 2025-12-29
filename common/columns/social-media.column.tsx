import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Edit,
  ExternalLink,
  HelpCircle,
  Trash2,
} from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { SocialMediaResponseDto } from "../dto/social-media/social-media-response.dto";
import { getIconComponent } from "../utils/GlobalFunctions";
import { BadgeStatus } from "@/components/shared/Badge-Status";

export const SocialMediaColumn: ColumnDef<SocialMediaResponseDto>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(val) => table.toggleAllRowsSelected(!!val)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(val) => row.toggleSelected(!!val)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    enableGrouping: false,
  },
  {
    accessorKey: "label",
    header: ({ column }) => (
      <div className="flex items-center gap-2 text-left text-sm">
        Red Social
        <ArrowUpDown
          className="w-4 h-4 cursor-pointer"
          onClick={() => column.getIsSorted() === "asc"}
        />
      </div>
    ),
    cell: ({ row }) => {
      const IconComponent = getIconComponent(row.original.icon);
      return (
        <div>
          {IconComponent ? (
            <div className="flex items-center justify-start gap-3">
              <IconComponent size={20} />
              <span>{row.original.label}</span>
            </div>
          ) : (
            <HelpCircle size={20} />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "href",
    header: () => <div className="text-left text-sm">Link</div>,
    cell: ({ row }) => (
      <Link
        href={row.original.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm text-blue-600 hover:underline max-w-[300px] truncate"
      >
        <span className="truncate">{row.original.href}</span>
        <ExternalLink className="h-3 w-3 shrink-0" />
      </Link>
    ),
  },
  {
    accessorKey: "isActive",
    header: () => <div className="text-left text-sm">Activo</div>,
    cell: ({ row }) => (
      <Badge variant={row.original.isActive ? "default" : "destructive"}>
        {row.original.isActive ? "Activo" : "Inactivo"}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left text-sm">Estado</div>,
    cell: ({ row }) => <BadgeStatus status={row.original.status} />,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <div className="flex gap-2 items-center text-center font-bold">
        Fecha
        <ArrowUpDown
          className="w-4 h-4 cursor-pointer"
          onClick={() => column.getIsSorted() === "asc"}
        />
      </div>
    ),
    cell: ({ row }) => (
      <p className="text-center text-sm">
        {new Date(row.original.createdAt).toLocaleDateString("es-PE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </p>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center font-bold">Acciones</div>,
    cell: ({ row, table }) => {
      const meta = table.options.meta as {
        onEdit: (testimonio: SocialMediaResponseDto) => void;
        onDelete: (testimonio: SocialMediaResponseDto) => void;
      };
      return (
        <div className="flex justify-center items-center space-x-0">
          <Button
            variant="link"
            className="cursor-pointer p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => meta.onEdit(row.original)}
          >
            <Edit className="w-5 h-5" />
          </Button>

          <Button
            variant="link"
            className="cursor-pointer p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            onClick={() => meta.onDelete(row.original)}
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      );
    },
  },
];
