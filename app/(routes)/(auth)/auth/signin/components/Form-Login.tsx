"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStackApp } from "@stackframe/stack";
import { AtSign, Eye, EyeOff, KeyRound, Loader2, Zap } from "lucide-react";

import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import {
  loginFormSchema,
  LoginFormType,
} from "@/common/validations/auth.validation";

export function FormLogin() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(true);
  const appStack = useStackApp();

  const formLogin = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (values: LoginFormType) => {
    setIsSubmitting(true);
    const result = await appStack.signInWithCredential({
      email: values.email,
      password: values.password,
    });

    if (result.status === "error") {
      setIsSubmitting(false);
      toast.error(`Error en el login`);
    }

    if (result.status === "ok") {
      setIsSubmitting(false);
      toast.success(`Bienvenido al CMS`);
    }
  };

  return (
    <Card className="w-full border-none shadow-none bg-transparent space-y-4">
      <CardHeader>
        <CardTitle className="text-3xl">Login</CardTitle>
        <CardDescription className="text-xl">
          Ingresa tu email y contraseña para loguearte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-login" onSubmit={formLogin.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Email */}
            <Controller
              name="email"
              control={formLogin.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-login-email">Email</FieldLabel>
                  <InputGroup
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`h-12 bg-white transition-all duration-200 ${
                      focusedField === "email"
                        ? "ring-2 focus-visible:ring-primary focus-visible:border-primary"
                        : ""
                    }`}
                  >
                    <InputGroupInput
                      {...field}
                      id="form-login-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="tu-email@dominio.com"
                      autoComplete="off"
                    />
                    <InputGroupAddon>
                      <AtSign />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Contraseña */}
            <Controller
              name="password"
              control={formLogin.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-login-password">
                    Password
                  </FieldLabel>
                  <InputGroup
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    className={`h-12 bg-white transition-all duration-200 ${
                      focusedField === "password"
                        ? "ring-2 focus-visible:ring-primary focus-visible:border-primary"
                        : ""
                    }`}
                  >
                    <InputGroupAddon>
                      <KeyRound />
                    </InputGroupAddon>
                    <InputGroupInput
                      {...field}
                      id="form-login-password"
                      aria-invalid={fieldState.invalid}
                      placeholder="password"
                      autoComplete="off"
                      type={showPassword ? "password" : "text"}
                    />
                    <InputGroupAddon align="inline-end">
                      {showPassword ? (
                        <Eye
                          className="cursor-pointer w-5 h-5"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <EyeOff
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button
            type="submit"
            form="form-login"
            disabled={isSubmitting}
            className="w-full cursor-pointer bg-gradient-to-r from-primary to-secondary text-white py-6 text-xl font-bold rounded-2xl group hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-3 w-6 h-6" />
                Iniciando...
              </>
            ) : (
              <>
                Log in
                <Zap />
              </>
            )}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
