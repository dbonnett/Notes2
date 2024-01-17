<template>
  <div class="basic-note">
    <h2>{{ $store.state.name }}</h2>
    <textarea name="note" id="note" cols="76" rows="50" v-model="typed"></textarea>
    <router-link to="/calendar">
      <div id="submit" v-on:click="enter"> Submit </div>
    </router-link>
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
        typed: this.$store.state.currentText,
        editing: false,
      }
    },
    methods: {
      enter() {
        if(this.typed != "") {
          this.notes.push(this.typed)
          this.map.set(this.date.toISOString(), this.notes);
          this.$store.state.currentText = "";
          this.$store.commit('UPDATE_NOTES', this.map);
          
        }
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
      if (this.typed !== "") {
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