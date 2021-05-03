import { combineReducers } from "redux";

import { usersLoadingReducer } from "./usersLoadingReducer";
import { loggedUserReducer } from "./loggedUserReducer";

export const rootReducer = combineReducers({
  users: usersLoadingReducer,
  loggedUser: loggedUserReducer,
});
