<template>
  <div class="scroll-wrapper" ref="wrapper">
		<div class="scroll-content">
      <category-icons></category-icons>
      <div v-if="!errorShow">
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :dataList="homeDatas.viewDatas"></view-list>
        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :dataList="homeDatas.foodDatas"></food-list>
        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list :dataList="homeDatas.hotelDatas"></hotel-list>
        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :dataList="homeDatas.massageDatas"></massage-list>
        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :dataList="homeDatas.ktvDatas"></ktv-list>
      </div>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>

import BetterScroll from 'better-scroll';
import CategoryIcons from './CategoryIcons';
import HomeTitle from './Sub/HomeTitle.vue';
import ViewList from './ViewList';
import FoodList from './FoodList';
import HotelList from './HotelList';
import MassageList from './MassageList';
import KtvList from './KTVList'; 
import Error from './Sub/Error.vue';

import { mapState } from 'vuex';
import { IndexModel } from '@/models/index';

import tools from 'utils/tools';

export default {
  name: 'HomeScrollWrapper',
  components: {
    CategoryIcons,
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Error
  },
  data () {
    return {
      currentCityId: 0,
      errorShow: false,
      homeTitle: {
        viewTitle: '推荐景点',
        goodTitle: '推荐美食',
        ktvTitle: '推荐KTV',
        massageTitle: '推荐按摩',
        hotelTitle: '推荐酒店'
      },
      homeDatas: {
        foodDatas:[],
        hotelDatas: [],
        ktvDatas: [],
        massageDatas: [],
        viewDatas: []
      }
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  activated () {
    // 缓存  更新
    if (this.currentCityId !== this.cityId) {
      this.currentCityId = this.cityId;
      this.getHomeDatas(this.currentCityId);
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      observeDOM: true
    });
    this.currentCityId = this.cityId;
    this.getHomeDatas(this.cityId);
  },
  methods: {
    getHomeDatas (cityId) {

      const indexModel = new IndexModel();

      indexModel.getHomeDatas(cityId).then((res) => {

        if (res && res.status === 0) {
          const data = res.data;
          this.errorShow = false;
          // console.log(data);

          this.homeDatas.foodDatas = tools.formatJSON(data.foodDatas, 'keyword');
          this.homeDatas.hotelDatas = data.hotelDatas;
          this.homeDatas.ktvDatas = data.ktvDatas;
          this.homeDatas.massageDatas = data.massageDatas;
          this.homeDatas.viewDatas = data.viewDatas;
        } else {
          this.errorShow = true;
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>

</style>