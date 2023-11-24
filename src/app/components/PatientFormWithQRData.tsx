// components/PatientFormWithQRData.tsx
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  gap: 10px;
`;

const Label = styled.label`
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
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
  margin-top: 20px;
`;

interface PatientFormWithQRDataProps {
  qrCodeData: {
    nome: string;
    cpf: string;
    convenio: string;
    numero_cart: string;
    sexo: string;
    rg: string;
    tipoSangue: string;
    escolaridade: string;
  } | null;
  onScanComplete: () => void;
}

const PatientFormWithQRData: React.FC<PatientFormWithQRDataProps> = ({ qrCodeData, onScanComplete }) => {
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

  const handleEnviarFichaClick = async () => {
    try {
      const formData = {
        nm_nome_paciente: qrCodeData?.nome || '',
        nm_rg_paciente: qrCodeData?.rg || '',
        nr_cpf_paciente: qrCodeData?.cpf || '',
        fl_sexo_paciente: qrCodeData?.sexo || 'Feminino',
        nm_tp_sang_paciente: qrCodeData?.tipoSangue || 'A-',
        nm_escolaridade_paciente: qrCodeData?.escolaridade || 'Ensino Fundamental Completo',
      };

      const response = await fetch('http://localhost:8080/pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        setIsFormSubmitted(true);
        onScanComplete();
      } else {
        console.error('Erro ao enviar a ficha:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar a ficha:', error);
    }
  };

  return (
    <Form>
      <Label>Nome:</Label>
      <Input type="text" defaultValue={qrCodeData?.nome || ''} readOnly />

      <Label>CPF:</Label>
      <Input type="text" defaultValue={qrCodeData?.cpf || ''} readOnly />

      <Label>Convênio:</Label>
      <Input type="text" defaultValue={qrCodeData?.convenio || ''} readOnly />

      <Label>Número da Carteirinha:</Label>
      <Input type="text" defaultValue={qrCodeData?.numero_cart || ''} readOnly />

      <Label>Outros Sintomas:</Label>
      <TextArea value={otherSymptoms} onChange={handleOtherSymptomsChange} />

      <Label>Nível da Dor:</Label>
      <input
        type="range"
        min="0"
        max="10"
        value={painLevel || 0}
        onChange={handlePainLevelChange}
      />
      
      <StyledButtonLinkContainer>
        <ButtonLink customStyle="small" onClick={handleEnviarFichaClick} href='/sheet-confirmation'>
          {isFormSubmitted ? 'ENVIAR FICHA' : 'ENVIAR FICHA'}
        </ButtonLink>
      </StyledButtonLinkContainer>
    </Form>
  );
};

export default PatientFormWithQRData;
