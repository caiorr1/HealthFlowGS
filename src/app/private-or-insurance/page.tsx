'use client'
import React from 'react';
import styled from 'styled-components';
import PrivateOrInsuranceSelection from '../components/PrivateOrInsuranceSelection';
import GlobalStyle from '../globalStyles';
import MobileFrame from '../components/MobileFrame';

const Logo = styled.img`
  max-width: 70%;
  height: auto;
  margin-bottom: 00px; 
`;

const HomeContainer = styled.div`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
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

const PrivateOrInsuranceSelectionPage: React.FC = () => {
  return (
    <MobileFrame>
      <HomeContainer>
        <Logo
            src="/Logo_Healthflow.png"
            alt="Logo"
            />
        <GlobalStyle/>
        <HomeTitle>Escolha entre Particular ou Convênio:</HomeTitle>
        <PrivateOrInsuranceSelection onNext={() => {}} />
      </HomeContainer>
    </MobileFrame>
  );
};

export default PrivateOrInsuranceSelectionPage;
