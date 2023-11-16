'use client'
import React from 'react';
import styled from 'styled-components';
import PrivateOrInsuranceSelection from '../components/PrivateOrInsuranceSelection';

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
    <HomeContainer>
      <HomeTitle>Escolha entre Particular ou Convênio</HomeTitle>
      <PrivateOrInsuranceSelection onNext={() => {}} />
    </HomeContainer>
  );
};

export default PrivateOrInsuranceSelectionPage;
