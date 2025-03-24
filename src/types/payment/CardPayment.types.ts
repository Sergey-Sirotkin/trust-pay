import { z } from "zod";

export const CardPaymentSchema = z.object({
    card_number: z.preprocess(
        (val) => (typeof val === "string" ? Number(val) : val),
        z.number().int().min(1000000000000000, "Invalid card number").max(9999999999999999, "Invalid card number")
    ),
    card_expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date (MM/YY)"),
    card_cvc: z.preprocess(
        (val) => (typeof val === "string" ? Number(val) : val),
        z.number().int().min(100, "Invalid CVC code").max(9999, "Invalid CVC code")
    ),
    cardholder_name: z.string().min(1, "Cardholder name is required"),
});

export type CardPayment = z.infer<typeof CardPaymentSchema>;
