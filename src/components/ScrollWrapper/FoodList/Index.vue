<template>
  <div class="list-wrapper">
    <food-list-sub 
      v-for="data of dataList"
      :key="data.id"
      :data="data"
    ></food-list-sub>
  </div>
</template> 

<script>

import FoodListSub from './Sub.vue';

export default {
  name: 'FoodList',
  components: {
    FoodListSub
  },
  props: {
    dataList: Array
  }
}
</script>

<style>

</style>