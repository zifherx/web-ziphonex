"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import {
  ColumnDef,
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";

export type GenericTableViewProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  globalFilter?: string;
  emptyMessage?: string;
  onEdit?: (item: TData) => void;
  onDelete?: (item: TData) => void;
  globalFilterFn?: (row: any, columnId: string, filterValue: string) => boolean;
  enablePagination?: boolean;
  enableRowSelection?: boolean;
  enableGrouping?: boolean;
  initialPageSize?: number;
};

export function GenericTableView<TData>({
  data,
  columns,
  globalFilter = "",
  emptyMessage = "No se encontraron resultados",
  onEdit,
  onDelete,
  globalFilterFn,
  enablePagination = true,
  enableRowSelection = true,
  enableGrouping = false,
  initialPageSize = 10,
}: GenericTableViewProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [grouping, setGrouping] = useState<GroupingState>([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGroupingChange: setGrouping,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: enableRowSelection ? setRowSelection : undefined,
    getGroupedRowModel: enableGrouping ? getGroupedRowModel() : undefined,
    initialState: {
      pagination: {
        pageSize: initialPageSize,
      },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection: enableRowSelection ? rowSelection : {},
      grouping: enableGrouping ? grouping : [],
      globalFilter,
    },
    meta: {
      onEdit,
      onDelete,
    },
    globalFilterFn:
      globalFilterFn ||
      ((row, columnId, filterValue) => {
        const rowValue = String(row.getValue(columnId)).toLowerCase();
        return rowValue.includes(filterValue.toLowerCase());
      }),
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-2">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(({ id, headers }) => (
            <TableRow key={id}>
              {headers.map(({ id, isPlaceholder, column, getContext }) => (
                <TableHead key={id}>
                  {isPlaceholder ? null : flexRender(column.columnDef.header, getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table
              .getRowModel()
              .rows.map(({ id, getIsSelected, getVisibleCells, getIsExpanded, getToggleExpandedHandler, subRows }) => (
                <TableRow key={id} data-state={getIsSelected() && "selected"}>
                  {getVisibleCells().map(
                    ({ id, column, getContext, getIsGrouped, getIsAggregated, getIsPlaceholder }) => (
                      <TableCell key={id}>
                        {getIsGrouped() ? (
                          <>
                            <Button variant="ghost" className="mr-2" onClick={() => getToggleExpandedHandler()()}>
                              {getIsExpanded() ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </Button>
                            {flexRender(column.columnDef.cell, getContext())} ({subRows.length})
                          </>
                        ) : getIsAggregated() ? (
                          flexRender(column.columnDef.aggregatedCell ?? column.columnDef.cell, getContext())
                        ) : getIsPlaceholder() ? null : (
                          flexRender(column.columnDef.cell, getContext())
                        )}
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {enablePagination && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {enableRowSelection && (
              <>
                {table.getFilteredSelectedRowModel().rows.length} de {table.getFilteredRowModel().rows.length} fila(s)
                seleccionadas.
              </>
            )}
          </div>
          <div className="flex space-x-2 items-center">
            <Button
              variant="outline"
              size="sm"
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
              className="flex items-center gap-2"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
