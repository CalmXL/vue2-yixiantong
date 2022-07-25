<template>
  <div class="list-wrapper">
    <massage-list-sub
      v-for="data of dataList"
      :key="data.id"
      :data="data"
    ></massage-list-sub>
  </div>
</template>

<script>

import MassageListSub from './Sub.vue';

export default {
  name: 'MassageList',
  props: {
    dataList: Array
  },
  components: {
    MassageListSub
  }
}
</script>

<style>

</style>