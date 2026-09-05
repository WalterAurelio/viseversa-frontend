import { z } from "zod";

export const testSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }),
  lastName: z.string().min(1, { message: "El apellido es requerido" }),
  size: z.array(z.enum(["XS", "S", "M", "L", "XL", "XXL"]), "Debes seleccionar al menos un talle").nonempty("Debes seleccionar al menos un talle")
});

export type TestSchema = z.infer<typeof testSchema>;
