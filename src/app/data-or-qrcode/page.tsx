'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonLink from '../components/ButtonLink';
import { useRouter } from 'next/router';

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const InsuranceQRCode: React.FC<PageProps> = ({ params, searchParams }) => {
  const [scanComplete, setScanComplete] = useState(false);
  const router = useRouter();

  const handleQRScan = () => {
    // Lógica de escaneamento do QR Code (simulada por um atraso)
    // Substitua isso pela lógica real de escaneamento
    setTimeout(() => {
      setScanComplete(true);
    }, 2000);
  };

  return (
    <Container>
      <h2>Escolha uma opção:</h2>
      <ButtonContainer>
        <ButtonLink href="/sheet">
          Digitar Dados
        </ButtonLink>
        <ButtonLink href='/scanner'>
          Escanear QR Code
        </ButtonLink>
      </ButtonContainer>
      <button onClick={() => router.push('/next-page')} disabled={!scanComplete}>
        Próximo
      </button>
    </Container>
  );
};

export default InsuranceQRCode;
