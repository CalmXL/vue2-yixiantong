<template>
  <div class="stars-bd">
    <span class="iconfont icon-smile"></span>
    <stars :starNum="starNum"></stars>
    <span class="score-text">{{ score }}分</span>
  </div>
</template>

<script>

import Stars from 'components/ScrollWrapper/Sub/Stars';

export default {
  name: 'DetailStars',
  components: {
    Stars
  },
  props:{
    starNum: {
      type: Number,
      default () {
        return 0
      }
    },
    score: {
      type: String,
      default () {
        return '0'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  @import 'styles/variable.scss';

  .stars-bd {
    height: .44rem;
    background-color: #fff;
    line-height: .4rem;
    padding: .03rem .15rem 0;
    border-bottom: solid 1px #ddd ;
    .iconfont {
      font-size: .18rem;
      line-height: .4rem; 
      margin-right: .05rem;     
    }

    .score-text {
      font-size: .18rem;
      color: orange;
    }
  }
</style>