import { useAtom } from "jotai";
import { mobilePaymentFormDataAtom } from "../store/mobilePayment.atoms";
import { MobilePayment, MobilePaymentSchema } from "../types/payment/MobilePayment.types";
import { z } from "zod";

export const useMobilePayment = () => {

    const [formData, setFormData] = useAtom(mobilePaymentFormDataAtom);

    const updateFormData = (key: keyof MobilePayment, value: string) => {
        setFormData((prev: MobilePayment) => ({ ...prev, [key]: value }));
    };

    const validateForm = () => {
        try {
            MobilePaymentSchema.parse(formData);
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
