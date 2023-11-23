'use client'
import React from 'react';
import styled from 'styled-components';
import ButtonLink from '../components/ButtonLink';
import GlobalStyle from '../globalStyles';
import MobileFrame from '../components/MobileFrame';

interface InsuranceQRCodeProps {
  onNext: () => void;
}

const Logo = styled.img`
  max-width: 70%;
  height: auto;
  margin-bottom: 00px; 
`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 60px;
margin-top: 10vh; 
justify-content: center;
`;

const HomeTitle = styled.h1`
  color: #315A89;
  text-align: center;
  font-family: Arial;
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  font-weight: bold;
`;

const InsuranceQRCode: React.FC<InsuranceQRCodeProps> = ({ onNext }) => {

  
  return (
      <MobileFrame>
        <GlobalStyle/>
        <Logo
            src="/Logo_Healthflow.png"
            alt="Logo"
            />
        <HomeTitle>Escolha uma opção:</HomeTitle>
        <ButtonContainer>
          <ButtonLink href="/sheet" customStyle="custom">Digitar Dados</ButtonLink>
          <ButtonLink href="/scanner" customStyle="custom">Escanear QR Code</ButtonLink>
        </ButtonContainer>
      </MobileFrame>
  );
};

export default InsuranceQRCode;
