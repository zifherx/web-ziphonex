import z from "zod";

const AuthorSchema = z.object({
  name: z.string().min(1, "nombre del autor es requerido").max(100, "nombre no puede exceder 100 caracteres").trim(),
  position: z.string().min(1, "cargo es requerido").max(100, "cargo no puede exceder 100 caracteres").trim(),
  avatar: z.url("avatar debe ser una URL válida").trim(),
  company: z.string().min(1, "empresa es requerida").max(100, "empresa no puede exceder 100 caracteres").trim(),
});

export const CreateTestimonialSchema = z.object({
  resena: z
    .string()
    .min(10, "reseña debe tener al menos 10 caracteres")
    .max(1000, "reseña no puede exceder 1000 caracteres")
    .trim(),
  rating: z
    .number()
    .int("calificación de ser un número entero")
    .min(1, "calificación mínima es 1")
    .max(5, "calificación máxima es 5"),
  author: AuthorSchema,
  isActive: z.boolean().optional().default(true),
  status: z.enum(["published", "draft", "archived"]).optional().default("draft"),
});

export const UpdateTestimonialSchema = z.object({
  resena: z
    .string()
    .min(10, "La reseña debe tener al menos 10 caracteres")
    .max(1000, "La reseña no puede exceder 1000 caracteres")
    .trim()
    .optional(),
  rating: z
    .number()
    .int("La calificación debe ser un número entero")
    .min(1, "La calificación mínima es 1")
    .max(5, "La calificación máxima es 5")
    .optional(),
  author: AuthorSchema.optional(),
  isActive: z.boolean().optional(),
  status: z.enum(["published", "draft", "archived"]).optional(),
});

export type CreateTestimonialInput = z.infer<typeof CreateTestimonialSchema>;
export type UpdateTestimonialInput = z.infer<typeof UpdateTestimonialSchema>;

export class TestimonialValidator {
  static validateCreate(data: unknown) {
    return CreateTestimonialSchema.parse(data);
  }

  static validateUpdate(data: unknown) {
    return UpdateTestimonialSchema.parse(data);
  }
}
