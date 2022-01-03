import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <React.StrictMode>
      <CssBaseline>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} exact />
              <Route path="/:category" element={<Products />} />
              <Route path="/cart" element={<Cart />} exact />
            </Routes>
          </div>
        </Router>
      </CssBaseline>
    </React.StrictMode>
  );
};

export default App;
