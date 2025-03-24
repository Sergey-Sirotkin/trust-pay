import { z } from "zod";

export const UserDetailsSchema = z.object({
    full_name: z
        .string()
        .min(1, "Full name is required")
        .max(100, "Full name cannot exceed 100 characters"),
    email: z
        .string()
        .email("Please provide a valid email address"),
    phone_number: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number cannot exceed 15 digits")
        .regex(/^\+?[1-9]\d{1,14}$/, "Please provide a valid phone number"),
    address: z
        .string()
        .min(1, "Address is required"),
    gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional(),
    date_of_birth: z
        .string()
        .refine((val) => !isNaN(Date.parse(val)), "Please provide a valid date")
        .optional(),
});

export type UserDetails = z.infer<typeof UserDetailsSchema>;
