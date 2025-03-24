import { atom } from "jotai";
import { MobilePayment } from "../types/payment/MobilePayment.types";

export const mobilePaymentFormDataAtom = atom<MobilePayment>({
    phone_number: 0,
    provider: "MOBILE_PAYMENT",
});
