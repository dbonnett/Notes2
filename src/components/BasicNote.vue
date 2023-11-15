<template>
  <div class="basic-note">
    <h2>Here's a nice little icon</h2>
    <img src="./../../public/1024824.png" alt="img not found">
    <textarea name="note" id="note" cols="30" rows="10" v-model.lazy="note"></textarea>
    <h2>What you just typed:</h2>
    <p>{{ note }}</p>
  </div>
</template>

<script>
  export default {
    name: "basic-note",
    data() {
      return {
        note: ""
      }
    }
  }
</script>

<style>
  h2 {
    color: green;
  }
</style>