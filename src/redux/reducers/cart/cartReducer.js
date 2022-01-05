import { setItem } from "../../../utils/localStorage";
import * as actionTypes from "../../Types";

const initialState = { cart: [], currentItem: null };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.title === action.payload.data.title ? true : false
      );

      const newCart = {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.title === action.payload.data.title
                ? { ...item, qty: item.qty + 1, checked: "true" }
                : item
            )
          : [
              ...state.cart,
              { ...action.payload.data, qty: 1, checked: "true" },
            ],
      };

      setItem("cart", newCart);
      return { ...newCart };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.data.id),
      };

    default:
      return state;
  }
};
