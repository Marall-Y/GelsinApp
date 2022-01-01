import axios from "axios";
import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const baseUrl = axios.create({
  baseURL: "https://gelsin-99035-default-rtdb.firebaseio.com/",
});

ReactDOM.render(<App />, document.getElementById("root"));
