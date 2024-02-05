<template>
  <div class="aside-note">
    <h3>Add Categories</h3>
    <input type="checkbox" id="brainstorm" name="brainstorm" v-model="currentCategories.brainstorm" @click="updateCategories">
      <label for="brainstorm"> Brainstorming </label><br>
    <input type="checkbox" id="lists" name="lists" v-model="currentCategories.list" @click="updateCategories">
      <label for="lists"> Lists</label><br>
    <input type="checkbox" id="reminders" name="reminders" v-model="currentCategories.reminder" @click="updateCategories">
      <label for="reminders"> Reminders </label><br>
    <input type="checkbox" id="goals" name="goals" v-model="currentCategories.goal" @click="updateCategories">
      <label for="goals"> Goals </label><br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCategories: this.$store.state.currentCategories
    }
  },
  methods: {
    updateCategories() {
      this.$store.commit('UPDATE_CATEGORIES', this.currentCategories);
    }
  }
}
</script>

<style>

</style>