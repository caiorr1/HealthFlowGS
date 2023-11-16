'use client'
import React from 'react';
import PrivateOrInsuranceSelection from '../components/PrivateOrInsuranceSelection';

const PrivateOrInsuranceSelectionPage: React.FC = () => {
  return (
    <div>
      <h1>Escolha entre Particular ou Convênio</h1>
      <PrivateOrInsuranceSelection onNext={() => {}} />
    </div>
  );
};

export default PrivateOrInsuranceSelectionPage;
