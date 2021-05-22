import { NEW_CD } from "../newCdActions";

export const newCdReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_CD:
      return [action.payload.title, action.payload.author,action.payload.genre, action.payload.dataWydania,action.payload.foto, action.payload.price,action.payload.quantity];
    default:
      return state;
  }
};
