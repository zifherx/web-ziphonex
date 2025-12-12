import z from "zod";

export const loginFormSchema = z.object({
  email: z.email({ error: "Debe ser un email válido" }),
  password: z
    .string()
    .min(8, { error: "La contraseña debe ser mayor a 8 caracteres" }),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;
