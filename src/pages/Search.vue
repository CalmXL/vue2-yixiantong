<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @onSearch="onSearch"></search-input>
    <scroll-wrapper-search :searchList="searchList" :status="status"></scroll-wrapper-search>
  </div>
</template>

<script>

import CommonHeader from 'components/Header/Common';
import SearchInput from 'components/SearchInput/Index';
import ScrollWrapperSearch from 'components/ScrollWrapper/Search';


export default {
  name: 'Search',
  components: {
    CommonHeader,
    SearchInput,
    ScrollWrapperSearch
  },
  data () {
    return {
      title: '商家搜索',
      searchList: {},
      status: 0
    }
  },
  methods: {
    onSearch (data, status) {
      if (status === 0) {
        this.searchList = data;
      }
      this.status = status;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
