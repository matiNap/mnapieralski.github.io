import React from "react";
import NavWrapper from "../../NavWrapper";
import { MAIN } from "../../../navRoutes";

export default () => {
  return (
    <NavWrapper to={MAIN}>
      <div className="logo-container">
        <div className="logo-main">Mateusz Napieralski</div>
        <div className="logo-title">Full stack developer</div>
      </div>
    </NavWrapper>
  );
};
