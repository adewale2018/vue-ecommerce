<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
    <div class="nav navbar-nav">
      <a class="nav-item nav-link active" href="#">Home</a>
      <a class="nav-item nav-link" href="#">Products</a>
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
        <div>
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
