import { z } from "zod";

export const signupSchema = z.object({
  email: z.email({ error: (iss) => (iss.input === "" ? "El email es requerido" : "El email ingresado no es válido") }),
  password: z.string().min(6, { error: (iss) => (iss.input === "" ? "La contraseña es requerida" : `La contraseña debe tener al menos ${iss.minimum} caracteres`) }),
  name: z.string().min(1, { error: "El nombre es requerido" }),
  lastName: z.string().min(1, { error: "El apellido es requerido" }),
  username: z.string().min(1, { error: "El nombre de usuario es requerido" })
});

export type SignupSchema = z.infer<typeof signupSchema>;
