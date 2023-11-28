<template>
  <div>
    <main-calendar/>
  </div>
</template>

<script>
import MainCalendar from './views/MainCalendar.vue';

export default {
  name: 'App',
  components: {
    MainCalendar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
