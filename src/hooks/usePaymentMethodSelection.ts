import { useAtom } from "jotai";
import {
    stepAtom,
    indexAtom,
    paymentTypeAtom,
    formDataAtom,
    isFormVisibleAtom,
} from "../store/paymentMethodSelection.atoms";
import { PaymentMethod } from "../types/paymentMethodSelection.types";

export const usePayment = () => {
    const [step, setStep] = useAtom(stepAtom);
    const [stepIndex, setIndex] = useAtom(indexAtom);
    const [paymentType, setPaymentType] = useAtom(paymentTypeAtom);
    const [formData, setFormData] = useAtom(formDataAtom);
    const [isFormVisible, setIsFormVisible] = useAtom(isFormVisibleAtom);

    const nextStep = () => {
        setStep((prev) => prev + 1);
        setIndex((prev) => prev + 1);
        if (step >= 1) {
            setIsFormVisible(false);
        }
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
        setIndex((prev) => prev - 1);
    };

    const selectPaymentType = (type: PaymentMethod["type"]) => {
        setPaymentType(type);
        setFormData({ type } as PaymentMethod);
        setIsFormVisible(true);
    };

    const updateFormData = (key: keyof PaymentMethod, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    return {
        step,
        stepIndex,
        nextStep,
        prevStep,
        paymentType,
        selectPaymentType,
        formData,
        updateFormData,
        isFormVisible,
        setIsFormVisible
    };
};
