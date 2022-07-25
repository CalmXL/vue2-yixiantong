<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <div v-if="searchList.viewDatas && searchList.viewDatas.length > 0">
          <home-title title="景点结果:"></home-title>
          <view-list :dataList="searchList.viewDatas"></view-list>
        </div>
        <div v-if="searchList.hotelDatas && searchList.hotelDatas.length > 0">
          <home-title title="酒店结果:"></home-title>
          <view-list :dataList="searchList.hotelDatas"></view-list>
        </div>
        <div v-if="searchList.foodDatas && searchList.foodDatas.length > 0">
          <home-title title="美食结果:"></home-title>
          <view-list :dataList="searchList.foodDatas"></view-list>
        </div>
        <div v-if="searchList.massageDatas && searchList.massageDatas.length > 0">
          <home-title title="按摩结果:"></home-title>
          <view-list :dataList="searchList.massageDatas"></view-list>
        </div>
        <div v-if="searchList.ktvDatas && searchList.ktvDatas.length > 0">
          <home-title title="ktv结果:"></home-title>
          <view-list :dataList="searchList.ktvDatas"></view-list>
        </div>
        <div v-show="nodata">
          <no-data-tip></no-data-tip>
        </div>
      </div>
      <div v-else>
        <error :errorShow="errorShow"></error>
      </div>
    </div>
  </div>
</template>

<script>

import HomeTitle from './Sub/HomeTitle.vue';
import ViewList from './ViewList';
import FoodList from './FoodList';
import HotelList from './HotelList';
import KTVList from './KTVList';
import MassageList from './MassageList';
import NoDataTip from './Sub/Tip.vue';
import Error from './Sub/Error.vue'

import BetterScroll from 'better-scroll';

export default {
  name: 'ScrollWrapperSearch',
  components: {
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    KTVList,
    MassageList,
    NoDataTip,
    Error
  },
  data () {
    return {
      // tipShow: true,
    }
  },
  props: {
    searchList: {
      type: [Object, Array],
      default () {
        return {}
      }
    },
    status: Number
  },
  computed: {
    nodata () {
      const arr =  Object.values(this.searchList);
      // console.log(arr);
      return arr.length <= 0 ? true : false;
    },
    errorShow () {
      return this.status === 0 ? false : true;
    }
  },
  mounted () {
    
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      observeDOM: true
    });
  }
}
</script>

<style>

</style>