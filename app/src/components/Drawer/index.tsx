import React from "react";
import { GoChevronLeft } from "react-icons/go";
import DrawerItem from "./components/DrawerItem";
import "./style.css";
import * as navRoutes from "../../navRoutes";
import NavWrapper from "../NavWrapper";
import { IconButton, Switch, useTheme } from "@material-ui/core";
import { switchTheme, selectDarkTheme } from "../../slices/appSlice";
import * as globals from "../../globals";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  opened: boolean;
  hideDrawer: () => void;
}

export default ({ opened, hideDrawer }: Props) => {
  const drawerContainerStyle = opened ? {} : { left: "-150vw" };
  const darkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();
  const { palette } = useTheme();
  return (
    <div
      className="drawer-container"
      style={{
        backgroundColor: palette.secondary.main,
        ...drawerContainerStyle,
      }}
    >
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
          <a href={globals.MY_GITHUB} style={{ color: palette.text.primary }}>
            Github
          </a>
        </DrawerItem>
        <DrawerItem>
          Dark theme
          <Switch
            value={darkTheme}
            name="switchTheme"
            color="primary"
            onChange={(e, checked) => dispatch(switchTheme)}
          />
        </DrawerItem>
      </ul>
    </div>
  );
};
