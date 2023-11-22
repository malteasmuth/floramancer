<template>
  <NewPlantForm></NewPlantForm>
  <MyNavbar></MyNavbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
  import MyNavbar from "./components/MyNavbar.vue";
  import Footer from "./components/Footer.vue";
  import NewPlantForm from "./components/NewPlantForm.vue";

  export default {
    name: "app",
    components: { MyNavbar, Footer, NewPlantForm },
  };

</script>

<style scoped>
</style>
