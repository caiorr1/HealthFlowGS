import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ButtonLink from './ButtonLink';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  gap: 10px;

`;

const Label = styled.label`
  margin-top: 5px;
  font-size: 26px;  
  font-weight: bold;
  height: 20px;  
  color: #315A89;

`;

const Input = styled.input`
padding: 8px;
margin: 8px 0;
background-color: #DFE2E8;
border: 1px solid #ccc;

:focus {
  outline: none;
  border-color: #3498db;
}

`;

const TextArea = styled.textarea`
  padding: 8px;
  margin: 8px 0;

`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
`;

const SymptomButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const SymptomButton = styled.button<{ selected: boolean }>`
  margin: 4px;
  padding: 6px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#2ecc71' : '#3498db')};
  color: #fff;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

const StyledButtonLinkContainer = styled.div`
  padding: 15px;
  width: 320px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PatientFormProps {
  selectedDoctorType: string | null;
}

const PatientForm: React.FC<PatientFormProps> = ({ selectedDoctorType }) => {
  const [painLevel, setPainLevel] = useState<number | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [otherSymptoms, setOtherSymptoms] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handlePainLevelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const level = parseInt(event.target.value, 10);
    setPainLevel(level);
  };

  const handleSymptomClick = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      // Remove o sintoma se já estiver selecionado
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      // Adiciona o sintoma se ainda não estiver selecionado
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleOtherSymptomsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOtherSymptoms(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Simula o envio da ficha (substitua isso pela lógica real)
    try {
      // Lógica para enviar a ficha ao médico (simulada por um atraso)
      // Substitua isso pela lógica real de envio
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsFormSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar a ficha:', error);
    }
  };

  
    return (
      <Form onSubmit={handleSubmit}>
        <Label>Nome:</Label>
        <Input type="text"/>
        
        <Label>CPF:</Label>
        <Input type="text" />

        <Label>Convênio:</Label>
        <Input type="text" />

        <Label>Número da Carteirinha:</Label>
        <Input type="text" />

        <Label>Nível da Dor:</Label>
        <input
        type="range"
        min="0"
        max="10"
        value={painLevel || 0}
        onChange={handlePainLevelChange}
        />
        <span>{painLevel !== null ? `Nível: ${painLevel}` : 'Selecione um nível'}</span>
        <StyledButtonLinkContainer>
        <ButtonLink type="submit">
        {isFormSubmitted ? (
          <ButtonLink href="/sheet-confirmation">ENVIAR FICHA</ButtonLink>
        ) : (
          'ENVIAR FICHA'
        )}
        </ButtonLink>
        </StyledButtonLinkContainer>
      </Form>
    );
  };
  
  export default PatientForm;
