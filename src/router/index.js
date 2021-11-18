import Vue from "vue";
import VueRouter from "vue-router";
import { routes as routerLinks } from "@/router/routes.js";
import Cart from "@/views/Cart.vue";
import Products from "@/views/Products.vue";
import Favorites from "@/views/Favorites.vue";

const routes = [
  {
    path: routerLinks.root,
    name: "Товары",
    component: Products,
  },
  {
    path: routerLinks.cart,
    name: "Корзина",
    component: Cart,
  },
  {
    path: routerLinks.favorites,
    name: "Избранное",
    component: Favorites,
  },
];

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

export { router, routes };
