<template>
  <div class="keyword-bd">
    <detail-title
      title="评论关键词"
      icon="icon-haoping"
    ></detail-title>
    <div class="keyword-content">
      <span 
        class="keyword"
        v-for="(item, index) of keywords"
        :key="index"
      >{{ item }}</span>
    </div>
  </div>
</template>

<script>

import DetailTitle from './Title.vue';

export default {
  name: 'DetailKeyword',
  components: {
    DetailTitle
  },
  props: {
    keywords: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  @import 'styles/variable.scss';

  .keyword-bd {
    @include flex-cloumn;
    margin-top: .1rem;

    .keyword-content {
      @include flex-row;
      flex-wrap: wrap;
      padding: .1rem .15rem;
      background-color: #fff;
    

      .keyword {
        @include vh-center;
        padding: .02rem .05rem;
        margin: 0 .05rem .05rem 0;
        border: solid 1px $defaultGreen;
        border-radius: .03rem;
        font-size: .14rem;
      }
    }
  }
</style>