import { atom } from "jotai";
import { PaymentMethod } from "../types/paymentMethodSelection.types";

export const stepAtom = atom(1);

export const indexAtom = atom(0);

export const paymentTypeAtom = atom<PaymentMethod["type"]>("CARD");

export const formDataAtom = atom<PaymentMethod>({} as PaymentMethod);

export const isFormVisibleAtom = atom(true);
