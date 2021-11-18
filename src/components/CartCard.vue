<template>
  <div class="cart-card">
    <img
      class="cart-card__image"
      :src="require('../assets/images/' + product.image)"
    />
    <div class="cart-card__info">
      <h3 class="cart-card__info-title">{{ product.title }}</h3>
      <h4 class="cart-card__info-price">{{ product.price }} ₽</h4>
      <div class="cart-card__info-buttons">
        <button
          type="button"
          class="cart-card__info-action"
          @click="addToFavorites"
        >
          {{ !isFavorited ? "В избранное" : "Удалить из избранного" }}
        </button>
        <button
          type="button"
          class="cart-card__info-action"
          @click="removeFromCart"
        >
          Удалить
        </button>
      </div>
    </div>
    <div class="cart-card__amount-wrapper">
      <v-select
        v-model="amountSelectCurrentValue"
        :items="amountSelectValues"
        label="Select"
        return-object
        single-line
        outlined
        dense
        class="cart-card__amount"
        @change="changeProductAmount"
      ></v-select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  GET_CART,
  GET_CART_ITEM,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ITEM_AMOUNT,
  TOGGLE_FAVORITE,
} from "../store/mutation-types";

export default {
  data: () => ({
    amountSelectCurrentValue: null,
  }),
  props: {
    product: {
      type: Object,
    },
  },

  components: {},
  mounted: async function () {
    const amount = await this.GET_CART_ITEM({
      uid: this.product.uid,
    });
    this.amountSelectCurrentValue = amount;
  },
  methods: {
    ...mapActions({
      ADD_TO_CART,
      GET_CART_ITEM,
      REMOVE_FROM_CART,
      SET_ITEM_AMOUNT,
      TOGGLE_FAVORITE,
    }),
    addToFavorites() {
      this.TOGGLE_FAVORITE(this.product.uid);
    },
    changeProductAmount(newAmount) {
      this.SET_ITEM_AMOUNT({
        uid: this.product.uid,
        newAmount: newAmount,
      });
    },
    removeFromCart() {
      this.REMOVE_FROM_CART({ uid: this.product.uid });
    },
  },
  watch: {},
  computed: {
    ...mapGetters({
      GET_CART,
    }),
    selectedProduct: function () {
      console.log(this.select);
      return this.select;
    },
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
.cart-card {
  display: flex;
  align-items: flex-end;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(184, 184, 184, 0.596);
}
.cart-card__image {
  width: 100px;
  max-height: 100px;
}
.cart-card__info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 22px;
  padding-right: 22px;
}
.cart-card__info-action {
  color: rgba(33, 107, 255, 1);
}
.cart-card__info-action:not(:last-child) {
  border-right: 1px solid black;
  padding-right: 8px;
}
.cart-card__info-action:last-child {
  padding-left: 8px;
}
.cart-card__info-action:hover {
  color: rgba(33, 107, 255, 0.8);
}
.cart-card__amount-wrapper {
  width: 80px;
  margin-left: auto;
}
</style>
