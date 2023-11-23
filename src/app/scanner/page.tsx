// pages/sheets.tsx
'use client'
import React, { useState } from 'react';
import PatientFormWithQRData from '../components/PatientFormWithQRData';
import InsuranceQRCodeScan from '../components/InsuranceQRCodeScan';
import GlobalStyle from '../globalStyles';
import MobileFrame from '../components/MobileFrame';
import styled from 'styled-components';

const HomeTitle = styled.h1`
  color: #315A89;
  text-align: center;
  font-family: Arial;
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  font-weight: bold;
`;

const SheetsPage: React.FC = () => {
  const [showQRCodeData, setShowQRCodeData] = useState(false);
  const [qrCodeData, setQRCodeData] = useState<{ nome: string; cpf: string; convenio: string } | null>(null);

  const handleScanComplete = (data: { nome: string; cpf: string; convenio: string }) => {
    setQRCodeData(data);
    setShowQRCodeData(true);
  };

  return (
    <div>
      <MobileFrame>
        <GlobalStyle/>
        <HomeTitle>Escolha uma opção:</HomeTitle>

        {showQRCodeData ? (
          <PatientFormWithQRData qrCodeData={qrCodeData} onScanComplete={() => setShowQRCodeData(false)} />
        ) : (
          <InsuranceQRCodeScan onScanComplete={handleScanComplete} />
        )}
      </MobileFrame>
    </div>
  );
};

export default SheetsPage;
