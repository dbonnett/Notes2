<template>
  <div class="main-calendar">
  <pretty-calendar></pretty-calendar>
  <router-link id="note-router" v-bind:to="{name: 'note'}">
    <div v-on:click="clearData">Make a note</div>
  </router-link>
  </div>
</template>

<script>
import PrettyCalendar from '../components/PrettyCalendar.vue'
export default {
  components: { PrettyCalendar },
  methods: {
    clearData() {
      this.$store.commit('DONE_EDITING');
    }
  }
}
</script>

<style>

pretty-calendar {
  height: 100%;
}

</style>