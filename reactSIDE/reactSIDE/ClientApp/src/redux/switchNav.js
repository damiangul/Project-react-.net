export const SWITCH_NAV = "SWITCH_NAV";

export const switchNav = (data) => ({
  type: SWITCH_NAV,
  payload: {
    switchNav: data,
  },
});