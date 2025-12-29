"use client";

import { useMemo } from "react";

import { TESTIMONIAL_CONTENT_PROPS } from "@/common/types/testimonial.props";
import { TableView } from "./Table-View";
import { CardView } from "./Card-View";

export function TestimonialContent({
  authorNameFilter,
  isLoading,
  items,
  onDelete,
  onEdit,
  statusFilter,
  view,
  isDeleting,
  isUpdating,
  processingItemId,
}: TESTIMONIAL_CONTENT_PROPS) {
  const filteredData = useMemo(() => {
    if (statusFilter === "all") {
      return items;
    }

    return items.filter((item) => item.status === statusFilter);
  }, [items, statusFilter]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Cargando Testimonios...</div>
      </div>
    );
  }

  if (filteredData.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Testimonios:</h1>
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p>No hay testimonios disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {view === "table" ? (
        <TableView filteredItems={items} authorNameFilter={authorNameFilter} onEdit={onEdit} onDelete={onDelete} />
      ) : (
        <CardView
          filteredItems={filteredData}
          onEdit={onEdit}
          onDelete={onDelete}
          processingItemId={processingItemId}
          isUpdating={isUpdating}
          isDeleting={isDeleting}
        />
      )}
    </div>
  );
}
