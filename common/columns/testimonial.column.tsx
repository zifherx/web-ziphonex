import { ArrowUpDown, Edit, Trash2 } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BadgeStatus } from "@/components/shared/Badge-Status";
import { RatingStar } from "@/components/shared/Rating-Star";

import { TestimonialResponseDto } from "../dto/testimonial/testimonial-response.dto";

export const TestimonialColumn: ColumnDef<TestimonialResponseDto>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
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
    accessorKey: "author.name",
    header: ({ column }) => (
      <div className="flex items-center gap-2 text-left text-sm">
        Autor
        <ArrowUpDown
          className="w-4 h-4 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        />
      </div>
    ),
    cell: ({ row }) => {
      const { avatar, company, name, position } = row.original.author;
      return (
        <div className="flex items-center justify-start gap-5">
          <Avatar className="h-14 w-14 rounded-full">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <div className="block">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">
              {position}, {company}
            </p>
          </div>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: "resena",
    header: () => <div className="text-left text-sm">Reseña</div>,
    cell: ({ row }) => <p className="text-sm line-clamp-2 max-w-md text-gray-600">{row.original.resena}</p>,
  },
  {
    accessorKey: "rating",
    header: () => <div className="text-left text-sm">Rating</div>,
    cell: ({ row }) => <RatingStar rating={row.original.rating} />,
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
        onEdit: (item: TestimonialResponseDto) => void;
        onDelete: (item: TestimonialResponseDto) => void;
      };

      return (
        <div className="flex justify-center items-center space-x-0">
          {meta?.onEdit && (
            <Button
              variant="link"
              className="cursor-pointer p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => meta.onEdit(row.original)}
            >
              <Edit className="w-5 h-5" strokeWidth={2} />
            </Button>
          )}

          {meta?.onDelete && (
            <Button
              variant="link"
              className="cursor-pointer p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              onClick={() => meta.onDelete(row.original)}
            >
              <Trash2 className="w-5 h-5" strokeWidth={2} />
            </Button>
          )}
        </div>
      );
    },
  },
];
