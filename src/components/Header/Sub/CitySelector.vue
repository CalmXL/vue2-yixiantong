<template>
  <div class="city">
    <router-link to="City">
      <!-- 渲染从 vuex 中保存的城市 -->
      <span class="city-name">{{ this.cityName }}</span>
      <span class="iconfont icon-header-arrow"></span>
    </router-link>
  </div>
</template>

<script>

import { mapState } from 'vuex';
// 城市选择跳转 组件
export default {
  name: 'CitySelector',
  computed: {
    ...mapState(['cityName'])
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  @import 'styles/variable.scss';

  .city {
    width: .6rem;
    height: $headerHeight;

    a {
      @include flex-row;
      @include vh-center;
      width: 100%;
      height: $headerHeight;

      .city-name {
        font-size: .16rem;
        font-weight: bold;
      }

      .iconfont {
        font-size: .08rem;
        margin-left: .03rem;
      }
    }
  }
</style>