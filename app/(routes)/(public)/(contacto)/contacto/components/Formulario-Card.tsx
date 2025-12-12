"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Loader,
  Mail,
  MessageSquare,
  Send,
  Settings,
  Smartphone,
  User,
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { formularioContactoSchema, FormularioContactoType } from "@/forms";
import { SERVICES_LIST } from "@/data";

export function FormularioCard() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const formulario = useForm<FormularioContactoType>({
    resolver: zodResolver(formularioContactoSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      typeService: "",
      message: "",
    },
  });

  const handleOnSubmit = async (values: FormularioContactoType) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", values);
    } catch (err: any) {
      console.error("Error", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:col-span-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
          <CardHeader className="-mb-5">
            <CardTitle className="font-bold text-2xl text-foreground mb-3">
              Cuéntanos tu Proyecto
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Completa el formulario y te contactaremos en menos de 24 horas
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <Form {...formulario}>
              <form
                onSubmit={formulario.handleSubmit(handleOnSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={formulario.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Nombre Completo
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-4 transform -traslate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            {...field}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={`pl-10 h-12 bg-input border-border transition-all duration-200 ${
                              focusedField === "name"
                                ? "border-primary ring-1 ring-primary/20"
                                : ""
                            }`}
                            placeholder="Nombre completo"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={formulario.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
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
                    control={formulario.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Celular
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
                                focusedField === "phone"
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

                <FormField
                  control={formulario.control}
                  name="typeService"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Servicio de Interés
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger
                              className={`pl-10 h-16 border-2 w-full bg-input border-border transition-all duration-200 ${
                                focusedField === "typeService"
                                  ? "border-primary ring-1 ring-primary/20"
                                  : ""
                              }`}
                              onFocus={() => setFocusedField("typeService")}
                              onBlur={() => setFocusedField(null)}
                            >
                              <SelectValue placeholder="Seleccione un servicio" />
                            </SelectTrigger>
                            <SelectContent>
                              {SERVICES_LIST.map(({ id, title, slug }) => (
                                <SelectItem key={id} value={slug}>
                                  {title}
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

                <FormField
                  control={formulario.control}
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
                                ? "border-primary ring-1 ring-primary/20"
                                : ""
                            }`}
                            placeholder="Cuéntanos sobre tu proyecto..."
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
