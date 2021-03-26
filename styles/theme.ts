import { createMuiTheme } from "@material-ui/core/styles";

export const theme = {
  palette: {
    primary: "#34ace0",
    secondary: "#227093",
    grey: {
      veryDark: "#20232a",
      dark: "#20232a"
    }
  },
  fonts: {
    text: "Gordita",
    heading: "CircularStd"
  },
  margins: {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
    xl: "64px",
    xxl: "128px"
  },
  paddings: {
    margins: {
      xs: "4px",
      s: "8px",
      m: "16px",
      l: "32px",
      xl: " 64px",
      xxl: "128px"
    }
  },
  boxShadow: "0 0 10px #aaa"
};

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.palette.primary
    },
    secondary: {
      main: theme.palette.secondary
    }
  }
});
