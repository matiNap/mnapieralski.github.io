import React from "react";
import palette from "../../theme/palette";
import Logo from "./components/Logo";
import "./style.css";
import { IconButton } from "@material-ui/core";
import { MdMenu } from "react-icons/md";
import HeaderItem from "./components/HeaderItem";
import NavWrapper from "../NavWrapper";
import * as navRoutes from "../../navRoutes";
import { MY_GITHUB } from "../../globals";

interface Props {
  openDrawer: () => void;
}

export default ({ openDrawer }: Props) => {
  return (
    <header
      className="menu-container"
      style={{ backgroundColor: palette.primary }}
    >
      <div className="header-menu-icon">
        <IconButton onClick={openDrawer}>
          <MdMenu size={50} color={palette.text.primary} />
        </IconButton>
      </div>
      <div className="header-logo-container">
        <Logo />
      </div>
      <div className="menu">
        <ul className="menu-list">
          <HeaderItem>
            <NavWrapper to={navRoutes.SKILLS}>Skills</NavWrapper>
          </HeaderItem>
          <HeaderItem>
            <NavWrapper to={navRoutes.EXP}>Experience</NavWrapper>
          </HeaderItem>
          <HeaderItem>
            <NavWrapper to={navRoutes.PROJECTS}>Projects</NavWrapper>
          </HeaderItem>
          <HeaderItem>My resumse</HeaderItem>
          <HeaderItem>
            <a href={MY_GITHUB}>Github</a>
          </HeaderItem>
          <HeaderItem>Theme</HeaderItem>
        </ul>
      </div>
    </header>
  );
};
