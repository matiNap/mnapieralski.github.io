import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { persistor, store } from "./store";

import { MAIN } from "./navRoutes";
import Main from "./main";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Drawer />
        <Router>
          <Switch>
            <Route exact path={MAIN} component={Main} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};
