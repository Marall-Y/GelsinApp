import React, { useState, useEffect } from "react";
import axios from "../../axios-orders";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import Cart from "@material-ui/icons/ShoppingCart";
import { Box, Button } from "@material-ui/core";
import useStyles from "./Style";
import { primary } from "../../StyleGuide/Colors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cart/cartAction";
import { getItem, setItem } from "../../utils/localStorage";
import Snackbar from "@material-ui/core/Snackbar";
import { SnackbarContent } from "@material-ui/core";

const Products = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const { vertical, horizontal, open } = state;

  const pathname = window.location.pathname.split("/");
  const { cart } = useSelector((state) => state.cart);

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

  //functions

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const addToCard = (product) => {
    setState({ open: true, vertical: "top", horizontal: "center" });
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Box className={classes.products}>
          {selectedData.map((item) => (
            <div className={classes.typeBox} key={item.id}>
              <img src={item.image} />
              <div
                style={{
                  margin: "10px",
                  padding: "10px",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
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
                  {item.price}TL
                </div>
                <div> {item.title}</div>
                <br />
                <div style={{ color: "#888" }}>{item.weight}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <Button
                    key={item.id}
                    variant="contained"
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
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <SnackbarContent
            aria-describedby="message-id2"
            style={{ backgroundColor: "#6ECA7D" }}
            message={
              <span id="message-id2">
                <div>Sepetinize Eklendi</div>
              </span>
            }
          />
        </Snackbar>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
