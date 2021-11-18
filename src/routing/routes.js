import Products from "@/pages/Products";
import Cart from "@/pages/Cart";
import Favorites from "@/pages/Favorites";

const routes = [
  {
    path: "/",
    component: Products,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/favorites",
    component: Favorites,
  },
];

export default routes;
