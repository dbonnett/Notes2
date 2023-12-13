<template>
  <div class="basic-note">
    <h2>{{ $store.state.name }}</h2>
    <textarea name="note" id="note" cols="30" rows="10" v-model="typed" v-on:keyup.enter.prevent="enter"></textarea>
    <h2>What you just typed:</h2>
    <div class="note">
      <p>{{ posted }}</p>
    </div>
    <p>{{ $store.state.date }}</p>
    <p>{{ $store.state.date.getFullYear() }}</p>
  </div>
</template>

<script>
  export default {
    name: "BasicNote",
    data() {
      return {
        typed: "",
        posted: "",
        time: 0
      }
    },
    methods: {
      enter() {
        this.posted = this.typed;
        this.typed = "";
        this.updateTime();
      },
      updateTime() {
        this.$store.commit('UPDATE_TIME');
      }
    }
  }
</script>

<style>
  h2 {
    color: green;
  }
  textarea {
    font-family: Arial, Helvetica, sans-serif;
  }
  .note {
    height: 20px;
  }
</style>