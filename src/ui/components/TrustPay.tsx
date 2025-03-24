import React, { useState, useEffect } from "react";
import { usePayment } from "../../hooks/usePaymentMethodSelection";
import * as S from "./TrustPay.styles";
import CardPaymentForm from "./paymentForms/CardPaymentForm";
import BankTransferForm from "./paymentForms/BankTransferForm";
import MobilePaymentForm from "./paymentForms/MobilePaymentForm";
import ProductDetailsForm from "./ProductDetailsForm";
import UserDetailsForm from "./UserDetailsForm";
import ShareLinkFrom from "./ShareLinkFrom";
import { paymentMethodApi } from "../../api/paymentMethodSelection.api";
import { productDetailsApi } from "../../api/productDetails.api";
import { userDetailsApi } from "../../api/userDetails.api"
import { shareLinkApi } from "../../api/shareLink.api";
import { useCardPayment } from "../../hooks/useCardPayment";
import { useBankTransfer } from "../../hooks/useBankTransfer";
import { useMobilePayment } from "../../hooks/useMobilePayment";
import { useProductDetails } from "../../hooks/useProductDetails";
import { useUserDetails } from "../../hooks/useUserDetails";
import { useShareLink } from "../../hooks/useShareLink";
import TrustPayCongratulations from "./TrustPayFinish";

const TrustPay: React.FC = () => {
    const {
        step,
        stepIndex,
        nextStep,
        prevStep,
        paymentType,
        selectPaymentType,
        isFormVisible,
        setIsFormVisible
    } = usePayment();

    const { formData: cardFormData, validateForm: validateCardForm } = useCardPayment();
    const { formData: bankFormData, validateForm: validateBankForm } = useBankTransfer();
    const { formData: mobileFormData, validateForm: validateMobileForm } = useMobilePayment();

    const { productDetails, validateProductDetails } = useProductDetails();
    const { userDetails, validateUserDetails } = useUserDetails();
    const { shareLink, validateShareLink } = useShareLink();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            setError(null);

            let response;
            let isValid = false;

            if (step === 1) {
                switch (paymentType) {
                    case "CARD":
                        isValid = validateCardForm();
                        if (isValid) {
                            response = await paymentMethodApi.submitPayment(paymentType, cardFormData);
                            if (response.success) {
                                nextStep();
                            }
                        }
                        break;
                    case "BANK_TRANSFER":
                        isValid = validateBankForm();
                        if (isValid) {
                            response = await paymentMethodApi.submitPayment(paymentType, bankFormData);
                            if (response.success) {
                                nextStep();
                            }
                        }
                        break;
                    case "MOBILE_PAYMENT":
                        isValid = validateMobileForm();
                        if (isValid) {
                            response = await paymentMethodApi.submitPayment(paymentType, mobileFormData);
                            if (response.success) {
                                nextStep();
                            }
                        }
                        break;
                    default:
                        break;
                }
            } else if (step === 2) {
                isValid = validateProductDetails();
                if (isValid) {
                    response = await productDetailsApi.submitProductDetails(productDetails);
                    if (response.success) {
                        nextStep();
                    }
                }
            } else if (step === 3) {
                isValid = validateUserDetails();
                if (isValid) {
                    response = await userDetailsApi.submitUserDetails(userDetails);
                    if (response.success) {
                        nextStep();
                    }
                }
            } else if (step === 4) {
                isValid = validateShareLink();
                if (isValid) {
                    response = await shareLinkApi.submitShareLink(shareLink);
                    if (response.success) {
                        nextStep();
                    }
                }
            }
        } catch (err) {
            console.log(err);
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const renderForm = () => {
        if (!isFormVisible) return null;

        switch (paymentType) {
            case "CARD":
                return <CardPaymentForm />;
            case "BANK_TRANSFER":
                return <BankTransferForm />;
            case "MOBILE_PAYMENT":
                return <MobilePaymentForm />;
            default:
                return null;
        }
    };

    useEffect(() => {
        if (step === 1 && !paymentType) {
            selectPaymentType("CARD");
        } else if (step === 1) {
            setIsFormVisible(true);
        }
    }, [step, paymentType, selectPaymentType]);

    return (
        <S.Wrapper>
            {step === 5 ? (
                <TrustPayCongratulations />
            ) : (
                <>
                    <S.Header>TrustPay</S.Header>
                    <S.ProgressBar>
                        {["Transaction Type", "Product Details", "Your Details", "Share Link"].map((label, index) => (
                            <React.Fragment key={index}>
                                <S.StepWrapper>
                                    <S.StepLabel>{label}</S.StepLabel>
                                    <S.StepCircle active={step > index} />
                                </S.StepWrapper>
                                {index < 3 && <S.ProgressLine progress={stepIndex} />}
                            </React.Fragment>
                        ))}
                    </S.ProgressBar>

                    {step === 1 && (
                        <div>
                            <h2>Select Payment Method</h2>
                            <S.Select
                                value={paymentType || "CARD"}
                                onChange={(e) => selectPaymentType(e.target.value as "CARD" | "BANK_TRANSFER" | "MOBILE_PAYMENT")}
                            >
                                <option value="CARD">Card Payment</option>
                                <option value="BANK_TRANSFER">Bank Transfer</option>
                                <option value="MOBILE_PAYMENT">Mobile Payment</option>
                            </S.Select>
                        </div>
                    )}

                    {renderForm()}

                    {step === 2 && <ProductDetailsForm />}
                    {step === 3 && <UserDetailsForm />}
                    {step === 4 && <ShareLinkFrom />}

                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                        {step > 1 && <S.PreviousButton onClick={prevStep}>Previous</S.PreviousButton>}
                        {step < 4 ? (
                            <S.Button onClick={handleSubmit} disabled={loading}>Next</S.Button>
                        ) : (
                            <S.Button onClick={handleSubmit}>Submit Payment</S.Button>
                        )}
                    </div>

                    {error && <S.ErrorText>{error}</S.ErrorText>}
                </>
            )}
        </S.Wrapper>
    );
};

export default TrustPay;
