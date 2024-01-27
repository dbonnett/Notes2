<template>
  <div id="mini-calendar">
    <div v-on:click="highlightAll()">
      <div class="change-month" v-on:click="monthsOffset-=12">^</div>
    </div>
    <div class="body">
      <div class="row" v-for="arr in spans" v-bind:key="arr">
        <span v-for="num in arr" v-bind:key="num">{{ setDate(num + daysAdded()).getDate() }}
          <div class="icon" v-for="iso in todaysNotes(setDate(num + daysAdded()))" v-bind:key="iso"></div>
        </span>
      </div>
    </div>
    <div v-on:click="highlightAll()">
      <div class="change-month" v-on:click="monthsOffset-=12">v</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monthsOffset: this.$store.state.monthsOffset,
      today: this.$store.state.date,
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
    highlightAll() {
      let spansArr = document.querySelectorAll('span');
      for (let i = 0; i < spansArr.length; i++) {
        spansArr[i].classList.remove('this-month');
        spansArr[i].classList.remove('this-day');
      }
      let rows = document.querySelectorAll('.row');
      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.remove('this-week');
      }
      if (this.monthsOffset === 0) {
        this.thisWeek();
        this.thisDay();
      }
      this.thisMonth();
    },
    daysInMonth(date) {
      let suDate = date;
      suDate.setMonth(suDate.getMonth() + 1);
      suDate.setDate(0);
      return suDate.getDate();
    },
    thisWeek() {
      if (this.monthsOffset !== 0) {
        return; 
      }
      let dayIfFirst = this.today.getDate() % 7;
      let row = 0;
      if (this.today.getDay() >= dayIfFirst) {
        row = Math.floor(this.today.getDate() / 7) + 2;
      } else {
        row = Math.floor(this.today.getDate() / 7) + 3;
      }
      let week = document.querySelector(".body div:nth-child("+ row +")");
      week.classList.add("this-week");
    },
    thisDay() {
      let col = this.today.getDay() + 1
      let day = document.querySelector(".this-week span:nth-child(" + col + ")");
      day.classList.add("this-day")
    },
    thisMonth() {
      let firstDate = this.whichMonth;
      firstDate.setDate(1);
      let first = firstDate.getDay();
      let num = this.daysInMonth(this.whichMonth);
      let spans = document.querySelectorAll("span");
      for (let i = 7 + first; i < num + 7 + first; i++) {
        spans[i].classList.add("this-month");
      }
    },
  }
}
</script>

<style>

</style>