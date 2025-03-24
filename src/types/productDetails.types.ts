import { z } from "zod";

export const ProductDetailsSchema = z.object({
    product_title: z.string().min(1, "Product title is required"),
    product_description: z.string().min(1, "Product description is required"),
    product_images: z
        .array(z.instanceof(File).refine((file) => file instanceof File, "Each item must be a file"))
        .min(0, "At least one image is required")
        .max(3, "You can upload up to 3 images")
        .optional(),
    price: z.number().positive("Price must be a positive number"),
});

export type ProductDetails = z.infer<typeof ProductDetailsSchema>;
