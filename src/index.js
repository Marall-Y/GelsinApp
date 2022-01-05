import React from "react";
import history from "./history";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.css";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
