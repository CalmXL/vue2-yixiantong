<template>
  <div class="dateTime-bd">
    <span class="iconfont icon-datetime"></span>
    <span class="dateTime">{{ dateTime }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailDateTime',
  props: {
    dateTime: String
  }
}
</script>

<style lang="scss" scoped>
  .dateTime-bd {
    height:.44rem;
    padding: .03rem .15rem 0;
    background-color: #fff;
    border-bottom: solid 1px #ddd;
    line-height: .4rem;

    .iconfont {
      font-size: .18rem;
      color: #999;
      margin-right: .05rem;
    }

    .dateTime {
      font-size: .14rem;
    }
  }
</style>