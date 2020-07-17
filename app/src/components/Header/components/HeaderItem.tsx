import React from "react";
import { useTheme } from "@material-ui/core";

interface Props {
  children?: React.ReactNode;
}

export default ({ children }: Props) => {
  const { palette } = useTheme();
  return (
    <li className="menu-item" style={{ color: palette.text.primary }}>
      {children}
    </li>
  );
};
