<template>
  <div v-if="$store.state.cart.length == 0">
    This cart is Empty. Please buy something?
  </div>
  <div v-else>
    <div v-for="item in cart" :key="item.product.id" class="container">
      <div class="px-2 d-flex">
        <img :src="item.product.image" alt="" />
        <div>
          <strong>{{ item.product.title }}</strong>
          <br />
          <span>{{ item.quantity }} x ${{ item.product.price }}</span>
        </div>
        <div>
          <button
            class="remove btn btn-primary"
            @click.prevent="removeFromCart(item.product)"
          >
            remove
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-evenly">
      <strong>Total: $ {{ cartTotalPrice.toFixed(2) }} </strong>
      <button class="btn btn-outline-success" @click.prevent="clearCart()">
        Clear Cart
      </button>
    </div>
    <div class="container">
      <div class="row">
        <router-link to="/checkout" class="btn btn-outline-primary mb-5 w-25">
          Proceed to Checkout
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    removeFromCart(product) {
      this.$store.dispatch('removeProductFromCart', product);
    },
    clearCart() {
      this.$store.dispatch('clearCart');
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 18px;
}
img {
  width: 80px;
  height: 80px;
  margin: 8px;
}
button.remove {
  position: absolute;
  right: 100px;
}
</style>