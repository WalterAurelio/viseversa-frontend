import { useMemo } from "react";
import { z } from "zod";

export const useFilterSchema = (locations: string[], sizes: string[]) => {
  return useMemo(
    () =>
      z.object({
        size: z.array(z.enum(sizes)).optional(),
        location: z.preprocess((value) => (value === "" ? undefined : value), z.enum(locations).optional())
      }),
    [locations, sizes]
  );
};
