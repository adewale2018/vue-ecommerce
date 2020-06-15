<template>
  <div class="home">
    <app-header />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'Home',
  components: {
    AppHeader,
  },
};
</script>
