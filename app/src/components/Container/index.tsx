import React, { ReactNode } from "react";
import "./style.css";
import { useTheme } from "@material-ui/core";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

export default ({ children, className }: Props) => {
  const { palette } = useTheme();
  return (
    <div
      className={`content-container ${className}`}
      style={{ backgroundColor: palette.secondary.main }}
    >
      {children}
    </div>
  );
};
