<template>
  <div class="aside-view">
    <aside-calendar v-show="inCalendar"></aside-calendar>
    <aside-note v-show="!inCalendar"></aside-note>
    <img id="settings" src="../assets/settings.png" alt="settings">
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
  width: 280px;
  height: 100%;
  background-color: rgb(99, 99, 99);
  padding: 12px;
  font-size: 17px;
}

input[type='checkbox'] {
  height:15px;
  width: 15px;
}

#settings {
  opacity: 70%;
  height: 30px;
  width: auto;
  position: absolute;
  bottom: 10px;
  left: 10px;
}

</style>