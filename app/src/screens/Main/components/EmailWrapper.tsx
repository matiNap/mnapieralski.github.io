import React from "react";
import { useTheme, Button } from "@material-ui/core";
import { FaCopy } from "react-icons/fa";
import { MY_EMAIL } from "../../../globals";

export default () => {
  const { palette } = useTheme();

  return (
    <div
      className="email-wrapper-container"
      style={{ backgroundColor: palette.secondary.light }}
    >
      <div className="email-inner-container">
        <p style={{ color: palette.text.primary }}>{MY_EMAIL}</p>
      </div>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(MY_EMAIL);
        }}
        variant="contained"
        endIcon={<FaCopy color={palette.text.primary} />}
        classes={{ root: "copy-button", endIcon: "copy-label" }}
        style={{ backgroundColor: palette.secondary.light }}
      />
    </div>
  );
};
