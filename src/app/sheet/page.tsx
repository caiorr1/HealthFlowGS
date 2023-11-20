"use client"
import React from 'react';
import PatientForm from '../components/PatientForm';
import GlobalStyle from '../globalStyles';
import MobileFrame from '../components/MobileFrame';

interface PatientFormPageProps {
  type: string;
}

const PatientFormPage: React.FC<PatientFormPageProps> = ({ type }) => {
  return (
    <MobileFrame>
      <GlobalStyle/>
      <h1>Preencha a Ficha Médica para {type}</h1>
      <PatientForm selectedDoctorType={type} />
    </MobileFrame>
  );
};

export default PatientFormPage;

