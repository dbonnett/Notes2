<template>
  <div class="redo-note">
    <h2>{{ $store.state.name }}</h2>
    <textarea name="note" id="note" cols="76" rows="50" v-model="note.text"></textarea>
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
        text: this.$store.state.editing.currentText,
      },
      key: this.$store.state.editing.dateStr,
      value: this.$store.state.editing.isoStr,
    }
  },
  methods: {
    enter() {
      if (!this.key) {
        this.$store.commit('UPDATE_NOTES', { isoStr: this.date.toISOString(), noteObj: this.note});
        this.$store.commit('NOTES_BY_DAY', { dateStr: this.date.toDateString(), isoStr: this.date.toISOString()});
      } else {
        this.$store.commit('UPDATE_NOTES', {isoStr: this.value, noteObj: this.note});
      }
      this.$store.commit('DONE_EDITING');
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