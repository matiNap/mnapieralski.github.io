import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import DrawerItem from "./components/DrawerItem";
import "./style.css";
import palette from "../../theme/palette";

export default () => {
  return (
    <div className="drawer-container">
      <div className="drawer-header">
        <IoIosArrowDropleft size={50} color={palette.text.primary} />
      </div>
      <ul className="drawer-list">
        <DrawerItem title="Skills" />
        <DrawerItem title="Experience" />
      </ul>
    </div>
  );
};
