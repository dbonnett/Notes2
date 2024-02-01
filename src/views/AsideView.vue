<template>
  <div class="aside-view">
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