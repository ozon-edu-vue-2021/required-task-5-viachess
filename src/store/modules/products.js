import { GET_PRODUCTS, SET_PRODUCTS, TOGGLE_FAVORITE } from "../mutation-types";

export default {
  state: () => ({
    products: [],
  }),
  getters: {
    [GET_PRODUCTS]: function (state) {
      return state.products;
    },
  },
  mutations: {
    [SET_PRODUCTS]: function (state, payload) {
      const formattedList = payload.map((item) => {
        const random_id = Math.floor(Math.random() * 12) + 1;
        const random_price = Math.floor(Math.random() * 150);
        const formattedItem = {
          id: item.id,
          uid: item.uid,
          title: item.dish,
          description: item.description,
          image: `img_${random_id}.webp`,
          price: `${random_price}`,
          favorited: false,
        };
        return formattedItem;
      });
      state.products = formattedList;
    },
    [TOGGLE_FAVORITE]: function (state, payload) {
      const productToFavorite = state.products.find(
        (item) => item.uid === payload
      );
      productToFavorite.favorited = !productToFavorite.favorited;
    },
  },
  actions: {
    [SET_PRODUCTS]: async function ({ state, commit }) {
      if (state.products.length > 0) {
        return;
      }
      const URL = "https://random-data-api.com/api/food/random_food?size=30";
      await fetch(URL)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          commit(SET_PRODUCTS, res);
        })
        .catch((err) => console.error(err));
    },
    [TOGGLE_FAVORITE]: function ({ commit }, payload) {
      commit(TOGGLE_FAVORITE, payload);
    },
  },
};
