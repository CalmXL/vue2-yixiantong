<template>
  <div class="scroll-wrapper" ref="wrapper">
    <!-- 依据 vuex 中的 field 选择渲染的列表部分 -->
    <div v-if="!errorShow">
      <div class="scroll-content">
        <food-list
          v-if="field === 'food'"
          :dataList="listDatas[cityId]"
        ></food-list>
        <hotel-list
          v-if="field === 'hotel'"
          :dataList="listDatas[cityId]"
        ></hotel-list>
        <massage-list
          v-if="field === 'massage'"
          :dataList="listDatas[cityId]"
        ></massage-list>
        <ktv-list
          v-if="field === 'ktv'"
          :dataList="listDatas[cityId]"
        ></ktv-list>
        <view-list
          v-if="field === 'view'"
          :dataList="listDatas[cityId]"
        ></view-list>
        <loading :loadingShow="loadingShow"></loading>
      </div>
    </div>
    <div v-else>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>

import BetterScroll from 'better-scroll';
import { ListModel } from 'models/list';
import { mapState } from 'vuex';

import ViewList from './ViewList';
import FoodList from './FoodList';
import HotelList from './HotelList';
import MassageList from './MassageList';
import KtvList from './KTVList'; 
import Loading from './Sub/Loading.vue';
import Error from './Sub/Error.vue'

import tools from 'utils/tools';


export default {
  name: 'ScrollWrapperList',
  data () {
    return {
      listDatas: {},
      loadingShow: true,
      errorShow: false
    }
  },
  components: {
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    ViewList,
    Loading,
    Error
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      observeDOM: true
    });
    this.getListDatas(this.cityId, this.field);
  },
  computed: {
    ...mapState(['cityId', 'field'])
  },
  methods: {
   
    getListDatas (cityId, field) {
      
      if (!this.listDatas[cityId]) {
        const listModel = new ListModel();
        listModel.getListDatas(cityId, field).then((res) => {
          if (res && res.status === 0) {
            this.errorShow = false;
            console.log(res.data);
            const data = tools.formatJSON( res.data, 'keyword'); // keyword 格式化数据
            console.log(data);
            setTimeout(() => {
              this.listDatas[cityId] = data; // 缓存池保存数据
              this.loadingShow = false;
            }, 1000);
          } else {
            this.errorShow = true;
          }
        })
      } else {
        console.log('缓存池取数据');
      }
     
    }
  },
  watch: { 
    cityId () { // cityId 重新获取数据
      this.loadingShow = true;
      // this.listDatas = [];
      this.getListDatas(this.cityId, this.field);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>