<template>
  <div class="list-wrapper">
    <hotel-list-sub
      v-for="data of dataList"
      :key="data.id"
      :data="data"
    ></hotel-list-sub>
  </div>
</template>

<script>

import HotelListSub from './Sub.vue';

export default {
  name: 'HotelList',
  components: {
    HotelListSub
  },
  props: {
    dataList: Array
  }
}
</script>

<style>

</style>