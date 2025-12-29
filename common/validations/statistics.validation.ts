import z from "zod";

export const CreateStatisticSchema = z
  .object({
    icon: z.string().min(1, "Icono es requerido"),
    iconColor: z.string().optional(),
    iconBGColor: z
      .string()
      .min(1, "IconBG Color es requerido")
      .regex(/^bg-/, "Debe ser una clase de Tailwind válida (bg-*)"),
    value: z
      .number({
        error: "Valor debe ser un número",
      })
      .nonnegative("Valor debe ser positivo o cero")
      .max(999999, "Valor no puede ser mayor a 999,999"),
    secondaryValue: z
      .number({
        error: "Valor secundario debe ser un número",
      })
      .nonnegative("Valor secundario debe ser positivo o cero")
      .max(999999, "Valor secundario no puede ser mayor a 999,999")
      .optional(),
    symbol: z.enum(["+", "%", "/", "-", "×", "=", ""], { error: "Símbolo inválido" }),
    title: z
      .string()
      .min(3, "Título debe tener al menos 3 caracteres")
      .max(100, "Título no puede tener más de 100 caracteres"),
    description: z.string().max(500, "Descripción no puede tener más de 500 caracteres").optional(),
    order: z
      .number({ error: "Orden debe ser un número" })
      .int("Orden debe ser un número entero")
      .nonnegative("Orden debe ser un número positivo o cero"),
    status: z.enum(["draft", "published", "archived"]).default("draft"),
    isActive: z.boolean().default(true),
  })
  .refine(
    (data) => {
      if (data.secondaryValue !== undefined && data.symbol !== "/") {
        return false;
      }
      return true;
    },
    {
      error: 'Valor secundario solo es válido con el símbolo "/"',
      path: ["secondaryValue"],
    }
  );

export const UpdateStatisticSchema = CreateStatisticSchema.partial();

export type CreateStatisticInput = z.infer<typeof CreateStatisticSchema>;
export type UpdateStatisticInput = z.infer<typeof UpdateStatisticSchema>;

export class StatisticValidator {
  static validateCreate(data: unknown) {
    return CreateStatisticSchema.parse(data);
  }

  static validateUpdate(data: unknown) {
    return UpdateStatisticSchema.parse(data);
  }
}
