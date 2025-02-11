// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9;
    background-color: white;
    color: #333;
    overflow-x: hidden;
    width: 100vw;


  }

  html{
    width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
