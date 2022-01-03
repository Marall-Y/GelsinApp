import * as actionTypes from "../../Types";

export const addToCart = (data) => {
  return { type: actionTypes.ADD_TO_CART, payload: { data } };
};
