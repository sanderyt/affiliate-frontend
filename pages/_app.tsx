import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { muiTheme, theme } from "../styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { GlobalStyle } from "../styles/globalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ContextProvider } from "react-sortly";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <DndProvider backend={HTML5Backend}>
            <ContextProvider>
              <ToastContainer />
              <CssBaseline />
              <Component {...pageProps} />
            </ContextProvider>
          </DndProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
