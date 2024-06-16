import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
  }

  :focus {
    outline: 0;
  }

  body {
    background: #F4F4F4;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

