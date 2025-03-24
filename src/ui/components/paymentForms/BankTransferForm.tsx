import React from "react";
import { useBankTransfer } from "../../../hooks/useBankTransfer";
import * as S from "../TrustPay.styles";

const BankTransferForm: React.FC = () => {
    const { formData, updateFormData } = useBankTransfer();

    return (
        <S.FormWrapper>
            <S.FormField>
                <S.Label>Account Number</S.Label>
                <S.Input
                    type="text"
                    value={formData.account_number || ""}
                    onChange={(e) => updateFormData("account_number", e.target.value)}
                />
            </S.FormField>

            <S.FormField>
                <S.Label>Bank Name</S.Label>
                <S.Input
                    type="text"
                    value={formData.bank_name || ""}
                    onChange={(e) => updateFormData("bank_name", e.target.value)}
                />
            </S.FormField>

            <S.FormField>
                <S.Label>SWIFT Code</S.Label>
                <S.Input
                    type="text"
                    value={formData.swift_code || ""}
                    onChange={(e) => updateFormData("swift_code", e.target.value)}
                />
            </S.FormField>

            <S.FormField>
                <S.Label>Account Holder Name</S.Label>
                <S.Input
                    type="text"
                    value={formData.account_holder_name || ""}
                    onChange={(e) => updateFormData("account_holder_name", e.target.value)}
                />
            </S.FormField>
        </S.FormWrapper>
    );
};

export default BankTransferForm;
