import React from "react";
import { useTheme } from "@material-ui/core";

interface Props {
  renderIcon: (props: any) => React.ReactNode;
  link: string;
}

export default ({ renderIcon, link }: Props) => {
  const { palette } = useTheme();
  return (
    <div className="project-link-container">
      {renderIcon({
        style: {
          color: palette.text.primary,
        },
        size: 25,
      })}
      <a
        href={link}
        className="project-link"
        style={{ color: palette.primary.main }}
      >
        {link}
      </a>
    </div>
  );
};
