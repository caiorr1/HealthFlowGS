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
  max-width: 600px; /* Set the desired max-width */
  margin: 0 auto; /* Center the container */
`;

const SymptomButton = styled.button`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  padding: 12px;
  margin: 8px;
  width: 220px; 
  height: 80px; 
  background-color: ${(props) => (props.isSelected ? '#3F72AF' : '#DFE2E8')};
  color: ${(props) => (props.isSelected ? '#FFFFFF' : '#1B365C')};
  border: 0px solid #3498db;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledButtonLinkContainer = styled.div`
  padding: 15px;
  width: 320px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
        {/* Add the rest of your buttons here */}
      </div>
      <StyledButtonLinkContainer>
        <ButtonLink href='/private-or-insurance'>ENVIAR</ButtonLink>
      </StyledButtonLinkContainer>
    </Container>
  );
};

export default SymptomSelection;
