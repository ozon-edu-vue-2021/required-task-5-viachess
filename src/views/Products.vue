<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="my-3 ml-4">Каталог товаров</h2>
        <div class="product-list__container">
          <product-card
            v-for="product in products"
            :key="product.uid"
            :product="product"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductsList",
  data: () => {
    return {};
  },
  components: {
    ProductCard,
  },
  methods: {
    ...mapActions("products", {
      setProducts: "setProducts",
    }),
  },
  created: function () {
    this.setProducts();
  },
  computed: {
    ...mapGetters("products", {
      products: "getProducts",
    }),
  },
};
</script>

<style>
.product-list__container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
}
</style>
