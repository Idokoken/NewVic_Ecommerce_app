import { ADDITEM, DELETEITEM } from "../actionType";

export const cartReducer = (state = [], action) => {
  const product = action.payload;
  switch (action.type) {
    case ADDITEM:
      // check if product already exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }

    case DELETEITEM:
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...exist1, qty: exist1.qty - 1 } : x
        );
      }
    default:
      return state;
  }
};
