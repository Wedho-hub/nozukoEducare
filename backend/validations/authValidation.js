import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export const loginSchema = z.object({
  email: z.string().refine(val => val === 'admin' || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val), {
    message: 'Must be a valid email or "admin"',
  }),
  password: z.string().min(6),
});
