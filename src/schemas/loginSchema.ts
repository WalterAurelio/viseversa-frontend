import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ error: (iss) => (iss.input === "" ? "El email es requerido" : "El email ingresado no es válido") }),
  password: z.string().min(6, { error: (iss) => (iss.input === "" ? "La contraseña es requerida" : `La contraseña debe tener al menos ${iss.minimum} caracteres`) })
});

export type LoginSchema = z.infer<typeof loginSchema>;
