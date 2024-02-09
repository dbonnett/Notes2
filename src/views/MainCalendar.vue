<template>
  <div class="main-calendar">
    <pretty-calendar class="pretty"></pretty-calendar>
    <img id="new-note" src="../assets/note-cropped.png" v-on:click="clearData"/>
    <img id="toggle" src="../assets/calendar-cropped.png" v-on:click="toggle"/>
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
      this.clearCategories();
    },
    clearCategories() {
      let cats = this.$store.state.currentCategories;
      for (let key in cats) {
        cats[key] = false;
      }
      this.$store.commit('UPDATE_CATEGORIES', cats);
      this.$router.push('/')
    },
    toggle() {
      this.$store.commit('CHANGE_VIEW');
    },
  },
  computed: {
    monthView() {
      return this.$store.state.monthView
    },
    numberOfMonths() {
      let arr = [];
      if (this.monthView) {
        return arr.push(0);
      }
      for (let i = 0; i <= 11; i++) {
        arr.push(i - this.$store.state.date.getMonth());
      }
      this.$store.commit('SET_MONTH_NUMBERS', arr);
      return arr;
    },
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'n') {
        this.clearData();
      }
    });
  }
}
</script>

<style>
.main-calendar {
  position: relative;
}

.pretty {
  height: 100%;
}

.month-container {
  height: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

#toggle {
  z-index: 1;
  position: absolute;
  height: 60px;
  bottom: 80px;
  right: 110px;
  opacity: 30%;
  border: 3px;
}

#toggle:hover {
  opacity: 100%;
}

#new-note {
  z-index: 1;
  position: absolute;
  height: 60px;
  bottom: 80px;
  right: 20px;
  opacity: 30%;
  border: 3px;
}

#new-note:hover {
  opacity: 100%;
}
</style>