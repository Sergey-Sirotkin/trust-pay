import { atom } from "jotai";
import { CardPayment } from "../types/payment/CardPayment.types";

export const cardPaymentFormDataAtom = atom<CardPayment>({
    card_number: 0,
    card_expiry: "",
    card_cvc: 0,
    cardholder_name: "",
});
