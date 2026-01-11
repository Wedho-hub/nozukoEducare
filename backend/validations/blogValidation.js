import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(3),
  excerpt: z.string().min(0).optional(),
  metaDescription: z.string().min(0).optional(),
  slug: z.string().min(1).optional(),
  coverImage: z.string().min(1).optional(),
  content: z.string().min(20),
  published: z.boolean().optional(),
});

// Update schema: allow partial updates (all fields optional but when present must be valid)
export const blogUpdateSchema = blogSchema.partial();
