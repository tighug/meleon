import React from "react";
import { render } from "react-dom";
import Root from "./containers/Root";
import store from "./store";
import "fontsource-roboto";
import "normalize.css";
import "./index.css";
import "./resizer.css";

document.addEventListener("DOMContentLoaded", () => {
  render(<Root store={store} />, document.getElementById("root"));
});
