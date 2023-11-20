import React from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; 
  margin-top: 20px;
`;

const PrivateOrInsuranceSelection: React.FC = () => {
  return (
    <ButtonContainer>
      <ButtonLink href="/private-form" customStyle="custom">
        Particular
      </ButtonLink>
      <ButtonLink href="/data-or-qrcode" customStyle="custom">
        Convênio
      </ButtonLink>
    </ButtonContainer>
  );
};

export default PrivateOrInsuranceSelection;
