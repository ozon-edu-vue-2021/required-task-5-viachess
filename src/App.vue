<template>
  <v-app>
    <v-main>
      <v-app-bar elevation="1" class="align-center">
        <v-toolbar-title class="mr-5">Test Shop</v-toolbar-title>
        <router-link
          v-for="route in routeLinks"
          :to="route.path"
          class="nav-link"
          :key="route.name"
          >{{ route.name }}</router-link
        >
        <!-- <router-link to="/" class="nav-link">Товары</router-link>
        <router-link to="/cart" class="nav-link">Корзина</router-link>
        <router-link to="/favorites" class="nav-link">Избранное</router-link> -->
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { routes } from "@/router";

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  computed: {
    routeLinks: function () {
      return routes;
    },
  },
};
</script>

<style scoped>
.nav-link {
  margin-top: 6px;
  margin-right: 16px;
  border-bottom: 2px solid #216bff;
  transition: transform 0.2s ease;
  text-decoration: none;
  color: black;
}
.nav-link:hover {
  color: #216bff !important;
}
</style>
