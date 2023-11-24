"use client"
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  gap: 6px;
`;

const Label = styled.label`
  margin-top: 4px;
  font-size: 18px;
  font-weight: bold;
  height: 18px;
  color: #315A89;
`;

const Input = styled.input`
  padding: 6px;
  margin: 6px 0;
  background-color: #DFE2E8;
  border: 1px solid #ccc;

  :focus {
    outline: none;
    border-color: #3498db;
  }
`;

const TextArea = styled.textarea`
  padding: 6px;
  margin: 6px 0;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
`;


const StyledButtonLinkContainer = styled.div`
  padding: 10px;
  width: 260px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const PatientForm = () => {
  const [painLevel, setPainLevel] = useState<number | null>(null);
  const [otherSymptoms, setOtherSymptoms] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handlePainLevelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const level = parseInt(event.target.value, 10);
    setPainLevel(level);
  };

  const handleOtherSymptomsChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setOtherSymptoms(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsFormSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar a ficha:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Nome:</Label>
      <Input type="text" />

      <Label>CPF:</Label>
      <Input type="text" />

      <Label>Convênio:</Label>
      <Input type="text" />

      <Label>Número da Carteirinha:</Label>
      <Input type="text" />

      <Label>Outros Sintomas:</Label>
      <TextArea
        rows={4}
        placeholder="Digite outros sintomas aqui..."
        value={otherSymptoms}
        onChange={handleOtherSymptomsChange}
      />

      <Label>Nível da Dor:</Label>
      <input
        type="range"
        min="0"
        max="10"
        value={painLevel || 0}
        onChange={handlePainLevelChange}
      />
      <StyledButtonLinkContainer>
        <ButtonLink customStyle="small">
          {isFormSubmitted ? (
            <ButtonLink href="/sheet-confirmation" customStyle="small">
              ENVIAR FICHA
            </ButtonLink>
          ) : (
            'ENVIAR FICHA'
          )}
        </ButtonLink>
      </StyledButtonLinkContainer>
    </Form>
  );
};

export default PatientForm;
