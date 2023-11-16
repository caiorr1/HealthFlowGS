'use client'
import React from 'react';
import PrivateForm from '../components/PrivateForm';

const PrivateFormPage: React.FC = () => {
  return (
    <div>
      <h1>Preencha os Dados Particulares</h1>
      <PrivateForm onNext={() => {}} />
    </div>
  );
};

export default PrivateFormPage;
