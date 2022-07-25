<template>
  <div class="name-bd">
    <span class="iconfont icon-name"></span>
    <span class="name-text">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailName',
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .name-bd {
    display: flex;
    height: .44rem;
    line-height: .44rem;
    padding: .03rem .15rem 0;
    background-color: #fff;
    border-bottom: solid 1px #ddd;

    .icon-name {
      font-size: .18rem;
      color: #000;
      margin-right: .05rem;
    }

    .name-text {
      font-size: .16rem;
      padding: 0 .1rem;
      color: #333;
    }
  }
</style>