// components/InsuranceQRCodeScan.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface InsuranceQRCodeScanProps {
  onScanComplete: () => void;
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

const InsuranceQRCodeScan: React.FC<InsuranceQRCodeScanProps> = ({ onScanComplete }) => {
  const [scanComplete, setScanComplete] = useState(false);

  useEffect(() => {
    const scanTimeout = setTimeout(() => {
      setScanComplete(true);
    }, 5000);

    return () => clearTimeout(scanTimeout);
  }, []);

  return (
    <Container>
      <ScanMessage>Aproxime seu QR Code ao scanner</ScanMessage>
      <ScannerImage src="/scanner.jpg" alt="QR Code Scanner" />

      {scanComplete && (
        <UserInfoContainer>
          <h2>Dados do Usuário:</h2>
          <UserInfo>Nome: João da Silva</UserInfo>
          <UserInfo>CPF: 123.456.789-00</UserInfo>
          <UserInfo>Convênio: Plano de Saúde XYZ</UserInfo>
          <UserInfo>Número da Carteirinha: 987654321</UserInfo>
          <button onClick={onScanComplete}>Próximo</button>
        </UserInfoContainer>
      )}
    </Container>
  );
};

export default InsuranceQRCodeScan;
