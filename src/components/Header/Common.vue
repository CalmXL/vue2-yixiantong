<template>
  <header class="header">
    <back-ward></back-ward>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>

import BackWard from './Sub/BackWard.vue';

export default {
  name: 'CommonHeader',
  components: {
    BackWard
  },
  props: {
    title: {
      type: String,
      default () {
        return '一线生活通'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  @import 'styles/variable.scss';
  
  .header {
    position: relative;
    @include flex-row;
    @include vh-center;
    min-height: $headerHeight;
    background-color: $defaultBgColor;

    h1 {
      font-size: .18rem;
    }
  }
  
</style>