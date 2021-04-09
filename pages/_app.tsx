import React, { useEffect } from "react";
import App, { AppProps, AppContext } from "next/app";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { muiTheme, theme } from "../styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { GlobalStyle } from "../styles/globalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MenuContext } from "../context/MenuContext";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ContextProvider } from "react-sortly";
import { getMenu } from "../api/menu";

function MyApp({ Component, pageProps, menuItems }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <DndProvider backend={HTML5Backend}>
            <ContextProvider>
              <MenuContext.Provider value={{ menuItems }}>
                <ToastContainer />
                <CssBaseline />
                <GlobalStyle />
                <Component {...pageProps} />
              </MenuContext.Provider>
            </ContextProvider>
          </DndProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const menuItems = await getMenu();

  return { ...appProps, menuItems };
};
