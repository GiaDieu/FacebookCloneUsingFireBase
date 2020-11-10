import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./HOC";
import reducers, { initialState } from "./Reducers";

ReactDOM.render(
  <>
    <StateProvider initialState={initialState} reducers={reducers}>
      <App />
    </StateProvider>
  </>,
  document.getElementById("root"),
);
