"use client";

import { useMemo } from "react";

import { SOCIALMEDIA_CONTENT_PROPS } from "@/common/types/socialmedia-props";
import { ContentCardView } from "./Content-Card-View";
import { ContentTableView } from "./Content-Table-View";

export function ContentSection({
  isLoading,
  iconNameFilter,
  items,
  onDelete,
  onEdit,
  statusFilter,
  view,
}: SOCIALMEDIA_CONTENT_PROPS) {
  const filteredData = useMemo(() => {
    if (statusFilter === "all") {
      return items;
    }
    return items.filter((item) => item);
  }, [items, statusFilter]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Cargando Redes Sociales...</div>
      </div>
    );
  }

  if (filteredData.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Redes Sociales:</h1>
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p>No hay redes sociales disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {view === "table" ? (
        <ContentTableView
          filteredItems={filteredData}
          iconNameFilter={iconNameFilter}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ) : (
        <ContentCardView />
      )}
    </div>
  );
}
