import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";

import Magazines from "views/pages/Magazines.js";
import Ateliers from "views/pages/Ateliers.js";
import Outils from "views/pages/Outils.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" 
        exact 
        render={(props) => <Index {...props} />} 
      />
      <Route
        path="/magazines"
        exact
        render={(props) => <Magazines {...props} />}
      />
      <Route
        path="/ateliers"
        exact
        render={(props) => <Ateliers {...props} />}
      />
      <Route
        path="/outils"
        exact
        render={(props) => <Outils {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
