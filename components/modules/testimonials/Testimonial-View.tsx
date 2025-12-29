"use client";

import { useCallback, useState } from "react";
import { Plus, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BotonNuevo } from "@/components/shared/Boton-Nuevo";
import { BotonRefresh } from "@/components/shared/Boton-Refresh";

import { TestimonialStats } from "./Testimonial-Stats";
import { TestimonialFilters } from "./Testimonial-Filters";
import { TestimonialContent } from "./Testimonial-Content";
import { TestimonialDialog } from "./Testimonial-Dialog";
import { TestimonialDeleteDialog } from "./Testimonial-Delete-Dialog";

import {
  useCreateTestimonial,
  useUpdateTestimonial,
  useDeleteTestimonial,
  useTestimonialList,
} from "@/common/hooks/api/use-testimonial.hook";

import { CreateTestimonialDto } from "@/common/dto/testimonial/create-testimonial.dto";
import { UpdateTestimonialDto } from "@/common/dto/testimonial/update-testimonial.dto";
import { TestimonialResponseDto } from "@/common/dto/testimonial/testimonial-response.dto";

import { TOAST_MESSAGES } from "@/common/constants/toast-message.constants";
import { showSuccessToast } from "@/common/helpers/toast.helper";
import { UpdateTestimonialInput } from "@/common/validations/testimonial.validation";
import { useDialog } from "@/contexts/DialogContext";

export function TestimonialView() {
  const { openDialog, closeDialog, getDialogState } = useDialog();

  // Obtener estados de dialogos
  const editDialog = getDialogState<TestimonialResponseDto>("testimonial-edit");
  const deleteDialog = getDialogState<TestimonialResponseDto>("testimonial-delete");

  const [view, setView] = useState<"table" | "card">("table");
  const [isFormDirty, setIsFormDirty] = useState(false);

  //   Filtros
  const [authorNameFilter, setAuthorNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Hooks para obtener datos, mutaciones, etc.
  const { data: items = [], isLoading, error, refetch } = useTestimonialList(true);

  const createMutation = useCreateTestimonial();
  const updateMutation = useUpdateTestimonial();
  const deleteMutation = useDeleteTestimonial();

  const handleNew = useCallback(() => {
    openDialog("testimonial-edit", "edit", null);
  }, [openDialog]);

  const handleEdit = useCallback(
    (testimonial: TestimonialResponseDto) => {
      openDialog("testimonial-edit", "edit", testimonial);
    },
    [openDialog]
  );

  const handleDelete = useCallback(
    (testimonial: TestimonialResponseDto) => {
      openDialog("testimonial-delete", "delete", testimonial);
    },
    [openDialog]
  );

  const handleRefresh = useCallback(() => {
    refetch();
    showSuccessToast(TOAST_MESSAGES.TESTIMONIAL.REFRESH_SUCCESS);
  }, [refetch]);

  const handleSubmit = useCallback(
    async (data: UpdateTestimonialInput) => {
      const selectedTestimonial = editDialog?.data;
      try {
        if (selectedTestimonial) {
          const dto = new UpdateTestimonialDto(data);
          await updateMutation.mutateAsync({ id: selectedTestimonial.id, data: dto });
        } else {
          const dto = new CreateTestimonialDto(data);
          await createMutation.mutateAsync(dto);
        }
      } catch (err) {
        console.error("Error: ", err);
      } finally {
        closeDialog("testimonial-edit");
      }
    },
    [createMutation, updateMutation]
  );

  const handleConfirmDelete = useCallback(async () => {
    const selectedTestimonial = deleteDialog?.data;

    try {
      await deleteMutation.mutateAsync(selectedTestimonial!.id);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      closeDialog("testimonial-delete");
    }
  }, [deleteMutation]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-red-600">Error al cargar testimonios</p>
          <Button onClick={handleRefresh}>Reintentar</Button>
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

  return (
    <div className="min-h-screen bg-gray-50 rounded-lg p-6 space-y-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Testimonios</h1>
          <p className="text-gray-600 mt-1">
            Gestiona los testimonios o evidencias de los clientes/proveedores que aparecerán en la web
          </p>
        </div>

        <div className="space-x-2">
          <BotonNuevo icono={Plus} title="Testimonio" onClick={handleNew} />
          <BotonRefresh cargando={false} onClick={handleRefresh} icono={RefreshCcw} title="Testimonio" />
        </div>
      </div>

      <TestimonialStats isLoading={isLoading} testimonial={items} />

      <TestimonialFilters
        authorNameFilter={authorNameFilter}
        onAuthorNameFilterChange={setAuthorNameFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        view={view}
        setView={setView}
      />

      <TestimonialContent
        isLoading={isLoading}
        authorNameFilter={authorNameFilter}
        statusFilter={statusFilter}
        items={items}
        view={view}
        onEdit={handleEdit}
        onDelete={handleDelete}
        processingItemId={editDialog?.data?.id ?? deleteDialog?.data?.id ?? null}
        isUpdating={updateMutation.isPending}
        isDeleting={deleteMutation.isPending}
      />

      <TestimonialDialog
        open={editDialog?.open ?? false}
        onOpenChange={(open) => !open && closeDialog("testimonial-edit")}
        editedItem={editDialog?.data ?? null}
        onSubmit={handleSubmit}
        isSubmitting={createMutation.isPending || updateMutation.isPending}
        isFormDirty={isFormDirty}
        setIsFormDirty={setIsFormDirty}
      />

      <TestimonialDeleteDialog
        open={deleteDialog?.open ?? false}
        onOpenChange={(open) => !open && closeDialog("testimonial-delete")}
        item={deleteDialog?.data ?? null}
        onConfirm={handleConfirmDelete}
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
}
