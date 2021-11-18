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
          @click="removeFromCartMethod"
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
      ></v-select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({}),
  props: {
    product: {
      type: Object,
    },
  },
  components: {},
  mounted: function () {},
  methods: {
    ...mapActions("cart", {
      removeFromCart: "removeFromCart",
      setItemAmount: "setItemAmount",
    }),
    ...mapActions("products", {
      toggleFavorite: "toggleFavorite",
    }),
    addToFavorites() {
      this.toggleFavorite(this.product.uid);
    },
    removeFromCartMethod() {
      this.removeFromCart({ uid: this.product.uid });
    },
  },
  watch: {},
  computed: {
    ...mapGetters("cart", {
      getCartItem: "getCartItem",
    }),
    selectedProduct: function () {
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
    amountSelectCurrentValue: {
      get: function () {
        const amount = this.getCartItem({
          uid: this.product.uid,
        });
        return amount;
      },
      set(newAmount) {
        this.setItemAmount({
          uid: this.product.uid,
          newAmount,
        });
      },
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
