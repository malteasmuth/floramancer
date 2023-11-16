<template>
   <div>
    <div class="hero-section">
      <div class="hero-headers">
        <h1>This is your garden</h1>
        <h3>Always take good care for your green friends!</h3>
        <button type="button">Plant a new beauty</button>
      </div>
    </div>
    <div class="grid-wrapper">
      <div class="grid-card" v-for="plant in plants">
        <h3>{{ plant.name }}</h3>
        <h3>{{ plant.species }}</h3>
        <button>See details</button>
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
