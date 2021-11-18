const URL = "https://random-data-api.com/api/food/random_food?size=30";

import { SET_PRODUCTS, TOGGLE_FAVORITE } from "./mutation-types";

async function setProducts({ state, commit }) {
  if (state.products.length > 0) {
    return;
  }
  try {
    const res = await fetch(URL);
    const products = await res.json();
    commit(SET_PRODUCTS, products);
  } catch (err) {
    console.error(err);
  }
}
function toggleFavorite({ commit }, payload) {
  commit(TOGGLE_FAVORITE, payload);
}

export default {
  setProducts,
  toggleFavorite,
};
