<template>
  <h1>App</h1>
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

.all {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

#aside {
  width: 200px;
}

.view {
  width: 100%;
}

</style>