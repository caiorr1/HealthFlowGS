'use client'
import React from 'react';
import PrivateForm from '../components/PrivateForm';
import GlobalStyle from '../globalStyles';

const PrivateFormPage: React.FC = () => {
  return (
    <div>
      <GlobalStyle/>
      <h1>Preencha os Dados Particulares</h1>
      <PrivateForm onNext={() => {}} />
    </div>
  );
};

export default PrivateFormPage;
