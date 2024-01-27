<template>
  <div class="main-calendar">
  <pretty-calendar v-show="monthView"></pretty-calendar>
  <mini-calendar v-show="!monthView"></mini-calendar>
  <router-link id="note-router" v-bind:to="{name: 'note'}">
    <div v-on:click="clearData">Make a note</div>
  </router-link>
  <div v-on:click="toggle">TOGGLE VIEW!</div>
  </div>
</template>

<script>
import PrettyCalendar from '../components/PrettyCalendar.vue'
import MiniCalendar from '@/components/MiniCalendar.vue';
export default {
  components: { PrettyCalendar, MiniCalendar },
  data() {
    return {
      monthView: true
    }
  },
  methods: {
    clearData() {
      this.$store.commit('DONE_EDITING');
    },
    toggle() {
      this.monthView = !this.monthView;
    }
  }
}
</script>

<style>

pretty-calendar {
  height: 100%;
}

</style>