'use client'
import React from 'react';
import styled from 'styled-components';
import ButtonLink from '../components/ButtonLink';
import GlobalStyle from '../globalStyles';
import MobileFrame from '../components/MobileFrame';

interface InsuranceQRCodeProps {
  onNext: () => void;
}


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; 
  margin-top: 20px;
`;

const HomeTitle = styled.h1`
  color: #315A89;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InsuranceQRCode: React.FC<InsuranceQRCodeProps> = ({ onNext }) => {

  
  return (
      <MobileFrame>
        <GlobalStyle/>
        <HomeTitle>Escolha uma opção:</HomeTitle>
        <ButtonContainer>
          <ButtonLink href="/sheet" customStyle="custom">Digitar Dados</ButtonLink>
          <ButtonLink href="/scanner" customStyle="custom">Escanear QR Code</ButtonLink>
        </ButtonContainer>
      </MobileFrame>
  );
};

export default InsuranceQRCode;
