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
  ul,
  li,
  input,
  textarea {
    font-family: "Gordita", "sans-serif" !important;
    font-size: 1.1rem;
  }
  
  h1, h2, h3, h4, h5, h6, button {
    font-family: "Circular", "sans-serif";
  }

  .MuiSvgIcon-root {
    cursor: pointer;
  }


`;
