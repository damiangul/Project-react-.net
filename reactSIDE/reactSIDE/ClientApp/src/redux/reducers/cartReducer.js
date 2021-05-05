import { LOAD_CART } from "../cartActions";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CART:
      return [...action.payload.cart];
    default:
      return state;
  }
};
