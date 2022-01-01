import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <React.StrictMode>
      <CssBaseline>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </CssBaseline>
    </React.StrictMode>
  );
};

export default App;
