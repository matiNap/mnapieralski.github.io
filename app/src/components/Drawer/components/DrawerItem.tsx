import React from "react";
import { useTheme } from "@material-ui/core";
interface Props {
  children: React.ReactNode;
  hideDrawer: () => void;
}

export default ({ children, hideDrawer }: Props) => {
  const { palette } = useTheme();
  return (
    <li
      className="drawer-item"
      style={{ color: palette.text.primary }}
      onClick={hideDrawer}
    >
      {children}
    </li>
  );
};
