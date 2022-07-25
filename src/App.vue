<template>
  <div id="app">
    <keep-alive include="Index">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
/**
 * keep-alive vue内置组件 抽象组件 -> 不占用DOM结构
 * 
 * 首次进入 执行以下声明周期
 * created mounted activated 
 * 
 * 
 */
export default {
  name: 'App'
}
</script>

<style>
  html,
  body,
  #app,
  .container {
    height: 100%;
  }
</style>
