<template>
  <div class="pretty-calendar">
    <h1>Pretty Calendar</h1>
    <div class="body">
      <div class="row" id="0">
        <span>{{ setDate(-6) }}</span>
        <span>{{ setDate(-5) }}</span>
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
      today: this.$store.state.date
    }
  },
  computed: {
    daysInMonth() {
      let suDate = new Date();
      suDate.setMonth(suDate.getMonth() + 1);
      suDate.setDate(0);
      return suDate.getDate();
    },
    test() {
      let suDate = new Date(this.today);
      suDate.setDate(suDate.getDate + 1);
      return suDate.getDate();
    },
    thisMonth(num) {
      let daysOff = num - this.today.getDate();
      let suDate = new Date();
      suDate.setDate(this.today.getDate() + daysOff);
      let first = new Date();
      first.setDate(1);
      let fixed = new Date();
      fixed.setDate(suDate.getDate() - first.getDay());
      return fixed.getMonth === this.today.getMonth();
    }
  },
  methods: {
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

.body {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
}

span {
  background-color: rgb(240, 252, 248);
  width: 100%;
  height: 100%;
  text-align: center;
  border-style: solid;
  border-width: 1px
}

this-month {
  background-color: aquamarine !important;
}

</style>