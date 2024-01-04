<template>
  <div class="main-calendar">
  <pretty-calendar></pretty-calendar>
  <router-link id="note-router" v-bind:to="{name: 'note'}">Make a note</router-link>
  </div>
</template>

<script>
import PrettyCalendar from '../components/PrettyCalendar.vue'
export default {
  components: { PrettyCalendar },
}
</script>

<style>

pretty-calendar {
  height: 100%;
}

</style>