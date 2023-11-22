<template>
  <div class="base">
    <div class="form-wrapper">
      <form class="form">
        <h2>Add a new plant to your collection</h2>
        <input type="text" required v-model="name" placeholder="name">
        <input type="text" required v-model="species" placeholder="species">
        <input type="text" required v-model="location" placeholder="location">
        <input type="number" required v-model="wateringInterval" placeholder="watering interval">
        <button @click="addPlant" type="submit" class="submit-button">Done!</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

  export default{
    data(){
      return {
        name: "",
        species: "",
        location: "",
        wateringInterval: "",
      }
    },
    methods: {
      async addPlant(){
        await axios.post('/api/plants', { name: this.name, species: this.species});
        alert("Added to collection");
      }
    }
  }
</script>

<style>

.base{
  background-color: #9c9376;
  height: 600px;
  display: flex;
  color: black;
}
.form-wrapper{
  display: block;
  margin: auto;
  width: 40%;
  padding: 20px;
  background-color: #d1c9ae;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 2px 2px 2px black;
}

.form{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;
  color: black;
}

input{
  border-radius: 10px;
  background-color: #d1c9ae;
  font-size: 18px;
  width: 250px;
  padding: 10px;
  margin: 10px;
  outline: none;
  color:
}

.submit-button{
  width: 250px;
  padding: 10px;
  font-size: 18px;
  background-color: #bda75e;
  border-radius: 10px;
  margin: 10px;
  outline: none;
  cursor: pointer;
}

</style>
