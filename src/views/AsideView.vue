<template>
  <div class="aside-view">
    <h3 id="path"></h3>
    <aside-calendar v-show="inCalendar"></aside-calendar>
    <aside-note v-show="!inCalendar"></aside-note>
  </div>
</template>

<script>
import AsideCalendar from '@/components/AsideCalendar.vue'
import AsideNote from '@/components/AsideNote.vue'
export default {
  components: { AsideCalendar, AsideNote },
  data() {
    return {
      
    }
  },
  computed: {
    inCalendar() {
      return this.$route.fullPath == '/calendar'
    }
  },
  mounted() {
    let heading = document.getElementById('path');
    heading.innerHTML = this.$route.fullPath;
  }
}
</script>

<style>

.aside-view {
  width: 300px;
  height: 100%;
  background-color: rgb(99, 99, 99);
}

</style>