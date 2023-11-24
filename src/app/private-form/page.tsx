'use client'
import React from 'react';
import PrivateForm from '../components/PrivateForm';
import GlobalStyle from '../globalStyles';
import MobileFrame from '../components/MobileFrame';
import styled from 'styled-components';


const Logo = styled.img`
  max-width: 70%;
  height: auto;
  margin-bottom: 00px; 
`;

const HomeTitle = styled.h1`
  color: #315A89;
  text-align: center;
  font-family: Arial;
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  font-weight: bold;
`;

const PrivateFormPage: React.FC = () => {
  return (
    <MobileFrame>
      <Logo
            src="/Logo_Healthflow.png"
            alt="Logo"
            />
      <GlobalStyle/>
      <HomeTitle>Preencha a Ficha Médica</HomeTitle>
      <PrivateForm />
    </MobileFrame>
  );
};

export default PrivateFormPage;
