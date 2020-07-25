import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store, { persistedStore } from "./store";
import Main from "./screens/Main";
import { MAIN, EXP, SKILLS, PROJECTS } from "./navRoutes";

import ThemeProvider from "./ThemeProvider";
import Experience from "./screens/Experience";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import NotFound from "./screens/NotFound";
import withNavigation from "./hocs/withNavigation";

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider>
          <Router>
            <Switch>
              <Route exact path={MAIN} component={withNavigation(Main)} />
              <Route exact path={SKILLS} component={withNavigation(Skills)} />
              <Route exact path={EXP} component={withNavigation(Experience)} />
              <Route
                exact
                path={PROJECTS}
                component={withNavigation(Projects)}
              />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
