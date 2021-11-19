import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ITEM_AMOUNT,
  UPDATE_CART_TOTAL,
} from "./mutation-types";

export default {
  [ADD_TO_CART]: function ({ cart }, { product, amount }) {
    const inCart = cart.find((inCart) => inCart.uid === product.uid);
    if (inCart === undefined) {
      product.amount = amount;
      cart.push(product);
    } else {
      inCart.amount += amount;
    }
  },
  [SET_ITEM_AMOUNT]: function (state, { uid, newAmount }) {
    const itemIndex = state.cart.findIndex((inCart) => inCart.uid === uid);
    state.cart[itemIndex]["amount"] = newAmount;
  },
  [REMOVE_FROM_CART]: function (state, { uid }) {
    state.cart = state.cart.filter((item) => item.uid !== uid);
  },
  [UPDATE_CART_TOTAL]: function (state) {
    state.total = state.cart.reduce((acc, curr) => {
      return acc + curr.amount * curr.price;
    }, 0);
  },
};
