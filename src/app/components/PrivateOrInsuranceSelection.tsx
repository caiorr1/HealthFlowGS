'use client'
import React from 'react';
import ButtonLink from './ButtonLink';

interface PrivateOrInsuranceSelectionProps {
  onNext: () => void;
}

const PrivateOrInsuranceSelection: React.FC<PrivateOrInsuranceSelectionProps> = ({ onNext }) => {
  return (
    <div>
      <ButtonLink href="/private-form">
        Particular
      </ButtonLink>
      <ButtonLink href="/data-or-qrcode">
        Convênio
      </ButtonLink>
    </div>
  );
};

export default PrivateOrInsuranceSelection;
