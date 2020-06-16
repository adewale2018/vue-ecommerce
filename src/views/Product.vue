<template>
  <div class="container">
   <div class="row mt-5">
     <div class="col-4">
       <img src="https://via.placeholder.com/150X100" class="w-100" alt="">
     </div>
     <div class="col-8">
       <h1>Product Title</h1>
       <h3>$34</h3>
       <input type="number" class="text-center col-1 mr-2 p-1">
       <button class="btn btn-primary">Add to Cart</button>
       <p class="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, odio!</p>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['id'],
};
</script>

<style scoped>
</style>
