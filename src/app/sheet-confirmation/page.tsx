'use client'
import React from 'react';
import GlobalStyle from '../globalStyles';

const FichaOk: React.FC = () => {
  return (
    <div>
      <GlobalStyle/>
      <h1>Ficha enviada com sucesso!</h1>
      <p>
        Sua ficha foi recebida e encaminhada ao médico. Por favor, aguarde até que seu nome seja chamado.
      </p>
    </div>
  );
};

export default FichaOk;
