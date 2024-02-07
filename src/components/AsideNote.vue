<template>
  <div class="aside-note">
    <h3>Add Categories</h3>
    <div v-for="(value, key) in currentCategories" v-bind:key="key">
      <input type="checkbox" :id="key" v-model="currentCategories[key]" v-on:click="updateCategories">
      <label :for="key">{{ key }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //currentCategories: this.$store.state.currentCategories
    }
  },
  methods: {
    updateCategories() {
      setTimeout( () => {
        this.$store.commit('UPDATE_CATEGORIES', this.currentCategories);
      }, 0)
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