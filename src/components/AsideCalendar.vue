<template>
  <div class="aside-calendar">
    <h3>Filter By Category</h3>
    <input type="checkbox" class="select" id="select-all" name="select-all" checked v-on:click="selectAll()">
      <label id="select-all-label" for="select-all"> UNSELECT ALL </label><br><br>
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
    selectAll() {
      let selectAllCheckbox = document.getElementById('select-all');
      let checkboxes = document.querySelectorAll('input');
      for (let i = 1; i < checkboxes.length; i++) {
        checkboxes[i].checked = selectAllCheckbox.checked;  
      }
      for (let key in this.currentCategories) {
        this.currentCategories[key] = selectAllCheckbox.checked;
      }
      let selectAllLabel = document.getElementById('select-all-label')
      if (selectAllCheckbox.checked) {
        selectAllLabel.innerHTML = "UNSELECT ALL"
      } else {
        selectAllLabel.innerHTML = "SELECT ALL"
      }
      this.updateCategories();
    },
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
}
</script>

<style>

</style>