"use client";

import { useEffect, useMemo } from "react";
import { Barcode, Building, Loader2, MessagesSquare, User } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/shared/Image-Upload";
import { SelectStar } from "@/components/shared/Select-Star";

import { UpdateTestimonialInput, UpdateTestimonialSchema } from "@/common/validations/testimonial.validation";
import { useFormDirtyState } from "@/common/hooks/useFormDirtyState";
import { TESTIMONIAL_FORM_PROPS } from "@/common/types/testimonial.props";

export function TestimonialForm({
  editItem,
  open,
  onOpenChange,
  onSubmit,
  isSubmitting = false,
  onDirtyChange,
}: TESTIMONIAL_FORM_PROPS) {
  const isEditing = !!editItem?.id;

  const defaultValues = useMemo(
    () => ({
      author: {
        name: editItem?.author.name ?? "",
        position: editItem?.author.position ?? "",
        company: editItem?.author.company ?? "",
        avatar: editItem?.author.avatar ?? "",
      },
      resena: editItem?.resena ?? "",
      rating: editItem?.rating ?? 5,
      isActive: editItem?.isActive ?? true,
      status: editItem?.status ?? "draft",
    }),
    [editItem]
  );

  const form = useForm<UpdateTestimonialInput>({
    resolver: zodResolver(UpdateTestimonialSchema),
    defaultValues,
  });

  const isDirty = useFormDirtyState(form);

  useEffect(() => {
    onDirtyChange?.(isDirty);
  }, [isDirty, onDirtyChange]);

  useEffect(() => {
    form.reset(defaultValues);
  }, [editItem, open, defaultValues, form]);

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <form id="form-testimonial" className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
      {/* Author Name */}
      <Controller
        name="author.name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="font-bold" htmlFor="form-testimonial-author-name">
              Autor
            </FieldLabel>

            <InputGroup className="h-12 border-gray-300 rounded-lg focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-secondary focus:border-transparent">
              <InputGroupInput
                {...field}
                id="form-testimonial-author-name"
                aria-invalid={fieldState.invalid}
                placeholder="Shrek"
                autoComplete="off"
                disabled={isSubmitting}
                className={isSubmitting ? "cursor-not-allowed opacity-50" : ""}
              />

              <InputGroupAddon>
                <User />
              </InputGroupAddon>
            </InputGroup>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Position */}
        <Controller
          name="author.position"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="font-bold" htmlFor="form-testimonial-author-position">
                Posición
              </FieldLabel>

              <InputGroup className="h-12 border-gray-300 rounded-lg focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-secondary focus:border-transparent">
                <InputGroupInput
                  {...field}
                  id="form-testimonial-author-position"
                  aria-invalid={fieldState.invalid}
                  placeholder="CEO"
                  autoComplete="off"
                  disabled={isSubmitting}
                  className={isSubmitting ? "cursor-not-allowed opacity-50" : ""}
                />

                <InputGroupAddon>
                  <Barcode />
                </InputGroupAddon>
              </InputGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Company */}
        <Controller
          name="author.company"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="font-bold" htmlFor="form-testimonial-author-company">
                Compañia
              </FieldLabel>

              <InputGroup className="h-12 border-gray-300 rounded-lg focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-secondary focus:border-transparent">
                <InputGroupInput
                  {...field}
                  id="form-testimonial-author-company"
                  aria-invalid={fieldState.invalid}
                  placeholder="Tu Empresa SAC"
                  autoComplete="off"
                  disabled={isSubmitting}
                  className={isSubmitting ? "cursor-not-allowed opacity-50" : ""}
                />

                <InputGroupAddon>
                  <Building />
                </InputGroupAddon>
              </InputGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <Controller
        name="author.avatar"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="font-bold" htmlFor="form-testimonial-author-avatar">
              Autor Avatar
            </FieldLabel>

            <ImageUpload value={field.value} onChange={field.onChange} disabled={isSubmitting} variant="button" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-[70%_1fr] gap-3">
        {/* Reseña */}
        <Controller
          name="resena"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel className="font-bold" htmlFor="form-testimonial-resena">
                Reseña
              </FieldLabel>

              <InputGroup className="h-12 border-gray-300 rounded-lg focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-secondary focus:border-transparent">
                <InputGroupTextarea
                  {...field}
                  id="form-testimonial-resena"
                  aria-invalid={fieldState.invalid}
                  placeholder="Ziphonex me parece..."
                  rows={4}
                  autoComplete="off"
                  disabled={isSubmitting}
                  className={`resize-none ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}
                />

                <InputGroupAddon>
                  <MessagesSquare />
                </InputGroupAddon>
              </InputGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Activo */}
        <Controller
          name="isActive"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} orientation="horizontal">
              <FieldLabel className="font-bold" htmlFor="form-testimonial-active">
                Activo
              </FieldLabel>

              <Switch
                id="form-testimonial-active"
                name={field.name}
                checked={field.value}
                onCheckedChange={field.onChange}
                aria-invalid={fieldState.invalid}
                disabled={isSubmitting}
                className={
                  isSubmitting
                    ? "cursor-not-allowed opacity-50"
                    : "data-[state=checked]:bg-secondary  data-[state=unchecked]:bg-gray-400"
                }
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Rating */}
        <Controller
          name="rating"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel className="font-bold" htmlFor="">
                Rating
              </FieldLabel>
              <SelectStar value={field.value!} onChange={field.onChange} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Estado de publicación */}
        <Controller
          name="status"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="font-bold" htmlFor="form-socialmedia-status">
                Estado
              </FieldLabel>
              <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="form-socialmedia-status"
                  aria-invalid={fieldState.invalid}
                  disabled={isSubmitting}
                  className={`${isSubmitting ? "cursor-not-allowed opacity-50" : "border-gray-300"}`}
                >
                  <SelectValue placeholder="Seleccione un estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Borrador</SelectItem>
                  <SelectItem value="published">Publicado</SelectItem>
                  <SelectItem value="archived">Archivado</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <DialogFooter className="gap-2 sm:gap-4">
        <Button
          type="button"
          variant="outline"
          className="cursor-pointer hover:bg-red-500"
          onClick={handleClose}
          disabled={isSubmitting}
        >
          Cancelar
        </Button>

        <Button
          type="submit"
          className="cursor-pointer bg-secondary hover:bg-secondary/90 hover:scale-110"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              Guardando...
            </>
          ) : (
            <>{isEditing ? "Actualizar" : "Crear"}</>
          )}
        </Button>
      </DialogFooter>
    </form>
  );
}
