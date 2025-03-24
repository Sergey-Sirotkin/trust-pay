import React from "react";
import * as S from "./TrustPay.styles";

const TrustPayCongratulations: React.FC = () => {
    return (
        <S.Wrapper>
            <S.Header>TrustPay</S.Header>
            <S.CongratulationMessage>Congratulations!</S.CongratulationMessage>
        </S.Wrapper>
    );
};

export default TrustPayCongratulations;
