import React, { useState, useEffect } from "react";
import axios from "../../axios-orders";
import Header from "../../components/Header/Header";
import { Box } from "@material-ui/core";
import useStyles from "./Style";

const Products = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const classes = useStyles();

  const pathname = window.location.pathname.split("/");

  useEffect(async () => {
    try {
      const resp = await axios.get("/categories");
      setData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }, []);

  useEffect(() => {
    const selectedcategory = data.filter((item) => item.path == pathname[1]);
    setSelectedData(selectedcategory[0].products);
  }, [data]);

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Box className={classes.categories}>
          {selectedData.map((item) => (
            <div className={classes.typeBox}>
              <img src={item.image} />
              <div
                style={{
                  margin: "10px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  borderBottom: "1px solid #eee",
                }}
              >
                {item.title}
                <br />
                {item.weight}
              </div>
              <div>{item.price}</div>
            </div>
          ))}
        </Box>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Products;
