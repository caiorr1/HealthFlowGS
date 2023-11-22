import React from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';

interface PrivateOrInsuranceSelectionProps {
  onNext: () => void;
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-top: 10vh; 
  justify-content: center; /* Centralizar verticalmente */
`;

const PrivateOrInsuranceSelection: React.FC<PrivateOrInsuranceSelectionProps> = ({ onNext }) => {
  return (
    <ButtonContainer>
      <ButtonLink href="/private-form" customStyle="custom" onClick={onNext}>
        Particular
      </ButtonLink>
      <ButtonLink href="/data-or-qrcode" customStyle="custom" onClick={onNext}>
        Convênio
      </ButtonLink>
    </ButtonContainer>
  );
};

export default PrivateOrInsuranceSelection;
