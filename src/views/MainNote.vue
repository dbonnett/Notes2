<template>
  <div class="main-note">
    <basic-note></basic-note>
    <router-link to="/">Back to calendar</router-link>
  </div>
</template>

<script>
import BasicNote from '../components/BasicNote.vue'
export default {
  components: { BasicNote },
}
</script>

<style>

</style>