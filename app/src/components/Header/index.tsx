import React from "react";
import palette from "../../theme/palette";
import Logo from "./components/Logo";
import "./style.css";

export default () => {
  return (
    <header
      className="menu-container"
      style={{ backgroundColor: palette.primary }}
    >
      <Logo />
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">Skills</li>
          <li className="menu-item">Experience</li>
          <li className="menu-item">Projects</li>
          <li className="menu-item">My resumse</li>
          <li className="menu-item">Github</li>
          <li className="menu-item">Settings</li>
        </ul>
      </div>
    </header>
  );
};
