<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <tab-list></tab-list>
    <scroll-wrapper-list></scroll-wrapper-list>
  </div>
</template>

<script>

import fieldDatas from 'data/fields';
import { mapState } from 'vuex'; 

import CommonHeader from 'components/Header/Common';
import ScrollWrapperList from 'components/ScrollWrapper/List';
import TabList from 'components/Tab/Index';

export default {
  name: 'List',
  components: {
    CommonHeader,
    ScrollWrapperList,
    TabList
  },
  data () {
    return {
     
    }
  },
  computed: {
    ...mapState(['field']),

    title () {
      if (this.field) {
        return fieldDatas.filter((item) => 
          item.field === this.field
        )[0].iconText + '列表';

      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>