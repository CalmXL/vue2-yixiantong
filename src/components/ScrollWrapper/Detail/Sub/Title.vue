<template>
  <div class="title-bd">
    <span class="iconfont" :class="icon"></span>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailTitle',
  props: {
    icon: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
  .title-bd{
    height: .44rem;
    padding: .03rem .15rem 0;
    background: #fff;
    border-bottom: solid 1px #ddd;
    line-height: .4rem;
    color: #06c1aE;

    .iconfont {
      font-size: .18rem;
      margin-right: .05rem;
      
    }

    .title {
      font-size: .16rem;
    }
  }
</style>