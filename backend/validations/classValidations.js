import { z } from "zod";

export const classSchema = z.object({
  name: z.string().min(3),
  ageGroup: z.string().min(2),
  description: z.string().min(10),
});
