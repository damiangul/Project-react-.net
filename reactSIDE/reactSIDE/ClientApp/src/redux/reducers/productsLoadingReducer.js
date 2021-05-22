import { LOAD_PRODUCTS } from "../productsLoadingActions";

export const productsLoadingReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload.productsLoaded];
    default:
      return state;
  }
};
