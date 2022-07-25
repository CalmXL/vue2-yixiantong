<template>
  <div class="list-wrapper">
    <ktv-list-sub
      v-for="data of dataList"
      :key="data.id"
      :data="data"
    >

    </ktv-list-sub>
  </div>
</template>

<script>

import KtvListSub from './Sub.vue';

export default {
  name: 'KtvList',
  props: {
    dataList: Array
  },
  components: {
    KtvListSub
  }
}
</script>

<style>

</style>