import { SET_PRODUCTS, TOGGLE_FAVORITE } from "./mutation-types";

export default {
  [SET_PRODUCTS](state, payload) {
    const formattedList = payload.map((item) => {
      const random_id = Math.floor(Math.random() * 12) + 1;
      const random_price = Math.floor(Math.random() * 150) + 1;
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
  [TOGGLE_FAVORITE](state, payload) {
    const productToFavorite = state.products.find(
      (item) => item.uid === payload
    );
    productToFavorite.favorited = !productToFavorite.favorited;
  },
};
