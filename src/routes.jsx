import React from "react";
import { Route, Switch } from "react-router-dom";
import { Jobs } from "./components/home";
import Menu from "./components/menu";
import Job from "./components/job";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Jobs} />
    <Route exact path="/job" component={Job} />
  </Switch>
);

export default Routes;
