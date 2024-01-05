<template>
  <div class="pretty-calendar"  v-on:click="highlightAll">
    <h1 id="month">{{ months[today.getMonth()] }} {{ today.getFullYear() }}</h1>
    <div class="body">
      <div class="row" id="0">
        <span>{{ setDate(-6) }}</span>
        <span>{{ setDate(-5) }}<div id="trial">*</div></span>
        <span>{{ setDate(-4) }}</span>
        <span>{{ setDate(-3) }}</span>
        <span>{{ setDate(-2) }}</span>
        <span>{{ setDate(-1) }}</span>
        <span>{{ setDate(0) }}</span>
      </div>
      <div class="row" id="1">
        <span>{{ setDate(1) }}</span>
        <span>{{ setDate(2) }}</span>
        <span>{{ setDate(3) }}</span>
        <span>{{ setDate(4) }}</span>
        <span>{{ setDate(5) }}</span>
        <span>{{ setDate(6) }}</span>
        <span>{{ setDate(7) }}</span>
      </div>
      <div class="row" id="2">
        <span>{{ setDate(8) }}</span>
        <span>{{ setDate(9) }}</span>
        <span>{{ setDate(10) }}</span>
        <span>{{ setDate(11) }}</span>
        <span>{{ setDate(12) }}</span>
        <span>{{ setDate(13) }}</span>
        <span>{{ setDate(14) }}</span>
      </div>
      <div class="row" id="3">
        <span>{{ setDate(15) }}</span>
        <span>{{ setDate(16) }}</span>
        <span>{{ setDate(17) }}</span>
        <span>{{ setDate(18) }}</span>
        <span>{{ setDate(19) }}</span>
        <span>{{ setDate(20) }}</span>
        <span>{{ setDate(21) }}</span>
      </div>
      <div class="row" id="4">
        <span>{{ setDate(22) }}</span>
        <span>{{ setDate(23) }}</span>
        <span>{{ setDate(24) }}</span>
        <span>{{ setDate(25) }}</span>
        <span>{{ setDate(26) }}</span>
        <span>{{ setDate(27) }}</span>
        <span>{{ setDate(28) }}</span>
      </div>
      <div class="row" id="5">
        <span>{{ setDate(29) }}</span>
        <span>{{ setDate(30) }}</span>
        <span>{{ setDate(31) }}</span>
        <span>{{ setDate(32) }}</span>
        <span>{{ setDate(33) }}</span>
        <span>{{ setDate(34) }}</span>
        <span>{{ setDate(35) }}</span>
      </div>
      <div class="row" id="6">
        <span>{{ setDate(36) }}</span>
        <span>{{ setDate(37) }}</span>
        <span>{{ setDate(38) }}</span>
        <span>{{ setDate(39) }}</span>
        <span>{{ setDate(40) }}</span>
        <span>{{ setDate(41) }}</span>
        <span>{{ setDate(42) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: this.$store.state.date,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    }
  },
  computed: {

    test(num) {
      return num == 3;
    },
    // thisMonth(num) {
    //   let daysOff = num - this.today.getDate();
    //   let suDate = new Date();
    //   suDate.setDate(this.today.getDate() + daysOff);
    //   let first = new Date();
    //   first.setDate(1);
    //   let fixed = new Date();
    //   fixed.setDate(suDate.getDate() - first.getDay());
    //   return fixed.getMonth == this.today.getMonth();
    // },
    isToday() {
      return false;
    }
  },
  methods: {
    highlightAll() {
      this.thisWeek();
      this.thisDay();
      this.thisMonth();
    },
    daysInMonth() {
      let suDate = new Date();
      suDate.setMonth(suDate.getMonth() + 1);
      suDate.setDate(0);
      return suDate.getDate();
    },
    thisWeek() {
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
      let firstDate = new Date();
      firstDate.setDate(1);
      let first = firstDate.getDay();
      let num = this.daysInMonth();
      let spans = document.querySelectorAll("span");
      for (let i = 7 + first; i < num + 7 + first; i++) {
        spans[i].classList.add("this-month");
      }
    },
    setDate(num) {
      let daysOff = num - this.today.getDate();
      let suDate = new Date();
      suDate.setDate(this.today.getDate() + daysOff);
      let first = new Date();
      first.setDate(1);
      let fixed = new Date();
      fixed.setDate(suDate.getDate() - first.getDay());
      return fixed.getDate();
    }
  }
}
</script>

<style>

.pretty-calendar {
  height: 100%;
}

.body {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: fill;
  padding-bottom: 50px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
}

span {
  background-color: rgb(249, 249, 249);
  width: 100%;
  height: 100%;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  color: gray;
  border-color: transparent;
}

.this-month {
  background-color: rgb(240, 252, 248);
  color: black !important;
  border-color: black;
  border-style: solid;
  border-width: 1px;
}

#trial {
  height: 20px;
  width: 100%;
  background-color: rgb(114, 198, 114);
  text-align: left;
  border-radius: 10px;
}

#month {
  background-color: rgb(173, 173, 173);
  margin: 0px;
  height: 50px;
  text-align: center;
}

.this-week {
  height: 250%;
}

.this-day {
  font-weight: bolder;
  background-color: rgb(226, 252, 243);
}

</style>