import React, { useState } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useDispatch } from "react-redux";
import useStyles from "./Style";
import { primary } from "../../../StyleGuide/Colors";
import { removeFromCart } from "../../../redux/actions/cart/cartAction";
import { adjustCartQty } from "../../../redux/actions/cart/cartAction";

const CartItem = ({ itemData }) => {
  const classes = useStyles();
  const [input, setInput] = useState(itemData.qty);

  const dispatch = useDispatch();

  const onChangeHandler = ({ target }) => {
    setInput(target.value);
    dispatch(adjustCartQty(itemData, target.value));
  };

  return (
    <div className={classes.cartItem}>
      <div>
        <img
          className={classes.cartImage}
          src={itemData.image}
          alt={itemData.title}
        />
      </div>

      <div className={classes.cartDescription}>
        <h4>{itemData.title}</h4>
        <p>{itemData.weight}</p>
        <div className={classes.lastDescription}>
          <p style={{ color: `${primary[0]}` }}>{itemData.price} TL</p>
          <div className={classes.cartQty}>
            <label style={{ marginRight: "0.2rem" }} htmlFor="qty">
              Adet
            </label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              className={classes.input}
              onChange={onChangeHandler}
            />
          </div>
          <DeleteOutlineIcon
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removeFromCart(itemData))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
