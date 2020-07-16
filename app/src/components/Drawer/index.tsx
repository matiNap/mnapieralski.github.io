import React from "react";
import { GoChevronLeft } from "react-icons/go";
import DrawerItem from "./components/DrawerItem";
import "./style.css";
import palette from "../../theme/palette";
import * as navRoutes from "../../navRoutes";
import NavWrapper from "../NavWrapper";
import { IconButton, Switch } from "@material-ui/core";
import * as globals from "../../globals";

interface Props {
  opened: boolean;
  hideDrawer: () => void;
}

export default ({ opened, hideDrawer }: Props) => {
  const drawerContainerStyle = opened ? {} : { left: "-150vw" };
  return (
    <div className="drawer-container" style={drawerContainerStyle}>
      <div className="drawer-header">
        <div className="drawer-hide-icon-container">
          <IconButton onClick={hideDrawer}>
            <GoChevronLeft size={50} color={palette.text.primary} />
          </IconButton>
        </div>
      </div>

      <ul className="drawer-list">
        <DrawerItem>
          <NavWrapper to={navRoutes.SKILLS}>Skills</NavWrapper>
        </DrawerItem>
        <DrawerItem>
          <NavWrapper to={navRoutes.EXP}>Experience</NavWrapper>
        </DrawerItem>
        <DrawerItem>
          <NavWrapper to={navRoutes.PROJECTS}>Projects</NavWrapper>
        </DrawerItem>
        <DrawerItem>My resume</DrawerItem>
        <DrawerItem>
          <a href={globals.MY_GITHUB}>Github</a>
        </DrawerItem>
        <DrawerItem>
          Dark theme
          <Switch name="switchTheme" color="primary" />
        </DrawerItem>
      </ul>
    </div>
  );
};
