<template>
  <h1>App</h1>
  <router-view/>
</template>

<script>
import MainCalendar from './views/MainCalendar.vue'

export default {
  name: 'App',
  components: MainCalendar
}
</script>

<style>

    MainCalendar#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>