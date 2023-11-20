'use client'
import React from 'react';
import styled from 'styled-components';
import PrivateOrInsuranceSelection from '../components/PrivateOrInsuranceSelection';
import GlobalStyle from '../globalStyles';
import MobileFrame from '../components/MobileFrame';

const HomeContainer = styled.div`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
`;

const HomeTitle = styled.h1`
  color: #3498db;  
`;

const PrivateOrInsuranceSelectionPage: React.FC = () => {
  return (
    <MobileFrame>
      <HomeContainer>
        <GlobalStyle/>
        <HomeTitle>Escolha entre Particular ou Convênio</HomeTitle>
        <PrivateOrInsuranceSelection onNext={() => {}} />
      </HomeContainer>
    </MobileFrame>
  );
};

export default PrivateOrInsuranceSelectionPage;
