import Vue from "vue";
import Vuex from "vuex";
import productsModule from "./modules/products.js";
import cartModule from "./modules/cart.js";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    productsModule,
    cartModule,
  },
  getters: {},
});

export default store;
