import React, { ReactNode } from "react";
import "./style.css";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

export default ({ children, className }: Props) => {
  return <div className={`content-container ${className}`}>{children}</div>;
};
