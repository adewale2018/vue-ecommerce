/* eslint-disable max-len */
/* eslint-disable max-len */
/* eslint-disable max-len */
<template>
   <div class="col-md-3 mt-3">
      <div class="card h-100 text-left">
        <img class="w-100 card-img-top" src="https://via.placeholder.com/150X100" alt />
        <div class="card-body">
          <h4 class="card-title">
            <router-link :to="{name: 'product',
            params: {id: product.id}}">{{ product.username }}</router-link>
          </h4>
          <strong>$ {{ product.id * randNum() }}</strong>
          <p
            class="card-text"
          >{{ product.company.catchPhrase}}</p>
        </div>
        <div class="px-4 pb-3">
          <button class="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    randNum() {
      return Math.floor(Math.random() * 15) + 1;
    },
  },
};
</script>

<style scoped>

</style>
