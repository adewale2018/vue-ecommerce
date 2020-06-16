<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <div class="nav navbar-nav">
        <router-link to='/' class="nav-item nav-link active">Home</router-link>
        <router-link to='/product/30' class="nav-item nav-link active">Product</router-link>
      </div>
      <div>
        <div class="btn-group">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="triggerId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >0 Cart</button>
          <div @click="$event.stopPropagation()">
            <mini-cart />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// eslint-disable-next-line import/extensions
import MiniCart from './MiniCart';

export default {
  name: 'AppHeader',
  // eslint-disable-next-line vue/no-unused-components
  components: { MiniCart },
};
</script>

<style scoped>
</style>
