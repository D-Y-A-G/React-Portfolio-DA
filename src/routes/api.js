import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  link,
} from "react-router-dom";

import { About } from "../components/AboutMe";
import { Contact } from "../components/Form";
import { Projects } from "../components/Project";
import { Home } from "../components/Home";

export const Routes = () => {
  return (
    <div>
      <Home />
      <Switch>
        <Route exact path="../homepage" component={Home} />
        <Route exact path="/">
          {" "}
          <Redirect to="homepage" />
        </Route>
        <Route exact path="/portfolio" component={Projects} />
        <Route exact path="/aboutMe" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};
