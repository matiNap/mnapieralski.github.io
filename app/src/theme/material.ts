import { createMuiTheme } from "@material-ui/core";
import palette from "./palette";

export default createMuiTheme({
  palette: {
    primary: {
      main: palette.primary,
    },
    secondary: {
      main: palette.secondary,
    },
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
    },
  },
});
