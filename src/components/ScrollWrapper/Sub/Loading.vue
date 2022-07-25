<template>
  <div class="loading-bd" v-show="loadingShow">
    <img class="loading-img" src="@/assets/images/loading.gif"/>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loadingShow: Boolean
  }
}
</script>

<style lang="scss">
  @import '~styles/mixins.scss';

  .loading-bd {
    @include vh-center;
    height: 3rem;

    .loading-img {
      width: .8rem;
      height: .8rem;
    }
  }	
</style>