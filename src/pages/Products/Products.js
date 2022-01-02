import React, { useState, useEffect } from "react";
import axios from "../../axios-orders";
import useStyles from "./Style";

const Products = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(async () => {
    try {
      const resp = await axios.get("/categories");
      setData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }, []);

  console.log(window.location.pathname);

  return <div></div>;
};

export default Products;
