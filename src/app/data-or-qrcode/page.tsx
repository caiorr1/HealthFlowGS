'use client'
import React from 'react';
import styled from 'styled-components';
import ButtonLink from '../components/ButtonLink';

interface InsuranceQRCodeProps {
  onNext: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const HomeTitle = styled.h1`
  color: #3498db;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
`;

const InsuranceQRCode: React.FC<InsuranceQRCodeProps> = ({ onNext }) => {

  
  return (
    <Container>
      <HomeTitle>Escolha uma opção:</HomeTitle>
      <ButtonContainer>
        <ButtonLink href="/sheet">Digitar Dados</ButtonLink>
        <ButtonLink href="/scanner">Escanear QR Code</ButtonLink>
      </ButtonContainer>
    </Container>
  );
};

export default InsuranceQRCode;
