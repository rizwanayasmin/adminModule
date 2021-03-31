import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import WebFont from "webfontloader";
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

WebFont.load({
  google: {
    families: ["Montserrat", "Helvetica", "Arial", "serif"],
  },
});
