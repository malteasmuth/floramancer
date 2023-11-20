<template>
  <h1 class="placeholders">Navbar placeholder</h1>
  <router-view></router-view>
  <div class="placeholders">
    <h1>Footer placeholder</h1>
    <p>Site in development </p>
    <font-awesome-icon :icon="['fas', 'seedling']" />
    <p>Picture by Kaufmann Mercantile on Unsplash</p>
  </div>
</template>

<script>
  export default {
    name: "app",
    components: {},
  };
</script>

<style scoped>
</style>
