export const LOAD_CART = "LOAD_CART";

export const loadCart = (cart) => ({
  type: LOAD_CART,
  payload: {
    cart,
  },
});
