import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'name must contain at least 2 characters' }),
    email: z.string().email({ message: 'Email is not valid' }),
    password: z
      .string()
      .min(8, { message: 'Password need to contain at least 8 characters' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password need to contain at least 8 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords doesn't match",
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
