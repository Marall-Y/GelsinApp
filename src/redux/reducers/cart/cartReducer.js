import { setItem } from "../../../utils/localStorage";
import * as actionTypes from "../../Types";

const initialState = { cart: [], currentItem: null };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.data.id ? true : false
      );

      const newCart = {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.data.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...action.payload.data, qty: 1 }],
      };

      setItem("cart", newCart);
      return { ...newCart };

    default:
      return state;
  }
};
