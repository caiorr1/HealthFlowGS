'use client'
import React from 'react';
import styled from 'styled-components';
import SymptomSelection from '../app/components/SymptomSelection';
import GlobalStyle from './globalStyles';
import MobileFrame from './components/MobileFrame';


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
  font-size: 30px;
  font-style: normal;
  line-height: normal;
  font-weight: bold;
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
        <Logo
          src="/Logo_Healthflow.png"
          alt="Logo"
          unoptimized={true}
          />
          <HomeTitle>Bem-vindo ao Sistema de Fichas Médicas</HomeTitle>
          <SymptomSelection onNext={handleNext} />
        </HomeContainer>
      </MobileFrame>
    </>
  );
};

export default Home;
import Image from 'next/image'
 
