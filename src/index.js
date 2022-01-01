import axios from "axios";
import React from "react";
import history from "./history";
import * as ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App history={history} />, document.getElementById("root"));
