import React, { useState, useEffect } from "react";
import axios from "../../axios-orders";
import Header from "../../components/Header/Header";
import Cart from "@material-ui/icons/ShoppingCart";
import { Box, Button } from "@material-ui/core";
import useStyles from "./Style";

const Products = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

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

  console.log("data", data);

  useEffect(() => {
    const selectedCategory = data.filter((item) => item.path == pathname[1]);
    setSelectedCategory(selectedCategory);
  }, [data]);

  useEffect(() => {
    if (selectedCategory.length > 0) {
      setSelectedData(selectedCategory[0].products);
    } else {
      setSelectedData([]);
    }
  }, [selectedCategory]);

  console.log("selectedCAtegory", selectedCategory);
  console.log("selectedData", selectedData);

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Box className={classes.products}>
          {selectedData.map((item) => (
            <div className={classes.typeBox}>
              <img src={item.image} />
              <div
                style={{
                  margin: "10px",
                  padding: "10px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div> {item.title}</div>
                <br />
                <br />
                <div style={{ color: "#888" }}>{item.weight}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                  {item.price}
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<Cart />}
                    className={classes.button}
                  >
                    Sepete Ekle
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Box>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Products;
