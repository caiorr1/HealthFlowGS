// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: linear-gradient(180deg, #FFF 17.71%, #5C8CC4 94.79%, #5C8CC4 99.99%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;

