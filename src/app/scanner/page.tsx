// pages/sheets.tsx
'use client'
import React, { useState } from 'react';
import PatientFormWithQRData from '../components/PatientFormWithQRData';
import InsuranceQRCodeScan from '../components/InsuranceQRCodeScan';
import GlobalStyle from '../globalStyles';
import MobileFrame from '../components/MobileFrame';
import styled from 'styled-components';

const Logo = styled.img`
  max-width: 70%;
  height: auto;
  margin-bottom: 00px; 
`;

const SheetsPage: React.FC = () => {
  const [showQRCodeData, setShowQRCodeData] = useState(false);
  const [qrCodeData, setQRCodeData] = useState<{ nome: string; cpf: string; convenio: string; numero_cart: string; sexo: string; rg: string;tipoSangue: string; escolaridade: string;} | null>(null);

  const handleScanComplete = (data: { nome: string; cpf: string; convenio: string; numero_cart: string; sexo: string; rg: string;tipoSangue: string; escolaridade: string; }) => {
    setQRCodeData(data);
    setShowQRCodeData(true);
  };

  return (
    <div>
    <MobileFrame>
      <Logo src="/Logo_Healthflow.png" alt="Logo" />
      <GlobalStyle />
      {showQRCodeData ? (
        <PatientFormWithQRData
          qrCodeData={qrCodeData}
          onScanComplete={() => setShowQRCodeData(false)}
        />
      ) : (
        <InsuranceQRCodeScan onScanComplete={handleScanComplete} />
      )}
    </MobileFrame>
  </div>
  );
};

export default SheetsPage;
