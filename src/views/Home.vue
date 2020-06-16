<template>
  <div>
    <app-header />
    <div class="container">
      <product-list />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Home',
  components: {
    AppHeader, ProductList,
  },
};
</script>
