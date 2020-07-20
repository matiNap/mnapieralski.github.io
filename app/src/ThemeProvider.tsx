import React, { ReactNode } from "react";
import { ThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "./theme/material";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./slices/appSlice";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  const isDarkTheme = useSelector(selectDarkTheme);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const { palette } = theme;
  const { text } = palette;
  return (
    <ThemeProvider {...{ theme }}>
      <div
        style={{
          color: text.primary,
          backgroundColor: palette.secondary.main,
          minHeight: "100%",
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};
