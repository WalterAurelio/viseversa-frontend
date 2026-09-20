import { z } from "zod";
import { signupSchema } from "./signupSchema";

export const loginSchema = z.object({
  email: signupSchema.shape.email,
  password: signupSchema.shape.password
});

export type LoginSchema = z.infer<typeof loginSchema>;
