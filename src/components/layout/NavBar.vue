<template>
  <header class="py-3">
    <div class="container-md d-flex justify-content-between align-items-center">
      <router-link to="/" class="text-decoration-none">
        <h2 class="text-white">Vue Shopping</h2>
      </router-link>
      <router-link to="/cart" class="text-decoration-none">
        <h2 class="text-white cursor">
          <i class="fas fa-shopping-cart mx-1"></i>
          {{ cartItemCount }}
        </h2>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>

<style scoped lang="scss">
.navbar-nav a {
  font-size: 18px;
}
header {
  background-color: #5cbbe7;
  h2 {
    text-shadow: -1px 3px 2px rgba(0, 0, 0, 0.3);
    &.cursor {
      cursor: pointer;
    }
  }
}
</style>