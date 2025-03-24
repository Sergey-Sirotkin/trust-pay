import { useAtom } from "jotai";
import { cardPaymentFormDataAtom } from "../store/cardTransfer.atoms";
import { CardPayment, CardPaymentSchema } from "../types/payment/CardPayment.types";
import { z } from "zod";

export const useCardPayment = () => {

    const [formData, setFormData] = useAtom(cardPaymentFormDataAtom);

    const updateFormData = (key: keyof CardPayment, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const validateForm = () => {
        try {
            CardPaymentSchema.parse(formData);
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.error("Validation errors:", error.errors);
            }
            return false;
        }
    };

    return { formData, updateFormData, validateForm };
};
