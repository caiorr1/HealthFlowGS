// components/PatientForm.tsx
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
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [convenio, setConvenio] = useState('');
  const [numeroCart, setNumeroCart] = useState('');
  const [outrosSintomas, setOutrosSintomas] = useState('');
  const [nivelDor, setNivelDor] = useState<number | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nome':
        setNome(value);
        break;
      case 'cpf':
        setCpf(value);
        break;
      case 'convenio':
        setConvenio(value);
        break;
      case 'numeroCart':
        setNumeroCart(value);
        break;
      case 'outrosSintomas':
        setOutrosSintomas(value);
        break;
      default:
        break;
    }
  };

  const handleNivelDorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const level = parseInt(event.target.value, 10);
    setNivelDor(level);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = {
        nome: nome,
        cpf: cpf,
        convenio: convenio,
        numero_cart: numeroCart,
        outros_sintomas: outrosSintomas,
        nivel_dor: nivelDor,
      };

      const response = await fetch('http://localhost:8080/pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
      } else {
        console.error('Erro ao enviar a ficha:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar a ficha:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Nome:</Label>
      <Input type="text" name="nome" value={nome} onChange={handleInputChange} />

      <Label>CPF:</Label>
      <Input type="text" name="cpf" value={cpf} onChange={handleInputChange} />

      <Label>Convênio:</Label>
      <Input type="text" name="convenio" value={convenio} onChange={handleInputChange} />

      <Label>Número da Carteirinha:</Label>
      <Input type="text" name="numeroCart" value={numeroCart} onChange={handleInputChange} />

      <Label>Outros Sintomas:</Label>
      <TextArea
        rows={4}
        name="outrosSintomas"
        placeholder="Digite outros sintomas aqui..."
        value={outrosSintomas}
        onChange={handleInputChange}
      />

      <Label>Nível da Dor:</Label>
      <input
        type="range"
        min="0"
        max="10"
        value={nivelDor || 0}
        onChange={handleNivelDorChange}
      />

      <StyledButtonLinkContainer>
            <ButtonLink href="/sheet-confirmation" customStyle="small">
              ENVIAR FICHA
            </ButtonLink>
      </StyledButtonLinkContainer>
    </Form>
  );
};

export default PatientForm;
