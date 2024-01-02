<template>
  <div class="main-calendar">
  <pretty-calendar></pretty-calendar>
  </div>
</template>

<script>
import PrettyCalendar from '../components/PrettyCalendar.vue'
export default {
  components: { PrettyCalendar },
}
</script>

<style>

pretty-calendar {
  height: 100%;
}

</style>