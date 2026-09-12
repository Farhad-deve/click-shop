import { z } from 'zod';
 
export const authSchema = z.object({
    userName: z.string().min(3, "User name must be 3 characters").max(20).optional(),
    email: z.email("Invalid email format"),
    password: z.string().min(8, "Password must be 8 characters").max(20),
});



export type AuthFormData = z.infer<typeof authSchema>
