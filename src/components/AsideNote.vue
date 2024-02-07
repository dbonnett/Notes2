<template>
  <div class="aside-note">
    <h3>Add Categories</h3>
    <div v-for="(value, key) in currentCategories" v-bind:key="key">
      <input type="checkbox" :id="key" v-model="currentCategories[key]" v-on:click="updateCategories">
      <label :for="key">{{ key }}</label>
    </div>
    <p>Create custom category: </p>
    <input type="text" v-model="custom">
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      custom: ""
    }
  },
  methods: {
    updateCategories() {
      setTimeout( () => {
        this.$store.commit('UPDATE_CATEGORIES', this.currentCategories);
      }, 0)
    },
    submit() {
      if (this.custom !== "") {
        this.$store.commit('NEW_CATEGORY', this.custom);
      }
      this.custom = "";
    }
  },
  computed: {
    currentCategories() {
      return this.$store.state.currentCategories;
    }
  },
  mounted() {
    this.currentCategories = this.$store.state.currentCategories
  }
}
</script>

<style>

</style>