'use client'
import React from 'react';
import SymptomSelection from '../components/SymptomSelection';
import GlobalStyle from '../globalStyles';

const SymptomSelectionPage: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>Seleção de Sintomas</h1>
      <SymptomSelection onNext={() => {}} />
    </div>
  );
};

export default SymptomSelectionPage;
