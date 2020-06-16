<template>
    <div class="dropdown-menu dropdown-menu-right p-2" aria-labelledby="triggerId">
      <div>
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>Product Title</strong>
          <br> 1 X $23
        </div>
        <div>
          <a href="#" class="badge badge-secondary">Remove</a>
        </div>
      </div>
      </div>
      <hr>
      <div class="d-flex justify-content-between">
        <span>Total: $23</span>
        <a href="#">Clear Cart</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MiniCart',
};
</script>

<style scoped>
.dropdown-menu{
  min-width: 320px;
  right: 0;
  left: auto;
}
</style>
