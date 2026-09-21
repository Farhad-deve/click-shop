import { z } from "zod";

export const productSchema = z.object({
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Image is required")
    .refine(
      (files) => files[0]?.size < 5 * 1024 * 1024,
      "Image size must be less than 5MB",
    ),
  name: z
    .string("Name is required")
    .min(3, "Minimum 3 characters")
    .max(30, "Maximum 30 characters"),
  description: z
    .string("Description is required")
    .min(3, "Minimum 3 characters")
    .max(700, "Maximum 700 characters"),
  price: z.number("Price is required").max(10000000, "Maximum 10,000,000").min(1, "Minimum 1"),
  rate: z.number("Rating is required").max(5, "Max rate 5").min(1, "Min rate 1"),
  categoryId: z.string().min(1, "Category is required"),
});

export type productFormData = z.infer<typeof productSchema>;
