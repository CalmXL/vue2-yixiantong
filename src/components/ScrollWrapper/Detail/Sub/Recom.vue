<template>
  <div class="recom-bd">
    <detail-title
      title="推荐菜品"
      icon="icon-recom"
    ></detail-title>
    <div class="recom-content">{{ recom }}</div>
  </div>
</template>

<script>

import DetailTitle from './Title.vue';

export default {
  name: 'DetailRecom',
  components: {
    DetailTitle
  },
  props: {
    recom: String
  }
}
</script>

<style lang="scss" scoped>
  .recom-bd {
    margin-top: .2rem;
    background-color: #fff;
  

    .recom-content {
      font-size: .14rem;
      text-indent: .2rem;
      line-height:.18rem;
      padding: .1rem .15rem 0;
      
    }
  }
</style>