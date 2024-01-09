<template>
  <div class="pretty-calendar">
    <h1 id="month">{{ months[today.getMonth()] }} {{ today.getFullYear() }}</h1>
    <div class="body">
      <div class="row" v-for="arr in spans" v-bind:key="arr">
        <span v-for="num in arr" v-bind:key="num">{{ setDate(num).getDate() }}
          <div class="icon">*</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: this.$store.state.allNotes,
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
      ],
      testNotes: [
        [1, 3, 2024, ["Here is a note for Jan 3"]],
        [1, 8, 2024, ["heres for the fourth", "here's another"]]
      ],
      betterNotes: new Map(),
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
  computed: {
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
  },
  methods: {
    accessSpan(col, row) {
      return document.querySelector(".body > div:nth-child("+ col +") > span:nth-child("+ row +")");
    },
    addNoteTest() {

    },
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
      return fixed;
    }
  },
  mounted() {
    this.highlightAll();
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
  background-color: green;
  height: 10px;
  border-radius: 5px;
  text-align: left;
}

</style>