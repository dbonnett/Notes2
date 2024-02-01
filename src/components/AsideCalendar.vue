<template>
  <div class="aside-calendar">
    <h3>Filter By Category</h3>
    <input type="checkbox" class="select" id="select-all" name="select-all" checked v-on:click="selectAll()">
      <label id="select-all-label" for="select-all"> UNSELECT ALL </label><br><br>
    <input type="checkbox" id="brainstorm" name="brainstorm" checked>
      <label for="brainstorm"> Brainstorming </label><br>
    <input type="checkbox" id="lists" name="lists" checked>
      <label for="lists"> Lists</label><br>
    <input type="checkbox" id="reminders" name="reminders" checked>
      <label for="reminders"> Reminders </label><br>
    <input type="checkbox" id="goals" name="goals" checked>
      <label for="goals"> Goals </label><br>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    selectAll() {
      let selectAllCheckbox = document.getElementById('select-all');
      let checkboxes = document.querySelectorAll('input');
      for (let i = 1; i < checkboxes.length; i++) {
        checkboxes[i].checked = selectAllCheckbox.checked;
      }
      let selectAllLabel = document.getElementById('select-all-label')
      if (selectAllCheckbox.checked) {
        selectAllLabel.innerHTML = "UNSELECT ALL"
      } else {
        selectAllLabel.innerHTML = "SELECT ALL"
      }
    }
  }, 
  computed: {
  },
  mounted() {
  }
}
</script>

<style>

</style>