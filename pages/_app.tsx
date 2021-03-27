import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { muiTheme, theme } from "../styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { GlobalStyle } from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
