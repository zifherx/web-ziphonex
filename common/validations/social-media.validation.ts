import z from "zod";
import { SocialMediaIcon } from "../types/social-media.types";

export const CreateSocialMediaSchema = z.object({
  label: z.string().min(1, "El label es requerido").max(50, "El label no puede exceder 50 caracteres").trim(),

  icon: z.string().min(1, "El icon es requerido"),

  href: z
    .url("Debe ser una URL válida")
    .regex(/^https?:\/\/.+/, "La URL debe comenzar con http:// o https://")
    .trim(),

  order: z.number().int().min(0, "El orden debe ser mayor o igual a 0").optional(),

  isActive: z.boolean().optional(),

  openInNewTab: z.boolean().optional(),

  status: z
    .enum(["published", "draft", "archived"] as const)
    .optional()
    .default("draft"),

  color: z
    .string()
    .regex(/^#[0-9A-F]{6}$/i, "Debe ser un color hexadecimal válido (#RRGGBB)")
    .optional(),
});

export const UpdateSocialMediaSchema = CreateSocialMediaSchema.partial();

export const socialMedialFilterSchema = z.object({
  isActive: z
    .string()
    .transform((val) => val === "true")
    .optional(),
  icon: z.string().optional(),
});

export const paginationSchema = z.object({
  page: z
    .string()
    .default("1")
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().int().min(1)),
  limit: z
    .string()
    .default("10")
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().int().min(1).max(100)),
});

export type CreateSocialMediaInput = z.infer<typeof CreateSocialMediaSchema>;
export type UpdateSocialMediaInput = z.infer<typeof UpdateSocialMediaSchema>;
export type SocialMediaFiltersInput = z.infer<typeof socialMedialFilterSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;

export class SocialMediaValidator {
  static validateCreate(data: unknown): CreateSocialMediaInput {
    return CreateSocialMediaSchema.parse(data);
  }

  static validateUpdate(data: unknown): UpdateSocialMediaInput {
    return UpdateSocialMediaSchema.parse(data);
  }

  static validateFilters(data: unknown): SocialMediaFiltersInput {
    return socialMedialFilterSchema.parse(data);
  }

  static validatePagination(data: unknown): PaginationInput {
    return paginationSchema.parse(data);
  }

  // Validación segura
  static safeValidateCreate(data: unknown) {
    return CreateSocialMediaSchema.safeParse(data);
  }

  static safeValidationUpdate(data: unknown) {
    return UpdateSocialMediaSchema.safeParse(data);
  }
}

export interface SocialMediaFormValues {
  label: string;
  icon: SocialMediaIcon;
  href: string;
  order?: number;
  isActive?: boolean;
  openInNewTab?: boolean;
  color?: string;
}
