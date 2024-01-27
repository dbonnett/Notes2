<template>
  <div id="mini-calendar">
    <div class="body">
      <div class="row" v-for="arr in spans" v-bind:key="arr">
        <span v-for="num in arr" v-bind:key="num">{{ setDate(num + daysAdded()).getDate() }}
          <div class="icon" v-for="iso in todaysNotes(setDate(num + daysAdded()))" v-bind:key="iso"></div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spans: [
        [-6,-5,-4,-3,-2,-1,0],
        [1,2,3,4,5,6,7],
        [8,9,10,11,12,13,14],
        [15,16,17,18,19,20,21],
        [22,23,24,25,26,27,28],
        [29,30,31,32,33,34,35],
        [36,37,38,39,40,41,42]
      ]
    }
  },
  methods: {
    daysAdded() {
      let total = 0;
      let first;
      for (let i = 1; i <= this.monthsOffset; i++) {
        total += 28;
        first = new Date();
        first.setMonth(this.today.getMonth() + i - 1);
        first.setDate(1);
        let add2 = first.getDay();
        let add1 = this.daysInMonth(first);
        if (add1 + add2 >= 35) {
          total += 7;
        } 
      }
      for (let i = -1; i >= this.monthsOffset; i--) {
        total -= 28;
        first = new Date();
        first.setMonth(this.today.getMonth() + i);
        first.setDate(1);
        let add2 = first.getDay();
        let add1 = this.daysInMonth(first);
        if (add1 + add2 >= 35) {
          total -= 7;
        } 
      }
      return total;
    },
    todaysNotes(date) {
      if (this.$store.state.notesByDay.has(date.toDateString())) {
        return this.$store.state.notesByDay.get(date.toDateString());
      }
      return [];
    },
    setDate(num) {
      let first = new Date();
      first.setDate(1);
      let daysOff = first.getDay();
      let date = new Date();
      date.setDate(num - daysOff);
      return date;
    },
  }
}
</script>

<style>

</style>