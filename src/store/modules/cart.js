import {
  GET_CART,
  GET_CART_ITEM,
  GET_CART_LENGTH,
  GET_CART_TOTAL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ITEM_AMOUNT,
} from "../mutation-types";

export default {
  state: () => ({
    cart: [],
  }),
  getters: {
    [GET_CART]: function ({ cart }) {
      return cart;
    },
    [GET_CART_LENGTH]: function ({ cart }) {
      return cart.length;
    },
    [GET_CART_TOTAL]: function ({ cart }) {
      return cart.reduce((acc, curr) => {
        return acc + curr.amount * curr.price;
      }, 0);
    },
  },
  mutations: {
    [ADD_TO_CART]: function ({ cart }, { product, amount }) {
      const inCart = cart.find((inCart) => inCart.uid === product.uid);
      if (inCart === undefined) {
        product.amount = amount;
        cart.push(product);
      } else {
        inCart.amount += amount;
      }
    },
    [SET_ITEM_AMOUNT]: function ({ cart }, { uid, newAmount }) {
      const inCart = cart.find((inCart) => inCart.uid === uid);
      inCart.amount = newAmount;
    },
    [REMOVE_FROM_CART]: function (state, { uid }) {
      state.cart = state.cart.filter((item) => item.uid !== uid);
    },
  },
  actions: {
    [ADD_TO_CART]: function ({ commit }, payload) {
      commit(ADD_TO_CART, payload);
    },
    [REMOVE_FROM_CART]: function ({ commit }, payload) {
      commit(REMOVE_FROM_CART, payload);
    },
    [GET_CART_ITEM]: function ({ getters }, { uid }) {
      const cart = getters.GET_CART;
      const cartItem = cart.find((item) => item.uid === uid);
      return cartItem.amount;
    },
    [SET_ITEM_AMOUNT]: function ({ commit }, payload) {
      commit(SET_ITEM_AMOUNT, payload);
    },
  },
};
