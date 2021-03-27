import { createMuiTheme } from "@material-ui/core/styles";

export const theme = {
  palette: {
    primary: "#3498db",
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
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
    xl: " 64px",
    xxl: "128px"
  },
  boxShadow: "0 0 10px #aaa",
  borderRadius: {
    s: "1px",
    m: "3px",
    l: "5px"
  }
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
