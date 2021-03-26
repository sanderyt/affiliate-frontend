import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { customTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
