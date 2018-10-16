// React
import React from "react";
import { render } from "react-dom";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers/index";

// Components
import Router from "./components/Router";

// Styles
import "font-awesome/css/font-awesome.css";
import "./css/style.css";

// Create Redux store and initialize the app
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector("#root")
);
