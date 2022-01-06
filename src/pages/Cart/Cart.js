import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CartIcon from "@material-ui/icons/ShoppingCart";
import Header from "../../components/Header/Header";
import CartItem from "./CartItem/CartItem";
import useStyles from "./Style";
import Map from "../../components/Map/Map";
import image from "../../images/empty-cart.png";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  const classes = useStyles();
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);

  const { cart } = useSelector((state) => state.cart);

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  //Address Modal
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(4),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  //Hooks
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price.toFixed(2));
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  //Functions
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
                  fontSize: "0.8rem",
                  marginBottom: "5px",
                  color: "#888",
                }}
              >
                {totalItems} Addet
              </div>
              <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Toplam Tutar: {totalPrice} TL
              </div>
            </div>
            <div>
              <Button
                variant="contained"
                startIcon={<CartIcon />}
                className={classes.button}
                onClick={handleClickOpen}
              >
                Sepeti Onayla
              </Button>
              <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth
                maxWidth="md"
              >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  Teslimat Noktası Seçin
                </DialogTitle>
                <DialogContent dividers>
                  <Map />
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose} color="primary">
                    Kaydet
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <div className={classes.emptyCart}>
            <img src={image} alt="empty-cart" />
            <p style={{ marginTop: "1rem" }}>Empty Cart!</p>
          </div>
        </Container>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
