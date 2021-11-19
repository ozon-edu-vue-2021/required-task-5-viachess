<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="my-3 ml-4">Избранное</h2>
        <div v-if="favorites.length > 0" class="product-list__container">
          <product-card
            v-for="product in favorites"
            :key="product.uid"
            :product="product"
          />
        </div>
        <h3 v-else class="my-3 ml-4">Список пуст</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters("products", {
      products: "getProducts",
    }),
    favorites: function () {
      const filteredProducts = this.products.filter(
        ({ favorited }) => favorited === true
      );
      return filteredProducts;
    },
  },
};
</script>
