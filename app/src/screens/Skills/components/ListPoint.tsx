import React from "react";
import { useTheme } from "@material-ui/core";

interface Props {
  title: string;
}

export default ({ title }: Props) => {
  const { palette } = useTheme();
  return (
    <li className="skills-point">
      <div
        className="skills-bullet"
        style={{ backgroundColor: palette.primary.main }}
      />
      <div className="skills-point-content">{title}</div>
    </li>
  );
};
