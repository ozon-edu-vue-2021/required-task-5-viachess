<template>
  <v-container>
    <v-row>
      <v-col class="cart-container">
        <h2 class="cart-container__title my-3">Корзина</h2>
        <div class="cart-list__container" v-if="length > 0">
          <cart-card
            v-for="product in cart"
            :key="product.uid"
            :product="product"
          />
        </div>
        <div class="order-section" v-if="length > 0">
          <v-btn
            color="success"
            class="order-section__btn"
            @click="submitProducts"
            >Перейти к оформлению</v-btn
          >
          <div class="order-section__info">
            <h4>Ваша корзина</h4>
            <div class="order-section__info-details">
              <p>Товары ({{ length }})</p>
              <h4>{{ cartTotal }} ₽</h4>
            </div>
            <div class="order-section__info-total">
              <h3>Общая стоимость</h3>
              <h3>{{ cartTotal }}₽</h3>
            </div>
          </div>
        </div>
        <h4 v-else>Корзина пуста</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CartCard from "../components/CartCard.vue";

export default {
  components: {
    CartCard,
  },
  methods: {
    ...mapActions("cart", {
      updateCartTotal: "updateCartTotal",
    }),
    submitProducts: function () {
      const submitText = this.cart
        .map((item) => {
          return `{
          Название: ${item.title},
          Цена: ${item.price},
          Количество: ${item.amount}
        }`;
        })
        .join("\n");
      alert(submitText);
    },
  },
  created: function () {
    this.updateCartTotal();
  },
  computed: {
    ...mapState("cart", {
      cartTotal: "total",
    }),
    ...mapGetters("cart", {
      cart: "getCart",
      length: "getCartLength",
      getCartTotal: "getCartTotal",
    }),
  },
};
</script>

<style scoped>
.cart-container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "title title" "cart info";
}
.cart-container__title {
  grid-area: title;
}
.cart-list__container {
  grid-area: cart;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 30px;
}
.order-section {
  grid-area: info;
  width: 400px;
  background-color: rgba(238, 238, 238, 0.616);
  padding: 20px;
}
.order-section__btn {
  width: 100%;
  margin-bottom: 20px;
}
.order-section__info {
  padding-top: 14px;
  border-top: 1px solid rgba(184, 184, 184, 0.596);
}

.order-section__info-details {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  border-bottom: 1px solid rgba(184, 184, 184, 0.596);
}

.order-section__info-total {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
