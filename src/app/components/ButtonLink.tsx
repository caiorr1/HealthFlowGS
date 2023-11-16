import Link from 'next/link';
import styled from 'styled-components';

interface ButtonLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  customStyle?: 'blue' | 'green' | 'custom';
}

const StyledButton = styled.button<{ customStyle?: ButtonLinkProps['customStyle'] }>`
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;

  ${(props) => {
    switch (props.customStyle) {
      case 'blue':
        return `
          background-color: #3498db;
          color: #fff;
        `;
      case 'green':
        return `
          background-color: #2ecc71;
          color: #fff;
        `;
      case 'custom':
        return `
          background-color: #ffcc00;
          color: #333;
        `;
      default:
        return `
          background-color: #3498db;
          color: #fff;
        `;
    }
  }}
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
          <StyledButton customStyle={customStyle} onClick={handleClick}>
            {children}
          </StyledButton>
        </Link>
      ) : (
        <StyledButton customStyle={customStyle} onClick={handleClick}>
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default ButtonLink;
