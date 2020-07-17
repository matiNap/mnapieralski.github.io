/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import Logo from "./components/Logo";
import "./style.css";
import { IconButton, useTheme } from "@material-ui/core";
import { MdMenu } from "react-icons/md";
import HeaderItem from "./components/HeaderItem";
import NavWrapper from "../NavWrapper";
import * as navRoutes from "../../navRoutes";
import { MY_GITHUB } from "../../globals";
import ThemeSelector from "./components/ThemeSelector";

interface Props {
  openDrawer: () => void;
}

export default ({ openDrawer }: Props) => {
  const { palette } = useTheme();

  const [themeOpened, setThemeOpened] = useState(false);
  const [anchor, setAnchor] = useState<any>(null);
  return (
    <header
      className="menu-container"
      style={{ backgroundColor: palette.secondary.dark }}
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
          <HeaderItem>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              style={{ color: palette.text.primary }}
            >
              My resume
            </a>
          </HeaderItem>
          <HeaderItem>
            <a href={MY_GITHUB} style={{ color: palette.text.primary }}>
              Github
            </a>
          </HeaderItem>

          <HeaderItem>
            <div
              onClick={(event) => {
                setAnchor(event.currentTarget);
                setThemeOpened(!themeOpened);
              }}
            >
              Theme
            </div>
            <ThemeSelector opened={themeOpened} anchorEl={anchor} />
          </HeaderItem>
        </ul>
      </div>
    </header>
  );
};
