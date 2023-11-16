// components/ButtonLink.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
}

const StyledButton = styled.button`
  background-color: #fff; /* Fundo branco */
  color: #000; /* Texto preto */
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #000; /* Borda preta */
  cursor: pointer;
  border-radius: 5px;
  margin: 5px 0;
`;

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <StyledButton>{children}</StyledButton>
    </Link>
  );
};

export default ButtonLink;
