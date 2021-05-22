import { combineReducers } from "redux";

import { productsLoadingReducer } from "./productsLoadingReducer";
import { cartReducer } from "./cartReducer";
import { newCdReducer } from "./newCdReducer";
import { switchNavReducer } from "./switchNavReducer";

export const rootReducer = combineReducers({
  products: productsLoadingReducer,
  cart: cartReducer,
  newCdAdd: newCdReducer,
  switchNavState: switchNavReducer
});
