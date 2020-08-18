import React from "react";
import Navigation from "../components/Navigation";

export default (HigerComponent: React.ComponentType<any>) => {
  return (props) => {
    return (
      <div style={{ height: "90vh" }}>
        <Navigation />
        <HigerComponent {...props} />
      </div>
    );
  };
};
