import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0089f2",
    },
    secondary: {
      light: "#f7f7f7",
      main: "#eee",
      dark: "#ededed",
    },
    text: {
      primary: "#2F2F2F",
      secondary: "#F2F2F2",
    },
  },
  typography: {
    fontFamily: "Rubik",
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0089f2",
    },
    secondary: {
      light: "#595959",
      main: "#3D3B3C",
      dark: "#323031",
    },

    text: {
      primary: "#F2F2F2",
      secondary: "#2F2F2F",
    },
  },
  typography: {
    fontFamily: "Rubik",
  },
});
