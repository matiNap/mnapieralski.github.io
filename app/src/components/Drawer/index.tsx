import React from "react";
import { GoChevronLeft } from "react-icons/go";
import {
  FiGithub,
  FiMonitor,
  FiBook,
  FiFileText,
  FiCheckCircle,
  FiMoon,
} from "react-icons/fi";
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

const ICON_SIZE = 32;

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
        <DrawerItem {...{ hideDrawer }}>
          <FiCheckCircle
            className="drawer-icon"
            size={ICON_SIZE}
            color={palette.text.primary}
          />
          <NavWrapper to={navRoutes.SKILLS}>Skills</NavWrapper>
        </DrawerItem>
        <DrawerItem {...{ hideDrawer }}>
          <FiBook
            className="drawer-icon"
            size={ICON_SIZE}
            color={palette.text.primary}
          />
          <NavWrapper to={navRoutes.EXP}>Experience</NavWrapper>
        </DrawerItem>
        <DrawerItem {...{ hideDrawer }}>
          <FiMonitor
            className="drawer-icon"
            size={ICON_SIZE}
            color={palette.text.primary}
          />
          <NavWrapper to={navRoutes.PROJECTS}>Projects</NavWrapper>
        </DrawerItem>
        <DrawerItem {...{ hideDrawer }}>
          <FiFileText
            className="drawer-icon"
            size={ICON_SIZE}
            color={palette.text.primary}
          />
          My resume
        </DrawerItem>
        <DrawerItem {...{ hideDrawer }}>
          <FiGithub
            className="drawer-icon"
            size={ICON_SIZE}
            color={palette.text.primary}
          />
          <a href={globals.MY_GITHUB} style={{ color: palette.text.primary }}>
            Github
          </a>
        </DrawerItem>
        <DrawerItem {...{ hideDrawer }}>
          <FiMoon
            className="drawer-icon"
            size={ICON_SIZE}
            color={palette.text.primary}
          />
          Dark theme
          <Switch
            value={darkTheme}
            name="switchTheme"
            color="primary"
            onChange={(e, checked) => {
              dispatch(switchTheme());
            }}
          />
        </DrawerItem>
      </ul>
    </div>
  );
};
