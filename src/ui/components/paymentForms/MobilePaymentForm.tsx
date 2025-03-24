import React from "react";
import { useMobilePayment } from "../../../hooks/useMobilePayment";
import * as S from "../TrustPay.styles";

const MobilePaymentForm: React.FC = () => {
    const { formData, updateFormData } = useMobilePayment();

    return (
        <S.FormWrapper>
            <S.FormField>
                <S.Label>Phone Number</S.Label>
                <S.Input
                    type="text"
                    value={formData.phone_number || ""}
                    onChange={(e) => updateFormData("phone_number", e.target.value)}
                />
            </S.FormField>

            <S.FormField>
                <S.Label>Provider</S.Label>
                <S.SelectProvider
                    value={formData.provider || "MOBILE_PAYMENT"}
                    onChange={(e) => updateFormData("provider", e.target.value)}
                >
                    <option value="MOBILE_PAYMENT">Mobile Payment</option>
                    <option value="PAYPAL">PayPal</option>
                    <option value="VENMO">Venmo</option>
                </S.SelectProvider>
            </S.FormField>
        </S.FormWrapper>
    );
};

export default MobilePaymentForm;
