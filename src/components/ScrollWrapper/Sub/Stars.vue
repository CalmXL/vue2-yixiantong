<template>
  <span class="stars-wrapper">
    <span :class="['iconfont icon-star', { active: starNum >= 1}]"></span>
    <span :class="['iconfont icon-star', { active: starNum >= 2}]"></span>
    <span :class="['iconfont icon-star', { active: starNum >= 3}]"></span>
    <span :class="['iconfont icon-star', { active: starNum >= 4}]"></span>
    <span :class="['iconfont icon-star', { active: starNum >= 5}]"></span>
  </span>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    starNum: {
      starNum: Number
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/variable.scss';

  .stars-wrapper{

    .iconfont {
      color: #333;
    }
    
    .active {
      color: $starColor;
    }
   

   
  }
</style>