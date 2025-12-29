"use client";

import { GenericTableView } from "@/components/shared/Generic-Table-View";

import { TestimonialColumn } from "@/common/columns/testimonial.column";

import { TESTIMONIAL_TABLE_VIEW_PROPS } from "@/common/types/testimonial.props";

export function TableView({ filteredItems, authorNameFilter, onDelete, onEdit }: TESTIMONIAL_TABLE_VIEW_PROPS) {
  const customGlobalFilter = (row: any, columndId: string, filterValue: string) => {
    const label = row.original.author?.name?.toLowerCase() || "";
    const searchValue = filterValue.toLowerCase();
    return label.includes(searchValue);
  };

  return (
    <div>
      <GenericTableView
        data={filteredItems}
        columns={TestimonialColumn}
        globalFilter={authorNameFilter}
        emptyMessage="No se encontraron testimonios"
        onEdit={onEdit}
        onDelete={onDelete}
        globalFilterFn={customGlobalFilter}
        enablePagination={true}
        enableRowSelection={true}
        enableGrouping={true}
        initialPageSize={10}
      />
    </div>
  );
}
