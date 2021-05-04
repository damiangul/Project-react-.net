export const LOAD_PRODUCTS = "LOAD_PRODUCTS";

export const loadProducts = (data) => ({
  type: LOAD_PRODUCTS,
  payload: {
    productsLoaded: data,
  },
});
