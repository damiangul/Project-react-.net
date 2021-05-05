import { combineReducers } from "redux";

import { usersLoadingReducer } from "./usersLoadingReducer";
import { loggedUserReducer } from "./loggedUserReducer";
import { productsLoadingReducer } from "./productsLoadingReducer";
import { cartReducer } from "./cartReducer";
import { newCdReducer } from "./newCdReducer";

export const rootReducer = combineReducers({
  users: usersLoadingReducer,
  loggedUser: loggedUserReducer,
  products: productsLoadingReducer,
  cart: cartReducer,
  newCdAdd: newCdReducer,
});
