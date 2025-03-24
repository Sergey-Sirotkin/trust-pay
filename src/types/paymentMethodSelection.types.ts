import { z } from 'zod';

export const PaymentMethodSchema = z.object({
    type: z.enum(['CARD', 'BANK_TRANSFER', 'MOBILE_PAYMENT']),
    cardNumber: z.string().optional(),
    bankAccount: z.string().optional(),
    mobileNumber: z.string().optional(),
});

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
