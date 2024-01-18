<template>
  <div class="redo-note">
    <h2>{{ $store.state.name }}</h2>
    <textarea name="note" id="note" cols="76" rows="50" v-model="type"></textarea>
    <router-link to="/calendar">
      <div id="submit" v-on:click="enter"> Submit </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      note: {
        text: this.$store.state.currentText,
      },
      typed: this.$store.state.currentText,
      editing: false,
    }
  },
  methods: {
    enter() {
      this.$store.commit('UPDATE_NOTES', [this.date.toISOString(), this.note]);
      this.$store.commit('NOTES_BY_DAY', [this.date.toDateString(), this.date.toISOString()]);
    }
  },
  onMounted() {
    if (this.note.text !== "") {
      this.editing = true;
    }
  }
}
</script>

<style>
  .basic-note {
    text-align: center;
  }
  #submit {
    font-weight: bold;
    background-color: gray;
    width: 80px;
    text-align: center;
  }
  h2 {
    color: green;
  }
  textarea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    padding: 1in;
  }
  .note {
    height: 20px;
  }
</style>