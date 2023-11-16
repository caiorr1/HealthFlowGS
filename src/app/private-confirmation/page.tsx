'use client'
import React from 'react';
import PrivateConfirmation from '../components/PrivateConfirmation';

const PrivateConfirmationPage: React.FC = () => {
  return (
    <div>
      <h1>Confirmação dos Dados Particulares</h1>
      <PrivateConfirmation onNext={() => {}} />
    </div>
  );
};

export default PrivateConfirmationPage;
