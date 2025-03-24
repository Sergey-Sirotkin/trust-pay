import { atom } from "jotai";
import { BankTransfer } from "../types/payment/BankTransfer.types";

export const bankTransferFormDataAtom = atom<BankTransfer>({
    account_number: "",
    bank_name: "",
    swift_code: "",
    account_holder_name: "",
});
