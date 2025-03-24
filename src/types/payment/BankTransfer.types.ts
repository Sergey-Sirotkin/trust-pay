import { z } from "zod";

export const BankTransferSchema = z.object({
    account_number: z.string().regex(/^\d{10,20}$/, "Invalid account number"),
    bank_name: z.string().min(1, "Bank name is required"),
    swift_code: z.string().regex(/^[A-Z0-9]{8,11}$/, "Invalid SWIFT code"),
    account_holder_name: z.string().min(1, "Account holder name is required"),
});

export type BankTransfer = z.infer<typeof BankTransferSchema>;
