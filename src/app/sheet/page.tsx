"use client"
import React from 'react';
import PatientForm from '../components/PatientForm';

interface PatientFormPageProps {
  type: string;
}

const PatientFormPage: React.FC<PatientFormPageProps> = ({ type }) => {
  return (
    <div>
      <h1>Preencha a Ficha Médica para {type}</h1>
      <PatientForm selectedDoctorType={type} />
    </div>
  );
};

export default PatientFormPage;

