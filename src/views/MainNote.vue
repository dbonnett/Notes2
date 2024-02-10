<template>
  <div class="main-note">
    <redo-notes id="redo-notes"></redo-notes>
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
redo-notes {
  position: absolute;
}
</style>