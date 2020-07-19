import React, { ReactNode } from "react";
import "./style.css";

interface Props {
  children: ReactNode | ReactNode[];
}

export default ({ children }: Props) => {
  return <div className="content-container">{children}</div>;
};
