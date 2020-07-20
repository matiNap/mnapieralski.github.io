import React, { ReactNode } from "react";
import { useTheme } from "@material-ui/core";
import "./style.css";

interface Props {
  children?: ReactNode | ReactNode[];
  className?: string;
}

export default ({ children, className }: Props) => {
  const { palette } = useTheme();
  return (
    <div
      style={{ backgroundColor: palette.secondary.dark }}
      className={`card-container ${className}`}
    >
      {children}
    </div>
  );
};
