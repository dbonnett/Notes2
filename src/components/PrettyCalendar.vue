<template>
  <div class="pretty-calendar">
    <p v-show="yearlyViewYear()" class="yearly-heading">{{ yearlyViewYear() }}</p>
    <div class="arrow-fixer">
      <div>
        <img src="../assets/left2.png" class="change-month left" v-on:click=this.changeMonth(-1)>
      </div>
      <div  v-bind:class="{'yearly': !monthView}" class="outer-shell">
        <div class="month-container" v-for="month in numberOfMonths" v-bind:key="month">
          <div class="bundler" v-on:click="goToMonth(month)">
          <p id="month">{{ months[whichMonth(month).getMonth()] }} {{ conditionalYear(month) }}</p>
          <div class="body">
            <div class="row" v-for="arr in spans" v-bind:key="arr">
              <span v-for="num in arr" v-bind:key="num">{{ setDate(num + daysAdded(month)).getDate() }}
                <div class="icon"  v-for="iso in todaysNotes(setDate(num + daysAdded(month)))" v-bind:key="iso" v-show="checkCategories(iso)" v-on:click="edit({isoStr: iso, dateStr: setDate(num + daysAdded()).toDateString()})"></div>
              </span>
            </div> 
          </div>
          </div>
        </div>
      </div>
      <div style="margin-top:5px">
        <img src="../assets/right2.png" class="change-month right" v-on:click=this.changeMonth(1)>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monthsOffset: 0,
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
    checkCategories(iso) {
      let note = this.$store.getters.getNotes.get(iso);
      for (let key in note.categories) {
        if (this.selectedCategories[key] === true && note.categories[key] === true) {
          return true;
        }
      }
      return false;
    },
    clearCategories() {
      let cats = this.$store.state.currentCategories;
      for (let key in cats) {
        cats[key] = false;
      }
      this.$store.commit('UPDATE_CATEGORIES', cats);
    },
    changeMonth(inc) {
      if (this.monthView) {
        this.monthsOffset += inc;
      } else {
        this.monthsOffset += (12 * inc);
      }
      setTimeout( () => {
        this.highlightAll(this.monthsOffset)
      }, 0)
    },
    goToMonth(mon) {
      if (!this.monthView) {
        this.monthsOffset = mon;
        this.$store.commit('CHANGE_VIEW');
      }
    },
    setMonth(num) {
      return num - this.monthsOffset;
    },
    conditionalYear(num) {
      if (this.monthView) {
        return this.whichMonth(num).getFullYear();
      } 
    },
    yearlyViewYear() {
        if (!this.monthView){
          let date = new Date();
          date.setDate(1);
          date.setMonth(date.getMonth() + this.monthsOffset);
          return date.getFullYear();
        }
    },
    daysAdded(offset) {
      let total = 0;
      let first;
      for (let i = 1; i <= offset; i++) {
        total += 28;
        first = new Date();
        first.setDate(1);
        first.setMonth(this.today.getMonth() + i - 1);
        let add2 = first.getDay();
        let add1 = this.daysInMonth(first);
        if (add1 + add2 >= 35) {
          total += 7;
        } 
      }
      for (let i = -1; i >= offset; i--) {
        total -= 28;
        first = new Date();
        first.setDate(1);
        first.setMonth(this.today.getMonth() + i);
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
    highlightAll(offset = 0) {
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
      this.thisMonth(offset);
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
    thisMonth(offset) {
      let firstDate = this.whichMonth(offset);
      firstDate.setDate(1);
      let first = firstDate.getDay();
      let num = this.daysInMonth(this.whichMonth(offset));
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
    },
    whichMonth(offset) {
      let date = new Date();
      date.setDate(1);
      date.setMonth(this.today.getMonth() + offset);
      return date;
    },
    arrowHandler(e) {
      if (e.key === 'ArrowRight') {
        this.changeMonth(1);
      }
      if (e.key === 'ArrowLeft') {
        this.changeMonth(-1);
      }
    }
  },
  mounted() {
    this.highlightAll();
  },
  computed: {
    monthView() {
      return this.$store.state.monthView;
    },
    numberOfMonths() {
      let arr = [];
      if (this.monthView) {
        arr.push(this.monthsOffset);
      } else {
        for (let i = 0; i <= 11; i++) {
          arr.push(i - this.$store.state.date.getMonth());
        }
        arr.map((num) => {
          return num + (12 * this.yearlyViewYear() - this.today.getFullYear());
        })
      }
      this.$store.commit('SET_MONTH_NUMBERS', arr);
      return arr;
    },
    selectedCategories() {
      return this.$store.state.currentCategories;
    }
  },
  created() {
    window.addEventListener('keydown', this.arrowHandler);
  }, 
  unmounted() {
    window.removeEventListener('keydown', this.arrowHandler)
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
  height: 92%;
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
  background-color: rgb(233, 254, 255);
  color: black !important;
  border-color: black;
  border-style: solid;
  border-width: 1px;
}
#month {
  background-color: rgb(173, 173, 173);
  font-size: 35px;
  margin: 0px;
  height: 50px;
  text-align: center;
}
.this-week {
  height: 250%;
}
.this-day {
  font-weight: bolder;
  background-color: rgb(201, 239, 241);}
.icon {
  background-color: rgb(110, 219, 214);
  height: 10px;
  border-radius: 5px;
  text-align: left;
  margin: 2px;
}

.this-month .icon {
  background-color: rgb(0, 126, 128);
}

.yearly {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100%;
  margin: 10px;
  gap: 10px;
}

.yearly span {
  font-size: 0;
}

.yearly .body {
  height: 70% !important;
}

.month-container {
  height: 100%;
}

.bundler {
  height: 100%;
}

.outer-shell {
  height: 100%;
  top: 0;
}

.change-month {
  z-index: 1;
  top: 50%;
  opacity: 30%;
  height: 45px;
  margin: 0px;
  position: absolute;
}

.change-month:hover {
  opacity: 100%;
  height: 50px;
}

.arrow-fixer {
  height:100%;
  position: relative;
}

.right {
  right: 10px;
}

.left {
  left: 10px;
}

.year-heading {
  font-size: large;
  text-align: center;
  height: auto;
}

.year {
  display: none;
}
</style>