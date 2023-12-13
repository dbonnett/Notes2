<template>
  <div class="main-note">
    <all-attributes-note/>
    <router-link to="/">Back to calendar</router-link>
  </div>
</template>

<script>
import AllAttributesNote from '@/components/AllAttributesNote.vue'
//import BasicNote from '../components/BasicNote.vue'
export default {
  components: { AllAttributesNote },
}
</script>

<style>
</style>