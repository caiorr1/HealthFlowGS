'use client'
import React from 'react';
import styled from 'styled-components';
import SymptomSelection from '../app/components/SymptomSelection';
import GlobalStyle from './globalStyles';
import ScreenContainer from './components/ScreenContainer';

const HomeContainer = styled.div`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
`;

const HomeTitle = styled.h1`
  color: #3498db;  
`;

const Home: React.FC = () => {
  const handleNext = () => {
    console.log('Próxima etapa');
  };

  return (
    
    <HomeContainer>
      <ScreenContainer>
        <GlobalStyle/> 
        <HomeTitle>Bem-vindo ao Sistema de Fichas Médicas</HomeTitle>
        <SymptomSelection onNext={handleNext} />
      </ScreenContainer>
    </HomeContainer>
    
  );
};

export default Home;
