<template>
  <div class="navbar-wrapper">
    <div class="navbar-image-wrapper">
      <router-link to="/">
        <img
          src="../assets/images/the-bialons-MVCu1JIYuoM-unsplash.jpg"
          class="navbar-logo-square">
      </router-link>
    </div>
      <router-link to="/"
        class="menu-button-name"><h1>Floramancer</h1></router-link>
      <div class="navbar-menu-wrapper">
      <router-link to="/"
        class="menu-button">Home</router-link>
      <router-link to="/plants"
        class="menu-button">Your Plants</router-link>
      <router-link to="#"
        class="menu-button">Schedule</router-link>
      <router-link to="#"
        class="menu-button">About</router-link>
      <button class="button-pill-yellow">Log in</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyNavbar",
  }
</script>

<style>

.menu-button{
  text-decoration: none;
  color: white;
  transition-duration: 500ms;
}

.menu-button:hover{
  color: black;
  font-size: 18px;
  font-weight: bold;
  background-color: #4bad74;
  border-radius: 10px;
  padding: 5px;
}

.menu-button-name{
  text-decoration: none;
  color: white;
}
</style>
