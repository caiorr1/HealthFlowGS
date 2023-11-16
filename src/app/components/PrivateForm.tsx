// components/PrivateForm.tsx
import React, { useState } from 'react';

interface PrivateFormProps {
  onNext: () => void;
}

const PrivateForm: React.FC<PrivateFormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    telefone: '',
    rg: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onNext();
  };

  return (
    <div>
      <h2>Preencha os dados particulares:</h2>

      <label>
        Nome:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>

      <label>
        CPF:
        <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} />
      </label>

      <label>
        Telefone:
        <input type="text" name="telefone" value={formData.telefone} onChange={handleInputChange} />
      </label>

      <label>
        RG:
        <input type="text" name="rg" value={formData.rg} onChange={handleInputChange} />
      </label>

      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default PrivateForm;
