<template>
  <MyNavbar></MyNavbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
  import MyNavbar from "./components/MyNavbar.vue";
  import Footer from "./components/Footer.vue";

  export default {
    name: "app",
    components: { MyNavbar, Footer },
  };

</script>

<style scoped>
</style>
