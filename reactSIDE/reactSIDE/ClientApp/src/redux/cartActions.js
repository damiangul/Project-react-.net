export const LOAD_CART = "LOAD_CART";
export const ADD_TO_CART = "ADD_TO_CART";

export const loadCart = (cart) => ({
  type: LOAD_CART,
  payload: {
    cart,
  },
});

export const addToCart = ({ productID, userID, alreadyInCart }) => ({
  type: ADD_TO_CART,
  payload: {
    product: productID,
    user: userID,
    quantity: 1,
    type: 0,
    addTime: Date().toString(),
    alreadyInCart,
  },
});
