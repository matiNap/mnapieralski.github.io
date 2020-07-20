import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store, { persistedStore } from "./store";
import Main from "./screens/Main";

import { MAIN, EXP, SKILLS } from "./navRoutes";

import Navigation from "./components/Navigation";
import ThemeProvider from "./ThemeProvider";
import Experience from "./screens/Experience";
import Skills from "./screens/Skills";

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider>
          <Router>
            <Navigation />
            <Switch>
              <Route exact path={EXP} component={Experience} />
              <Route exact path={MAIN} component={Main} />
              <Route exact path={SKILLS} component={Skills} />
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
