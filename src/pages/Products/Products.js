import React, { useState, useEffect } from "react";
import axios from "../../axios-orders";
import Header from "../../components/Header/Header";
import Cart from "@material-ui/icons/ShoppingCart";
import { Box, Button } from "@material-ui/core";
import useStyles from "./Style";
import { primary } from "../../StyleGuide/Colors";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart/cartAction";

const Products = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();

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

  const addToCard = (product) => {
    dispatch(addToCart(product));
  };

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
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: `${primary[0]}`,
                    marginBottom: "10px",
                  }}
                >
                  {item.price}
                </div>
                <div> {item.title}</div>
                <br />
                <div style={{ color: "#888" }}>{item.weight}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<Cart />}
                    className={classes.button}
                    onClick={() => addToCard(item)}
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
