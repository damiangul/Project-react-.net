import { ADD_TO_CART, LOAD_CART } from "../cartActions";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CART:
      return [...action.payload.cart];
    case ADD_TO_CART:
      const {
        user,
        product,
        quantity,
        type,
        addTime,
        alreadyBoughtID,
      } = action.payload;

      if (alreadyBoughtID !== -1) {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            productID: product,
            userID: user,
            quantity: quantity + 1,
            type: type,
            addTime: addTime,
          }),
        };
        fetch(
          `https://localhost:44304/api/items/${alreadyBoughtID}`,
          requestOptions
        ).then((response) => response.json());
      } else {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            productID: product,
            userID: user,
            quantity: quantity,
            type: type,
            addTime: addTime,
          }),
        };
        fetch(
          "https://localhost:44304/api/items/",
          requestOptions
        ).then((response) => response.json());
      }

      return state;
    default:
      return state;
  }
};
