<template>
  <v-card
    class="product-list__card mb-2"
    max-width="344"
    elevation="0"
    :product_id="product.id"
  >
    <!-- @click="ADD_TO_FAVORITES" -->
    <HeartSVG
      id="heart-icon"
      v-bind:class="[isFavorited ? 'favorited' : '']"
      @click="addToFavorites"
    ></HeartSVG>
    <v-list-item three-line>
      <v-list-item-content>
        <!-- :src="product.imageSource" -->
        <v-img :src="require('../assets/images/' + product.image)"></v-img>
        <v-list-item-title class="text-h5 my-2">
          {{ product.price }} ₽
        </v-list-item-title>
        <v-list-item-title class="text-h6 mb-2">
          {{ product.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ product.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions class="product-card__actions">
      <v-btn
        @click="addToCartMethod"
        class="add-to-cart-btn px-4 py-5 ml-2 mb-2"
        elevation="0"
      >
        В корзину
      </v-btn>
      <div class="product-card__amount-wrapper">
        <v-select
          class="ml-2"
          v-model="amountSelectCurrentValue"
          :items="amountSelectValues"
          label="Select"
          return-object
          single-line
          outlined
          dense
        ></v-select>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import HeartSVG from "../assets/icons/heart.svg";
import { mapActions } from "vuex";

export default {
  data: () => ({
    amountSelectCurrentValue: 1,
  }),
  props: {
    product: {
      type: Object,
    },
  },
  components: {
    HeartSVG,
  },
  created: function () {},
  methods: {
    ...mapActions("cart", {
      addToCart: "addToCart",
    }),
    ...mapActions("products", {
      toggleFavorite: "toggleFavorite",
    }),
    addToCartMethod() {
      this.addToCart({
        product: this.product,
        amount: this.amountSelectCurrentValue,
      });
    },
    addToFavorites() {
      this.toggleFavorite(this.product.uid);
    },
  },
  computed: {
    isFavorited: function () {
      return this.product.favorited;
    },
    amountSelectValues: function () {
      const arr = [];
      for (let i = 1; i <= 10; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
};
</script>

<style scoped>
.product-list__card {
  position: relative;
  box-shadow: 1px 7px 5px -3px rgba(34, 60, 80, 0.2) !important;
  transition: all 0.2s ease;
}
.product-list__card:hover {
  box-shadow: 5px 10px 10px -3px rgba(34, 60, 80, 0.2) !important;
}

#heart-icon {
  position: absolute;
  cursor: pointer;
  stroke: #000000;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 4;
  top: 3px;
  right: 2px;
  z-index: 2;
  width: 30px;
  padding-bottom: 5px;
  fill: white;
  transition: all 0.2s ease;
}
#heart-icon:hover {
  transform: translateY(-2px);
}
.favorited {
  fill: red !important;
}

.add-to-cart-btn {
  color: white;
  background-color: #216bff !important;
  font-size: 14px;
  /* font-weight: 400 !important; */
  text-transform: none;
  letter-spacing: 0.06rem;
  font-weight: 500;
}
.product-card__actions {
  display: flex;
  /* justify-content: center; */
  flex-direction: row;
  /* align-items: center; */
  align-items: flex-start;
  justify-content: space-between;
}
.product-card__amount-wrapper {
  width: 80px;
}
</style>
