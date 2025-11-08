"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  GroupingState,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { SOCIALMEDIA_TABLE_VIEW_PROPS } from "@/common/types/socialmedia-props";
import { SocialMediaColumn } from "@/common/columns/social-media.column";

export function ContentTableView({
  filteredItems,
  iconNameFilter,
  onDelete,
  onEdit,
}: SOCIALMEDIA_TABLE_VIEW_PROPS) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [grouping, setGrouping] = useState<GroupingState>([]);

  const socialMediaTable = useReactTable({
    data: filteredItems,
    columns: SocialMediaColumn,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGroupingChange: setGrouping,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getGroupedRowModel: getGroupedRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      grouping,
      globalFilter: iconNameFilter,
    },
    meta: {},
    globalFilterFn: (row, columnId, filterValue) => {
      const label = row.original.label.toLowerCase();
      const searchValue = filterValue.toLowerCase();

      return label.includes(searchValue);
    },
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-2">
      <Table>
        <TableHeader>
          {socialMediaTable.getHeaderGroups().map(({ id, headers }) => (
            <TableRow key={id}>
              {headers.map(({ id, isPlaceholder, column, getContext }) => (
                <TableHead key={id}>
                  {isPlaceholder
                    ? null
                    : flexRender(column.columnDef.header, getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {socialMediaTable.getRowModel().rows.length ? (
            socialMediaTable
              .getRowModel()
              .rows.map(
                ({
                  id,
                  getIsSelected,
                  getVisibleCells,
                  getIsExpanded,
                  getToggleExpandedHandler,
                  subRows,
                }) => (
                  <TableRow key={id} data-state={getIsSelected() && "selected"}>
                    {getVisibleCells().map(
                      ({
                        id,
                        column,
                        getContext,
                        getIsGrouped,
                        getIsAggregated,
                        getIsPlaceholder,
                      }) => (
                        <TableCell key={id}>
                          {getIsGrouped() ? (
                            <>
                              <Button
                                variant="ghost"
                                className="mr-2"
                                onClick={() => getToggleExpandedHandler()()}
                              >
                                {getIsExpanded() ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </Button>
                              {flexRender(column.columnDef.cell, getContext())}{" "}
                              ({subRows.length})
                            </>
                          ) : getIsAggregated() ? (
                            flexRender(
                              column.columnDef.aggregatedCell ??
                                column.columnDef.cell,
                              getContext()
                            )
                          ) : getIsPlaceholder() ? null : (
                            flexRender(column.columnDef.cell, getContext())
                          )}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                )
              )
          ) : (
            <TableRow>
              <TableCell
                colSpan={SocialMediaColumn.length}
                className="h-24 text-center"
              >
                No se encontraron testimonios.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {socialMediaTable.getFilteredSelectedRowModel().rows.length} de{" "}
          {socialMediaTable.getFilteredRowModel().rows.length} fila(s)
          seleccionadas.
        </div>
        <div className="flex space-x-2 items-center">
          <Button
            variant="outline"
            size="sm"
            disabled={!socialMediaTable.getCanPreviousPage()}
            onClick={() => socialMediaTable.previousPage()}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!socialMediaTable.getCanNextPage()}
            onClick={() => socialMediaTable.nextPage()}
            className="flex items-center gap-2"
          >
            Siguiente
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
