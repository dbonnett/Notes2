<template>
  <div class="pretty-calendar">
    <h1 id="month">{{ months[whichMonth.getMonth()] }} {{ whichMonth.getFullYear() }}</h1>
    <div v-on:click="highlightAll()">
      <div class="change-month" v-on:click="monthsOffset--">^</div>
    </div>
    <div class="body">
      <div class="row" v-for="arr in spans" v-bind:key="arr">
        <span v-for="num in arr" v-bind:key="num">{{ setDate(num + daysAdded()).getDate() }}
          <div class="icon" v-for="iso in todaysNotes(setDate(num + daysAdded()))" v-bind:key="iso" v-on:click="edit({isoStr: iso, dateStr: setDate(num + daysAdded()).toDateString()})"></div>
        </span>
      </div>
    </div>
    <div v-on:click="highlightAll()">
      <div class="change-month" v-on:click="monthsOffset++">v</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: this.$store.state.date,
      monthsOffset: 0,
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
      ],
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
      let last = 0;
      // let first = new Date();
      // first = this.today;
      for (let i = 1; i <= this.monthsOffset; i++) {
        total += 28 + last;
        // first.setMonth(this.today.getMonth() + this.monthsOffset);
        // first.setDate(1)
        // if (this.daysInMonth(first) + first.getDay() > 35) {
        //   last = 7;
        // } else {
        //   last = 0;
        // }
      }
      return total;
    },
    todaysNotes(date) {
      if (this.$store.state.notesByDay.has(date.toDateString())) {
        return this.$store.state.notesByDay.get(date.toDateString());
      }
      return [];
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
    setDate(num) {
      let first = new Date();
      first.setDate(1);
      let daysOff = first.getDay();
      let date = new Date();
      date.setDate(num - daysOff);
      return date;
    },
    edit(payload) {
      this.$store.commit('EDITING', payload);
      this.$router.push('/');
    }
  },
  mounted() {
    this.highlightAll();
  },
  computed: {
    whichMonth() {
      let date = new Date();
      date.setMonth(this.today.getMonth() + this.monthsOffset)
      return date;
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
  height: stretch;
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
  color: rgb(169, 169, 169);
  border-color: black;
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
.icon {
  background-color: rgb(0, 176, 0);
  height: 10px;
  border-radius: 5px;
  text-align: left;
  margin: 2px;
}

.this-month .icon {
  background-color: green;
}

.change-month {
  font-size: 30;
}

</style>