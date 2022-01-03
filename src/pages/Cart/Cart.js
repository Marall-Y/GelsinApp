import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CartIcon from "@material-ui/icons/ShoppingCart";
import Header from "../../components/Header/Header";
import CartItem from "./CartItem/CartItem";
import useStyles from "./Style";

const Cart = () => {
  const classes = useStyles();
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  return (
    <div>
      <Header />
      {cart.length !== 0 ? (
        <Container className={classes.cartContainer}>
          <div className={classes.cartItems}>
            {cart.map((item) => {
              return <CartItem key={item.id} itemData={item} />;
            })}
          </div>
          <div className={classes.cartSummary}>
            <div className={classes.price}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginBottom: "5px",
                }}
              >
                {totalItems} Addet
              </div>
              <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                Toplam Tutar: {totalPrice} TL
              </div>
            </div>{" "}
            <Button
              variant="contained"
              startIcon={<CartIcon />}
              className={classes.button}
            >
              Sepeti Onayla
            </Button>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="empty-cart">
            {/* <img src={images} alt="empty-cart" />
            <p>Empty Cart!</p> */}
          </div>
        </Container>
      )}
    </div>
  );
};

export default Cart;
