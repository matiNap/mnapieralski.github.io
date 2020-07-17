import React from "react";
import { Checkbox, Popper, Paper, useTheme } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectDarkTheme, checkDarkTheme } from "../../../slices/appSlice";

interface Props {
  opened: boolean;
  anchorEl: any;
}

export default ({ opened, anchorEl }: Props) => {
  const darkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const labelStyle = { color: palette.text.primary };
  return (
    <Popper
      open={opened}
      placement="bottom"
      anchorEl={anchorEl}
      disablePortal={false}
      className="theme-popper-shadow"
    >
      <Paper
        className="theme-selector-container"
        style={{ backgroundColor: palette.secondary.dark }}
      >
        <div className="checkbox-theme-container">
          <Checkbox
            classes={{ root: "checkbox-theme" }}
            color="primary"
            checked={darkTheme}
            onChange={() => dispatch(checkDarkTheme(true))}
          />
          <p style={labelStyle}>Dark theme</p>
        </div>
        <div className="checkbox-theme-container">
          <Checkbox
            color="primary"
            checked={!darkTheme}
            onChange={() => dispatch(checkDarkTheme(false))}
          />
          <p style={labelStyle}>Light theme</p>
        </div>
      </Paper>
    </Popper>
  );
};
