"use client";

import { useState } from "react";
import { Plus, RefreshCcw } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

import { IndicadoresSection } from "./Indicadores-Section";
import { FiltrosSection } from "./Filtros-Section";
import { ContentSection } from "./Content-Section";
import { SocialMediaDialog } from "./SocialMedia-Dialog";
import { SocialMediaDeleteDialog } from "./SocialMedia-Delete-Dialog";

import {
  useCreateSocialMedia,
  useDeleteSocialMedia,
  useSocialMediaList,
  useUpdateSocialMedia,
} from "@/common/hooks/api/use-social-media.hook";
import { UpdateSocialMediaInput } from "@/common/validations/social-media.validation";
import { SocialMediaResponseDto } from "@/common/dto/social-media/social-media-response.dto";
import { UpdateSocialMediaDto } from "@/common/dto/social-media/update-social-media.dto";
import { CreateSocialMediaDto } from "@/common/dto/social-media/create-social-media.dto";
import { showSuccessToast } from "@/common/helpers/toast.helper";
import { TOAST_MESSAGES } from "@/common/constants/toast-message.constants";
import { BotonNuevo } from "@/components/shared/Boton-Nuevo";
import { BotonRefresh } from "@/components/shared/Boton-Refresh";

export function SocialMediaView() {
  const [view, setView] = useState<"table" | "card">("table");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState<SocialMediaResponseDto | null>(null);
  const [processingItemId, setProcessingItemId] = useState<string | null>(null);

  // Filtros
  const [iconNameFilter, setIconNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { data: items = [], isLoading, error, refetch } = useSocialMediaList(true);

  const createMutation = useCreateSocialMedia();
  const updateMutation = useUpdateSocialMedia();
  const deleteMutation = useDeleteSocialMedia();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-red-600">Error al cargar redes sociales</p>
          <Button onClick={() => handleRefresh()}>Reintentar</Button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 rounded-lg p-6 space-y-5">
        <Skeleton className="h-20 w-full bg-gray-200" />
        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="h-32 bg-gray-200" />
          <Skeleton className="h-32 bg-gray-200" />
          <Skeleton className="h-32 bg-gray-200" />
        </div>
        <Skeleton className="h-96 w-full bg-gray-200" />
      </div>
    );
  }

  const handleNew = () => {
    setSelectedSocialMedia(null);
    setEditDialogOpen(true);
  };

  const handleEdit = (socialMedia: SocialMediaResponseDto) => {
    setProcessingItemId(socialMedia.id);
    setSelectedSocialMedia(socialMedia);
    setEditDialogOpen(true);
  };

  const handleDelete = (socialMedia: SocialMediaResponseDto) => {
    setProcessingItemId(socialMedia.id);
    setSelectedSocialMedia(socialMedia);
    setDeleteDialogOpen(true);
  };

  const handleRefresh = () => {
    refetch();
    showSuccessToast(TOAST_MESSAGES.SOCIAL_MEDIA.REFRESH_SUCCESS);
  };

  const handleSubmit = async (data: UpdateSocialMediaInput) => {
    if (selectedSocialMedia) {
      const dto = new UpdateSocialMediaDto(data);
      await updateMutation.mutateAsync({ id: selectedSocialMedia.id, data: dto });
    } else {
      const dto = new CreateSocialMediaDto(data);
      await createMutation.mutateAsync(dto);
    }

    setEditDialogOpen(false);
    setSelectedSocialMedia(null);
    setProcessingItemId(null);
  };

  const handleConfirmDelete = async () => {
    if (!selectedSocialMedia) return;

    await deleteMutation.mutateAsync(selectedSocialMedia.id);

    setDeleteDialogOpen(false);
    setSelectedSocialMedia(null);
    setProcessingItemId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 rounded-lg p-6 space-y-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Redes Sociales</h1>
          <p className="text-gray-600 mt-1">Gestiona los enlaces a tus redes sociales que aparecerán en el sitio web</p>
        </div>

        <div className="space-x-2">
          <BotonNuevo icono={Plus} onClick={handleNew} title="Red Social" />
          <BotonRefresh cargando={false} onClick={handleRefresh} icono={RefreshCcw} title="Redes Sociales" />
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
        processingItemId={processingItemId}
        isDeleting={deleteMutation.isPending}
        isUpdating={updateMutation.isPending}
      />

      <SocialMediaDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        editItem={selectedSocialMedia}
        onSubmit={handleSubmit}
        isSubmitting={createMutation.isPending || updateMutation.isPending}
      />

      <SocialMediaDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        item={selectedSocialMedia}
        onConfirm={handleConfirmDelete}
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
}
