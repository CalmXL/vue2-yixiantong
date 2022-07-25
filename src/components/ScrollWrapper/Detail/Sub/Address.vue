<template>
  <div class="address-bd">
    <span class="iconfont icon-positioning"></span>
    <span class="address-text">{{ address }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailAddress',
  props: {
    address: String
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';

  .address-bd {
    display: flex;
    align-items: center;
    min-height: .44rem;
    border-bottom: solid 1px #ddd;
    background-color: #fff;
    padding: .1rem .15rem;
    box-sizing: border-box;

    .iconfont {
      font-size: .18rem;
      margin-right: .1rem;
      color: #999;
    }

    .address-text {
      font-size: .14rem;
      line-height: .18rem;
    }
  }
</style>