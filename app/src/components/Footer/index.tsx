import React from "react";
import "./style.css";
import { FiGithub } from "react-icons/fi";
import { darkTheme } from "../../theme/material";

const PROJECT_SOURCE = "https://github.com/matiNap/portfolio";

export default () => {
  const { palette } = darkTheme;
  return (
    <footer
      className="footer-container"
      style={{
        backgroundColor: palette.secondary.main,
      }}
    >
      <FiGithub
        className="drawer-icon"
        size={22}
        color={palette.text.primary}
      />

      <a
        href={PROJECT_SOURCE}
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        className="footer-link"
        style={{ color: palette.text.primary }}
      >
        Portfolio source
      </a>
    </footer>
  );
};
