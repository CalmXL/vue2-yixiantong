<template>
  <div class="back-ward" @click="onRouteBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
// 返回箭头 组件
export default {
  name: 'BackWard',
  methods: {
    onRouteBack () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  @import 'styles/variable.scss';

  .back-ward {
    position: absolute;
    top: 0;
    left: 0;
    @include flex-row;
    @include vh-center;
    width: $headerHeight;
    height: $headerHeight;

    .iconfont {
      font-size: .2rem;
    }
  }
</style>