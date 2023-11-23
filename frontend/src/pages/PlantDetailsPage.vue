<template>
  <div v-if="plant">
    <div class="plant-details-container">
      <div class="plant-img-container">
        <div class="plant-img"></div>
      </div>
      <div class="plant-info">
        <h1>Look at you, still growing strong!</h1>
        <h3>Name: {{ plant.name}} </h3>
        <h3>Species: {{ plant.species }}</h3>
        <h3>Health: {{ plant.health }}</h3>
        <h3>Age: {{ plant.age }} years</h3>
        <h3>Location:  {{ plant.location }}</h3>
        <h3>Water every {{ plant.watering_interval }} days</h3>
        <button class="button-pill-yellow">Set schedule</button>
      </div>
    </div>
  </div>
  <div v-else>
    <PageNotFound></PageNotFound>
  </div>
</template>

<script>
  import axios from "axios";
  import PageNotFound from "./PageNotFound.vue";

  export default {
    name: "PlantDetailsPage",
    data() {
      return {
        plant: {},
      }
    },
    async created(){
      console.log(this.$route.params.id);
      const response = await axios.get(`/api/plants/${this.$route.params.id}`);
      const plant = response.data;
      this.plant = plant;
    },
    components: {
      PageNotFound,
    }
  }
</script>
