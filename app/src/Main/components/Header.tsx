import React from "react";
import CSS from "csstype";
import palette from "../../theme/palette";
import Logo from "./Logo";
import "./style.css";

export default () => {
  return (
    <header style={styles.container}>
      <Logo />
      <div style={styles.menu}>
        <ul className="menu">
          <li className="menu-item">My resumse</li>
          <li className="menu-item">Contact</li>
          <li className="menu-item">Skills</li>
          <li className="menu-item">Projects</li>
          <li className="menu-item">Experience</li>
        </ul>
      </div>
    </header>
  );
};

const styles: { [key: string]: CSS.Properties } = {
  container: {
    backgroundColor: palette.primary,
    position: "fixed",
    top: 0,
    left: 0,
    height: "9vh",
    width: "100vw",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    display: "flex",
    flexDirection: "row",
    paddingTop: "1rem",
    justifyContent: "space-between",
  },
  menu: {
    alignSelf: "center",
    display: "flex",
    marginRight: "2vw",
  },
};
