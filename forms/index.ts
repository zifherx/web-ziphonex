import { tiposDocumento } from "@/data";
import z from "zod";

export const formularioContactoSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.email("Ingresa un correo electrónico válido"),
  phone: z.string().length(9, "El teléfono debe tener 9 dígitos"),
  typeService: z.string().min(1, "Selecciona un tipo de servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export const formularioCotizarSchema = z
  .object({
    nombreCompleto: z
      .string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(100, "El nombre no puede exceder 100 caracteres"),
    tipoDocumento: z.enum(["DNI", "RUC", "CARNET", "PASAPORTE"], {
      error: "Debe seleccionar un tipo de documento",
    }),
    numeroDocumento: z.string().min(1, "El número de documento es obligatorio"),
    email: z.email("Ingresa un correo electrónico válido"),
    celular: z
      .string()
      .length(9, "El teléfono debe tener 9 dígitos")
      .regex(/^\d+$/, "El celular solo debe contener números"),
    message: z.string().optional(),
    aceptaPolitica: z
      .boolean()
      .refine((val) => val === true, {
        error: "Debe aceptar la política de tratamiento de datos",
      }),
    aceptaBoletin: z.boolean().optional(),
  })
  .refine(
    (data) => {
      const tipoDoc = tiposDocumento.find(
        (t) => t.value === data.tipoDocumento
      );
      if (tipoDoc && data.numeroDocumento) {
        return data.numeroDocumento.length <= tipoDoc.maxLength;
      }
      return true;
    },
    {
      error: "El número de documento excede la longitud permitida",
      path: ["numeroDocumento"],
    }
  );

export type FormularioContactoType = z.infer<typeof formularioContactoSchema>;
export type FormularioCotizarType = z.infer<typeof formularioCotizarSchema>;
