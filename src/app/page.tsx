'use client'
import React from 'react';
import SymptomSelection from '../app/components/SymptomSelection';

const Home: React.FC = () => {
  const handleNext = () => {
    // Implemente a lógica para avançar para a próxima etapa
    console.log('Próxima etapa');
  };

  return (
    <div>
      <h1>Bem-vindo ao Sistema de Fichas Médicas</h1>
      <SymptomSelection onNext={handleNext} />
    </div>
  );
};

export default Home;
