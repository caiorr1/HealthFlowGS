'use client'
import React from 'react';
import PrivateForm from '../components/PrivateForm';
import GlobalStyle from '../globalStyles';
import MobileFrame from '../components/MobileFrame';

const PrivateFormPage: React.FC = () => {
  return (
    <MobileFrame>
      <GlobalStyle/>
      <h1>Preencha os Dados Particulares</h1>
      <PrivateForm onNext={() => {}} />
    </MobileFrame>
  );
};

export default PrivateFormPage;
