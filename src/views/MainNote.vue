<template>
  <div class="main-note">
    <redo-notes></redo-notes>
    <router-link to="/calendar">Back to calendar</router-link>
  </div>
</template>

<script>
// import AllAttributesNote from '@/components/AllAttributesNote.vue'
import RedoNotes from '@/components/RedoNotes.vue';
export default {
  components: { RedoNotes },
}
</script>

<style>
</style>