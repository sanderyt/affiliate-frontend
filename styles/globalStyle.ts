import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Circular";
    font-weight: 500;
    src: url("../fonts/CircularStd/CircularStd-Medium.otf");
    font-display: swap;
  }
  @font-face {
    font-family: "Gordita";
    font-weight: 500;
    src: url("../fonts/Gordita/Gordita-Regular.otf");
    font-display: swap;
  }
  
  body,
  html,
  button,
  ul,
  li,
  input,
  textarea {
    font-family: "Gordita", "sans-serif" !important;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Circular", "sans-serif"
  }

`;
