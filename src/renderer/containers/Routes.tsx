import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
