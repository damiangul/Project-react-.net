export const NEW_CD = "NEW_CD";

export const newCd = (title, author,genre,dataWydania,foto,price,quantity) => ({
  type: NEW_CD,
  payload: {
    title,
    author,
    genre,
    dataWydania,
    foto,
    price,
    quantity,
  },
});
