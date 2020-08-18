import React from "react";
import Footer from "../components/Footer";

export default (HigherComponent) => {
  return (props) => {
    return (
      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          marginTop: "10vh",
        }}
      >
        <HigherComponent {...props} />
        <Footer />
      </div>
    );
  };
};
