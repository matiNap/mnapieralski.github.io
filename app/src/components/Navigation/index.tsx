import React, { useState } from "react";
import Header from "../Header";
import Drawer from "../Drawer";

export default () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <div>
      <Header openDrawer={() => setDrawerOpened(true)} />
      <Drawer hideDrawer={() => setDrawerOpened(false)} opened={drawerOpened} />
    </div>
  );
};
