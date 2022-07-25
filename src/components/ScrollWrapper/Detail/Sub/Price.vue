<template>
  <div class="price-bd">
    <span class="iconfont icon-price"></span>
    <span class="price-text">${{ price }}元起</span>
  </div>
</template>

<script>
export default {
  name: 'DetailPrice',
  props: {
    price: String
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/variable.scss';

  .price-bd{
    height: .44rem;
    background-color: #fff;
    padding: .03rem .15rem 0;
    border-bottom: solid 1px #ddd;
    line-height: .4rem;

    .iconfont {
      font-size: .18rem;
      margin-right: .05rem;
    }

    .price-text {
      font-size: .16rem;
      color: #FF6600;
    }

  }
</style>