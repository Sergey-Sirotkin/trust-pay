import { useAtom } from "jotai";
import { bankTransferFormDataAtom } from "../store/bankTransfer.atoms";
import { BankTransfer, BankTransferSchema } from "../types/payment/BankTransfer.types";
import { z } from "zod";

export const useBankTransfer = () => {

    const [formData, setFormData] = useAtom(bankTransferFormDataAtom);

    const updateFormData = (key: keyof BankTransfer, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const validateForm = () => {
        try {
            BankTransferSchema.parse(formData);
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
