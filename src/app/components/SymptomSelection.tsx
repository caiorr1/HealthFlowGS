// components/SymptomSelection.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';

interface SymptomSelectionProps {
  onNext: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface SymptomButtonProps {
  isSelected: boolean;
}

const SymptomButton = styled.button<SymptomButtonProps>`
  font-size: 18px;
  padding: 12px;
  margin: 8px;
  width: 200px; // Defina o valor desejado para a largura dos botões
  background-color: ${(props) => (props.isSelected ? '#3498db' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  border: 2px solid #3498db;
  border-radius: 5px;
  cursor: pointer;
`;

const SymptomSelection: React.FC<SymptomSelectionProps> = ({ onNext }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const handleSymptomSelect = (symptom: string) => {
    setSelectedSymptoms((prevSymptoms) =>
      prevSymptoms.includes(symptom)
        ? prevSymptoms.filter((s) => s !== symptom)
        : [...prevSymptoms, symptom]
    );
  };

  return (
    <Container>
      <h2>Selecione seus sintomas:</h2>
      <SymptomButton
        isSelected={selectedSymptoms.includes('Febre')}
        onClick={() => handleSymptomSelect('Febre')}
      >
        Febre
      </SymptomButton>
      <SymptomButton
        isSelected={selectedSymptoms.includes('Dor de Cabeça')}
        onClick={() => handleSymptomSelect('Dor de Cabeça')}
      >
        Dor de Cabeça
      </SymptomButton>
      <SymptomButton
        isSelected={selectedSymptoms.includes('Tosse')}
        onClick={() => handleSymptomSelect('Tosse')}
      >
        Tosse
      </SymptomButton>
      <SymptomButton
        isSelected={selectedSymptoms.includes('Dor de Garganta')}
        onClick={() => handleSymptomSelect('Dor de Garganta')}
      >
        Dor de Garganta
      </SymptomButton>
      <SymptomButton
        isSelected={selectedSymptoms.includes('Fadiga')}
        onClick={() => handleSymptomSelect('Fadiga')}
      >
        Fadiga
      </SymptomButton>
      <SymptomButton
        isSelected={selectedSymptoms.includes('Falta de Ar')}
        onClick={() => handleSymptomSelect('Falta de Ar')}
      >
        Falta de Ar
      </SymptomButton>
      <SymptomButton
        isSelected={selectedSymptoms.includes('Dores Musculares')}
        onClick={() => handleSymptomSelect('Dores Musculares')}
      >
        Dores Musculares
      </SymptomButton>
      <SymptomButton
        isSelected={selectedSymptoms.includes('Perda de Paladar ou Olfato')}
        onClick={() => handleSymptomSelect('Perda de Paladar ou Olfato')}
      >
        Perda de Paladar ou Olfato
      </SymptomButton>
      <ButtonLink href='/private-or-insurance'>
        Enviar
      </ButtonLink>
    </Container>
  );
};

export default SymptomSelection;
