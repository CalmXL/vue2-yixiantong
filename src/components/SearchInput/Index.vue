<template>
  <div class="search-input">
    <div class="input-wrapper">
      <span class="iconfont icon-header-search"></span>
      <input 
        type="text" 
        class="input" 
        :placeholder="placeholder" 
        @input="onSearchInput()"  
        v-model="keyword"
      />
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'; 
import tools from 'utils/tools';
import { SearchModel } from 'models/search';

export default {
  name: 'SearchInput',
  data () {
    return {
      placeholder: '美食 / 景点 / 酒店 / 按摩 / ktv',
      keyword: ''
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  emits: ['onSearch'],
  methods: {
    // 节流搜索
    onSearchInput: tools.throttle(function () {
      // 获取 双向绑定的 keyword
      const keyword = this.keyword;

      const searchModel = new SearchModel();
      // 调用searchModel 向后台发送请求
      searchModel.searchAction(keyword, this.cityId).then((res) => {
        // 将获取的数据 触发 父组件事件
        this.$emit('onSearch', res.data, res.status);
      })
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
  .search-input {
    height: .44rem;
    background-color: #fff;
    padding: .05rem .1rem;
    border-bottom: solid 1px #ddd;
    box-sizing: border-box;
    
    .input-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      border: solid 1px #ddd;
      widows: 100%;

      .iconfont {
        font-size: .2rem;
        line-height: .4rem;
        margin: 0 .1rem;
      }

      .input {
        flex: 1;
        font-size: .14rem;
        line-height: .4rem;
      }
    }
  }
</style>