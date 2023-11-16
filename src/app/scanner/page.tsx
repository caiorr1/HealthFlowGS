'use client'
import React, { useState } from 'react';
import PatientFormWithQRData from '../components/PatientFormWithQRData';
import InsuranceQRCodeScan from '../components/InsuranceQRCodeScan';

const SheetsPage: React.FC = () => {
  const [showQRCodeData, setShowQRCodeData] = useState(false);

  const handleScanComplete = () => {
    setShowQRCodeData(true);
  };

  const qrCodeData = {
    nome: 'João da Silva',
    cpf: '123.456.789-00',
    convenio: 'Plano de Saúde XYZ',
    cardNumber: '987654321',
  };

  return (
    <div>
      <h1>Página de Envio de Fichas</h1>

      {showQRCodeData ? (
        <PatientFormWithQRData qrCodeData={qrCodeData} />
      ) : (
        <InsuranceQRCodeScan onScanComplete={handleScanComplete} />
      )}
    </div>
  );
};

export default SheetsPage;
