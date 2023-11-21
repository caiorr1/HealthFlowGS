import React from 'react';
import styled from 'styled-components';

const MobileContainer = styled.div`
  width: 600px; 
  height: 800px; 
  border: 1px solid #333;
  border-radius: 40px; 
  overflow: hidden; 
  margin: 20px auto; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
`;

const MobileScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff; 
  padding: 20px; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

interface MobileFrameProps {
  children: React.ReactNode;
}

const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  return (
    <MobileContainer>
      <MobileScreen>{children}</MobileScreen>
    </MobileContainer>
  );
};

export default MobileFrame;
