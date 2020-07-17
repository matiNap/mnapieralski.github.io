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

  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};
