import React, { ReactNode } from "react";
import { useTheme } from "@material-ui/core";
import "./style.css";

interface Props {
  children?: ReactNode | ReactNode[];
  containerStyle?: React.CSSProperties;
}

export default ({ children, containerStyle }: Props) => {
  const { palette } = useTheme();
  return (
    <div
      style={{ backgroundColor: palette.secondary.dark, ...containerStyle }}
      className="card-container"
    >
      {children}
    </div>
  );
};
