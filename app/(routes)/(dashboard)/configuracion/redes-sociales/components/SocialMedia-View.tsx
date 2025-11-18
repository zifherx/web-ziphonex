"use client";

import { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";

import { SocialMediaResponseDto } from "@/common/dto/social-media/social-media-response.dto";
import {
  useCreateSocialMedia,
  useDeleteSocialMedia,
  useSocialMediaList,
  useUpdateSocialMedia,
} from "@/common/hooks/api/use-social-media.hook";
import { Button } from "@/components/ui/button";
import { Plus, RefreshCcw } from "lucide-react";
import { IndicadoresSection } from "./Indicadores-Section";
import { FiltrosSection } from "./Filtros-Section";
import { ContentSection } from "./Content-Section";
import { SocialMediaDialog } from "./SocialMedia-Dialog";
import { SocialMediaDeleteDialog } from "./SocialMedia-Delete-Dialog";
import { toast } from "sonner";

export function SocialMediaView() {
  const [view, setView] = useState<"table" | "card">("table");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] =
    useState<SocialMediaResponseDto | null>(null);

  // Filtros
  const [iconNameFilter, setIconNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [items, setItems] = useState<SocialMediaResponseDto[]>([]);

  const { data, isLoading, refetch } = useSocialMediaList(true);

  const createMutation = useCreateSocialMedia();
  const updateMutation = useUpdateSocialMedia();
  const deleteMutation = useDeleteSocialMedia();
  // const toggleMutation = useToggleActiveSocialMedia();
  // const updateOrderMutation = useUpdateBulkOrder();

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);

  // if (isLoading) {
  //   return (
  //     <div className="space-y-6">
  //       <Skeleton className="h-20 w-full" />
  //       <Skeleton className="h-96 w-full" />
  //     </div>
  //   );
  // }

  const handleNew = () => {
    console.log(`SocialMedia | handleNew | ejecutando`);
    setSelectedSocialMedia(null);
    setEditDialogOpen(true);
  };

  const handleEdit = (socialMedia: SocialMediaResponseDto) => {
    console.log(`SocialMedia | handleEdit | ejecutando: ${socialMedia.id}`);
    setSelectedSocialMedia(socialMedia);
    setEditDialogOpen(true);
  };

  const handleDelete = (socialMedia: SocialMediaResponseDto) => {
    console.log(`SocialMedia | handleDelete | ejecutando: ${socialMedia.id}`);
    setSelectedSocialMedia(socialMedia);
    setDeleteDialogOpen(true);
  };

  const handleRefresh = () => {
    refetch();
    toast.success("¡ Contenido actualizado!");
  };

  return (
    <div className="min-h-screen bg-gray-50 rounded-lg p-6 space-y-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Redes Sociales</h1>
          <p className="text-gray-600 mt-1">
            Gestiona los enlaces a tus redes sociales que aparecerán en el sitio
            web
          </p>
        </div>

        <div className="space-x-2">
          <Button
            variant="ghost"
            className="bg-secondary text-white cursor-pointer hover:scale-110"
            onClick={handleNew}
          >
            <Plus className="h-6 w-6" strokeWidth={2} />
          </Button>

          <Button
            variant="outline"
            className="cursor-pointer hover:scale-110"
            onClick={handleRefresh}
            disabled={isLoading}
          >
            <RefreshCcw size={20} strokeWidth={2} />
          </Button>
        </div>
      </div>

      <IndicadoresSection isLoading={isLoading} socialMedia={items} />

      <FiltrosSection
        iconNameFilter={iconNameFilter}
        onIconNameFilterChange={setIconNameFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        view={view}
        setView={setView}
      />

      <ContentSection
        isLoading={isLoading}
        iconNameFilter={iconNameFilter}
        statusFilter={statusFilter}
        items={items}
        view={view}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <SocialMediaDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        editItem={selectedSocialMedia}
        onSubmit={() => console.log("Submit Dialog")}
        isSubmitting={createMutation.isPending || updateMutation.isPending}
      />

      <SocialMediaDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        item={selectedSocialMedia}
        onConfirm={() => console.log("Confirmar delete")}
        isDeleting={false}
      />
    </div>
  );
}
