import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.05em;
  }
  
  a {    
    transition: color 0.3s;
  }
  
  button {    
    cursor: pointer;
  }

  form {
    width: 100%;
    max-width: 500px;
    padding: 2rem 1rem;
  }
  
  html, body, #__next {
    height: 100%;
    width: 100%;
  }

  #__next {    
    display: flex;
    flex-direction: column;
  }

`;
