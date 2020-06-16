/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error */
<template>
  <div class="row">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: { ProductCard },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('getProducts');
  },
};
</script>

<style scoped></style>
