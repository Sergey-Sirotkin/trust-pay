import { z } from "zod";

export const MobilePaymentSchema = z.object({
    phone_number: z.preprocess(
        (val) => (typeof val === "string" ? Number(val.replace(/\D/g, "")) : val),
        z.number()
            .int()
            .min(1000000000, "Invalid phone number")
            .max(999999999999999, "Invalid phone number")
    ),
    provider: z.enum(["MOBILE_PAYMENT", "PAYPAL", "VENMO"]),
});

export type MobilePayment = z.infer<typeof MobilePaymentSchema>;
