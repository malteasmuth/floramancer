<template>
  <div>
    <div class="plant-details-container">
      <div class="plant-img-container">
        <div class="plant-img"></div>
      </div>
      <div class="plant-info">
        <h1>Look at you, still growing strong!</h1>
        <h3>Name: Angela</h3>
        <h3>Species: Cactus</h3>
        <h3>Health: Smiling</h3>
        <h3>Age: 2 years 11 months</h3>
        <h3>Location: Co-working space</h3>
        <button class="button-pill-yellow">Set schedule</button>
      </div>
    </div>
  </div>
</template>

<script>

  import { plants } from "../devData";

  export default {
    name: "PlantDetailsPage",
  }
</script>
