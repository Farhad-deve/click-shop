import { z } from 'zod';

export const categorySchema = z.object({
    image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Image is required")
    .refine((files) => files[0]?.size < 5 * 1024 * 1024, "Image size must be less than 5MB"),
    
    name: z.string().min(3, "Minimum 3 characters").max(30, "Maximum 30 characters"),
    description: z.string().min(3, "Minimum 3 characters").max(300, "Maximum 300 characters"),
});

export type categoryFormData = z.infer<typeof categorySchema>