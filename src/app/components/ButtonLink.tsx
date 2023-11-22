import Link from 'next/link';
import styled, { css } from 'styled-components';

interface ButtonLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  customStyle?: 'custom' | 'small'; 
}

const StyledButton = styled.button<ButtonLinkProps>`
  padding: 10px;
  width: 320px;
  height: 80px;
  flex-shrink: 0;
  border: 5px;
  cursor: pointer;
  font-size: 28px;
  text-decoration: none;
  border-radius: 18px;
  background: #3F72AF;
  color: #fff;
  font-family: 'Inter', sans-serif;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-weight: bold;

  ${(props) =>
    props.customStyle === 'custom' &&
    css`
      background: #DFE2E8;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      color: #1B365C;
      font-family: 'Inter', sans-serif;
    `}

  ${(props) =>
    props.customStyle === 'small' &&
    css`
      padding: 8px;
      width: 285px;
      height: 50px;
      font-size: 18px;
    `}
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
