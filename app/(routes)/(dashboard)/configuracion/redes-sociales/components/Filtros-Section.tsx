"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SOCIALMEDIA_FILTROS_PROPS } from "@/common/types/socialmedia-props";

export function FiltrosSection({
  iconNameFilter,
  onIconNameFilterChange,
  onStatusFilterChange,
  setView,
  statusFilter,
  view,
}: SOCIALMEDIA_FILTROS_PROPS) {
  return (
    <div className="bg-white rounded-lg p-4 border-gray-300 flex items-center justify-between gap-4">
      {/* Filtro: Label | Title */}
      <div className="relative flex">
        <InputGroup className="h-12 w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-secondary focus:border-transparent">
          <InputGroupInput
            placeholder="Filtro de búsqueda"
            value={iconNameFilter}
            onChange={(e) => onIconNameFilterChange(e.target.value)}
          />
          <InputGroupAddon>
            <Search className="w-5 h-5 text-gray-400" />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Filtro: Estado */}
      <div className="flex gap-2">
        <Select value={statusFilter} onValueChange={onStatusFilterChange}>
          <SelectTrigger className="cursor-pointer w-[250px] h-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-visible:ring-secondary bg-white">
            <SelectValue placeholder="Seleccione un estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Estados</SelectLabel>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="published">Publicados</SelectItem>
              <SelectItem value="draft">Borradores</SelectItem>
              <SelectItem value="archived">Archivados</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Cambio de Visualización de Contenido */}
        <Button
          onClick={() => setView(view === "table" ? "card" : "table")}
          variant="outline"
          className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg hover:bg-secondary/10 hover:border-secondary hover:text-black transition-colors"
        >
          {view === "table" ? "📋 Tarjetas" : "📱 Tabla"}
        </Button>
      </div>
    </div>
  );
}
