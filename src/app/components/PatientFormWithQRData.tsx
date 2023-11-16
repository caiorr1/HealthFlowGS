// components/PatientFormWithQRData.tsx
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-top: 8px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
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

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

interface PatientFormWithQRDataProps {
  qrCodeData: {
    nome: string;
    cpf: string;
    convenio: string;
  };
}

const PatientFormWithQRData: React.FC<PatientFormWithQRDataProps> = ({ qrCodeData }) => {
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
      <Input type="text" defaultValue={qrCodeData.nome} readOnly />

      <Label>CPF:</Label>
      <Input type="text" defaultValue={qrCodeData.cpf} readOnly />

      <Label>Convênio:</Label>
      <Input type="text" defaultValue={qrCodeData.convenio} readOnly />

      <Label>Nível da Dor:</Label>
      <input
        type="range"
        min="0"
        max="10"
        value={painLevel || 0}
        onChange={handlePainLevelChange}
      />
      <span>{painLevel !== null ? `Nível: ${painLevel}` : 'Selecione um nível'}</span>

      <Label>Outros Sintomas:</Label>
      <TextArea value={otherSymptoms} onChange={handleOtherSymptomsChange} />

      <Button type="submit">
        {isFormSubmitted ? (
          <StyledLink href="/sheet-confirmation">Enviar ficha</StyledLink>
        ) : (
          'Enviar Ficha'
        )}
      </Button>
    </Form>
  );
};

export default PatientFormWithQRData;
