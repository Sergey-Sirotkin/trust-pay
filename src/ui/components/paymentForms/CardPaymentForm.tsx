import React from "react";
import { useCardPayment } from "../../../hooks/useCardPayment";
import * as S from "../TrustPay.styles";

const CardPaymentForm: React.FC = () => {
    const { formData, updateFormData } = useCardPayment();

    return (
        <S.FormWrapper>
            <S.FormField>
                <S.Label>Card Number</S.Label>
                <S.Input
                    type="text"
                    value={formData.card_number || ""}
                    onChange={(e) => updateFormData("card_number", e.target.value)}
                />
            </S.FormField>

            <S.FormField>
                <S.Label>Expiry Date (MM/YY)</S.Label>
                <S.Input
                    type="text"
                    value={formData.card_expiry || ""}
                    onChange={(e) => updateFormData("card_expiry", e.target.value)}
                />
            </S.FormField>

            <S.FormField>
                <S.Label>CVC</S.Label>
                <S.Input
                    type="text"
                    value={formData.card_cvc || ""}
                    onChange={(e) => updateFormData("card_cvc", e.target.value)}
                />
            </S.FormField>

            <S.FormField>
                <S.Label>Cardholder Name</S.Label>
                <S.Input
                    type="text"
                    value={formData.cardholder_name || ""}
                    onChange={(e) => updateFormData("cardholder_name", e.target.value)}
                />
            </S.FormField>
        </S.FormWrapper>
    );
};

export default CardPaymentForm;
