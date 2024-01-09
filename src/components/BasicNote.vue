<template>
  <div class="basic-note">
    <h2>{{ $store.state.name }}</h2>
    <textarea name="note" id="note" cols="30" rows="10" v-model="typed"></textarea>
    <div id="submit" v-on:click="enter"> Submit </div>
    <h2>{{ map.get(date.toDateString()) }}</h2>
  </div>
</template>

<script>
  export default {
    name: "BasicNote",
    data() {
      return {
        date: this.$store.state.date,
        map: this.$store.state.allNotes,
        notes: [],
        typed: "",
      }
    },
    methods: {
      enter() {
        this.notes.push(this.typed)
        this.map.set(this.date.toDateString(), this.notes);
        this.typed = "";
        this.$store.commit('UPDATE_NOTES', this.map);
      },
      updateTime() {
        this.$store.commit('UPDATE_TIME');
      }
    },
    computed: {
      todaysNotes() {
        if(this.map.has(this.date.toDateString())) {
          return this.map.get(this.date.toDateString());
        }
        return [];
      }
    },
    mounted() {
      this.todaysNotes.forEach(element => {
        this.notes.push(element);
      });
    }
  }
</script>

<style>
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
  }
  .note {
    height: 20px;
  }
</style>