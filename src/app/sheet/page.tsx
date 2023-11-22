"use client"
import React from 'react';
import PatientForm from '../components/PatientForm';
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

interface PatientFormPageProps {
  type: string;
}

const PatientFormPage: React.FC<PatientFormPageProps> = ({ type }) => {
  return (
    <MobileFrame>
              <Logo
            src="/Logo_Healthflow.png"
            alt="Logo"
            unoptimized={true}
            />
      <GlobalStyle/>
      <HomeTitle>Preencha a Ficha Médica{type}</HomeTitle>
      <PatientForm selectedDoctorType={type} />
    </MobileFrame>
  );
};

export default PatientFormPage;

