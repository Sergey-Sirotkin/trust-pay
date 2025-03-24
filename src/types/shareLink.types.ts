import { z } from "zod";

export const ShareLinkSchema = z.object({
    link_title: z
        .string()
        .min(1, "Link title is required")
        .max(100, "Link title cannot exceed 100 characters"),
    link_url: z
        .string()
        .url("Please provide a valid URL"),
    description: z
        .string()
        .max(500, "Description cannot exceed 500 characters")
        .optional(),
});

export type ShareLink = z.infer<typeof ShareLinkSchema>;
