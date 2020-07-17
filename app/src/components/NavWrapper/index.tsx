import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core";

interface Props {
  to: string;
  children?: React.ReactNode | string | JSX.Element;
}

export default ({ to, children }: Props) => {
  const { palette } = useTheme();
  return (
    <Link {...{ to }} style={{ color: palette.text.primary }}>
      {children}
    </Link>
  );
};
