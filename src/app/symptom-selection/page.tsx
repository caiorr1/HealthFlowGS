'use client'
import React from 'react';
import SymptomSelection from '../components/SymptomSelection';

const SymptomSelectionPage: React.FC = () => {
  return (
    <div>
      <h1>Seleção de Sintomas</h1>
      <SymptomSelection onNext={() => {}} />
    </div>
  );
};

export default SymptomSelectionPage;
