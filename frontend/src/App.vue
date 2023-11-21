<template>
  <MyNavbar></MyNavbar>
  <router-view></router-view>
  <div class="placeholders">
    <h1>Footer placeholder</h1>
    <p>Site growing</p>
    <font-awesome-icon icon="fa-solid fa-seedling" />
    <p>Picture by Kaufmann Mercantile on Unsplash</p>
  </div>
</template>

<script>
  import MyNavbar from "./components/MyNavbar.vue";

  export default {
    name: "app",
    components: { MyNavbar },
  };

</script>

<style scoped>
</style>
