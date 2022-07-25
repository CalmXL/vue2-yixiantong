<template>
  <div class="tab-bd">
    <list-tab-item
      v-for="item of cities"
      :key="item.id"
      :cityInfo="item"
    ></list-tab-item>
  </div>
</template>

<script>

import cities from 'data/cities';
import ListTabItem from './Sub.vue';
// 城市 Tab 组件
export default {
  name: 'TabList',
  components: {
    ListTabItem
  },
  data () {
    return {
      cities: cities
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import 'styles/mixins.scss';

  .tab-bd {
    @include flex-row;
    flex-wrap: no-wrap;
    height: .44rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
</style>