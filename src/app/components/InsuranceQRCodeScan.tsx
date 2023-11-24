// components/InsuranceQRCodeScan.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';
import MobileFrame from './MobileFrame';

interface InsuranceQRCodeScanProps {
  onScanComplete: (data: { nome: string; cpf: string; convenio: string ; numero_cart: string}) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScanMessage = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ScannerImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 2px solid #000;
  margin-bottom: 20px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInfo = styled.p`
  margin: 10px 0;
`;

const HomeTitle = styled.h1`
  color: #315A89;
  text-align: center;
  font-family: Arial;
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const InsuranceQRCodeScan: React.FC<InsuranceQRCodeScanProps> = ({ onScanComplete }) => {
  const [scanComplete, setScanComplete] = useState(false);

  useEffect(() => {
    const scanTimeout = setTimeout(() => {
      setScanComplete(true);
    }, 5000);

    return () => clearTimeout(scanTimeout);
  }, []);

  return (
    <MobileFrame>
      <Container>
        <ScanMessage>Aproxime seu QR Code ao scanner</ScanMessage>
        <ScannerImage/>

        {scanComplete && (
          <UserInfoContainer>
            <HomeTitle>Seus dados:</HomeTitle>
            <UserInfo>Nome: Fulano da Gama</UserInfo>
            <UserInfo>CPF: 123.456.789-00</UserInfo>
            <UserInfo>Convênio: Plano de Saúde XYZ</UserInfo>
            <UserInfo>Número da Carteirinha: 987654321</UserInfo>
            <ButtonLink customStyle='small' onClick={() => onScanComplete({ nome: 'Fulano da Gama', cpf: '123.456.789-00', convenio: 'Notre Dame', numero_cart:'987654321'})}>PRÓXIMO</ButtonLink>
          </UserInfoContainer>
        )}
      </Container>
    </MobileFrame>
  );
};

export default InsuranceQRCodeScan;
