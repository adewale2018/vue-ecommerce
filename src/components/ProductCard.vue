<template>
   <div class="col-md-3 mt-3">
      <div class="card h-100 text-left">
        <img class="w-100 card-img-top" src="https://via.placeholder.com/150X100" alt />
        <div class="card-body">
          <h4 class="card-title">
            <router-link :to="{name: 'product', params: {id: 86}}">Product Title</router-link>
          </h4>
          <strong>$23</strong>
          <p
            class="card-text"
          >Sit amet consectetur adipisicing elit. Accusamus cupiditate
          non itaque, explicabo velit dicta.</p>
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
};
</script>

<style scoped>

</style>
