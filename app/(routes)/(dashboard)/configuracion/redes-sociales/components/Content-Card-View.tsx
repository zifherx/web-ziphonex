"use client";

import Link from "next/link";
import { Edit, ExternalLink, Loader2 } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeStatus } from "@/components/shared/Badge-Status";

import { getIconComponent } from "@/common/utils/GlobalFunctions";
import { SOCIALMEDIA_CARD_VIEW_PROPS } from "@/common/types/socialmedia.props";

export function ContentCardView({
  filteredItems,
  onDelete,
  onEdit,
  isDeleting,
  isUpdating,
  processingItemId,
}: SOCIALMEDIA_CARD_VIEW_PROPS) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => {
        const { id, label, icon, status, href, createdAt, isActive, openInNewTab } = item;
        const IconComponent = getIconComponent(icon);

        const isProcessing = processingItemId === id;
        const isItemDeleting = isDeleting && isProcessing;
        const isItemUpdating = isUpdating && isProcessing;

        console.log("processingItemId", processingItemId);

        return (
          <Card
            key={id}
            className={`bg-white overflow-hidden transition-all duration-200 hover:shadow-lg pb-2 ${
              isProcessing ? "opacity-60 pointer-events-none" : ""
            }`}
          >
            <CardHeader className="pb-1">
              <div className="flex items-center gap-3">
                {IconComponent && (
                  <div className="flex shrink-0 relative">
                    <IconComponent className="h-12 w-12 text-gray-700" />
                    {!isActive && <div className="absolute bg-gray-200 bg-opacity-50 rounded-full" />}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-xl truncate">{label}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {isActive ? "Activo" : "Inactivo"}
                    </span>
                    {openInNewTab && (
                      <span className="text-xs text-gray-500" title="Se abre en nueva pestaña">
                        📎
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>

            {/* <CardContent className="flex flex-col gap-y-3"> */}
            <CardContent className="space-y-2">
              {/* <div className="flex items-start justify-start gap-1">
                <p className="text-sm font-bold text-gray-600 mb-4">Href:</p>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 hover:underline max-w-[300px] truncate"
                >
                  <span className="truncate">{href}</span>
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </Link>
              </div>

              <div className="flex items-center justify-between">
                <BadgeStatus status={status} />

                <span className="text-xs text-gray-600">{new Date(createdAt).toLocaleDateString("es-PE")}</span>
              </div> */}
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Enlace</p>
                <Link
                  href={href.startsWith("http") ? href : `https://${href}`}
                  target={openInNewTab ? "_blank" : "_self"}
                  rel={openInNewTab ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 hover:underline group"
                  onClick={(e) => isProcessing && e.preventDefault()}
                >
                  <span className="truncate">{href}</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center justify-between pt-3">
                <BadgeStatus status={status} />
                <span className="text-xs text-gray-500">
                  {new Date(createdAt).toLocaleDateString("es-PE", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </CardContent>

            <CardFooter className="bg-gray-50 px-4 pt-1 flex items-center justify-end gap-x-2 border-t">
              {/* <Button
                variant="link"
                className="cursor-pointer p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => onEdit(item)}
              >
                <Edit className="w-5 h-5" />
              </Button>

              <Button
                variant="link"
                className="cursor-pointer p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                onClick={() => onDelete(item)}
              >
                <Trash2 className="w-5 h-5" />
              </Button> */}

              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer h-9 px-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                onClick={() => onEdit(item)}
                disabled={isProcessing}
                title="Editar red social"
              >
                {isItemUpdating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                    <span className="text-sm font-medium">Editando...</span>
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4 mr-1.5" />
                    <span className="text-sm font-medium">Editar</span>
                  </>
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer h-9 px-3 text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
                onClick={() => onDelete(item)}
                disabled={isProcessing}
                title="Eliminar red social"
              >
                {isItemDeleting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                    <span className="text-sm font-medium">Eliminando...</span>
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4 mr-1.5" />
                    <span className="text-sm font-medium">Eliminar</span>
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        );
      })}

      {filteredItems.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
          <div className="rounded-full bg-gray-100 p-4 mb-4">
            <ExternalLink className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No hay redes sociales</h3>
          <p className="text-sm text-gray-500 max-w-sm">
            No se encontraron redes sociales con los filtros aplicados. Intenta ajustar los filtros o crea una nueva.
          </p>
        </div>
      )}
    </div>
  );
}
