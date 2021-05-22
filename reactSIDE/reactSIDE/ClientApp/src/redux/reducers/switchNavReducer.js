import { SWITCH_NAV } from "../switchNav";

export const switchNavReducer = (state = "yourmom", action) => {
  switch (action.type) {
    case SWITCH_NAV:
      return action.payload.switchNav;
    default:
      return state;
  }
};
