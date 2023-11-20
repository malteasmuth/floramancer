<template>
   <div>
    <div class="hero-section">
      <div class="hero-headers">
        <h1>Welcome to the garden</h1>
        <h3>Always take good care for your green little friends</h3>
        <button class="button-pill-yellow cursor-change"
                type="button"
                >Plant a new beauty</button>
      </div>
    </div>
    <div class="grid-wrapper">
      <div class="grid-card" v-for="plant in plants">
        <div class="grid-card-img-container">
          <div class="grid-card-img"></div>
        </div>
        <div class="grid-card-infos">
          <h3>{{ plant.name }}</h3>
          <h3>{{ plant.species }}</h3>
          <button class="button-pill-yellow" type="button">See details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { plants } from "../devData";

  export default {
    name: "PlantsPage",
    data() {
      return {
        plants,
      }
    }
  }
</script>
