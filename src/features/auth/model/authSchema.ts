import { z } from 'zod';
 
export const loginSchema = z.object({
    email: z.email("Invalid email format"),
    password: z.string().min(8, "Password must be 8 characters").max(20),
});

export const signUpSchema = loginSchema.extend({
    userName: z.string().min(3, "User name must be 3 characters").max(20),
});

export type LoginFormData = z.infer<typeof loginSchema>
export type SignUpFormData = z.infer<typeof signUpSchema>