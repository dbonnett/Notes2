<template>
  <div class="first-calendar">
    <div class="heading">
      <div v-bind:class="{'today-heading': isSunday}">S  {{setDate(0)}}</div>
      <div v-bind:class="{'today-heading': isMonday}">M  {{setDate(1)}}</div>
      <div v-bind:class="{'today-heading': isTuesday}">Tu  {{setDate(2)}}</div>
      <div v-bind:class="{'today-heading': isWednesday}">W  {{setDate(3)}}</div>
      <div v-bind:class="{'today-heading': isThursday}">Th  {{setDate(4)}}</div>
      <div v-bind:class="{'today-heading': isFriday}">F  {{setDate(5)}}</div>
      <div v-bind:class="{'today-heading': isSaturday}">S  {{setDate(6)}}</div>
    </div>
    <div class="spaces">
      <div v-bind:class="{'today': isSunday}"></div>
      <div v-bind:class="{'today': isMonday}"></div>
      <div v-bind:class="{'today': isTuesday}"></div>
      <div v-bind:class="{'today': isWednesday}"></div>
      <div v-bind:class="{'today': isThursday}"></div>
      <div v-bind:class="{'today': isFriday}"></div>
      <div v-bind:class="{'today': isSaturday}"></div>
    </div>
    <router-link v-bind:to="{name: 'note'}">Make a note</router-link>
  </div>
</template>

<script>
export default {
  name: "MainCalendar",
  data() {
    return {
      date: this.$store.state.date,
      days: {
        sunday: {
          today: false,
          date: 0
        },
        monday: {
          today: false,
          date: 0
        },
        tuesday: {
          today: false,
          date: 0
        },
        wednesday: {
          today: false,
          date: 0
        },
        thursday: {
          today: false,
          date: 0
        },
        friday: {
          today: false,
          date: 0
        },
        saturday: {
          today: false,
          date: 0
        }
      }
    }
  },
  computed: {
    isSunday() {
      return this.date.getDay() === 0;
    },
    isMonday() {
      return this.date.getDay() === 1;
    },
    isTuesday() {
      return this.date.getDay() === 2;
    },
    isWednesday() {
      return this.date.getDay() === 3;
    },
    isThursday() {
      return this.date.getDay() === 4;
    },
    isFriday() {
      return this.date.getDay() === 5;
    },
    isSaturday() {
      return this.date.getDay() === 6;
    }
  },
  methods: {
    setDate(num) {
      let daysOff = num - this.date.getDay();
      let suDate = new Date();
      suDate.setDate(this.$store.state.date.getDate() + daysOff);
      return suDate.getDate();
    }
  }
}
</script>

<style>
  .main-calendar {
    display: flex;
    flex-direction: column;
  }

  .heading {
    display: flex;
    flex-direction: row;
    width: 100%
  }

  .heading > div {
    background-color: rgb(144, 224, 197);
    text-align: center;
    margin: 15px;
    margin-bottom: 0px;
    width: 100%;
  }
  
  .spaces {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
  }

  .spaces > div {
    background-color: rgb(240, 248, 245);
    margin: 15px;
    margin-top: 0px;
    width: 100%;
  }

  button {
    width: 150px;
  }

  .note {
    color: rgb(0, 0, 0);
  }

  .today {
    background-color: rgb(203, 252, 235) !important
  }

  .today-heading {
    font-weight: bold;
  }
</style>