<template>
  <div class="all">
    <aside-view></aside-view>
    <router-view class="view"/>
  </div>
</template>

<script>
import AsideView from './views/AsideView.vue'

export default {
  components: { AsideView },
  name: 'App',
}
</script>

<style>

html {
  height: 100%;
}

body {
  height: 100%;
}

#app {
  height: 100%;
}

aside-view {
  position: absolute;
}

.all {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: absolute
}

#aside {
  width: 200px;
}

.view {
  width: 100%;
}

</style>