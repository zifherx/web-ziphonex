import z from "zod";

export const formularioSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.email("Ingresa un correo electrónico válido"),
  phone: z.string().length(9, "El teléfono debe tener 9 dígitos"),
  typeService: z.string().min(1, "Selecciona un tipo de servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type FormularioType = z.infer<typeof formularioSchema>;
