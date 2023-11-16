// components/PrivateForm.tsx
import React, { useState } from 'react';

interface PrivateFormProps {
  onNext: () => void;
}

const PrivateForm: React.FC<PrivateFormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    // Adicione mais campos conforme necessário
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Lógica para processar os dados particulares, se necessário
    onNext(); // Avança para a próxima etapa
  };

  return (
    <div>
      <h2>Preencha os dados particulares:</h2>
      <label>Nome:</label>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

      <label>CPF:</label>
      <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} />

      {/* Adicione mais campos conforme necessário */}
      
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default PrivateForm;
