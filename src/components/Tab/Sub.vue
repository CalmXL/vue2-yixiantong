<template>
  <div 
    class="item-tab" 
    :class="{active: cityInfo.cityName === this.cityName}"
    @click="onTabClick(cityInfo)"
  >
    <span>{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ListTabItem',
  props: {
    cityInfo: Object
  },
  computed: {
    ...mapState(['cityName']),
    
  },
  methods: {
    ...mapMutations(['selectCity']),
    // cityInfo: { cityId, cityName }
    onTabClick (cityInfo) {
      // tab 点击触发 vuex 更改 state 中的cityId cityName
      this.selectCity(cityInfo);
    }
  }

}
</script>

<style lang="scss" scoped>
  @import 'styles/variable.scss';

  .item-tab {
    float: left;
    width: 20%;
    text-align: center;
    font-size: .16rem;
    line-height: .4rem;
    border-bottom: solid 1px #fff;

    &.active {
      color: $defaultGreen;
      border-bottom-color: $defaultGreen;
    }
  }
</style>