<template>
  <div class="list-wrapper">
    <view-list-sub
      v-for="(item) of dataList"
      :key="item.id"
      :data="item"
    >

    </view-list-sub>
  </div>
</template>

<script>

import ViewListSub from './Sub.vue';

export default {
  name: 'ViewList',
  components: {
    ViewListSub
  },
  props: {
    dataList: Array
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';

  .list-wrapper{
    @include flex-row;
    flex-wrap: wrap;
    background-color: #fff;
    border-bottom: solid 1px #ddd;    
  }

</style>