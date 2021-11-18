import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ITEM_AMOUNT,
  UPDATE_CART_TOTAL,
} from "./mutation-types";

function addToCart({ commit }, payload) {
  commit(ADD_TO_CART, payload);
}
function removeFromCart({ commit }, payload) {
  commit(REMOVE_FROM_CART, payload);
  commit(UPDATE_CART_TOTAL);
}
function setItemAmount({ commit }, payload) {
  commit(SET_ITEM_AMOUNT, payload);
  commit(UPDATE_CART_TOTAL);
}
function updateCartTotal({ commit }) {
  commit(UPDATE_CART_TOTAL);
}

export default {
  addToCart,
  removeFromCart,
  setItemAmount,
  updateCartTotal,
};
