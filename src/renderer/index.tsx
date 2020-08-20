import React from "react";
import { render } from "react-dom";
import "./index.css";
import Root from "./containers/Root";
import store from "./store";
import "fontsource-roboto";

document.addEventListener("DOMContentLoaded", () => {
  render(<Root store={store} />, document.getElementById("root"));
});
