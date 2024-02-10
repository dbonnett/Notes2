<template>
  <div class="redo-note" @keypress.ctrl.d.prevent="dlt()">
    <h2>{{ date.toDateString() }}</h2>
    <textarea name="note" id="note" cols="76" rows="37" v-model="note.text" v-on:keypress.ctrl.enter.prevent="enter()"></textarea>
    <div id="buttons">
      <span id="submit" v-on:click="enter()"> Save </span>
      <span id="delete" v-on:click="dlt()"> Discard </span> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      note: {
        text: Object.assign(this.$store.state.editing.currentText),
        categories: {...this.$store.state.currentCategories}
      },
      key: this.$store.state.editing.dateStr,
      value: this.$store.state.editing.isoStr,
    }
  },
  methods: {
    enter() {
      for (let key in this.currentCategories) {
        if (this.currentCategories[key]) {
          if (!this.key) {
            this.$store.commit('UPDATE_NOTES', { isoStr: this.date.toISOString(), noteObj: this.note});
            this.$store.commit('NOTES_BY_DAY', { dateStr: this.date.toDateString(), isoStr: this.date.toISOString()});
          } else {
            this.$store.commit('UPDATE_NOTES', {isoStr: this.value, noteObj: this.note});
            this.$store.commit('DONE_EDITING');
          }
          this.note.categories = {...this.$store.state.currentCategories};
          this.$router.push('/calendar');
          this.clearCategories();
          return;
        }
      }
      window.alert("must select a category");
    },
    dlt() {
      if (!this.key) {
        this.$store.commit('DELETE_MAIN', this.date.toISOString());
      } else {
        this.$store.commit('DELETE_MAIN', this.value);
        this.$store.commit('DELETE_TODAYS', {key: this.key, value: this.value});
        this.$store.commit('DONE_EDITING');
      }
      this.clearCategories();
      this.$router.push('/calendar');
    },
    alrt() {
      alert("Are you sure? ")
    },
    clearCategories() {
      let cats = this.$store.state.currentCategories;
      for (let key in cats) {
        cats[key] = true;
      }
      this.$store.commit('UPDATE_CATEGORIES', cats);
    }
  },
  computed: {
    currentCategories() {
      return this.$store.state.currentCategories
    }
  }
}
</script>

<style>
  .redo-note {
    text-align: center;
  }
  #submit, #delete {
    display: inline-block;
    font-weight: bold;
    border: none;
    width: 80px;
    text-align: center;
    padding: 8px;
    color: rgb(47, 47, 47)
  }
  #delete {
    background-color: rgb(198, 198, 198)
  }
  #submit {
    background-color: rgb(221, 221, 221)
  }
  h2 {
    color: green;
  }
  textarea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    height: 100%;
    padding: 1in;
  }
  .note {
    height: 20px;
  }

  #buttons {
    z-index: 1;
    display: inline-block;
    position: absolute;
    bottom: 5%;
    right: 50px;
    border-radius: 20px;
    overflow: hidden;
  }

</style>