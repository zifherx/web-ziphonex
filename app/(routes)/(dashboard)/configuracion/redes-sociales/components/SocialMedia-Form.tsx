"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AxeIcon, Tag } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import {
  UpdateSocialMediaInput,
  updateSocialMediaSchema,
} from "@/common/validations/social-media.validation";
import { SOCIALMEDIA_FORM_PROP } from "@/common/types/socialmedia-props";

export function SocialMediaForm({
  editItem,
  onOpenChange,
  onSubmit,
  isSubmitting = false,
}: SOCIALMEDIA_FORM_PROP) {
  const form = useForm<UpdateSocialMediaInput>({
    resolver: zodResolver(updateSocialMediaSchema),
    defaultValues: {
      label: "",
      icon: "",
      href: "",
      isActive: true,
      openInNewTab: true,
      status: "draft",
    },
  });

  const handleClose = () => {
    onOpenChange(false);
  };
  return (
    <form id="form-socialmedia" className="space-y-5">
      {/* <FieldGroup className="space-y-1"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Label */}
        <Controller
          name="label"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-bold"
                htmlFor="form-socialmedia-label"
              >
                Label
              </FieldLabel>
              <InputGroup className="h-12 border-gray-300 rounded-lg focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-secondary focus:border-transparent">
                <InputGroupInput
                  {...field}
                  id="form-socialmedia-label"
                  aria-invalid={fieldState.invalid}
                  placeholder="Facebook"
                  autoComplete="off"
                />
                <InputGroupAddon>
                  <Tag />
                </InputGroupAddon>
              </InputGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Icon */}
        <Controller
          name="icon"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="font-bold" htmlFor="form-socialmedia-icon">
                Ícono
              </FieldLabel>
              <InputGroup className="h-12 border-gray-300 rounded-lg focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-secondary focus:border-transparent">
                <InputGroupInput
                  {...field}
                  id="form-socialmedia-icon"
                  aria-invalid={fieldState.invalid}
                  placeholder="Facebook"
                  autoComplete="off"
                />
                <InputGroupAddon>
                  <AxeIcon />
                </InputGroupAddon>
              </InputGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      {/* Href */}
      <Controller
        name="href"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="font-bold" htmlFor="form-socialmedia-icon">
              Href
            </FieldLabel>
            <InputGroup className="h-12 border-gray-300 rounded-lg focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-secondary focus:border-transparent">
              <InputGroupInput
                {...field}
                id="form-socialmedia-icon"
                aria-invalid={fieldState.invalid}
                placeholder="facebook.com"
                autoComplete="off"
              />
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
            </InputGroup>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* isActive */}
      <Controller
        name="isActive"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} orientation="horizontal">
            <FieldContent>
              <FieldLabel
                className="font-bold"
                htmlFor="form-socialmedia-active"
              >
                Activo
              </FieldLabel>
              <FieldDescription>
                Estado booleano que marcará si está o no habilitado.
                Default=`true`
              </FieldDescription>
            </FieldContent>
            <Switch
              id="form-socialmedia-active"
              name={field.name}
              checked={field.value}
              onCheckedChange={field.onChange}
              aria-invalid={fieldState.invalid}
              className="data-[state=checked]:bg-secondary  data-[state=unchecked]:bg-gray-400"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* openInNewTab */}
      <Controller
        name="openInNewTab"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} orientation="horizontal">
            <FieldContent>
              <FieldLabel className="font-bold" htmlFor="form-socialmedia-tab">
                Nuevo Tab
              </FieldLabel>
              <FieldDescription>
                Indica si el ícono se abrirá en otro tab del navegador
              </FieldDescription>
            </FieldContent>
            <Switch
              id="form-socialmedia-tab"
              name={field.name}
              checked={field.value}
              onCheckedChange={field.onChange}
              aria-invalid={fieldState.invalid}
              className="data-[state=checked]:bg-secondary  data-[state=unchecked]:bg-gray-400"
            />
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
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                id="form-socialmedia-status"
                aria-invalid={fieldState.invalid}
                className="border-gray-300"
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

      {/* </FieldGroup> */}
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
          Guardar
        </Button>
      </DialogFooter>
    </form>
  );
}
