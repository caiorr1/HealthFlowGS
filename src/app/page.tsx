'use client'
import React from 'react';
import styled from 'styled-components';
import SymptomSelection from '../app/components/SymptomSelection';
import GlobalStyle from './globalStyles';
import MobileFrame from './components/MobileFrame';

const HomeContainer = styled.div`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
`;

const HomeTitle = styled.h1`
  color: #315A89;
  text-align: center;
  font-family: Arial;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Home: React.FC = () => {
  const handleNext = () => {
    console.log('Próxima etapa');
  };

  return (
    <>
      <MobileFrame>
        <GlobalStyle/>
        <HomeContainer>
          <HomeTitle>Bem-vindo ao Sistema de Fichas Médicas</HomeTitle>
          <SymptomSelection onNext={handleNext} />
        </HomeContainer>
      </MobileFrame>
    </>
  );
};

export default Home;
