<template>
  <div class="tip-wrapper">
    <span class="tip-text">- 没有搜索到相关结果 -</span>
  </div>
</template>

<script>
export default {
  name: 'NoDataTip',
}
</script>

<style lang="scss" scoped>
@import 'styles/mixins.scss';

  .tip-wrapper {
    @include vh-center;
    height: 3rem;
    padding: 0 1rem;
    
    .tip-text {
      color: #999;
      font-size: .16rem;
    }
  }
</style>