import React from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  children?: React.ReactNode | string | JSX.Element;
}

export default ({ to, children }: Props) => {
  return <Link {...{ to }}>{children}</Link>;
};
