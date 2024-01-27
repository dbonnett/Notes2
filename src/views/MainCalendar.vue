<template>
  <div class="main-calendar">
  <div class="month-container" v-bind:class="{'grid': !monthView}">
    <pretty-calendar v-for="months in numberOfMonths" v-bind:key="months"></pretty-calendar>
  </div>
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
    },
    numberOfMonths() {
      if (this.monthView) {return 1;}
      return 12;
    }
  }
}
</script>

<style>

pretty-calendar {
  height: 100%;
}

.month-container {
  height: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

</style>