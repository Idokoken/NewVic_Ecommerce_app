import { ADDITEM, DELETEITEM } from "./actionType";

//add item to cart
export const addCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADDITEM,
      payload: product,
    });
  };
};

//delete item from cart
export const delCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: DELETEITEM,
      payload: product,
    });
  };
};
