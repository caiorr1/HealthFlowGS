import Link from 'next/link';
import styled, { css } from 'styled-components';

interface ButtonLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  customStyle?: 'custom';
}

const buttonStyles = {
  custom: css`
    background: #DFE2E8;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #1B365C;
  `,
};

const StyledButton = styled.button<ButtonLinkProps>`
  padding: 10px;
  width: 200px;
  height: 50px;
  flex-shrink: 0;
  border: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  border-radius: 20px;
  background: #3F72AF;
  color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  ${({ customStyle }) => customStyle && buttonStyles[customStyle]}
`;

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, onClick, children, customStyle }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      {href ? (
        <Link href={href}>
          <StyledButton onClick={handleClick} customStyle={customStyle}>
            {children}
          </StyledButton>
        </Link>
      ) : (
        <StyledButton onClick={handleClick} customStyle={customStyle}>
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default ButtonLink;
