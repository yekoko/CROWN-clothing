import { CART_TYPES } from "./cart.types";

const INITAIL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITAIL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_TYPES.IS_OPEN_CART:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_TYPES.SET_CART_ITEM:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
