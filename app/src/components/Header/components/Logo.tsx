import React from "react";

export default () => {
  return (
    <img
      className="title-img"
      alt="title"
      width={241}
      height={55}
      src={process.env.PUBLIC_URL + "/title.png"}
    />
  );
};
