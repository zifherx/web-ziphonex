"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IdCard,
  Loader2,
  Mail,
  MessageSquare,
  Rocket,
  Settings,
  Smartphone,
  User,
  Zap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { formularioCotizarSchema, FormularioCotizarType } from "@/forms";
import { tiposDocumento } from "@/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function FormularioProduct() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const form = useForm<FormularioCotizarType>({
    resolver: zodResolver(formularioCotizarSchema),
    defaultValues: {
      nombreCompleto: "",
      numeroDocumento: "",
      email: "",
      celular: "",
      message: "",
      aceptaPolitica: false,
      aceptaBoletin: false,
    },
  });

  const tipoDocumentoSeleccionado = form.watch("tipoDocumento");
  const numeroDocumento = form.watch("numeroDocumento");

  const maxLengthDocumento =
    tiposDocumento.find((t) => t.value === tipoDocumentoSeleccionado)
      ?.maxLength || 0;

  const handleNumeroDocumentoChange = (value: string) => {
    if (tipoDocumentoSeleccionado) {
      const maxLength =
        tiposDocumento.find((t) => t.value === tipoDocumentoSeleccionado)
          ?.maxLength || 0;
      if (value.length <= maxLength && /^\d*$/.test(value)) {
        form.setValue("numeroDocumento", value);
      }
    }
  };

  const onSubmit = async (values: FormularioCotizarType) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Form submitted: ", values);
      //   form.reset();
    } catch (err: any) {
      console.error("Error: ", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <Card className="rounded-3xl overflow-hidden">
        <CardHeader className="text-center pb-8">
          <CardTitle className="font-bold text-3xl text-foreground">
            Solicita tu Cotización
          </CardTitle>
          <CardDescription className="text-lg">
            Completa el formulario y te contactaremos pronto
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="nombreCompleto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      Nombre Completo*
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          className={`h-12 pl-10 bg-input border-border transition-all duration-200 ${
                            focusedField === "nombreCompleto"
                              ? "border-accent ring-1 ring-accent/20"
                              : ""
                          }`}
                          placeholder="Nombre completo"
                          {...field}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Tipo de Documento */}
                <FormField
                  control={form.control}
                  name="tipoDocumento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Tipo de Documento*
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Settings className="absolute left-3 top-5 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              form.setValue("numeroDocumento", "");
                            }}
                            defaultValue={field.value}
                          >
                            <SelectTrigger
                              className={`h-14 w-full pl-10 bg-input border-border transition-all duration-200 ${
                                focusedField === "tipoDocumento"
                                  ? "border-accent ring-1 ring-accent/20"
                                  : ""
                              }`}
                              onFocus={() => setFocusedField("tipoDocumento")}
                              onBlur={() => setFocusedField(null)}
                            >
                              <SelectValue placeholder="Seleccione el tipo de documento" />
                            </SelectTrigger>
                            <SelectContent>
                              {tiposDocumento.map(({ id, value, label }) => (
                                <SelectItem key={id} value={value}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Número de Documento */}
                <FormField
                  control={form.control}
                  name="numeroDocumento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Número de Documento *
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <IdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            className={`pl-10 h-12 bg-input border-border transition-all duration-200 ${
                              focusedField === "numeroDocumento"
                                ? "border-accent ring-1 ring-accent/20"
                                : ""
                            }`}
                            placeholder={
                              tipoDocumentoSeleccionado
                                ? `Ingrese su ${tipoDocumentoSeleccionado.toLowerCase()}`
                                : "Primero tipo de documento"
                            }
                            disabled={!tipoDocumentoSeleccionado}
                            value={field.value}
                            onChange={(e) =>
                              handleNumeroDocumentoChange(e.target.value)
                            }
                            onFocus={() => setFocusedField("numeroDocumento")}
                            onBlur={() => setFocusedField(null)}
                          />
                        </div>
                      </FormControl>
                      {tipoDocumentoSeleccionado && (
                        <FormDescription>
                          Máximo {maxLengthDocumento} dígitos (
                          {numeroDocumento.length}/{maxLengthDocumento})
                        </FormDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email*</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            {...field}
                            type="email"
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={`pl-10 h-12 bg-input border-border transition-all duration-200 ${
                              focusedField === "email"
                                ? "border-primary ring-1 ring-primary/20"
                                : ""
                            }`}
                            placeholder="tu@email.com"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="celular"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Teléfono (opcional)
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            {...field}
                            type="tel"
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            className={`pl-10 h-12 bg-input border-border transition-all duration-200 ${
                              focusedField === "celular"
                                ? "border-primary ring-1 ring-primary/20"
                                : ""
                            }`}
                            placeholder="+51 999 888 777"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Mensaje */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Mensaje</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-muted-foreground" />
                        <Textarea
                          {...field}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className={`pl-10 pt-4 min-h-32 bg-input border-border transition-all duration-200 resize-none ${
                            focusedField === "message"
                              ? "border-accent ring-1 ring-accent/20"
                              : ""
                          }`}
                          placeholder="Cuéntanos sobre tu proyecto"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Política de Datos */}
              <FormField
                control={form.control}
                name="aceptaPolitica"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-row gap-5">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-2 border-accent data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=checked]:text-white w-6 h-6 text-lg"
                        />
                        <FormLabel className="text-sm block">
                          Mediante el envío del formulario declaro que he leído
                          la autorización y acepto la{" "}
                          <a
                            href="/legal/terminos-condiciones"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:text-accent transition-colors"
                          >
                            Política de Protección de Datos Personales
                          </a>{" "}
                          y el tratamiento de mis datos personales a Ziphonex *
                        </FormLabel>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Boletín de Suscripción */}
              <FormField
                control={form.control}
                name="aceptaBoletin"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-row gap-5">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-2 border-accent data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=checked]:text-white w-6 h-6 text-lg"
                        />
                        <FormLabel className="text-sm block">
                          Deseo recibir el boletín de suscripción para recibir
                          nuestras últimas notiicas y actualizaciones.
                        </FormLabel>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full cursor-pointer bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white py-6 text-xl font-bold rounded-2xl group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    Solicitar Cotización
                    <Zap className="ml-3 h-6 w-6 group-hover:scale-125 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
