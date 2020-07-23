import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./style.css";

export default () => {
  return (
    <div className="loading-container">
      <CircularProgress color="primary" />
    </div>
  );
};
