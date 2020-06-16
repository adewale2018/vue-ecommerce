<template>
  <div class="container" v-if="product">
   <div class="row mt-5">
     <div class="col-4">
       <img src="https://via.placeholder.com/150X100" class="w-100" alt="">
     </div>
     <div class="col-8">
       <h1>{{ product.username}}</h1>
       <h3>$ {{ product.id * randNum()}}</h3>
       <input type="number" class="text-center col-1 mr-2 p-1">
       <button class="btn btn-primary">Add to Cart</button>
       <p class="mt-4">{{ product.company.catchPhrase}}</p>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['id'],

  mounted() {
    this.$store.dispatch('getProduct', this.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    randNum() {
      return Math.floor(Math.random() * 15) + 1;
    },
  },
};
</script>

<style scoped>
</style>
