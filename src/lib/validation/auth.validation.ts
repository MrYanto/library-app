import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'name must contain at least 2 characters' }),
  email: z.string().email({ message: 'Email is not valid' }),
  phoneNumber: z.string().min(10, { message: 'Phone number is not valid' }),
  password: z
    .string()
    .min(8, { message: 'Password need to contain at least 8 characters' }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
