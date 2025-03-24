import { z } from "zod";
import { CardPaymentSchema } from "../types/payment/CardPayment.types";
import { BankTransferSchema } from "../types/payment/BankTransfer.types";
import { MobilePaymentSchema } from "../types/payment/MobilePayment.types";

export const paymentMethodApi = {
    submitPayment: async (
        paymentType: string,
        data: unknown
    ) => {
        let paymentSchema: z.ZodObject<any>;

        switch (paymentType) {
            case "CARD":
                paymentSchema = CardPaymentSchema;
                break;
            case "BANK_TRANSFER":
                paymentSchema = BankTransferSchema;
                break;
            case "MOBILE_PAYMENT":
                paymentSchema = MobilePaymentSchema;
                break;
            default:
                return {
                    success: false,
                    message: "Invalid payment type",
                    errors: "Invalid payment type"
                };
        }

        const parsedData = paymentSchema.safeParse(data);
        if (!parsedData.success) {
            const errorDetails = parsedData.error.format();

            const firstErrorMessage = Object.entries(errorDetails)
                .map(([key, value]) => {
                    if (value && "_errors" in value) {
                        return `${key}: ${value._errors[0]}`;
                    }
                    return null;
                })
                .filter(Boolean)[0] || "Invalid data";

            console.error("Validation error:", firstErrorMessage);

            return {
                success: false,
                message: firstErrorMessage
            };
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
            success: true,
            message: "Payment submitted successfully",
            data: parsedData.data,
        };
    },
};

