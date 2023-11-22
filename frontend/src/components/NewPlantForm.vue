<template>

  <div class="form-wrapper">
    <form class="form">
      <input type="text" required v-model="name" placeholder="name">
      <input type="text" required v-model="species" placeholder="species">
      <button type="submit" class="button-pill-yellow">Done!</button>
    </form>

    <p>Name: {{ name }} </p>
    <p>Species {{ species }} </p>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        name: "",
        species: ""
      }
    }
  }
</script>

<style>

.form-wrapper{
  display: block;
  margin: auto;
  width: 50%;
  padding: 20px;
  background-color: #C4A484;
  border-radius: 20px;
  justify-content: space-between;
}

.form{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;
}

input{
  border-radius: 10px;
  background-color: #4bad74;
  font-size: 18px;
  width: 250px;
  padding: 10px;
  margin: 10px;
  outline: none;
}

</style>
