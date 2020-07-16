import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { persistor, store } from "./store";

import { MAIN } from "./navRoutes";
import Main from "./main";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "@material-ui/core";
import materialTheme from "./theme/material";

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={materialTheme}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Navigation />
            <Switch>
              <Route exact path={MAIN} component={Main} />
            </Switch>
          </Router>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
};
