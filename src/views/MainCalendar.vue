<template>
  <div class="main-calendar">
  <pretty-calendar v-bind:class="{'yearly': !monthView}"></pretty-calendar>
  <router-link id="note-router" v-bind:to="{name: 'note'}">
    <div v-on:click="clearData">Make a note</div>
  </router-link>
  <div v-on:click="toggle">TOGGLE VIEW!</div>
  </div>
</template>

<script>
import PrettyCalendar from '../components/PrettyCalendar.vue'
export default {
  components: { PrettyCalendar },
  data() {
    return {
      
    }
  },
  methods: {
    clearData() {
      this.$store.commit('DONE_EDITING');
    },
    toggle() {
      this.$store.commit('CHANGE_VIEW');
    }
  },
  computed: {
    monthView() {
      return this.$store.state.monthView
    }
  }
}
</script>

<style>

pretty-calendar {
  height: 100%;
}

.yearly {
  height: 30% !important;
  width: 20%;
  font-size: 0;
}

h1 {
  font-size: 10;
}

</style>