import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store, { persistedStore } from "./store";

import { MAIN } from "./navRoutes";
import Main from "./main";
import Navigation from "./components/Navigation";
import ThemeProvider from "./ThemeProvider";

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider>
          <Router>
            <Navigation />
            <Switch>
              <Route exact path={MAIN} component={Main} />
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
