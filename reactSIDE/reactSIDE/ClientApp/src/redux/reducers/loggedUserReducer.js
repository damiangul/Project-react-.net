import { LOGGING_USER } from "../loggedUserActions";

export const loggedUserReducer = (state = [], action) => {
  switch (action.type) {
    case LOGGING_USER:
      return [action.payload.login, action.payload.id];
    default:
      return state;
  }
};
