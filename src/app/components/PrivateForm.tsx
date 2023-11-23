// components/PrivateForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 20px;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  color: #315A89;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-top: 4px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormTextArea = styled.textarea`
  padding: 8px;
  margin-top: 4px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;

  :hover {
    background-color: #2a77ad;
  }
`;

interface PrivateFormProps {
  onNext: () => void;
}

const PrivateForm: React.FC<PrivateFormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    telefone: '',
    rg: '',
    outrosSintomas: '',
    nivelDor: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onNext();
  };

  return (
    <FormContainer>
      <h2>Preencha os dados particulares:</h2>

      <FormLabel>
        Nome:
        <FormInput type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </FormLabel>

      <FormLabel>
        CPF:
        <FormInput type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} />
      </FormLabel>

      <FormLabel>
        Telefone:
        <FormInput type="text" name="telefone" value={formData.telefone} onChange={handleInputChange} />
      </FormLabel>

      <FormLabel>
        RG:
        <FormInput type="text" name="rg" value={formData.rg} onChange={handleInputChange} />
      </FormLabel>

      <FormLabel>
        Outros Sintomas:
        <FormTextArea
          rows={4}
          name="outrosSintomas"
          value={formData.outrosSintomas}
          onChange={handleInputChange}
        />
      </FormLabel>

      <FormLabel>
        Nível de Dor:
        <FormInput type="text" name="nivelDor" value={formData.nivelDor} onChange={handleInputChange} />
      </FormLabel>

      <SubmitButton onClick={handleSubmit}>Enviar</SubmitButton>
    </FormContainer>
  );
};

export default PrivateForm;
