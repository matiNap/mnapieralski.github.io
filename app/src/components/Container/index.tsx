import React, { ReactNode } from "react";
import "./style.css";

interface Props {
  children: ReactNode | ReactNode[];
  flexDirection?: "row" | "column";
  justifyContent?: "flex-start" | "flex-end" | "space-between" | "space-around";
}

export default ({ children, flexDirection, justifyContent }: Props) => {
  return (
    <div
      className="content-container"
      style={{ flexDirection, justifyContent }}
    >
      {children}
    </div>
  );
};
