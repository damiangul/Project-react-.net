import { combineReducers } from "redux";

import { usersLoadingReducer } from "./usersLoadingReducer";
import { loggedUserReducer } from "./loggedUserReducer";
import { productsLoadingReducer } from "./productsLoadingReducer";

export const rootReducer = combineReducers({
  users: usersLoadingReducer,
  loggedUser: loggedUserReducer,
  products: productsLoadingReducer,
});
