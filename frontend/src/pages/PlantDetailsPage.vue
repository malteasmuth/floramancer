<template>
  <div>
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
</template>

<script>

  import { plants } from "../devData";

  const plant = plants.find(x => x.id === 1);

  export default {
    name: "PlantDetailsPage",
    data() {
      return {
        plants,
        plant
      }
    }
  }
</script>
