<template>
  <h1>App</h1>
  <div class="all">
    <aside-first id="aside"></aside-first>
    <router-view class="view"/>
  </div>
</template>

<script>
import AsideFirst from './components/AsideFirst.vue'

export default {
  components: { AsideFirst },
  name: 'App',
}
</script>

<style>

.all {
  display: flex;
  flex-direction: row;
  width: 100%;
}

#aside {
  width: 200px;
}

.view {
  width: 100%;
}

</style>