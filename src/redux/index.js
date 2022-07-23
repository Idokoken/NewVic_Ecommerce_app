import { ADDITEM, DELETEITEM } from "./actionType";

//add item to cart
export const addCart = (product) => {
  return {
    type: ADDITEM,
    payload: product,
  };
};

//delete item from cart
export const delCart = (product) => {
  return {
    type: DELETEITEM,
    payload: product,
  };
};
